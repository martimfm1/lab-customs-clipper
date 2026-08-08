"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Star,
  CheckCircle2,
  MessageCircle,
  Truck,
  AlertCircle,
  Package,
} from "lucide-react";

const WHATSAPP_NUMBER = "351926463182";

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    icon: Shield,
    tag: "Serviço 01",
    title: "Manutenção Preventiva",
    subtitle: "Aumenta a vida útil do equipamento",
    description:
      "Intervenção regular para manter o equipamento no pico de desempenho, prevenindo avarias.",
    priceTag: { value: "8€", label: "Por máquina" },
    items: [
      "Higienização técnica completa",
      "Lubrificação de componentes",
      "Ajustes de precisão",
      "Testes de funcionamento",
      "Alinhamento de lâminas",
    ],
    ctaLabel: "Marcar Manutenção",
    whatsappMessage:
      "Olá! Preciso de manutenção preventiva para as minhas máquinas, pode ajudar-me?",
    featured: false,
  },
  {
    icon: Wrench,
    tag: "Serviço 02",
    title: "Manutenção Corretiva",
    subtitle: "Diagnóstico e reparação especializados",
    description:
      "Resolução de avarias e substituição de componentes danificados com garantia de qualidade.",
    priceTag: { value: "Sob Consulta", label: "Orçamento p/ peças" },
    items: [
      "Diagnóstico técnico avançado",
      "Reparação de motor",
      "Substituição de componentes",
      "Testes finais exaustivos",
    ],
    note: "Componentes cotados separadamente.",
    ctaLabel: "Pedir Orçamento",
    whatsappMessage:
      "Olá! O meu equipamento tem uma avaria e gostaria de pedir um orçamento para *Manutenção Corretiva*. Podem ajudar-me?",
    featured: false,
  },
  {
    icon: Truck,
    tag: "Serviço 03",
    title: "Envio para Manutenção",
    subtitle: "Para barbeiros de todo o país",
    description:
      "Envia as tuas máquinas por correio ou transportadora. Recebemos, reparamos e devolvemos.",
    priceTag: { value: "Nacional", label: "Envio & Retorno" },
    items: [
      "Atendimento a todo o país",
      "Instruções de envio simples",
      "Diagnóstico assim que chega",
      "Devolução segura",
    ],
    note: "Acima de 60€ em serviços, o cliente fica isento de pagar o envio de devolução.",
    ctaLabel: "Enviar Equipamento",
    whatsappMessage:
      "Olá! Quero enviar as minhas máquinas para manutenção. Como posso proceder com o envio?",
    featured: false,
  },
  {
    icon: Star,
    tag: "Plano Premium",
    title: "Plano de Prevenção",
    subtitle: "O plano mais inteligente",
    description:
      "Manutenção preventiva regular para até 3 máquinas. Maior durabilidade e redução de custos.",
    priceTag: { value: "20€", label: "/mês • Até 3 máquinas" },
    items: [
      "Manutenção preventiva regular",
      "Maior durabilidade garantida",
      "Melhor desempenho consistente",
      "Redução de custos futuros",
      "Prioridade no atendimento",
    ],
    ctaLabel: "Aderir ao Plano",
    whatsappMessage:
      "Olá! Gostaria de aderir ao *Plano de Prevenção*. Podem ajudar-me?",
    featured: true,
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            Serviços Especializados
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Soluções para o teu equipamento.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Manutenção de alta precisão e planos contínuos para garantir performance impecável na tua barbearia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="plano">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isFeatured = service.featured;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-zinc-900/90 border-2 border-[#a3e635] shadow-[0_0_50px_rgba(163,230,53,0.12)] scale-[1.02] lg:scale-105 z-20"
                    : "bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#a3e635] text-zinc-950 text-xs font-black tracking-wide uppercase shadow-lg shadow-[#a3e635]/20">
                      <Star className="w-3 h-3 fill-zinc-950" /> Mais Recomendado
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md ${
                      isFeatured
                        ? "bg-[#a3e635]/15 text-[#a3e635] font-semibold"
                        : "bg-zinc-800/60 text-zinc-400"
                    }`}>
                      {service.tag}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isFeatured
                        ? "bg-[#a3e635] text-zinc-950"
                        : "bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className={`text-xs font-medium leading-normal ${
                      isFeatured ? "text-[#a3e635]" : "text-zinc-400"
                    }`}>
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400/90 leading-relaxed min-h-[48px]">
                    {service.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-center min-h-[68px]">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-extrabold tracking-tight ${
                        service.priceTag.value.includes("€")
                          ? "text-3xl text-white"
                          : "text-lg text-zinc-200"
                      }`}>
                        {service.priceTag.value}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-zinc-400 mt-0.5">
                      {service.priceTag.label}
                    </span>
                  </div>
                </div>

                <div className="my-6 pt-5 border-t border-zinc-800/60 flex-1 flex flex-col justify-start">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 block">
                    O que inclui:
                  </span>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isFeatured ? "text-[#a3e635]" : "text-zinc-500"
                        }`} />
                        <span className="text-xs text-zinc-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="min-h-[48px] flex items-center">
                    {"note" in service && service.note ? (
                      <div className={`w-full flex items-start gap-2 p-2.5 rounded-xl border text-[11px] leading-tight font-medium ${
                        service.title.includes("Envio")
                          ? "bg-[#a3e635]/10 border-[#a3e635]/30 text-[#bef264]"
                          : "bg-amber-500/10 border-amber-500/25 text-amber-300"
                      }`}>
                        {service.title.includes("Envio") ? (
                          <Package className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{service.note}</span>
                      </div>
                    ) : (
                      <div className="w-full h-px bg-transparent" />
                    )}
                  </div>

                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 active:scale-[0.98] ${
                      isFeatured
                        ? "bg-[#a3e635] text-zinc-950 hover:bg-[#bef264] hover:shadow-lg hover:shadow-[#a3e635]/20"
                        : "bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{service.ctaLabel}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
