"use client";

import { motion } from "framer-motion";
import { Wrench, Award, Microscope, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: Wrench,
    value: "+50",
    label: "Equipamentos Intervencionados",
    desc: "Máquinas profissionais restauradas e otimizadas.",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    label: "Atendimento Personalizado",
    desc: "Cada equipamento tratado de forma individual.",
  },
  {
    icon: Microscope,
    value: "PRO",
    label: "Diagnóstico Técnico",
    desc: "Análise aprofundada antes de qualquer intervenção.",
  },
  {
    icon: Award,
    value: "ESP",
    label: "Serviço Especializado",
    desc: "Foco exclusivo em equipamento profissional.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
          <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
            Confiança
          </span>
          <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="relative p-6 rounded-2xl bg-[#111111] border border-white/[0.06] group hover:border-[#a3e635]/20 transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#a3e635]/0 to-transparent group-hover:via-[#a3e635]/30 transition-all duration-500" />

                <div className="w-10 h-10 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center mb-4 group-hover:bg-[#a3e635]/15 transition-colors">
                  <Icon className="w-5 h-5 text-[#a3e635]" />
                </div>

                <div className="text-3xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white/80 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-white/35 leading-relaxed">
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
