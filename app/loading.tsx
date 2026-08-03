export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
      <div role="status" aria-live="polite" className="flex flex-col items-center gap-4">
        <svg
          className="w-12 h-12 text-[#a3e635] animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.12" strokeWidth="4" />
          <path d="M22 12a10 10 0 0 0-10-10" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <div className="text-lg font-medium">A carregar…</div>
        <div className="text-sm text-white/50">Aguarde um momento por favor</div>
      </div>
    </div>
  );
}
