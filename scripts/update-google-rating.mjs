import { readFile, writeFile } from "node:fs/promises";

const API_KEY = process.env.APICODEX_API_KEY;
const PLACE_URL =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";
const ENDPOINT = `https://api.apicodex.io/google-maps/v1/place?url=${encodeURIComponent(PLACE_URL)}&fields=name,rating,reviews_count`;
const OUTPUT = new URL("../lib/google-rating.ts", import.meta.url);

if (!API_KEY) {
  throw new Error("Missing APICODEX_API_KEY environment variable.");
}

const response = await fetch(ENDPOINT, {
  headers: {
    "X-Api-Key": API_KEY,
    Accept: "application/json",
  },
  signal: AbortSignal.timeout(60_000),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`API Codex request failed (${response.status}): ${body.slice(0, 500)}`);
}

const payload = await response.json();
const place = payload?.data;
const rating = Number(place?.rating);
const reviewCount = Number(place?.reviews_count);

if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
  throw new Error(`Invalid Google rating returned: ${JSON.stringify(place?.rating)}`);
}

if (!Number.isInteger(reviewCount) || reviewCount < 0) {
  throw new Error(
    `Invalid Google review count returned: ${JSON.stringify(place?.reviews_count)}`,
  );
}

const current = await readFile(OUTPUT, "utf8");
const updatedAt = new Date().toISOString();
const next = `/**\n * Google Business profile data used by the public site.\n *\n * This file is maintained automatically by the Google Maps reputation workflow.\n * Keep the last known values here so the site still renders when the scraper is unavailable.\n */\nexport const googleRating = ${rating};\nexport const googleReviewCount = ${reviewCount};\nexport const googleRatingUpdatedAt = ${JSON.stringify(updatedAt)};\n\nexport const googleMapsUrl = ${JSON.stringify(PLACE_URL)};\n`;

if (current === next) {
  console.log("Google rating data is already up to date.");
  process.exit(0);
}

await writeFile(OUTPUT, next, "utf8");
console.log(`Updated Google rating to ${rating} from ${reviewCount} reviews.`);
