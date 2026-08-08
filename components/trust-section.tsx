"use client";

import { motion } from "framer-motion";
import { Wrench, Award, Microscope, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: Wrench,
    value: "+50",
    label: "Equipamentos Intervencionados",
    desc: "Máquinas profissionais restauradas e otimizadas com precisão.",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    label: "Atendimento Personalizado",
    desc: "Cada equipamento é tratado de forma individual e dedicada.",
  },
  {
    icon: Microscope,
    value: "PRO",
    label: "Diagnóstico Técnico",
    desc: "Análise aprofundada e rigorosa antes de qualquer intervenção.",
  },
  {
    icon: Award,
    value: "ESP",
    label: "Serviço Especializado",
    desc: "Foco exclusivo na manutenção de equipamento profissional.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#a3e635]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#a3e635]/40" />
          <span className="text-[#a3e635] text-xs font-mono font-bold tracking-widest uppercase bg-[#a3e635]/10 border border-[#a3e635]/20 px-3.5 py-1 rounded-full">
            Confiança & Qualidade
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#a3e635]/40" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm group hover:border-[#a3e635]/40 hover:bg-zinc-900/90 transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#a3e635]/0 to-transparent group-hover:via-[#a3e635]/40 transition-all duration-500" />

                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-[#a3e635]/30 group-hover:bg-[#a3e635]/10 group-hover:scale-105 transition-all duration-300 shadow-md">
                  <Icon className="w-5 h-5 text-[#a3e635] transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Metric Value */}
                <div className="text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-[#a3e635] transition-colors duration-300 font-mono">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm font-bold text-zinc-200 mb-2 tracking-wide">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}