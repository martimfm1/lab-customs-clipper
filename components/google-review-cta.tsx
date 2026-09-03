import { ExternalLink, Star } from "lucide-react";

const googleReviewUrl =
  "https://www.google.com/maps/place/LAB+CUSTOMS+CLIPPER+%F0%9F%92%88/@40.8999647,-8.4962637,17z/data=!3m1!4b1!4m6!3m5!1s0xd2381406921df33:0x804cad88a23f6f24!8m2!3d40.8999647!4d-8.4962637!16s%2Fg%2F11wggfh50p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";

export default function GoogleReviewCta() {
  return (
    <a
      href={googleReviewUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-4 text-left transition hover:border-[#a3e635]/30 hover:bg-zinc-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635] sm:w-auto sm:min-w-[19rem]"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-[#a3e635]">
          <Star className="h-5 w-5 fill-current" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-white">
            Avaliar no Google
          </span>
          <span className="mt-0.5 block text-xs text-zinc-500">
            Leva menos de 10s
          </span>
        </span>
      </span>
      <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-[#a3e635]" />
    </a>
  );
}
