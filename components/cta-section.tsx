"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20servi%C3%A7os.";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hex-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(163,230,53,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag */}
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

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#a3e635] text-[#050505] font-bold text-lg hover:bg-[#bef264] transition-colors accent-glow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
