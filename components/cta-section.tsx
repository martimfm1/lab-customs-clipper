"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_URL =
  "/marcacao";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hex-bg opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(163,230,53,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/15 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
            <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
              Contacto
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight text-balance mb-6">
            Pronto para dar uma nova
            <span className="text-[#a3e635]"> vida</span> ao seu equipamento?
          </h2>

          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed mb-12 text-pretty">
            Fale connosco pelo WhatsApp. Respondemos rapidamente e orientamos
            sobre o melhor serviço para o seu equipamento.
          </p>

          <Button
            type="button"
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
            className="inline-flex cursor-pointer items-center gap-4 h-14 px-10 rounded-3xl bg-[#a3e635] text-[#050505] font-bold text-lg hover:bg-[#bef264] transition-colors accent-glow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}