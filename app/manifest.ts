import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: "LAB Customs Clipper",

    short_name: "LAB Clipper",

    description:
      "Especialistas em manutenção, reparação e prevenção de máquinas de corte profissionais.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#050505",

    theme_color: "#050505",

    lang: "pt-PT",

    categories: ["business", "utilities", "productivity"],

    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/x-icon",
      },
    ],
  };
}
