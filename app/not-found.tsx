import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
      <div className="text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-black mb-3">Página não encontrada</h1>
        <p className="text-white/60 mb-6">Desculpe — a página que procura não existe ou foi movida.</p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#a3e635] text-[#050505] font-semibold hover:bg-[#bef264] transition-colors"
          >
            Voltar ao Início
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/[0.06] text-white/90 hover:border-white/20 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
