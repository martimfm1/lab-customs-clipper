"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, User, Scissors, ArrowRight,
  Copy, Check, PenLine, ArrowLeft, Sparkles,
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
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#a3e635]/5 blur-[160px] rounded-full" />

      {/* Two-column layout on lg+ */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">

        {/* ── LEFT PANEL (Branding / Context) ── */}
        <div className="hidden lg:flex flex-col justify-between px-16 py-16 border-r border-zinc-800/80">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>VOLTAR AO INÍCIO</span>
          </Link>

          {/* Central content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#a3e635]">
                Marcação Direta
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tighter text-white leading-none">
              MARCA O TEU<br />
              <span className="text-zinc-400 font-light text-4xl xl:text-5xl">serviço.</span>
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed max-w-sm text-pretty">
              Seleciona o teu serviço, preenche o teu nome e abrimos o WhatsApp com a mensagem de marcação pronta a enviar.
            </p>

            {/* Service preview pills */}
            <div className="space-y-2 pt-4">
              {PRESET_SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center gap-3 text-xs font-mono text-zinc-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]/60 shrink-0" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-[11px] font-mono text-zinc-600 hover:text-[#a3e635] cursor-pointer tracking-wider">
            LAB CUSTOMS CLIPPER — EST. 2026
          </p>
        </div>

        {/* ── RIGHT PANEL (Form) ── */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          {/* Mobile-only back + header */}
          <div className="lg:hidden mb-8 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>VOLTAR AO INÍCIO</span>
            </Link>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#a3e635]">
                  Marcação
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter text-white leading-none">
                MARCA O TEU <span className="text-zinc-400 font-light">serviço.</span>
              </h1>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Preenche os campos e geramos a mensagem para o WhatsApp.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-2xl shadow-black/80"
          >
            {/* Name Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                <User className="w-3.5 h-3.5 shrink-0 text-[#a3e635]" />
                O teu nome
              </label>
              <input
                type="text"
                inputMode="text"
                autoComplete="given-name"
                placeholder="Ex: João Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/20 transition-all duration-200"
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  <Scissors className="w-3.5 h-3.5 shrink-0 text-[#a3e635]" />
                  Serviço
                </label>

                <div className="flex items-center gap-0.5 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
                  <button
                    type="button"
                    onClick={() => handleModeSwitch("preset")}
                    className={`px-3 py-1 rounded-md text-[10px] font-mono transition-all duration-200 cursor-pointer ${
                      mode === "preset"
                        ? "bg-[#a3e635] text-zinc-950 font-bold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Lista
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeSwitch("custom")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono transition-all duration-200 cursor-pointer ${
                      mode === "custom"
                        ? "bg-[#a3e635] text-zinc-950 font-bold"
                        : "text-zinc-500 hover:text-zinc-300"
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
                    className="space-y-2.5"
                  >
                    {PRESET_SERVICES.map((s) => {
                      const isSelected = selectedId === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedId(s.id)}
                          className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all duration-200 cursor-pointer active:scale-[0.99] ${
                            isSelected
                              ? "border-[#a3e635]/50 bg-[#a3e635]/10 shadow-[0_0_15px_rgba(163,230,53,0.1)]"
                              : "border-zinc-800/80 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className={`text-sm font-semibold truncate transition-colors ${isSelected ? "text-[#a3e635]" : "text-zinc-200"}`}>
                                {s.label}
                              </p>
                              <p className="text-xs text-zinc-500 mt-0.5 truncate">{s.description}</p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border shrink-0 transition-all flex items-center justify-center ${
                              isSelected ? "border-[#a3e635] bg-[#a3e635]" : "border-zinc-700 bg-zinc-900"
                            }`}>
                              {isSelected && (
                                <svg viewBox="0 0 16 16" fill="none" className="w-full h-full p-0.5">
                                  <path d="M3 8l4 4 6-6" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/20 transition-all duration-200"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-zinc-800/80" />

            {/* Message Preview Box */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Pré-visualização
              </p>
              <div className="relative min-h-[72px] rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                {message ? (
                  <>
                    <p className="text-xs font-mono text-zinc-300 leading-relaxed pr-8">{message}</p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="absolute top-3 right-3 p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer"
                      title="Copiar mensagem"
                    >
                      {copied
                        ? <Check className="w-3.5 h-3.5 text-[#a3e635]" />
                        : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </>
                ) : (
                  <p className="text-xs font-mono text-zinc-600 italic">
                    A mensagem irá aparecer aqui...
                  </p>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleWhatsApp}
              disabled={!isReady}
              className="group w-full flex items-center justify-center gap-2.5 h-13 rounded-xl bg-[#a3e635] text-zinc-950 font-bold text-sm hover:bg-[#b8f542] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:shadow-[0_0_25px_rgba(163,230,53,0.3)] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Enviar pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {!isReady && (
              <p className="text-center text-[11px] font-mono text-zinc-600">
                Preenche o nome e seleciona um serviço para continuar
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}