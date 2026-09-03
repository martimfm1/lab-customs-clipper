"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/labcustomsclipper/";

const works = [
  {
    src: "/work-2.png",
    alt: "Manutenção e limpeza de lâminas profissionais",
    tag: "Manutenção Preventiva",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/work-1.webp",
    alt: "Desmontagem e diagnóstico de clipper profissional",
    tag: "Resultado Final",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/work-3.jpg",
    alt: "Clipper restaurado após manutenção completa",
    tag: "Diagnóstico Técnico",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/work-4.png",
    alt: "Técnico a trabalhar nos componentes internos",
    tag: "Reparação Especializada",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/work-5.jpg",
    alt: "Clipper desmontado para manutenção e limpeza",
    tag: "Manutenção Preventiva",
    span: "col-span-1 row-span-1",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="trabalhos"
      className="py-24 relative overflow-hidden bg-zinc-950"
    >
      {/* Grid Pattern & Ambient Glow */}
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
            Portfólio & Galeria
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Trabalhos Realizados.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Uma amostra da nossa precisão, rigor técnico e atenção ao detalhe em
            cada equipamento.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 sm:gap-6 h-[520px] lg:h-[600px]">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-[#a3e635]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] cursor-pointer ${work.span}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 border border-[#a3e635]/30 text-[#a3e635] text-[11px] font-mono font-semibold tracking-wide uppercase backdrop-blur-md shadow-md">
                  {work.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex justify-center mt-12"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/80 text-zinc-200 border border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 shadow-md active:scale-[0.98]"
          >
            <InstagramIcon className="w-4 h-4 text-[#a3e635] shrink-0" />
            <span className="text-xs font-bold tracking-wide">
              Ver Trabalhos no Instagram
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
