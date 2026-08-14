"use client";

import { motion } from "framer-motion";
import { Award, HeartHandshake, Microscope, Wrench } from "lucide-react";

const proof = [
  [Wrench, "+50", "equipamentos intervencionados", "Experiência prática com equipamento profissional."],
  [HeartHandshake, "100%", "atendimento personalizado", "Cada caso é analisado individualmente."],
  [Microscope, "PRO", "diagnóstico técnico", "Não avançamos às cegas: primeiro percebemos o problema."],
  [Award, "90 dias", "garantia aplicável", "Garantia indicada para motores, placas de circuito e baterias, dentro das condições previstas."],
] as const;

export default function TrustSection() {
  return (
    <section className="bg-zinc-950 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#a3e635]">
            Razões para confiar
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            O objetivo não é só reparar. É devolver-te confiança na máquina.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Informação clara, diagnóstico técnico e cuidado no equipamento que usas todos os dias.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([Icon, value, label, desc], i) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-[#a3e635]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-3xl font-extrabold tracking-tight text-white">{value}</div>
              <h3 className="mt-1 text-sm font-bold text-zinc-200">{label}</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">{desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 text-center sm:p-6">
          <p className="text-xs leading-relaxed text-zinc-400">
            Trabalhamos com <span className="font-bold text-zinc-200">Wahl, Style Craft, Gamma Piu, JRL</span> e outras marcas de equipamento profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
