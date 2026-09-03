import { NextResponse } from "next/server";

const API_KEY = process.env.APICODEX_API_KEY;
const PLACE_URL =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";
const API_BASE_URL = "https://api.apicodex.io/google-maps/v1";

export const revalidate = 3600;

async function requestJson(url: string) {
  const response = await fetch(url, {
    headers: {
      "X-Api-Key": API_KEY as string,
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`API Codex request failed with ${response.status}`);
  }

  return response.json();
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
      requestJson(`${API_BASE_URL}/reviews?url=${encodedUrl}&limit=12`),
    ]);

    const rating = Number(placePayload?.data?.rating);
    const totalReviews = Number(placePayload?.data?.reviews_count);
    const rawReviews = Array.isArray(reviewsPayload?.data)
      ? reviewsPayload.data
      : Array.isArray(reviewsPayload?.reviews)
        ? reviewsPayload.reviews
        : [];

    if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
      throw new Error("Invalid Google rating received.");
    }

    if (!Number.isInteger(totalReviews) || totalReviews < 0) {
      throw new Error("Invalid Google review count received.");
    }

    const reviews = rawReviews
      .map((review: Record<string, unknown>) => ({
        author: String(review.author ?? review.author_name ?? "Cliente"),
        date: String(review.date ?? review.relative_date ?? ""),
        rating: Number(review.rating ?? review.stars ?? 0),
        text:
          review.text == null || String(review.text).trim() === ""
            ? null
            : String(review.text),
      }))
      .filter(
        (review: { author: string; date: string; rating: number; text: string | null }) =>
          Number.isFinite(review.rating) && review.rating >= 0 && review.rating <= 5,
      );

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
