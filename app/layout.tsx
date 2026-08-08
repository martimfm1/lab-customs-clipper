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

const siteUrl = "https://labcustomsclipper.pt";
const siteName = "LAB Customs Clipper";
const siteDescription =
  "Manutenção, reparação, limpeza e afinação de máquinas de cortar cabelo e barba profissionais. Serviço especializado para barbeiros em Portugal.";
const ogImage = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Reparação e Manutenção de Clippers | LAB Customs",
    template: "%s | LAB Customs",
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
    "reparação de clippers",
    "manutenção de clippers",
    "manutenção de máquinas de cortar cabelo",
    "reparação de máquinas de cortar cabelo",
    "manutenção de máquinas de barbear",
    "reparação de máquinas de barbear",
    "limpeza de máquinas de corte",
    "afinação de máquinas de corte",
    "manutenção preventiva de máquinas",
    "clipper repair Portugal",
    "barber equipment repair",
    "LAB Customs Clipper",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "pt_PT",
    title: "Reparação e Manutenção de Clippers | LAB Customs",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "LAB Customs Clipper — reparação e manutenção profissional de máquinas de corte",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reparação e Manutenção de Clippers | LAB Customs",
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
      areaServed: {
        "@type": "Country",
        name: "Portugal",
      },
      sameAs: ["https://www.instagram.com/labcustomsclipper/"],
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
