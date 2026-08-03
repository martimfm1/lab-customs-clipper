"use client";

import { motion } from "framer-motion";

const BLADE_COUNT = 8;
const RADIUS = 34;

export default function Loading() {
  return (
    <main
      className="min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden"
      aria-label="A carregar"
      role="status"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(163,230,53,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-10">

        {/* ── Gear / Spinner ── */}
        <div className="relative w-32 h-32 flex items-center justify-center" aria-hidden="true">

          {/* Outer rotating ring */}
          <motion.svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="rgba(163,230,53,0.12)"
              strokeWidth="1"
            />
            {/* tick marks */}
            {Array.from({ length: 36 }).map((_, i) => {
              const angle = (i * 10 * Math.PI) / 180;
              const isMajor = i % 3 === 0;
              const inner = isMajor ? 48 : 50;
              const outer = 54;
              return (
                <line
                  key={i}
                  x1={60 + inner * Math.cos(angle)}
                  y1={60 + inner * Math.sin(angle)}
                  x2={60 + outer * Math.cos(angle)}
                  y2={60 + outer * Math.sin(angle)}
                  stroke={isMajor ? "rgba(163,230,53,0.5)" : "rgba(163,230,53,0.2)"}
                  strokeWidth={isMajor ? 1.5 : 0.8}
                />
              );
            })}
          </motion.svg>

          {/* Counter-rotating dashed arc */}
          <motion.svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="60" cy="60" r="42"
              fill="none"
              stroke="rgba(163,230,53,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          </motion.svg>

          {/* Spinning blade spokes */}
          <motion.svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: BLADE_COUNT }).map((_, i) => {
              const angle = (i * 360) / BLADE_COUNT;
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={60 + 16 * Math.cos(rad)}
                  y1={60 + 16 * Math.sin(rad)}
                  x2={60 + RADIUS * Math.cos(rad)}
                  y2={60 + RADIUS * Math.sin(rad)}
                  stroke="#a3e635"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity={0.25 + 0.75 * (i / BLADE_COUNT)}
                />
              );
            })}
          </motion.svg>

          {/* Centre dot */}
          <motion.div
            className="relative z-10 w-8 h-8 rounded-full bg-[rgba(163,230,53,0.12)] border border-[rgba(163,230,53,0.4)] flex items-center justify-center"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
          </motion.div>
        </div>

        {/* ── Brand wordmark ── */}
        <div className="flex flex-col items-center gap-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#a3e635] mb-1"
          >
            LAB Customs
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-sm text-[#71717a] tracking-wide"
          >
            A inicializar sistema
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.p>
        </div>

        {/* ── Progress bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-48 h-px bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            className="h-full bg-[#a3e635] rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </main>
  );
}
