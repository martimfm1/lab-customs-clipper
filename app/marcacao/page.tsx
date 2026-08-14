"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, User, Scissors, ArrowRight,
  Copy, Check, PenLine, ArrowLeft, Sparkles, Wrench,
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

function buildMessage(
  name: string,
  service: string,
  serviceId: ServiceId,
  problem: string,
  mode: ServiceMode,
): string {
  const n = name.trim();
  const s = service.trim();
  const p = problem.trim();

  if (!n || !s) return "";

  if (mode === "custom") {
    return [
      `Olá! O meu nome é *${n}*.`,
      `Preciso de ajuda com o seguinte pedido:`,
      s,
      p ? `\nProblemas / detalhes:\n${p}` : "",
      "",
      "Podem analisar e indicar-me como proceder?",
    ].filter(Boolean).join("\n");
  }

  if (serviceId === "premium") {
    return [
      `Olá! O meu nome é *${n}*.`,
      `Gostaria de aderir ao *${s}*.`,
      p ? `\nProblema / necessidade:\n${p}` : "",
      "",
      "Podem indicar-me como proceder?",
    ].filter(Boolean).join("\n");
  }

  return [
    `Olá! O meu nome é *${n}*.`,
    `Gostaria de marcar *${s}*.`,
    p ? `\nProblema / avaria:\n${p}` : "",
    "",
    "Quando é que têm disponibilidade?",
  ].filter(Boolean).join("\n");
}

