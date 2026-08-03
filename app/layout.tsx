import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAB Customs Clipper — Engenharia de Precisão",
  description:
    "Oficina especializada em manutenção, reparação e otimização de máquinas de barbear profissionais. Diagnóstico técnico, manutenção preventiva e planos de manutenção para profissionais.",
  keywords: [
    "manutenção máquinas barbear",
    "reparação clippers profissionais",
    "LAB Customs",
    "oficina barbeiro",
    "manutenção preventiva",
    "Portugal",
  ],
  openGraph: {
    title: "LAB Customs Clipper — Engenharia de Precisão",
    description:
      "Oficina especializada em manutenção, reparação e otimização de máquinas de barbear profissionais.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${geistSans.variable} ${geistMono.variable} bg-[#050505]`}>
      <body className="min-h-full flex flex-col text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
