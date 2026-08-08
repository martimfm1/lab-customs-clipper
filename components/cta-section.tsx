"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_URL = "/marcacao";

export default function CtaSection() {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden bg-zinc-950">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#a3e635]/5 blur-[160px] rounded-full" />

      {/* Crosshair Accent Lines */}
      <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-zinc-800/40 to-transparent" />

      {/* Top & Bottom Borders */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Technical Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#a3e635]">
              Contacto & Agendamento
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight mb-6">
            PRONTO PARA DAR
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-light text-zinc-400 mt-2">
              uma nova vida ao teu equipamento?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-pretty mb-10">
            Fale connosco pelo WhatsApp. Respondemos rapidamente e orientamos
            sobre o melhor serviço para o seu equipamento.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="button"
              size="lg"
              onClick={() => {
                window.location.href = WHATSAPP_URL;
              }}
              className="group inline-flex cursor-pointer items-center justify-center gap-2.5 h-13 px-8 rounded-xl bg-[#a3e635] text-zinc-950 font-bold text-sm hover:bg-[#b8f542] transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}