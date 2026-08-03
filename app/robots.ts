import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://lab-customs-clipper.vercel.app/sitemap.xml",

    host: "https://lab-customs-clipper.vercel.app",
  };
}