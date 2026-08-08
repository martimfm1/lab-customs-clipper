"use client";

import { motion } from "framer-motion";
import {
  PackageOpen,
  ScanSearch,
  Hammer,
  FlaskConical,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    icon: PackageOpen,
    number: "01",
    title: "Receção do Equipamento",
    desc: "Registo e análise inicial de segurança do equipamento recebido.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Diagnóstico Técnico",
    desc: "Avaliação detalhada de todos os componentes internos e eletrónica.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Intervenção",
    desc: "Manutenção de precisão, afinação ou substituição de peças.",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Testes de Carga",
    desc: "Verificação de funcionamento sob condições reais de uso intensivo.",
  },
  {
    icon: BadgeCheck,
    number: "05",
    title: "Controlo de Qualidade",
    desc: "Validação final e calibragem das lâminas antes do embalamento.",
  },
  {
    icon: PackageCheck,
    number: "06",
    title: "Entrega Segura",
    desc: "Devolução rápida do equipamento no pico do seu desempenho.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Grid Pattern & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            Metodologia & Transparência
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Como trabalhamos.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Um processo rigoroso de seis etapas para garantir máxima precisão e qualidade em cada intervenção.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-[8.33%] right-[8.33%] h-px bg-zinc-800">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#a3e635]/20 via-[#a3e635] to-[#a3e635]/20 origin-left"
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Node Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative z-10 group-hover:border-[#a3e635]/50 group-hover:bg-zinc-800/80 group-hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-[#a3e635] transition-colors duration-300" />
                  </div>
                  {/* Step Badge */}
                  <div className="absolute -top-2 -right-2 z-20 px-2 py-0.5 rounded-full bg-zinc-950 border border-[#a3e635]/40 text-[#a3e635] text-[10px] font-mono font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-[#a3e635] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-0 max-w-md mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex gap-5 relative"
              >
                {/* Timeline Line & Icon */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 group-hover:border-[#a3e635]/50 group-hover:bg-zinc-800 transition-all">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-[#a3e635] transition-colors" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-zinc-800 via-[#a3e635]/30 to-zinc-800 my-2" />
                  )}
                </div>

                {/* Details */}
                <div className="pb-8 pt-1">
                  <span className="inline-block text-[#a3e635] text-[11px] font-mono font-bold tracking-wider mb-1 px-2 py-0.5 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                    ETAPA {step.number}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}