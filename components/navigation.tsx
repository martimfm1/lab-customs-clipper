"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Plano", href: "#plano" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contactos", href: "#contactos" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">

          {/* ========================================================= */}
          {/* MOBILE NAVIGATION */}
          {/* ========================================================= */}

          <div
            className={`
              lg:hidden
              relative
              z-50
              overflow-hidden
              border
              border-white/[0.10]
              bg-zinc-900/65
              backdrop-blur-2xl
              backdrop-saturate-150
              shadow-[0_12px_45px_rgba(0,0,0,0.35)]
              transition-[border-radius]
              duration-200
              ${
                menuOpen
                  ? "rounded-t-2xl rounded-b-none border-b-white/[0.06]"
                  : "rounded-2xl"
              }
            `}
          >
            {/* Acrylic highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

            {/* Ambient green glow */}
            <div className="pointer-events-none absolute -top-20 left-1/3 h-40 w-40 rounded-full bg-[#a3e635]/[0.08] blur-3xl" />

            {/* Navbar content */}
            <div className="relative flex items-center justify-between px-3 py-2.5">

              {/* Logo */}
              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2.5"
              >
                <span className="text-[11px] font-extrabold tracking-wider text-white uppercase transition-colors duration-300 group-hover:text-[#a3e635] sm:text-xs">
                  LAB CUSTOMS CLIPPER
                </span>
              </a>

              {/* Mobile actions */}
              <div className="flex items-center gap-2">

                {/* WhatsApp */}
                <a
                  href="/marcacao"
                  className="
                    hidden
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#a3e635]/30
                    bg-[#a3e635]
                    px-3.5
                    py-2
                    text-[11px]
                    font-bold
                    tracking-wide
                    text-zinc-950
                    shadow-[0_0_20px_rgba(163,230,53,0.15)]
                    transition-all
                    duration-200
                    hover:bg-[#b8f542]
                    hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]
                    active:scale-[0.98]
                    sm:flex
                  "
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>

                {/* Menu button */}
                <button
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  className="
                    cursor-pointer
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-white/[0.05]
                    p-2
                    text-zinc-400
                    backdrop-blur-xl
                    transition-all
                    duration-200
                    hover:border-white/[0.16]
                    hover:bg-white/[0.08]
                    hover:text-white
                    active:scale-95
                  "
                  aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={menuOpen}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={menuOpen ? "close" : "menu"}
                      initial={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.8,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      {menuOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* ========================================================= */}
            {/* MOBILE DROPDOWN — CONTINUATION OF NAVBAR */}
            {/* ========================================================= */}

            <AnimatePresence initial={false}>
              {menuOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    overflow-hidden
                    border-t
                    border-white/[0.06]
                  "
                >
                  {/* Dropdown acrylic highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.025] to-transparent" />

                  {/* Green glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#a3e635]/[0.07] blur-3xl" />

                  <nav className="relative p-3">

                    {/* Navigation links */}
                    <div className="space-y-0.5">
                      {navLinks.map((link, i) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: i * 0.035,
                            duration: 0.2,
                          }}
                          onClick={() => setMenuOpen(false)}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-zinc-300
                            transition-all
                            duration-200
                            hover:bg-white/[0.06]
                            hover:text-white
                            active:bg-white/[0.08]
                          "
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 transition-colors duration-200 group-hover:bg-[#a3e635]" />

                            <span>{link.label}</span>
                          </span>

                          <span className="font-mono text-[10px] tracking-wider text-zinc-600 transition-colors group-hover:text-[#a3e635]/70">
                            0{i + 1}
                          </span>
                        </motion.a>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

                    {/* CTA */}
                    <motion.a
                      href="/marcacao"
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: navLinks.length * 0.035 + 0.05,
                        duration: 0.2,
                      }}
                      onClick={() => setMenuOpen(false)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[#a3e635]/30
                        bg-[#a3e635]
                        px-4
                        py-3
                        text-xs
                        font-bold
                        tracking-wide
                        text-zinc-950
                        shadow-[0_0_25px_rgba(163,230,53,0.18)]
                        transition-all
                        duration-200
                        hover:bg-[#b8f542]
                        hover:shadow-[0_0_30px_rgba(163,230,53,0.28)]
                        active:scale-[0.98]
                      "
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" />
                      <span>Falar no WhatsApp</span>
                    </motion.a>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ========================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================================================= */}

          <div className="hidden lg:flex items-center justify-between">

            {/* Logo */}
            <a
              href="#inicio"
              className="group flex items-center gap-2.5"
            >
              <span className="text-xs font-extrabold tracking-wider text-white uppercase transition-colors duration-300 group-hover:text-[#a3e635] sm:text-sm">
                LAB CUSTOMS CLIPPER
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="flex items-center gap-1 rounded-full border border-zinc-800/60 bg-zinc-900/60 px-3 py-1.5 shadow-inner backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    rounded-full
                    px-3.5
                    py-1.5
                    text-xs
                    font-medium
                    text-zinc-400
                    transition-all
                    duration-200
                    hover:bg-zinc-800/60
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/marcacao"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#a3e635]
                px-4
                py-2
                text-xs
                font-bold
                tracking-wide
                text-zinc-950
                shadow-[0_0_20px_rgba(163,230,53,0.2)]
                transition-all
                duration-300
                hover:bg-[#b8f542]
                hover:shadow-[0_0_25px_rgba(163,230,53,0.35)]
                active:scale-[0.98]
              "
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ============================================================= */}
      {/* MOBILE BACKDROP */}
      {/* ============================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[3px] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
