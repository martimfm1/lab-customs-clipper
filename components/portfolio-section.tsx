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
    <section id="trabalhos" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hex-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
            <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
              Portfólio
            </span>
            <div className="h-px flex-1 max-w-12 bg-[#a3e635]/30" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white text-balance">
              Trabalhos Realizados.
            </h2>
            <p className="text-white/40 text-base max-w-xs leading-relaxed text-pretty">
              Uma amostra do nosso trabalho de precisão e atenção ao detalhe.
            </p>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-[520px] lg:h-[600px]">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden bg-[#111111] border border-white/[0.06] cursor-pointer ${work.span}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <span className="px-2.5 py-1 rounded-full bg-[#a3e635]/15 border border-[#a3e635]/25 text-[#a3e635] text-xs font-mono">
                  {work.tag}
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-[#a3e635]/0 group-hover:border-[#a3e635]/15 transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 flex justify-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <InstagramIcon className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Ver Trabalhos no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}