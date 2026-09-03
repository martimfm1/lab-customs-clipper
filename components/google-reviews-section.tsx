"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GoogleReviewCta from "@/components/google-review-cta";

type GoogleReview = {
  author: string;
  date: string;
  rating: number;
  text: string | null;
};

type GoogleReviewsResponse = {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  mapsUrl: string;
};

type PendingReviewsResponse = {
  pending: true;
  snapshotId: string;
  rating?: number;
  totalReviews?: number;
  reviews?: GoogleReview[];
  mapsUrl?: string;
};

type SnapshotReviewsResponse =
  | PendingReviewsResponse
  | {
      pending: false;
      reviews: GoogleReview[];
      mapsUrl: string;
    };

const fallbackData: GoogleReviewsResponse = {
  rating: 5,
  totalReviews: 4,
  reviews: [
    {
      author: "Hiago Oliveira",
      date: "01/09/2026",
      rating: 5,
      text: "Recomendo de olhos fechados!!!!",
    },
    {
      author: "Ruben Teixeira",
      date: "02/09/2026",
      rating: 5,
      text: "Profissionalismo em pessoa !",
    },
    {
      author: "Rafael Andrade",
      date: "02/09/2026",
      rating: 5,
      text: null,
    },
  ],
  mapsUrl:
    "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D",
};

const POLL_INTERVAL_MS = 5000;
const MAX_POLL_ATTEMPTS = 24;

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} estrelas em 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 text-[#a3e635] ${index < Math.round(rating) ? "fill-[#a3e635]" : "fill-transparent"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function isFullResponse(value: unknown): value is GoogleReviewsResponse {
  if (!value || typeof value !== "object") return false;

  const data = value as Partial<GoogleReviewsResponse>;

  return (
    Number.isFinite(data.rating) &&
    Number.isInteger(data.totalReviews) &&
    Array.isArray(data.reviews) &&
    typeof data.mapsUrl === "string"
  );
}

function isPendingResponse(value: unknown): value is PendingReviewsResponse {
  if (!value || typeof value !== "object") return false;

  const data = value as Partial<PendingReviewsResponse>;

  return data.pending === true && typeof data.snapshotId === "string";
}

function isCompletedSnapshotResponse(
  value: unknown,
): value is Extract<SnapshotReviewsResponse, { pending: false }> {
  if (!value || typeof value !== "object") return false;

  const data = value as Partial<Extract<SnapshotReviewsResponse, { pending: false }>>;

  return (
    data.pending === false &&
    Array.isArray(data.reviews) &&
    typeof data.mapsUrl === "string"
  );
}

export default function GoogleReviewsSection() {
  const [data, setData] = useState<GoogleReviewsResponse>(fallbackData);

  useEffect(() => {
    const controller = new AbortController();
    let pollAttempts = 0;
    let pollTimer: ReturnType<typeof setTimeout> | null = null;

    const pollSnapshot = async (snapshotId: string): Promise<void> => {
      if (controller.signal.aborted || pollAttempts >= MAX_POLL_ATTEMPTS) return;

      pollAttempts += 1;

      try {
        const response = await fetch(
          `/api/google-reviews?snapshot_id=${encodeURIComponent(snapshotId)}`,
          {
            signal: controller.signal,
            headers: { Accept: "application/json" },
            cache: "no-store",
          },
        );

        const payload = (await response.json()) as unknown;

        if (isCompletedSnapshotResponse(payload)) {
          setData((current) => ({
            ...current,
            reviews: payload.reviews.slice(0, 3),
            mapsUrl: payload.mapsUrl || current.mapsUrl,
          }));
          return;
        }

        if (response.status === 202 && isPendingResponse(payload)) {
          pollTimer = setTimeout(() => {
            void pollSnapshot(payload.snapshotId);
          }, POLL_INTERVAL_MS);
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Unable to poll Google reviews:", error);
        }
      }
    };

    const loadReviews = async (): Promise<void> => {
      try {
        const response = await fetch("/api/google-reviews", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        const payload = (await response.json()) as unknown;

        if (isFullResponse(payload)) {
          setData({
            ...payload,
            reviews: payload.reviews.slice(0, 3),
          });
          return;
        }

        if (response.status === 202 && isPendingResponse(payload)) {
          setData((current) => ({
            ...current,
            ...(typeof payload.rating === "number" ? { rating: payload.rating } : {}),
            ...(typeof payload.totalReviews === "number"
              ? { totalReviews: payload.totalReviews }
              : {}),
            ...(typeof payload.mapsUrl === "string" ? { mapsUrl: payload.mapsUrl } : {}),
          }));

          void pollSnapshot(payload.snapshotId);
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Unable to load Google reviews:", error);
        }
      }
    };

    void loadReviews();

    return () => {
      controller.abort();
      if (pollTimer) clearTimeout(pollTimer);
    };
  }, []);

  const { rating: googleRating, totalReviews, reviews: googleReviews, mapsUrl } = data;

  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#a3e635]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a3e635]" />
              Opiniões verificadas
            </div>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Confiança que se nota no resultado.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              O que dizem as pessoas que já confiaram o seu equipamento à LAB
              Customs Clipper?
            </p>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/45 px-4 py-3 transition hover:border-[#a3e635]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635]"
            aria-label={`Ver ${googleRating.toFixed(1)} estrelas e ${totalReviews} avaliações no Google`}
          >
            <Star className="h-5 w-5 fill-[#a3e635] text-[#a3e635]" aria-hidden="true" />
            <span className="text-sm font-bold text-white">{googleRating.toFixed(1)}</span>
            <span className="text-sm text-zinc-500">· {totalReviews} avaliações no Google</span>
          </a>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <motion.article
              key={`${review.author}-${review.date}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-56 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3e635]/30 hover:shadow-[0_0_30px_rgba(163,230,53,0.08)]"
            >
              <ReviewStars rating={review.rating} />
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-300">
                {review.text ? <>&ldquo;{review.text}&rdquo;</> : "Sem comentário escrito."}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-zinc-200">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.author}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{review.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 sm:flex-row sm:p-6">
          <p className="text-center text-sm text-zinc-400 sm:text-left">
            A tua experiência também pode ajudar outros profissionais.
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <GoogleReviewCta />
          </div>
        </div>
      </div>
    </section>
  );
}
