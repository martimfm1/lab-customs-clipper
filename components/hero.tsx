"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hex-bg opacity-60" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(163,230,53,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 text-[#a3e635]/20 font-mono text-xs hidden lg:block">
        <div>LAB // PROTOCOL 1.0</div>
        <div className="mt-1 opacity-60">STATUS: OPERACIONAL</div>
      </div>
      <div className="absolute top-24 right-8 text-[#a3e635]/20 font-mono text-xs text-right hidden lg:block">
        <div>EST. 2026</div>
      </div>

      {/* Crosshair decorations */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col gap-1 text-white/10 font-mono text-[10px]">
          <span>— 01 PRECISION</span>
          <span>— 02 ENGINEERING</span>
          <span>— 03 LABORATORY</span>
        </div>
      </div>

      {/* Container Principal com Padding (px-6) e Max Width */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          {/* Logo Redondo - Visível apenas no Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6 lg:hidden"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#a3e635]/30 shadow-[0_0_20px_rgba(163,230,53,0.2)]">
              <Image
                src="/favicon.ico"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance"
          >
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-none">
              OFICINA
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white/70 leading-tight mt-2">
              para artistas.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 text-pretty"
          >
            Engenharia de Precisão para Máquinas Profissionais.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-3 text-base text-white/35 leading-relaxed max-w-md mx-auto lg:mx-0 text-pretty"
          >
            Especialista em manutenção preventiva, reparação corretiva e planos
            de manutenção para equipamento profissional de barbearia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
          >
            <a
              href="/marcacao"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#a3e635] text-[#050505] font-semibold text-base hover:bg-[#bef264] transition-all duration-200 accent-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="#servicos"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.1] text-white/70 text-base font-medium hover:border-white/20 hover:text-white transition-all duration-200"
            >
              <span>Ver serviços</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual (colocado de volta dentro do container com px-6) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-1 relative items-center justify-end z-10"
        >
          {/* Glow behind clipper */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 55% 50%, rgba(163,230,53,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Crosshair circles */}
          <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-[#a3e635]/[0.06]" />
          <div className="absolute w-60 h-60 lg:w-72 lg:h-72 rounded-full border border-[#a3e635]/[0.04]" />
          <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-[#a3e635]/[0.08]" />

          {/* Crosshair lines */}
          <div className="absolute w-1 h-80 lg:h-96 bg-gradient-to-b from-transparent via-[#a3e635]/[0.06] to-transparent" />
          <div className="absolute h-1 w-80 lg:w-96 bg-gradient-to-r from-transparent via-[#a3e635]/[0.06] to-transparent" />

          <div className="float-animation relative z-10">
            <Image
              src="/favicon.ico"
              alt="Máquina de corte profissional"
              width={520}
              height={520}
              className="object-contain drop-shadow-[0_0_60px_rgba(163,230,53,0.15)] max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
              priority
            />
          </div>

          {/* Technical labels */}
          {/* <div className="absolute top-12 right-4 lg:right-12 text-[#a3e635]/40 font-mono text-[10px] text-right hidden md:block">
            <div>ALINHAMENTO DE LAMINAS</div>
            <div className="text-white/20 mt-0.5">± 0.01mm</div>
          </div> */}
          <div className="absolute bottom-12 left-4 lg:left-8 text-[#a3e635]/40 font-mono text-[10px] hidden md:block">
            <div>MOTOR</div>
            <div className="text-white/20 mt-0.5">CALIBRADO</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}