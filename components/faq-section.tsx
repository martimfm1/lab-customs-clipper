"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#a3e635]/30" />
            <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
              FAQ
            </span>
            <div className="h-px w-12 bg-[#a3e635]/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white text-balance">
            Perguntas Frequentes.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "bg-[#111111] border-[#a3e635]/20"
                  : "bg-[#0d0d0d] border-white/[0.06] hover:border-white/[0.1]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span
                  className={`text-sm sm:text-base font-medium transition-colors ${
                    open === i ? "text-white" : "text-white/70"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-lg border shrink-0 flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-[#a3e635]/10 border-[#a3e635]/30"
                      : "bg-white/[0.04] border-white/[0.08]"
                  }`}
                >
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-[#a3e635]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-white/40" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-white/[0.05] mb-4" />
                      <p className="text-sm text-white/45 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