export default function BookingMessagePage() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState<ServiceMode>("preset");
  const [selectedId, setSelectedId] = useState<ServiceId>("");
  const [customService, setCustomService] = useState("");
  const [problem, setProblem] = useState("");
  const [copied, setCopied] = useState(false);

  const service = useMemo(() => {
    if (mode === "preset") return PRESET_SERVICES.find((s) => s.id === selectedId)?.label ?? "";
    return customService;
  }, [mode, selectedId, customService]);

  const activeServiceId: ServiceId = mode === "preset" ? selectedId : "";
  const message = useMemo(
    () => buildMessage(name, service, activeServiceId, problem, mode),
    [name, service, activeServiceId, problem, mode],
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
    setProblem("");
    setCopied(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#a3e635]/5 blur-[160px] rounded-full" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between px-16 py-16 border-r border-zinc-800/80">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>VOLTAR AO INÍCIO</span>
          </Link>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#a3e635]">Marcação Direta</span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tighter text-white leading-none">
              MARCA O TEU<br />
              <span className="text-zinc-400 font-light text-4xl xl:text-5xl">serviço.</span>
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed max-w-sm text-pretty">
              Na Lista escolhes exatamente o serviço de que precisas e descreves a avaria. Em Outro podes escrever um pedido completo com vários serviços e vários problemas.
            </p>

            <div className="space-y-2 pt-4">
              {PRESET_SERVICES.map((s) => (
                <div key={s.id} className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]/60 shrink-0" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] font-mono text-zinc-600 tracking-wider">LAB CUSTOMS CLIPPER — EST. 2026</p>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="lg:hidden mb-8 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-[#a3e635] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>VOLTAR AO INÍCIO</span>
            </Link>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#a3e635]">Marcação</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter text-white leading-none">
                MARCA O TEU <span className="text-zinc-400 font-light">serviço.</span>
              </h1>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">Na Lista escolhes um serviço e explicas a avaria. Em Outro podes juntar tudo num único pedido.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-2xl shadow-black/80"
          >
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                <User className="w-3.5 h-3.5 shrink-0 text-[#a3e635]" />
                O teu nome
              </label>
              <input
                type="text"
                inputMode="text"
                autoComplete="name"
                placeholder="Ex: João Silva"
                aria-label="O teu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/20 transition-all duration-200"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  <Scissors className="w-3.5 h-3.5 shrink-0 text-[#a3e635]" />
                  O que precisas?
                </label>

                <div className="flex items-center gap-0.5 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
                  <button type="button" onClick={() => handleModeSwitch("preset")} className={`px-3 py-1 rounded-md text-[10px] font-mono transition-all duration-200 cursor-pointer ${mode === "preset" ? "bg-[#a3e635] text-zinc-950 font-bold" : "text-zinc-500 hover:text-zinc-300"}`}>
                    Lista
                  </button>
                  <button type="button" onClick={() => handleModeSwitch("custom")} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono transition-all duration-200 cursor-pointer ${mode === "custom" ? "bg-[#a3e635] text-zinc-950 font-bold" : "text-zinc-500 hover:text-zinc-300"}`}>
                    <PenLine className="w-3 h-3" />
                    Outro
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {mode === "preset" ? (
                  <motion.div key="preset" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="space-y-2.5">
                    {PRESET_SERVICES.map((s) => {
                      const isSelected = selectedId === s.id;
                      return (
                        <button key={s.id} type="button" onClick={() => setSelectedId(s.id)} className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all duration-200 cursor-pointer active:scale-[0.99] ${isSelected ? "border-[#a3e635]/50 bg-[#a3e635]/10 shadow-[0_0_15px_rgba(163,230,53,0.1)]" : "border-zinc-800/80 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900"}`}>
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className={`text-sm font-semibold truncate transition-colors ${isSelected ? "text-[#a3e635]" : "text-zinc-200"}`}>{s.label}</p>
                              <p className="text-xs text-zinc-500 mt-0.5 truncate">{s.description}</p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border shrink-0 transition-all flex items-center justify-center ${isSelected ? "border-[#a3e635] bg-[#a3e635]" : "border-zinc-700 bg-zinc-900"}`}>
                              {isSelected && <svg viewBox="0 0 16 16" fill="none" className="w-full h-full p-0.5"><path d="M3 8l4 4 6-6" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div key="custom" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }}>
                    <textarea
                      placeholder="Ex: Quero limpeza e afinação de duas máquinas. Uma perdeu força e a outra está a aquecer..."
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      autoFocus
                      rows={5}
                      maxLength={1200}
                      aria-label="Descreve o teu pedido"
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/20 transition-all duration-200"
                    />
                    <div className="mt-1 flex items-center justify-between px-1">
                      <p className="text-[10px] font-mono text-zinc-600">Junta vários serviços, máquinas e problemas no mesmo pedido.</p>
                      <span className="text-[10px] font-mono text-zinc-700">{customService.length}/1200</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {mode === "preset" && selectedId && (
                  <motion.div initial={{ opacity: 0, height: 0, y: -4 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -4 }} transition={{ duration: 0.18 }} className="overflow-hidden">
                    <div className="mt-3 space-y-2">
                      <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        <Wrench className="w-3.5 h-3.5 shrink-0 text-[#a3e635]" />
                        Qual é o problema?
                        <span className="normal-case tracking-normal text-zinc-600">opcional</span>
                      </label>
                      <textarea
                        placeholder={selectedId === "preventiva" ? "Ex: Quero fazer a manutenção porque a máquina está com pouco desempenho..." : selectedId === "corretiva" ? "Ex: A máquina liga, mas perde força ao cortar e aquece bastante..." : "Ex: Quero perceber como funciona o plano e o que está incluído..."}
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        rows={4}
                        maxLength={800}
                        aria-label="Descreve o problema"
                        className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/20 transition-all duration-200"
                      />
                      <div className="flex items-center justify-between px-1">
                        <p className="text-[10px] font-mono text-zinc-600">Quanto mais específico, melhor conseguimos perceber o que precisas.</p>
                        <span className="text-[10px] font-mono text-zinc-700">{problem.length}/800</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-px w-full bg-zinc-800/80" />

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Pré-visualização da mensagem</p>
                {message && <span className="text-[10px] font-mono text-zinc-600">Revê antes de enviar</span>}
              </div>
              <div className="relative min-h-[96px] rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
                {message ? (
                  <>
                    <p className="text-xs font-mono text-zinc-300 leading-relaxed pr-8 whitespace-pre-line">{message}</p>
                    <button type="button" onClick={handleCopy} className="absolute top-3 right-3 p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer" title="Copiar mensagem">
                      {copied ? <Check className="w-3.5 h-3.5 text-[#a3e635]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </>
                ) : (
                  <p className="text-xs font-mono text-zinc-600 italic">A mensagem irá aparecer aqui à medida que preenches os dados...</p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              disabled={!isReady}
              className="group w-full flex items-center justify-center gap-2.5 h-13 rounded-xl bg-[#a3e635] text-zinc-950 font-bold text-sm hover:bg-[#b8f542] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:shadow-[0_0_25px_rgba(163,230,53,0.3)] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{mode === "custom" ? "Enviar pedido pelo WhatsApp" : "Enviar pedido pelo WhatsApp"}</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {!isReady && (
              <p className="text-center text-[11px] font-mono text-zinc-600">Preenche o teu nome e indica o serviço ou pedido que precisas</p>
            )}
            {isReady && (
              <p className="text-center text-[11px] text-zinc-600">Abrimos o WhatsApp com esta mensagem já preparada. Só tens de confirmar o envio.</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
