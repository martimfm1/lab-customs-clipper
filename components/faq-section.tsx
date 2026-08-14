"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    q: "Que máquinas aceitam?",
    a: "Máquinas Clipper, Trimmer e Shaver da Wahl, Style Craft, Gamma Piu, JRL entre outras.",
  },
  {
    q: "Quanto custa a manutenção preventiva?",
    a: "A manutenção preventiva custa 8€ por máquina. O objetivo é manter o equipamento limpo, afinado e em bom funcionamento.",
  },
  {
    q: "E se a minha máquina já tiver uma avaria?",
    a: "Usa a Manutenção Corretiva. Fazemos primeiro o diagnóstico e, quando forem necessários componentes, estes são cotados separadamente.",
  },
  {
    q: "Quanto tempo demora?",
    a: "A maioria das manutenções preventivas é concluída em 24 a 48 horas úteis. Reparações que dependam de componentes podem demorar mais. Mantemos o cliente informado.",
  },
  {
    q: "Como funciona o envio?",
    a: "Podes entregar pessoalmente ou enviar por correio/transportadora, sempre com o equipamento devidamente protegido. A partir de 60€ em serviços, o envio de devolução fica a cargo da LAB.",
  },
  {
    q: "Existe garantia?",
    a: "Existe garantia de 90 dias para motores, placas de circuito e baterias, dentro das condições aplicáveis. Não cobre quedas, pancadas ou intervenção fora da oficina. Não instalamos componentes de marca branca.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-zinc-950 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Antes de decidir
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            As dúvidas que normalmente travam a decisão.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Respostas diretas sobre preço, prazo, envio, garantia e tipo de equipamento.
          </p>
        </div>

        <Accordion className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.35, delay: i * 0.04 }}>
              <AccordionItem value={`faq-${i}`} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 data-[state=open]:border-[#a3e635]/50 data-[state=open]:bg-[#a3e635]/[0.045] data-[state=open]:shadow-[0_0_32px_rgba(163,230,53,0.08)]">
                <AccordionTrigger hideChevron className="group/faq-trigger flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-zinc-200 transition-colors duration-300 hover:no-underline hover:text-white sm:px-6">
                  <span className="transition-colors duration-300 group-aria-expanded/faq-trigger:text-[#bef264]">{faq.q}</span>
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 group-aria-expanded/faq-trigger:border-[#a3e635]/50 group-aria-expanded/faq-trigger:bg-[#a3e635]/10 group-aria-expanded/faq-trigger:text-[#a3e635] group-aria-expanded/faq-trigger:shadow-[0_0_18px_rgba(163,230,53,0.18)]">
                    <Plus className="h-4 w-4 transition-transform duration-300 ease-out group-aria-expanded/faq-trigger:rotate-45" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 sm:px-6">
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                    <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#a3e635]/40 to-transparent" />
                    <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">{faq.a}</p>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <div className="mt-8 rounded-2xl border border-[#a3e635]/20 bg-[#a3e635]/[0.05] p-5 text-center">
          <p className="text-sm font-bold text-white">Não encontraste a resposta?</p>
          <p className="mt-1 text-xs text-zinc-400">Explica-nos o teu caso e respondemos com o próximo passo.</p>
          <a href="/marcacao" className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#a3e635] px-5 text-xs font-extrabold text-zinc-950 hover:bg-[#b8f542]">
            Explicar o meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
