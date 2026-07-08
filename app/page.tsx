// app/page.tsx
// Esta é a página inicial (rota "/"). No App Router do Next.js,
// cada arquivo page.tsx dentro de app/ vira uma rota.

import Carrossel from "@/components/Carrossel";
import FiiCard from "@/components/FiiCard";
import Link from "next/link";
import SecaoIndicadores from "@/components/SecaoIndicadores";
import SecaoNoticias from "@/components/SecaoNoticias";
import { fiis } from "@/data/fiis";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ setor?: string }>;
}) {
  const { setor } = await searchParams;
  const lista = setor ? fiis.filter((fii) => fii.setor === setor) : fiis;

  return (
    <>
      <SecaoIndicadores />
      <Carrossel />
      <main className="mx-auto max-w-6xl px-4 pb-10 pt-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-[#020659]">
            {setor ? `FIIs — ${setor}` : "Todos os FIIs"}
          </h2>
          {setor && (
            <Link
              href="/"
              className="text-sm font-medium text-[#020659] hover:text-[#D9B573]"
            >
              Ver todos os FIIs
            </Link>
          )}
        </div>

        {lista.length === 0 ? (
          <p className="py-10 text-center text-gray-400">Nenhum FII encontrado.</p>
        ) : (
          // Grid responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lista.map((fii) => (
              <FiiCard key={fii.id} fii={fii} />
            ))}
          </div>
        )}
      </main>
      <SecaoNoticias />
    </>
  );
}
