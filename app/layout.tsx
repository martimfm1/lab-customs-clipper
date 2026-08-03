import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://lab-customs-clipper.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "LAB Customs Clipper | Manutenção de Máquinas de Barbear",
    template: "%s | LAB Customs Clipper",
  },

  description:
    "Especialistas em manutenção, reparação e prevenção de máquinas de corte profissionais. Recuperamos desempenho, aumentamos a vida útil da tua máquina e evitamos avarias.",

  applicationName: "LAB Customs Clipper",

  authors: [
    {
      name: "LAB Customs",
    },
  ],

  creator: "LAB Customs",

  publisher: "LAB Customs",

  category: "Business",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
    },
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  keywords: [
    "manutenção máquina de barbear",
    "manutenção clipper",
    "manutenção trimmer",
    "reparação clipper",
    "reparação máquina de cortar cabelo",
    "máquinas de barbeiro",
    "barber clipper repair",
    "clipper service",
    "manutenção preventiva",
    "limpeza de máquinas",
    "afinação de máquinas",
    "oficina de máquinas de corte",
    "máquinas profissionais",
    "Wahl",
    "JRL",
    "Gamma+",
    "BabylissPRO",
    "Andis",
    "StyleCraft",
    "Kiepe",
    "Portugal",
    "LAB Customs",
  ],

  openGraph: {
    type: "website",

    url: siteUrl,

    title: "LAB Customs Clipper",

    description:
      "Manutenção profissional de máquinas de corte. Diagnóstico técnico, reparação especializada e planos de manutenção preventiva.",

    locale: "pt_PT",

    siteName: "LAB Customs Clipper",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LAB Customs Clipper",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LAB Customs Clipper",

    description:
      "Especialistas em manutenção de máquinas de corte profissionais.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      }
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  // verification: {
  //   google: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${mono.variable} bg-[#050505]`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}