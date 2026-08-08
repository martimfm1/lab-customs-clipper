"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 pb-16 pt-24 sm:px-8 sm:pt-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3e635]/10 blur-[100px] sm:h-[500px] sm:w-[700px] sm:blur-[160px]" />

      {/* ── Desktop corners ── */}
      <div className="absolute left-8 top-28 hidden flex-col gap-1 font-mono text-[11px] text-zinc-500 lg:flex">
        <div className="flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a3e635]" />
          <span className="text-zinc-300">LAB // PROTOCOL 1.0</span>
        </div>
        <span className="pl-3 text-zinc-600">STATUS: OPERACIONAL</span>
      </div>
      <div className="absolute right-8 top-28 hidden text-right font-mono text-[11px] text-zinc-500 lg:block">
        <div className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1 text-zinc-400 backdrop-blur-md">
          EST. 2026 // PORTUGAL
        </div>
      </div>
      <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
        <div className="flex flex-col gap-2 font-mono text-[10px] tracking-wider text-zinc-600">
          <span className="cursor-default transition-colors hover:text-[#a3e635]">— 01 PRECISÃO</span>
          <span className="cursor-default transition-colors hover:text-[#a3e635]">— 02 ENGENHARIA</span>
          <span className="cursor-default transition-colors hover:text-[#a3e635]">— 03 LABORATÓRIO</span>
        </div>
      </div>

      {/* ── MOBILE: centered layout ── */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6 text-center lg:hidden">

        {/* Logo with ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute h-24 w-24 rounded-full border border-dashed border-zinc-800/60 pointer-events-none"
          />
          

          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border bg-zinc-900/90 shadow-[0_0_20px_rgba(163,230,53,0.15)]"
          >
            <Image
              src="/favicon.ico"
              alt="LAB Customs Clipper"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute h-8 w-8 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>
            <span className="block text-6xl font-extrabold leading-none tracking-tighter text-white xs:text-7xl">
              OFICINA
            </span>
            <span className="mt-1.5 block text-3xl font-light leading-tight tracking-tight text-zinc-400 xs:text-4xl">
              para artistas.
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-base font-medium text-zinc-200">
            Engenharia de Precisão para Máquinas Profissionais.
          </p>
          <p className="text-sm leading-relaxed text-zinc-500">
            Especialista em manutenção preventiva, reparação corretiva e planos
            de manutenção para equipamento profissional de barbearia.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex w-full flex-col gap-3"
        >
          <a
            href="/marcacao"
            className="flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#a3e635] font-bold text-sm text-zinc-950 shadow-[0_0_24px_rgba(163,230,53,0.25)] transition-all active:scale-[0.97] touch-manipulation"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            Falar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-sm font-semibold text-zinc-300 transition-all active:scale-[0.97] touch-manipulation"
          >
            Ver serviços
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </motion.div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="relative z-10 hidden w-full max-w-7xl flex-row items-center justify-between gap-8 px-6 lg:flex">
        <div className="flex-1 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-8xl font-extrabold leading-none tracking-tighter text-white xl:text-9xl">
              OFICINA
            </span>
            <span className="mt-2 block text-6xl font-light leading-tight tracking-tight text-zinc-400 xl:text-7xl">
              para artistas.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-xl font-medium leading-relaxed text-zinc-200"
          >
            Engenharia de precisão para máquinas profissionais.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-3 max-w-md text-base leading-relaxed text-zinc-400"
          >
            Manutenção preventiva, reparação corretiva e otimização para
            equipamento profissional de barbearia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="/marcacao"
              className="flex h-[52px] items-center gap-2.5 rounded-xl bg-[#a3e635] px-7 text-sm font-bold text-zinc-950 shadow-[0_0_25px_rgba(163,230,53,0.2)] transition-all hover:bg-[#b8f542] hover:shadow-[0_0_35px_rgba(163,230,53,0.35)] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="group flex h-[52px] items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-7 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-white"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-1 items-center justify-center"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute h-80 w-80 rounded-full border border-dashed border-zinc-800/80 pointer-events-none lg:h-96 lg:w-96" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute h-60 w-60 rounded-full border border-zinc-800/50 pointer-events-none lg:h-72 lg:w-72" />
          <div className="absolute h-40 w-40 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5 pointer-events-none lg:h-48 lg:w-48" />
          <div className="pointer-events-none absolute h-80 w-px bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent lg:h-96" />
          <div className="pointer-events-none absolute h-px w-80 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent lg:w-96" />

          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.85, 1.05, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 rounded-full bg-[#a3e635]/20 blur-3xl"
            />
            <Image
              src="/favicon.ico"
              alt="Máquina de corte profissional"
              width={480}
              height={480}
              className="max-w-xs select-none object-contain drop-shadow-[0_15px_35px_rgba(163,230,53,0.25)] sm:max-w-sm lg:max-w-md xl:max-w-lg"
              priority
            />
          </motion.div>

          <div className="absolute bottom-6 left-8 hidden rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 font-mono text-[10px] text-zinc-400 backdrop-blur-md md:block">
            <div className="font-bold text-[#a3e635]">MOTOR & LÂMINAS</div>
            <div className="mt-0.5 text-zinc-500">CALIBRADO // 0.01mm</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Scroll</span>
        <div className="h-5 w-px animate-pulse bg-gradient-to-b from-[#a3e635]/60 to-transparent" />
      </motion.div>
    </section>
  );
}