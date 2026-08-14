"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-3 py-2.5 sm:px-4">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-xs">
              LAB CUSTOMS CLIPPER
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-lg px-3.5 py-2 text-xs font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="/marcacao"
                className="hidden h-10 items-center gap-2 rounded-xl bg-[#a3e635] px-4 text-xs font-extrabold text-zinc-950 shadow-[0_0_22px_rgba(163,230,53,0.18)] transition hover:bg-[#b8f542] sm:flex"
              >
                <MessageCircle className="h-4 w-4" />
                Marcar serviço
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white lg:hidden"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-zinc-900 overflow-hidden lg:hidden"
              >
                <nav className="grid gap-1 p-3" aria-label="Navegação móvel">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white">
                      {link.label}
                    </a>
                  ))}
                  <a href="/marcacao" onClick={() => setMenuOpen(false)} className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#a3e635] text-sm font-extrabold text-zinc-950">
                    <MessageCircle className="h-4 w-4" />
                    Marcar serviço
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
