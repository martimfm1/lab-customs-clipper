"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Plano", href: "#plano" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contactos", href: "#contactos" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">

          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white group-hover:text-[#a3e635] transition-colors duration-300 uppercase">
              LAB CUSTOMS CLIPPER
            </span>
          </a>

          {/* Desktop Nav - Floating Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/60 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/marcacao"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a3e635] text-zinc-950 text-xs font-bold tracking-wide hover:bg-[#b8f542] transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 cursor-pointer rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200"
              aria-label="Abrir menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800/80 lg:hidden shadow-2xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition-all duration-200 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-zinc-600 font-mono">0{i + 1}</span>
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-800/80">
                <a
                  href="/marcacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#a3e635] text-zinc-950 text-xs font-bold tracking-wide hover:bg-[#b8f542] transition-all duration-200 shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}