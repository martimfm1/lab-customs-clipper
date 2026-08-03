"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, User, Scissors, ArrowRight,
  Copy, Check, PenLine, ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "351926463182";

const PRESET_SERVICES = [
  {
    id: "preventiva",
    label: "Manutenção Preventiva",
    description: "Limpeza, lubrificação e ajuste completo",
  },
  {
    id: "corretiva",
    label: "Manutenção Corretiva",
    description: "Diagnóstico e reparação de avaria",
  },
  {
    id: "premium",
    label: "Plano de Prevenção",
    description: "Adesão ao plano premium de manutenção",
  },
] as const;

type ServiceMode = "preset" | "custom";
type ServiceId = (typeof PRESET_SERVICES)[number]["id"] | "";

function buildMessage(name: string, service: string, serviceId: ServiceId): string {
  const n = name.trim();
  const s = service.trim();
  if (!n || !s) return "";
  if (serviceId === "premium") {
    return `Olá! O meu nome é *${n}*. Gostaria de aderir ao *${s}*. Podem indicar-me como proceder?`;
  }
  return `Olá! O meu nome é *${n}*. Gostaria de marcar um serviço de *${s}*. Quando é que têm disponibilidade?`;
}

export default function BookingMessagePage() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState<ServiceMode>("preset");
  const [selectedId, setSelectedId] = useState<ServiceId>("");
  const [customService, setCustomService] = useState("");
  const [copied, setCopied] = useState(false);

  const service = useMemo(() => {
    if (mode === "preset") return PRESET_SERVICES.find((s) => s.id === selectedId)?.label ?? "";
    return customService;
  }, [mode, selectedId, customService]);

  const activeServiceId: ServiceId = mode === "preset" ? selectedId : "";
  const message = useMemo(
    () => buildMessage(name, service, activeServiceId),
    [name, service, activeServiceId],
  );
  const isReady = name.trim().length > 0 && service.trim().length > 0;

  const handleWhatsApp = () => {
    if (!isReady) return;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleCopy = async () => {
    if (!message) return;
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleModeSwitch = (next: ServiceMode) => {
    setMode(next);
    setSelectedId("");
    setCustomService("");
  };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#050505]">
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 hex-bg opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(163,230,53,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/15 to-transparent" />

      {/* Two-column layout on lg+ */}
      <div className="relative z-10 mx-auto grid min-h-dvh w-full max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">

        {/* ── LEFT PANEL (branding / context) ── */}
        <div className="hidden lg:flex flex-col justify-between px-16 py-16 border-r border-white/[0.06]">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao início
          </Link>

          {/* Central content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
                Marcação
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
              Marca o teu<br />
              <span className="text-[#a3e635]">serviço</span>
            </h1>

            <p className="text-white/40 text-base leading-relaxed max-w-sm">
              Seleciona o teu serviço, preenche o nome e abrimos o WhatsApp com a mensagem já preparada.
            </p>

            {/* Service preview pills */}
            <div className="space-y-2 pt-2">
              {PRESET_SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center gap-3 text-sm text-white/30"
                >
                  <span className="w-1 h-1 rounded-full bg-[#a3e635]/40 shrink-0" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs font-mono text-white/15 hover:text-[#a3e635] cursor-pointer tracking-wider">
            @labcustomsclipper
          </p>
        </div>

        {/* ── RIGHT PANEL (form) ── */}
        <div className="flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

          {/* Mobile-only back + header */}
          <div className="lg:hidden mb-8 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar ao início
            </Link>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                <span className="text-[#a3e635] text-xs font-mono tracking-widest uppercase">
                  Marcação
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Marca o teu <span className="text-[#a3e635]">serviço</span>
              </h1>
              <p className="mt-2 text-white/40 text-sm leading-relaxed">
                Preenche os campos e abrimos o WhatsApp com a mensagem pronta.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 space-y-5"
          >
            {/* Name */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
                <User className="w-3.5 h-3.5 shrink-0" />
                O teu nome
              </label>
              <input
                type="text"
                inputMode="text"
                autoComplete="given-name"
                placeholder="Ex: João Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#a3e635]/40 focus:bg-white/[0.06] transition-colors"
              />
            </div>

            {/* Service */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
                  <Scissors className="w-3.5 h-3.5 shrink-0" />
                  Serviço
                </label>

                <div className="flex items-center gap-0.5 rounded-lg border border-white/[0.08] bg-black/20 p-0.5">
                  <button
                    type="button"
                    onClick={() => handleModeSwitch("preset")}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-150 cursor-pointer ${
                      mode === "preset"
                        ? "bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/20"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    Lista
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeSwitch("custom")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-150 cursor-pointer ${
                      mode === "custom"
                        ? "bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/20"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    <PenLine className="w-3 h-3" />
                    Outro
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {mode === "preset" ? (
                  <motion.div
                    key="preset"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-2"
                  >
                    {PRESET_SERVICES.map((s) => {
                      const isSelected = selectedId === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedId(s.id)}
                          className={`w-full text-left rounded-xl border px-4 py-3 transition-all duration-150 cursor-pointer active:scale-[0.99] ${
                            isSelected
                              ? "border-[#a3e635]/40 bg-[#a3e635]/5"
                              : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className={`text-sm font-semibold truncate transition-colors ${isSelected ? "text-[#a3e635]" : "text-white/80"}`}>
                                {s.label}
                              </p>
                              <p className="text-xs text-white/30 mt-0.5 truncate">{s.description}</p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 shrink-0 transition-all flex items-center justify-center ${
                              isSelected ? "border-[#a3e635] bg-[#a3e635]" : "border-white/20"
                            }`}>
                              {isSelected && (
                                <svg viewBox="0 0 16 16" fill="none" className="w-full h-full p-0.5">
                                  <path d="M3 8l4 4 6-6" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <input
                      type="text"
                      placeholder="Descreve o serviço pretendido..."
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      autoFocus
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#a3e635]/40 focus:bg-white/[0.06] transition-colors"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.06]" />

            {/* Preview */}
            <div className="space-y-1.5">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                Pré-visualização
              </p>
              <div className="relative min-h-[68px] rounded-xl border border-white/[0.06] bg-black/30 p-4">
                {message ? (
                  <>
                    <p className="text-sm text-white/80 leading-relaxed pr-8">{message}</p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="absolute top-3 right-3 p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-colors cursor-pointer"
                      title="Copiar mensagem"
                    >
                      {copied
                        ? <Check className="w-3.5 h-3.5 text-[#a3e635]" />
                        : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </>
                ) : (
                  <p className="text-sm text-white/20 italic">
                    A mensagem vai aparecer aqui...
                  </p>
                )}
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleWhatsApp}
              disabled={!isReady}
              className="group w-full flex items-center justify-center gap-3 h-14 rounded-2xl bg-[#a3e635] text-[#050505] font-bold text-base hover:bg-[#bef264] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer active:scale-[0.98] touch-manipulation"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Enviar pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>

            {!isReady && (
              <p className="text-center text-xs text-white/25">
                Preenche o nome e seleciona um serviço para continuar
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}