import { motion } from "framer-motion";
import GoogleReviewCta from "@/components/google-review-cta";
import GoogleReviewsWidgetSection from "@/components/google-reviews-widget";

const googleMapsUrl =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu";

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
              Google Reviews
            </div>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Confiança que se nota no resultado.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Avaliações reais de clientes que já confiaram o seu equipamento à LAB
              CUSTOMS CLIPPER.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-2xl border border-zinc-800 bg-zinc-900/45 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-[#a3e635]/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635]"
          >
            Ver todas as avaliações no Google
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 min-h-[22rem]"
        >
          <GoogleReviewsWidgetSection />
        </motion.div>

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
