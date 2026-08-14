"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Hammer, PackageCheck, PackageOpen, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  [PackageOpen, "Envias ou entregas", "Recebemos o equipamento e confirmamos o estado à chegada."],
  [ScanSearch, "Diagnosticamos", "Percebemos a causa do problema antes de intervir."],
  [Hammer, "Intervencionamos", "Fazemos a manutenção, reparação ou afinação necessária."],
  [ShieldCheck, "Testamos", "Validamos o funcionamento para reduzir surpresas depois da intervenção."],
  [BadgeCheck, "Controlamos", "Fazemos a verificação final antes do equipamento sair."],
  [PackageCheck, "Devolvemos", "O equipamento segue devidamente acondicionado para voltar ao trabalho."],
] as const;

export default function ProcessSection() {
  return (
    <section id="processo" className="bg-zinc-950 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Sem surpresas no processo
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Sabes sempre o que acontece a seguir.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Um processo simples, pensado para que não tenhas de adivinhar o estado da tua máquina.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([Icon, title, desc], i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-[#a3e635]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-600">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#a3e635]/15 bg-[#a3e635]/[0.04] p-5 sm:flex-row sm:p-6">
          <div>
            <p className="text-sm font-bold text-white">Ainda tens dúvidas antes de enviar?</p>
            <p className="mt-1 text-xs text-zinc-400">Explica o caso no formulário e tratamos de orientar o próximo passo.</p>
          </div>
          <a href="/marcacao" className="inline-flex h-11 items-center justify-center rounded-xl bg-[#a3e635] px-5 text-xs font-extrabold text-zinc-950 transition hover:bg-[#b8f542]">
            Explicar o meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
