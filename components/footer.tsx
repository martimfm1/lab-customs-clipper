"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
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

export default function Footer() {
  return (
    <footer
      id="contactos"
      className="bg-[#030303] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#a3e635] flex items-center justify-center">
                <span className="text-[#050505] text-xs font-black tracking-tighter font-mono">
                  <Image
                    src="/favicon.ico"
                    alt="LAB Customs Clipper Logo"
                    width={28}
                    height={28}
                  />
                </span>
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">
                LAB Customs Clipper
              </span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs text-pretty">
              Oficina especializada em manutenção, reparação e otimização de
              equipamento profissional de barbearia. Portugal.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-mono tracking-widest uppercase text-white/30 mb-5">
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
                  className="text-sm text-white/40 hover:text-[#a3e635] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono tracking-widest uppercase text-white/30 mb-5">
              Contactos
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/351926463182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-[#a3e635] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#a3e635]/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-[#a3e635] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#a3e635]/20 transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>@labcustomsclipper</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} LAB Customs Clipper. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/20">
            Desenvolvido por{" "}
            <a
              href="https://silentra.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-[#a3e635] transition-colors"
            >
              Silentra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
