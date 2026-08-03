import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://lab-customs-clipper.vercel.app/marcacao'),

  title: {
    default: "LAB Customs Clipper | Marcação de Serviços",
    template: "%s | LAB Customs Clipper",
  },
};

export default function MarcacaoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}