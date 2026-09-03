"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.10),transparent_36%)]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#a3e635]">
            Próximo passo
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Não precisas de saber qual é o serviço certo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Explica o que a tua máquina está a fazer, escolhe um serviço da
            lista ou escreve vários problemas no mesmo pedido. Nós orientamos o
            resto.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/marcacao"
              className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#a3e635] px-7 text-sm font-extrabold text-zinc-950 shadow-[0_0_30px_rgba(163,230,53,0.22)] transition hover:bg-[#b8f542] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Explicar o meu caso
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-7 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-800 sm:w-auto"
            >
              Rever serviços
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#a3e635]" /> Pedido
              guiado
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#a3e635]" /> WhatsApp
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#a3e635]" /> Sem
              formulários longos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
