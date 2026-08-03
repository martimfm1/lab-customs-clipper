"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"; // Ajusta o caminho se necessário

const faqs = [
  {
    q: "Que tipos de equipamento aceitam?",
    a: "Trabalhamos com todo o tipo de máquinas de corte profissionais: clippers, trimmers, máquinas de acabamento e contornos. Aceitamos as principais marcas do mercado, incluindo Wahl, Andis, BaByliss, Moser, entre outras.",
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
    q: "Os componentes substituídos têm garantia?",
    a: "Sim. Todos os componentes utilizados são originais ou equivalentes de qualidade certificada. As peças substituídas têm uma garantia mínima de 90 dias sobre defeitos de fabrico ou instalação.",
  },
  {
    q: "É necessário agendar ou posso enviar a qualquer momento?",
    a: "Recomendamos sempre o contacto prévio pelo WhatsApp para garantir disponibilidade e agilizar o processo de receção e diagnóstico. Respondemos rapidamente e orientamos sobre todos os passos.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Otimizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-[#a3e635]/30" />
            <span className="text-[#a3e635] text-[11px] sm:text-xs font-mono tracking-widest uppercase">
              FAQ
            </span>
            <div className="h-px w-8 sm:w-12 bg-[#a3e635]/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white text-balance">
            Perguntas Frequentes.
          </h2>
        </motion.div>

        {/* Accordion Responsivo */}
        <Accordion className="flex flex-col gap-2.5 sm:gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={`faq-wrapper-${i}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <AccordionItem
                value={`faq-item-${i}`}
                className="group rounded-xl border border-white/[0.06] bg-[#0d0d0d] overflow-hidden transition-all duration-200 hover:border-white/10 hover:bg-[#0f0f0f] active:scale-[0.995] data-open:bg-[#111111] data-open:border-[#a3e635]/25"
              >
                <AccordionTrigger
                  hideChevron
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-6 sm:py-5 text-left text-sm sm:text-base lg:text-lg font-medium text-white/70 hover:no-underline transition-colors aria-expanded:text-white"
                >
                  <span className="leading-snug">{faq.q}</span>

                  {/* Botão de Ícone com Toque Adaptado */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center transition-all duration-300 shrink-0 group-aria-expanded/accordion-trigger:bg-[#a3e635]/10 group-aria-expanded/accordion-trigger:border-[#a3e635]/30">
                    <Plus className="w-4 h-4 text-white/40 transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:text-[#a3e635]" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 pt-0">
                  <div className="h-px bg-white/[0.04] mb-3" />
                  <p className="text-xs sm:text-sm lg:text-base text-white/45 leading-relaxed">
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