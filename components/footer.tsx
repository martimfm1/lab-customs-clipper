"use client";

import { motion } from "framer-motion";
import { MessageCircle, Youtube } from "lucide-react";
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
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/labcustomsclipper/";
const YOUTUBE_URL = "https://www.youtube.com/@iameduardovictor";

export default function Footer() {
  return (
    <footer
      id="contactos"
      className="bg-zinc-950 border-t border-zinc-800/80 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#a3e635]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-md">
                <Image
                  src="/favicon.ico"
                  alt="LAB Customs Clipper Logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                LAB Customs Clipper
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Oficina especializada em manutenção, reparação e otimização de
              equipamento profissional de barbearia. Portugal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-5 font-semibold">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                ["Início", "#inicio"],
                ["Serviços", "#servicos"],
                ["Marcar Serviço", "/marcacao"],
                ["Plano de Prevenção", "#plano"],
                ["Trabalhos", "#trabalhos"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-zinc-400 hover:text-[#a3e635] transition-colors duration-200 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-5 font-semibold">
              Contactos
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/351926463182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#a3e635] transition-colors group w-fit"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#a3e635]/40 group-hover:bg-zinc-800/80 transition-all duration-200">
                  <MessageCircle className="w-4 h-4 text-zinc-400 group-hover:text-[#a3e635] transition-colors" />
                </div>
                <span>WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#a3e635] transition-colors group w-fit"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#a3e635]/40 group-hover:bg-zinc-800/80 transition-all duration-200">
                  <InstagramIcon className="w-4 h-4 text-zinc-400 group-hover:text-[#a3e635] transition-colors" />
                </div>
                <span>@labcustomsclipper</span>
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#a3e635] transition-colors group w-fit"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#a3e635]/40 group-hover:bg-zinc-800/80 transition-all duration-200">
                  <Youtube className="w-4 h-4 text-zinc-400 group-hover:text-[#a3e635] transition-colors" />
                </div>
                <span>YouTube</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} LAB Customs Clipper. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-zinc-500">
            Desenvolvido por{" "}
            <a
              href="https://silentra.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-[#a3e635] font-medium transition-colors"
            >
              Silentra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
