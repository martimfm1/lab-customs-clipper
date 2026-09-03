"use client";

import dynamic from "next/dynamic";

const GoogleReviewsWidget = dynamic(() => import("google-reviews-widget"), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-56 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6"
      aria-label="A carregar avaliações do Google"
    >
      <div className="h-4 w-32 animate-pulse rounded bg-zinc-800" />
      <div className="mt-6 h-24 animate-pulse rounded-xl bg-zinc-800/70" />
    </div>
  ),
});

const widgetInstanceId = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_WIDGET_ID;

const googleMapsUrl =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33a:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu";

export default function GoogleReviewsWidgetSection() {
  if (!widgetInstanceId) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/35 p-6 text-center">
        <p className="text-sm font-semibold text-white">
          O widget de avaliações do Google ainda não foi configurado.
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Define <code className="text-zinc-300">NEXT_PUBLIC_GOOGLE_REVIEWS_WIDGET_ID</code> com o
          Instance ID criado no Google Reviews Widget.
        </p>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-[#a3e635]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635]"
        >
          Ver avaliações no Google
        </a>
      </div>
    );
  }

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl">
      <GoogleReviewsWidget instanceId={widgetInstanceId} />
    </div>
  );
}
