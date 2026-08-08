import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "LAB Customs Clipper — Engenharia de Precisão para Máquinas Profissionais";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
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
          <pattern
            id="hex"
            width="90"
            height="104"
            patternUnits="userSpaceOnUse"
          >
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
            Manutenção preventiva · Reparação · Afinação · Equipamento de
            barbearia
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
            background:
              "linear-gradient(90deg, transparent, rgba(163,230,53,0.18), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 1,
            height: 370,
            background:
              "linear-gradient(180deg, transparent, rgba(163,230,53,0.18), transparent)",
          }}
        />

        {/* Minimal precision clipper mark */}
        <svg
          width="210"
          height="300"
          viewBox="0 0 210 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative" }}
        >
          <defs>
            {/* Main body */}
            <linearGradient id="clipperBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="18%" stopColor="#18181b" />
              <stop offset="65%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#030303" />
            </linearGradient>

            {/* Front panel */}
            <linearGradient id="frontPanel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>

            {/* Metallic */}
            <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="25%" stopColor="#71717a" />
              <stop offset="55%" stopColor="#27272a" />
              <stop offset="80%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#3f3f46" />
            </linearGradient>

            {/* Blade */}
            <linearGradient id="blade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e4e4e7" />
              <stop offset="35%" stopColor="#71717a" />
              <stop offset="65%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>

            {/* Power button */}
            <radialGradient id="powerButton">
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="70%" stopColor="#111113" />
              <stop offset="100%" stopColor="#050505" />
            </radialGradient>

            {/* Green glow */}
            <filter
              id="greenGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft shadow */}
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="7"
                floodColor="#000000"
                floodOpacity="0.55"
              />
            </filter>
          </defs>

          {/* ========================================================= */}
          {/* CLIPPER SHADOW */}
          {/* ========================================================= */}

          <ellipse
            cx="105"
            cy="291"
            rx="55"
            ry="5"
            fill="#000"
            opacity="0.45"
          />

          {/* ========================================================= */}
          {/* MAIN BODY */}
          {/* ========================================================= */}

          <path
            d="
      M70 48
      Q58 58 55 78
      L55 226
      Q55 246 68 258
      L78 268
      H132
      L142 258
      Q155 246 155 226
      L155 78
      Q152 58 140 48
      Z
    "
            fill="url(#clipperBody)"
            stroke="#52525b"
            strokeWidth="1.5"
            filter="url(#shadow)"
          />

          {/* Left metallic edge */}
          <path
            d="
      M70 53
      Q61 65 60 82
      L60 224
      Q60 242 70 253
    "
            fill="none"
            stroke="#71717a"
            strokeOpacity="0.35"
            strokeWidth="2"
          />

          {/* Right metallic edge */}
          <path
            d="
      M140 53
      Q149 65 150 82
      L150 224
      Q150 242 140 253
    "
            fill="none"
            stroke="#000"
            strokeOpacity="0.7"
            strokeWidth="3"
          />

          {/* ========================================================= */}
          {/* TOP BLADE ASSEMBLY */}
          {/* ========================================================= */}

          {/* Blade base */}
          <path
            d="
      M63 49
      L68 31
      H142
      L147 49
      Z
    "
            fill="url(#blade)"
            stroke="#71717a"
            strokeWidth="1.2"
          />

          {/* Blade top */}
          <path
            d="
      M67 32
      H143
      L139 21
      H71
      Z
    "
            fill="#18181b"
            stroke="#71717a"
            strokeWidth="1"
          />

          {/* Green blade accent */}
          <path
            d="M68 47 H142"
            stroke="#a3e635"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            filter="url(#greenGlow)"
          />

          {/* Blade teeth */}
          <g fill="url(#metal)" stroke="#18181b" strokeWidth="0.5">
            <path d="M72 21 V7 H76 V21 Z" />
            <path d="M78 21 V5 H82 V21 Z" />
            <path d="M84 21 V7 H88 V21 Z" />
            <path d="M90 21 V5 H94 V21 Z" />
            <path d="M96 21 V7 H100 V21 Z" />
            <path d="M102 21 V5 H106 V21 Z" />
            <path d="M108 21 V7 H112 V21 Z" />
            <path d="M114 21 V5 H118 V21 Z" />
            <path d="M120 21 V7 H124 V21 Z" />
            <path d="M126 21 V5 H130 V21 Z" />
            <path d="M132 21 V7 H136 V21 Z" />
          </g>

          {/* Blade horizontal metal line */}
          <path
            d="M69 25 H141"
            stroke="#d4d4d8"
            strokeOpacity="0.35"
            strokeWidth="1"
          />

          {/* ========================================================= */}
          {/* SIDE LEVER */}
          {/* ========================================================= */}

          {/* Lever housing */}
          <circle
            cx="57"
            cy="91"
            r="7"
            fill="#18181b"
            stroke="#52525b"
            strokeWidth="1.5"
          />

          {/* Lever */}
          <path
            d="
      M55 91
      Q48 96 48 109
      L49 132
      Q49 137 53 137
      Q57 137 58 132
      L57 108
      Q58 101 61 98
      Z
    "
            fill="url(#metal)"
            stroke="#27272a"
            strokeWidth="1"
          />

          {/* Lever highlight */}
          <path
            d="M52 104 L53 129"
            stroke="#fff"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* ========================================================= */}
          {/* FRONT PANEL */}
          {/* ========================================================= */}

          <path
            d="
      M77 67
      Q70 70 70 82
      L70 176
      Q70 188 77 193
      L133 193
      Q140 188 140 176
      L140 82
      Q140 70 133 67
      Z
    "
            fill="url(#frontPanel)"
            stroke="#3f3f46"
            strokeWidth="1.5"
          />

          {/* Panel outer highlight */}
          <path
            d="
      M78 70
      Q73 74 73 83
      L73 174
      Q73 184 79 189
    "
            fill="none"
            stroke="#71717a"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          {/* ========================================================= */}
          {/* POWER BUTTON */}
          {/* ========================================================= */}

          {/* Green outer glow */}
          <circle
            cx="105"
            cy="118"
            r="29"
            fill="#a3e635"
            opacity="0.08"
            filter="url(#greenGlow)"
          />

          {/* Button ring */}
          <circle
            cx="105"
            cy="118"
            r="24"
            fill="none"
            stroke="#a3e635"
            strokeOpacity="0.75"
            strokeWidth="2"
            filter="url(#greenGlow)"
          />

          {/* Button outer */}
          <circle
            cx="105"
            cy="118"
            r="20"
            fill="url(#powerButton)"
            stroke="#52525b"
            strokeWidth="1"
          />

          {/* Button inner */}
          <circle
            cx="105"
            cy="118"
            r="16"
            fill="#0a0a0a"
            stroke="#27272a"
            strokeWidth="1"
          />

          {/* Power icon */}
          <path
            d="M105 108 V119"
            stroke="#a3e635"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#greenGlow)"
          />

          <path
            d="
      M99 111
      A8 8 0 1 0 111 111
    "
            fill="none"
            stroke="#a3e635"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#greenGlow)"
          />

          {/* ========================================================= */}
          {/* INDICATORS */}
          {/* ========================================================= */}

          <rect
            x="78"
            y="164"
            width="54"
            height="3"
            rx="1.5"
            fill="#a3e635"
            opacity="0.85"
            filter="url(#greenGlow)"
          />

          <rect
            x="87"
            y="174"
            width="36"
            height="2.5"
            rx="1.25"
            fill="#71717a"
            opacity="0.8"
          />

          {/* ========================================================= */}
          {/* LOWER BODY DETAIL */}
          {/* ========================================================= */}

          <path d="M70 204 H140" stroke="#27272a" strokeWidth="1" />

          <path
            d="M76 207 H134"
            stroke="#a3e635"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* Angular lower panel */}
          <path
            d="
      M68 216
      L78 245
      H132
      L142 216
      L132 225
      H78
      Z
    "
            fill="#111113"
            stroke="#3f3f46"
            strokeWidth="1"
          />

          {/* ========================================================= */}
          {/* SCREWS */}
          {/* ========================================================= */}

          <g>
            <circle
              cx="78"
              cy="238"
              r="5"
              fill="#18181b"
              stroke="#71717a"
              strokeWidth="1"
            />
            <path
              d="M75.5 238 H80.5 M78 235.5 V240.5"
              stroke="#a1a1aa"
              strokeWidth="1"
            />
          </g>

          <g>
            <circle
              cx="132"
              cy="238"
              r="5"
              fill="#18181b"
              stroke="#71717a"
              strokeWidth="1"
            />
            <path
              d="M129.5 238 H134.5 M132 235.5 V240.5"
              stroke="#a1a1aa"
              strokeWidth="1"
            />
          </g>

          {/* ========================================================= */}
          {/* BOTTOM */}
          {/* ========================================================= */}

          <path
            d="
      M79 248
      H131
      L138 265
      Q139 269 134 269
      H76
      Q71 269 72 265
      Z
    "
            fill="#18181b"
            stroke="#52525b"
            strokeWidth="1.5"
          />

          {/* Bottom metallic edge */}
          <path
            d="M78 264 H132"
            stroke="#a1a1aa"
            strokeOpacity="0.25"
            strokeWidth="2"
          />

          {/* Hanging loop */}
          <path
            d="
      M86 269
      V280
      Q86 287 93 287
      H117
      Q124 287 124 280
      V269
    "
            fill="#111113"
            stroke="url(#metal)"
            strokeWidth="3"
          />

          {/* Loop inner */}
          <path
            d="
      M93 273
      V279
      Q93 282 96 282
      H114
      Q117 282 117 279
      V273
    "
            fill="none"
            stroke="#050505"
            strokeWidth="3"
          />
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
    </div>,
    {
      ...size,
    },
  );
}
