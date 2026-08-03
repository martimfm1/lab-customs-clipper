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
    desc: "Registo e análise inicial do equipamento recebido.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Diagnóstico Técnico",
    desc: "Avaliação detalhada de todos os componentes e sistemas.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Intervenção",
    desc: "Manutenção, reparação ou substituição de componentes.",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Testes",
    desc: "Verificação de funcionamento sob condições reais de uso.",
  },
  {
    icon: BadgeCheck,
    number: "05",
    title: "Controlo de Qualidade",
    desc: "Validação final antes da entrega ao cliente.",
  },
  {
    icon: PackageCheck,
    number: "06",
    title: "Entrega",
    desc: "Equipamento devolvido em condições de pico de performance.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15" />

      {/* Decorative horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/[0.06] to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#a3e635]/30" />
            <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
              Processo
            </span>
            <div className="h-px w-12 bg-[#a3e635]/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white text-balance">
            Como trabalhamos.
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-lg mx-auto text-pretty leading-relaxed">
            Um processo rigoroso de seis etapas para garantir qualidade em cada
            intervenção.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {/* Connector line */}
          <div className="absolute top-9 left-[8.33%] right-[8.33%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#a3e635]/20 via-[#a3e635]/40 to-[#a3e635]/20 origin-left"
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#111111] border border-white/[0.1] flex items-center justify-center z-10 relative group-hover:border-[#a3e635]/30 transition-colors">
                    <Icon className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0a0a0a] border border-[#a3e635]/40 flex items-center justify-center">
                    <span className="text-[#a3e635] text-[9px] font-mono font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white/90 mb-2 text-balance leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 relative"
              >
                {/* Connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#111111] border border-white/[0.1] flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/[0.06] my-1" />
                  )}
                </div>

                <div className="pb-8">
                  <div className="text-[#a3e635] text-xs font-mono mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-white/90 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/35 leading-relaxed">
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
