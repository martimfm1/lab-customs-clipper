"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Shield,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Manutenção Preventiva",
    subtitle: "Para manter a máquina no seu melhor.",
    description: "",
    price: "8€",
    priceLabel: "por máquina",
    items: [
      "Higienização técnica",
      "Lubrificação",
      "Ajustes de precisão",
      "Testes finais",
    ],
    cta: "Marcar manutenção",
    message:
      "Olá! Preciso de manutenção preventiva para as minhas máquinas, pode ajudar-me?",
    featured: false,
  },
  {
    icon: Wrench,
    title: "Manutenção Corretiva",
    subtitle: "Para máquinas com avaria ou perda de desempenho.",
    description: "",
    price: "Sob consulta",
    priceLabel: "peças cotadas à parte",
    items: ["Diagnóstico técnico", "Reparação", "Componentes", "Testes finais"],
    cta: "Pedir orçamento",
    message:
      "Olá! O meu equipamento tem uma avaria e gostaria de pedir um orçamento para manutenção corretiva. Podem ajudar-me?",
    featured: false,
  },
  {
    icon: Truck,
    title: "Envio para Manutenção",
    subtitle: "Envia a máquina e tratamos do resto.",
    description: "",
    price: "Nacional",
    priceLabel: "envio e retorno",
    items: [
      "Atendimento em todo o país",
      "Instruções simples",
      "Diagnóstico à chegada",
      "Devolução segura",
    ],
    note: "A partir de 60€ em serviços, não pagas o envio de devolução.",
    cta: "Ver como enviar",
    message:
      "Olá! Quero enviar as minhas máquinas para manutenção. Como posso proceder com o envio?",
    featured: false,
  },
  {
    icon: Star,
    title: "Plano de Prevenção",
    subtitle: "Para profissionais que querem evitar paragens.",
    description:
      "Manutenção preventiva regular para até 3 máquinas com prioridade de atendimento.",
    price: "20€",
    priceLabel: "/mês • até 3 máquinas",
    items: [
      "Manutenção regular",
      "Maior durabilidade",
      "Desempenho consistente",
      "Prioridade",
    ],
    cta: "Conhecer o plano",
    message:
      "Olá! Gostaria de conhecer o Plano de Prevenção. Podem explicar-me como funciona?",
    featured: true,
  },
] as const;

function whatsapp(message: string) {
  return `https://wa.me/351926463182?text=${encodeURIComponent(message)}`;
}

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#a3e635]">
            Escolhe o que precisas
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Uma solução clara para cada situação.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Já sabes o que precisas? Escolhe abaixo. Não tens a certeza? Usa o
            formulário e explica-nos o problema.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`relative flex flex-col rounded-2xl border p-6 ${service.featured ? "border-[#a3e635]/60 bg-[#a3e635]/[0.06] shadow-[0_0_45px_rgba(163,230,53,0.10)]" : "border-zinc-800 bg-zinc-900/45"}`}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-[#a3e635] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-950">
                    <Star className="h-3 w-3 fill-zinc-950" /> Recomendado
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-[#a3e635]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-white">
                      {service.price}
                    </div>
                    <div className="mt-0.5 text-[10px] font-mono uppercase tracking-wide text-zinc-500">
                      {service.priceLabel}
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-zinc-300">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                  {service.description}
                </p>

                <div className="my-5 border-t border-zinc-800 pt-5">
                  <p className="mb-3 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600">
                    Inclui
                  </p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a3e635]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {"note" in service && service.note && (
                  <div className="mb-4 rounded-xl border border-[#a3e635]/20 bg-[#a3e635]/[0.06] px-3 py-2.5 text-[11px] font-medium leading-relaxed text-[#bef264]">
                    {service.note}
                  </div>
                )}

                <div className="mt-auto pt-2">
                  <a
                    href={whatsapp(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-12 items-center justify-center gap-2 rounded-xl text-xs font-extrabold ${service.featured ? "bg-[#a3e635] text-zinc-950 hover:bg-[#b8f542]" : "border border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"} transition`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {service.cta}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/35 px-5 py-4 text-center">
          <p className="text-xs leading-relaxed text-zinc-400">
            Não sabes qual escolher?{" "}
            <a
              href="/marcacao"
              className="font-bold text-[#a3e635] hover:underline"
            >
              Explica-nos o problema →
            </a>{" "}
            e tratamos de orientar o serviço certo.
          </p>
        </div>
      </div>
    </section>
  );
}
