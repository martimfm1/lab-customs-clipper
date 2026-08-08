import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LAB Customs Clipper — Engenharia de Precisão para Máquinas Profissionais";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Blueprint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(163,230,53,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.035) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Hexagonal technical pattern */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0, opacity: 0.5 }}
        >
          <defs>
            <pattern id="hex" width="90" height="104" patternUnits="userSpaceOnUse">
              <polygon
                points="45,2 87,26 87,78 45,102 3,78 3,26"
                fill="none"
                stroke="#a3e635"
                strokeOpacity="0.035"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="1200" height="630" fill="url(#hex)" />
        </svg>

        {/* Atmospheric glow */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            right: -170,
            top: -30,
            borderRadius: "50%",
            background: "rgba(163,230,53,0.08)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            left: -120,
            bottom: -140,
            borderRadius: "50%",
            background: "rgba(163,230,53,0.045)",
            filter: "blur(80px)",
          }}
        />

        {/* Technical frame */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 22,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 28,
            width: 110,
            height: 3,
            background: "#a3e635",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 28,
            bottom: 28,
            width: 110,
            height: 3,
            background: "rgba(163,230,53,0.35)",
          }}
        />

        {/* Left content */}
        <div
          style={{
            position: "absolute",
            left: 78,
            top: 74,
            width: 650,
            height: 500,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#a3e635",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#a3e635",
                boxShadow: "0 0 16px rgba(163,230,53,0.8)",
              }}
            />
            LAB // CUSTOMS CLIPPER
          </div>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.9,
            }}
          >
            <div
              style={{
                fontSize: 86,
                fontWeight: 900,
                letterSpacing: "-0.055em",
              }}
            >
              OFICINA
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 54,
                fontWeight: 300,
                letterSpacing: "-0.035em",
                color: "#a1a1aa",
              }}
            >
              para artistas.
            </div>
          </div>

          <div
            style={{
              marginTop: 38,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#e4e4e7",
              }}
            >
              Engenharia de precisão para máquinas profissionais.
            </div>
            <div
              style={{
                fontSize: 17,
                lineHeight: 1.45,
                color: "#71717a",
                maxWidth: 570,
              }}
            >
              Manutenção preventiva · Reparação · Afinação · Equipamento de barbearia
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontFamily: "monospace",
              fontSize: 12,
              color: "#52525b",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: "#a3e635" }}>●</span>
            <span>PRECISÃO // 0.01MM</span>
            <span>·</span>
            <span>EST. 2026 // PORTUGAL</span>
          </div>
        </div>

        {/* Right technical illustration */}
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 105,
            width: 380,
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 330,
              height: 330,
              borderRadius: "50%",
              border: "1px dashed rgba(255,255,255,0.13)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 255,
              height: 255,
              borderRadius: "50%",
              border: "1px solid rgba(163,230,53,0.18)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(163,230,53,0.055)",
              boxShadow: "0 0 90px rgba(163,230,53,0.12)",
            }}
          />

          {/* Crosshair */}
          <div
            style={{
              position: "absolute",
              width: 370,
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(163,230,53,0.18), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 1,
              height: 370,
              background: "linear-gradient(180deg, transparent, rgba(163,230,53,0.18), transparent)",
            }}
          />

          {/* Minimal precision clipper mark */}
          <svg width="210" height="300" viewBox="0 0 210 300" style={{ position: "relative" }}>
            <defs>
              <linearGradient id="clipper" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#27272a" />
                <stop offset="70%" stopColor="#111113" />
                <stop offset="100%" stopColor="#050505" />
              </linearGradient>
            </defs>
            <rect x="54" y="30" width="102" height="220" rx="42" fill="url(#clipper)" stroke="#3f3f46" strokeWidth="2" />
            <rect x="68" y="53" width="74" height="104" rx="28" fill="#0a0a0a" stroke="#52525b" strokeWidth="1.5" />
            <circle cx="105" cy="112" r="23" fill="#111111" stroke="#a3e635" strokeOpacity="0.55" strokeWidth="2" />
            <circle cx="105" cy="112" r="6" fill="#a3e635" />
            <path d="M72 202 H138" stroke="#a3e635" strokeOpacity="0.6" strokeWidth="3" />
            <path d="M78 213 H132" stroke="#52525b" strokeWidth="3" />
            <path d="M72 250 L82 282 H128 L138 250" fill="#18181b" stroke="#52525b" strokeWidth="2" />
            <path d="M77 33 L87 8 H123 L133 33" fill="#27272a" stroke="#52525b" strokeWidth="2" />
            <path d="M82 14 H128" stroke="#a3e635" strokeOpacity="0.45" strokeWidth="2" />
          </svg>

          <div
            style={{
              position: "absolute",
              right: -4,
              bottom: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontFamily: "monospace",
              fontSize: 11,
              lineHeight: 1.7,
              color: "#52525b",
            }}
          >
            <span style={{ color: "#a3e635" }}>SYSTEM // ONLINE</span>
            <span>CALIBRATION: 0.01mm</span>
            <span>MOTOR / BLADES / POWER</span>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            right: 62,
            top: 48,
            fontFamily: "monospace",
            fontSize: 13,
            color: "#52525b",
            letterSpacing: "0.08em",
          }}
        >
          LABCUSTOMSCLIPPER.PT
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
