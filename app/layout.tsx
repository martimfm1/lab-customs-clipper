import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { googleRating, googleReviewCount } from "@/lib/google-rating";

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

const siteUrl = "https://labcustomsclipper.pt";
const siteName = "LAB Customs Clipper";
const siteDescription =
  "Reparação e manutenção de clippers, trimmers e shavers profissionais em Portugal. Manutenção preventiva desde 8€, reparação de avarias e envio para a oficina.";
const ogImage = "/opengraph-image";
const mapsUrl = "https://maps.app.goo.gl/qz1c46oZSvkWxLCd8";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Reparação e Manutenção de Clippers | LAB Customs Clipper",
    template: "%s | LAB Customs Clipper",
  },

  description: siteDescription,

  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
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
    "reparação de máquinas de cortar cabelo",
    "manutenção de máquinas de cortar cabelo",
    "reparação de clippers",
    "manutenção de clippers",
    "reparação de trimmers",
    "manutenção de trimmers",
    "reparação de shavers",
    "manutenção de máquinas de barbear",
    "assistência técnica de máquinas de corte",
    "manutenção preventiva de máquinas de corte",
    "reparação de máquinas Wahl",
    "reparação StyleCraft",
    "reparação Gamma Più",
    "reparação JRL",
    "máquinas de barbear profissionais",
    "equipamento profissional de barbearia",
    "reparação de máquinas de barbear em Portugal",
    "manutenção de clippers em Portugal",
    "clipper repair Portugal",
    "barber equipment repair Portugal",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "pt_PT",
    title: "Reparação e Manutenção de Clippers | LAB Customs Clipper",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "LAB Customs Clipper — reparação e manutenção de máquinas profissionais de barbearia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reparação e Manutenção de Clippers | LAB Customs Clipper",
    description: siteDescription,
    images: [ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      image: `${siteUrl}${ogImage}`,
      logo: `${siteUrl}/favicon.ico`,
      telephone: "+351926463182",
      priceRange: "€",
      currenciesAccepted: "EUR",
      areaServed: {
        "@type": "Country",
        name: "Portugal",
      },
      hasMap: mapsUrl,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: googleRating,
        reviewCount: googleReviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      sameAs: [
        "https://www.instagram.com/labcustomsclipper/",
        "https://www.youtube.com/@iameduardovictor",
      ],
      knowsAbout: [
        "reparação de máquinas de cortar cabelo",
        "manutenção de clippers",
        "manutenção preventiva",
        "reparação de trimmers",
        "reparação de shavers",
        "equipamento profissional de barbearia",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manutenção Preventiva de Máquinas de Corte",
            description:
              "Limpeza técnica, lubrificação, afinação, alinhamento e testes de funcionamento.",
          },
          price: "8",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manutenção Corretiva de Clippers, Trimmers e Shavers",
            description:
              "Diagnóstico técnico e reparação de avarias em equipamento profissional.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Envio de Equipamento para Manutenção",
            description:
              "Receção, intervenção e devolução de equipamento enviado para a oficina.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plano de Prevenção",
            description: "Manutenção preventiva regular para até 3 máquinas.",
          },
          price: "20",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "20",
            priceCurrency: "EUR",
            unitText: "mês",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "pt-PT",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
