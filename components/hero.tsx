"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";

const trustPoints = [
  "Wahl, Style Craft, Gamma Piu, JRL e outras",
  "Manutenção preventiva desde 8€ / máquina",
  "Atendimento personalizado antes de qualquer intervenção",
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-zinc-950 px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(163,230,53,0.10),transparent_30%),linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:auto,4rem_4rem,4rem_4rem]" />

      <div className="relative z-10 mx-auto grid min-h-[78dvh] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#a3e635]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
            Manutenção especializada para profissionais
          </div>

          <h1 className="text-balance text-5xl font-extrabold tracking-tighter text-white sm:text-7xl xl:text-8xl">
            Mantém a tua máquina pronta para trabalhar.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Reparação, manutenção preventiva e planos para máquinas profissionais de barbearia — com um processo simples e acompanhamento direto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/marcacao"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-[#a3e635] px-7 text-sm font-extrabold text-zinc-950 shadow-[0_0_30px_rgba(163,230,53,0.22)] transition hover:bg-[#b8f542] hover:shadow-[0_0_38px_rgba(163,230,53,0.32)] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              Marcar / pedir orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-7 text-sm font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              Ver serviços e preços
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3e635]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-900 pt-5 text-[11px] font-mono uppercase tracking-wider text-zinc-600">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[#a3e635]" /> Processo acompanhado</span>
            <span className="inline-flex items-center gap-2"><Wrench className="h-3.5 w-3.5 text-[#a3e635]" /> Diagnóstico técnico</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative flex min-h-[340px] items-center justify-center lg:min-h-[520px]"
        >
          <div className="absolute h-64 w-64 rounded-full bg-[#a3e635]/10 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute h-72 w-72 rounded-full border border-zinc-800/80 sm:h-96 sm:w-96" />
          <div className="absolute h-52 w-52 rounded-full border border-[#a3e635]/15 sm:h-72 sm:w-72" />
          <Image
            src="/favicon.ico"
            alt="Máquina de corte profissional"
            width={480}
            height={480}
            priority
            className="relative z-10 w-[280px] object-contain drop-shadow-[0_20px_45px_rgba(163,230,53,0.20)] sm:w-[360px] lg:w-[460px]"
          />
          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-center backdrop-blur-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a3e635]">Engenharia de precisão</div>
            <div className="mt-1 text-xs text-zinc-400">Preparada para uso profissional</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
