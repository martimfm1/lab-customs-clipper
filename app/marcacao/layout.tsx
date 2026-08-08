import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcar Serviço de Manutenção de Clippers",
  description:
    "Solicita a marcação de manutenção ou reparação da tua máquina de corte profissional. Escolhe o serviço e contacta a LAB Customs Clipper pelo WhatsApp.",
  alternates: {
    canonical: "/marcacao",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MarcacaoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
