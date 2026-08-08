"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const faqs = [
  {
    q: "Que tipos de equipamentos aceitam?",
    a: "Máquinas Clipper, Trimmer e Shaver da Wahl, Style Craft, Gamma Piu, JRL entre outras.",
  },
  {
    q: "Quanto tempo demora uma intervenção?",
    a: "A maioria das intervenções de manutenção preventiva é concluída em 24 a 48 horas úteis. Reparações mais complexas, que impliquem a encomenda de componentes, poderão demorar mais tempo. Mantemos o cliente sempre informado.",
  },
  {
    q: "Como funciona o Plano de Prevenção?",
    a: "Por 20€/mês, realizamos manutenção preventiva regular a até 3 máquinas. O plano inclui higienização técnica, lubrificação, ajustes e testes completos, com uma frequência definida consoante o volume de utilização do profissional.",
  },
  {
    q: "Como é feito o envio e receção do equipamento?",
    a: "O equipamento pode ser entregue pessoalmente ou enviado por correio com embalagem adequada. Após a intervenção, devolvemos com transporte pago. Contacte-nos pelo WhatsApp para combinar a melhor opção.",
  },
  {
    q: "Garantia",
    a: "Aplica-se 90 dias de garantia para motores, placas de circuito e baterias, não cobrindo quedas, pancadas ou intervenção fora da oficina. Atenção: Não instalamos componentes de marca branca!",
  },
  {
    q: "É necessário agendar ou posso enviar a qualquer momento?",
    a: "Recomendamos sempre o contacto prévio pelo WhatsApp para garantir disponibilidade e agilizar o processo de receção e diagnóstico. Respondemos rapidamente e orientamos sobre todos os passos.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 blur-[140px] rounded-full" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Perguntas Frequentes.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Respostas claras sobre os nossos serviços, prazos e plano de manutenção.
          </p>
        </motion.div>

        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={`faq-wrapper-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`faq-item-${i}`}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 data-[state=open]:bg-zinc-900/90 data-[state=open]:border-[#a3e635]/40 data-[state=open]:shadow-[0_0_30px_rgba(163,230,53,0.05)] data-open:bg-zinc-900/90 data-open:border-[#a3e635]/40"
              >
                <AccordionTrigger
                  hideChevron
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold text-zinc-200 hover:text-white hover:no-underline transition-colors aria-expanded:text-white"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className="w-9 h-9 rounded-xl border border-zinc-700/50 bg-zinc-800/80 flex items-center justify-center transition-all duration-300 shrink-0 group-aria-expanded/accordion-trigger:bg-[#a3e635]/15 group-aria-expanded/accordion-trigger:border-[#a3e635]/40 group-aria-expanded/accordion-trigger:text-[#a3e635]">
                    <Plus className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:text-[#a3e635]" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 pt-0">
                  <div className="h-px bg-zinc-800/60 mb-4" />
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
