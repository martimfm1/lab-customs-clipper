"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GoogleReviewCta from "@/components/google-review-cta";

const googleReviews = [
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
] as const;

const googleRating =
  googleReviews.length > 0
    ? googleReviews.reduce((total, review) => total + review.rating, 0) /
      googleReviews.length
    : 0;

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

export default function GoogleReviewsSection() {
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

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/45 px-4 py-3">
            <Star
              className="h-5 w-5 fill-[#a3e635] text-[#a3e635]"
              aria-hidden="true"
            />
            <span className="text-sm font-bold text-white">
              {googleRating.toFixed(1)}
            </span>
            <span className="text-sm text-zinc-500">
              no Google · {googleReviews.length} avaliações
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <motion.article
              key={`${review.author}-${review.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-56 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3e635]/30 hover:shadow-[0_0_30px_rgba(163,230,53,0.08)]"
            >
              <ReviewStars rating={review.rating} />
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-300">
                {review.text ? (
                  <>&ldquo;{review.text}&rdquo;</>
                ) : (
                  "Sem comentário escrito."
                )}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-zinc-200">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {review.author}
                  </p>
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
