import type { NextConfig } from "next";

type ExtendedNextConfig = NextConfig & { allowedDevOrigins?: string[] };

const nextConfig: ExtendedNextConfig = {
  allowedDevOrigins: ["192.168.56.1", "localhost:3000", "192.168.1.6"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
