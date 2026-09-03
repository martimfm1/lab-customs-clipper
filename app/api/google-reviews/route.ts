import { NextResponse } from "next/server";

const API_KEY = process.env.APICODEX_API_KEY;
const PLACE_URL =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";
const API_BASE_URL = "https://api.apicodex.io/google-maps/v1";
const MAX_DISPLAYED_REVIEWS = 3;

// This endpoint must only execute when requested. The scraper can return a 202
// snapshot and complete asynchronously, so running it during `next build` is unsafe.
export const dynamic = "force-dynamic";
export const revalidate = 3600;

type JsonRecord = Record<string, unknown>;

type NormalizedReview = {
  author: string;
  date: string;
  rating: number;
  text: string | null;
  sortValue: number;
  sourceIndex: number;
};

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function extractReviewArray(payload: unknown): JsonRecord[] {
  if (Array.isArray(payload)) {
    return payload.filter(isRecord);
  }

  if (!isRecord(payload)) {
    return [];
  }

  for (const key of ["reviews", "data", "items", "results"]) {
    const reviews = extractReviewArray(payload[key]);

    if (reviews.length > 0) {
      return reviews;
    }
  }

  return [];
}

function getFirstString(review: JsonRecord, keys: string[]): string | null {
  for (const key of keys) {
    const value = review[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return null;
}

function getFirstNumber(review: JsonRecord, keys: string[]): number | null {
  for (const key of keys) {
    const value = review[key];
    const number = typeof value === "number" ? value : Number(value);

    if (Number.isFinite(number)) {
      return number;
    }
  }

  return null;
}

function getReviewSortValue(review: JsonRecord, sourceIndex: number): number {
  const timestamp = getFirstNumber(review, [
    "timestamp",
    "unix_timestamp",
    "published_timestamp",
    "created_timestamp",
    "created_at",
    "published_at",
  ]);

  if (timestamp !== null) {
    return timestamp < 10_000_000_000 ? timestamp * 1000 : timestamp;
  }

  const dateString = getFirstString(review, [
    "date",
    "published_date",
    "created_date",
    "datetime",
  ]);

  if (dateString) {
    const parsed = Date.parse(dateString);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  // API Codex normally returns reviews in recent-first order. Preserve that
  // order when Google provides only a relative date such as “2 days ago”.
  return -sourceIndex;
}

async function sleep(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function requestJson(url: string): Promise<unknown> {
  const response = await fetch(url, {
    headers: {
      "X-Api-Key": API_KEY as string,
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  const payload = await response.json().catch(() => null);

  if (response.status === 202 && isRecord(payload) && typeof payload.snapshot_id === "string") {
    return waitForSnapshot(payload.snapshot_id);
  }

  if (!response.ok) {
    const errorCode = isRecord(payload) && typeof payload.error === "string" ? payload.error : null;
    throw new Error(
      `API Codex request failed with ${response.status}${errorCode ? ` (${errorCode})` : ""}`,
    );
  }

  return payload;
}

async function waitForSnapshot(snapshotId: string): Promise<unknown> {
  const maxAttempts = 8;
  const pollDelay = 1500;
  const encodedSnapshotId = encodeURIComponent(snapshotId);

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const response = await fetch(
      `${API_BASE_URL}/result?snapshot_id=${encodedSnapshotId}`,
      {
        headers: {
          "X-Api-Key": API_KEY as string,
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(`API Codex snapshot request failed with ${response.status}`);
    }

    const status = isRecord(payload) && typeof payload.status === "string" ? payload.status : null;

    if (status === "ready" || status === "completed" || status === "success") {
      return payload;
    }

    if (attempt < maxAttempts - 1) {
      await sleep(pollDelay);
    }
  }

  throw new Error("API Codex review scrape timed out while waiting for the snapshot.");
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "Google reviews service is not configured." },
      { status: 503 },
    );
  }

  try {
    const encodedUrl = encodeURIComponent(PLACE_URL);
    const [placePayload, reviewsPayload] = await Promise.all([
      requestJson(
        `${API_BASE_URL}/place?url=${encodedUrl}&fields=name,rating,reviews_count`,
      ),
      requestJson(`${API_BASE_URL}/reviews?url=${encodedUrl}&limit=50`),
    ]);

    const placeData =
      isRecord(placePayload) && isRecord(placePayload.data) ? placePayload.data : {};
    const rating = Number(placeData.rating);
    const totalReviews = Number(placeData.reviews_count);
    const rawReviews = extractReviewArray(reviewsPayload);

    if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
      throw new Error("Invalid Google rating received.");
    }

    if (!Number.isInteger(totalReviews) || totalReviews < 0) {
      throw new Error("Invalid Google review count received.");
    }

    const reviews = rawReviews
      .map<NormalizedReview | null>((review, sourceIndex) => {
        const author =
          getFirstString(review, ["author", "author_name", "reviewer_name", "name"]) ??
          "Cliente";
        const date =
          getFirstString(review, [
            "date",
            "relative_date",
            "published_date",
            "created_date",
            "datetime",
          ]) ?? "";
        const reviewRating = getFirstNumber(review, ["rating", "stars", "score"]);
        const text = getFirstString(review, ["text", "review_text", "comment"]);

        if (reviewRating === null || reviewRating < 0 || reviewRating > 5) {
          return null;
        }

        return {
          author,
          date,
          rating: reviewRating,
          text,
          sortValue: getReviewSortValue(review, sourceIndex),
          sourceIndex,
        };
      })
      .filter((review): review is NormalizedReview => review !== null)
      .sort((a, b) => b.sortValue - a.sortValue || a.sourceIndex - b.sourceIndex)
      .slice(0, MAX_DISPLAYED_REVIEWS)
      .map(({ author, date, rating: reviewRating, text }) => ({
        author,
        date,
        rating: reviewRating,
        text,
      }));

    return NextResponse.json(
      {
        rating,
        totalReviews,
        reviews,
        mapsUrl: PLACE_URL,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Google reviews fetch failed:", error);

    return NextResponse.json(
      { error: "Unable to fetch Google reviews right now." },
      { status: 502 },
    );
  }
}
