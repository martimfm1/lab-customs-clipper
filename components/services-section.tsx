"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Star,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20servi%C3%A7os.";

const services = [
  {
    icon: Shield,
    tag: "Serviço 01",
    title: "Manutenção Preventiva",
    subtitle: "Aumenta a vida útil do equipamento.",
    description:
      "Intervenção regular para manter o seu equipamento em condições de pico de desempenho, prevenindo avarias e aumentando a longevidade.",
    items: [
      "Higienização técnica completa",
      "Lubrificação de componentes",
      "Ajustes de precisão",
      "Testes de funcionamento",
      "Alinhamento de lâminas",
    ],
    featured: false,
  },
  {
    icon: Wrench,
    tag: "Serviço 02",
    title: "Manutenção Corretiva",
    subtitle: "Diagnóstico e reparação especializados.",
    description:
      "Identificação e resolução de avarias, substituição de componentes danificados com garantia de qualidade. Componentes cotados separadamente.",
    items: [
      "Diagnóstico técnico avançado",
      "Reparação de motor",
      "Substituição de componentes",
      "Testes finais exaustivos",
    ],
    featured: false,
    note: "Componentes cotados separadamente.",
  },
  {
    icon: Star,
    tag: "Plano Premium",
    title: "Plano de Prevenção",
    subtitle: "O plano mais inteligente para profissionais.",
    description:
      "Manutenção preventiva regular para até 3 máquinas. Maior durabilidade, melhor desempenho e redução de custos futuros.",
    price: "20€",
    period: "/mês",
    perks: "Até 3 máquinas",
    items: [
      "Manutenção preventiva regular",
      "Maior durabilidade garantida",
      "Melhor desempenho consistente",
      "Redução de custos futuros",
      "Prioridade no atendimento",
    ],
    featured: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
            <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
              Serviços
            </span>
            <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white text-balance">
            O que fazemos.
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-xl text-pretty leading-relaxed">
            Três serviços desenhados para manter o seu equipamento no pico do
            desempenho, sempre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="plano">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                  service.featured
                    ? "bg-[#111111] border border-[#a3e635]/25 shadow-[0_0_60px_rgba(163,230,53,0.08)]"
                    : "bg-[#0d0d0d] border border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-[#a3e635] text-[#050505] text-xs font-bold tracking-wide">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Glow top line */}
                {service.featured && (
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a3e635]/50 to-transparent" />
                )}

                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-xs font-mono tracking-widest uppercase ${
                      service.featured ? "text-[#a3e635]" : "text-white/30"
                    }`}
                  >
                    {service.tag}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      service.featured
                        ? "bg-[#a3e635]/15 border border-[#a3e635]/30"
                        : "bg-white/[0.05] border border-white/[0.08]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        service.featured ? "text-[#a3e635]" : "text-white/50"
                      }`}
                    />
                  </div>
                </div>

                {/* Price (featured only) */}
                {service.price && (
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        {service.price}
                      </span>
                      <span className="text-white/40 text-sm">
                        {service.period}
                      </span>
                    </div>
                    <span className="text-[#a3e635] text-sm font-medium mt-0.5 block">
                      {service.perks}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 ${
                    service.featured ? "text-[#a3e635]" : "text-white/50"
                  }`}
                >
                  {service.subtitle}
                </p>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-col gap-2.5 mb-6 flex-1">
                  {service.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          service.featured
                            ? "text-[#a3e635]"
                            : "text-white/30"
                        }`}
                      />
                      <span className="text-sm text-white/60">{item}</span>
                    </div>
                  ))}
                </div>

                {service.note && (
                  <p className="text-xs text-white/25 mb-4 font-mono">
                    * {service.note}
                  </p>
                )}

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    service.featured
                      ? "bg-[#a3e635] text-[#050505] hover:bg-[#bef264] accent-glow"
                      : "bg-white/[0.05] text-white/70 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {service.featured ? "Aderir ao Plano" : "Pedir Orçamento"}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
