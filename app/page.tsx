// app/page.tsx
// Esta é a página inicial (rota "/"). No App Router do Next.js,
// cada arquivo page.tsx dentro de app/ vira uma rota.

import FiiCard from "@/components/FiiCard";
import { fiis } from "@/data/fiis";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-center text-3xl font-bold text-[#020659]">
        <span className="text-[#D9B573]">Cod</span> Invest
      </h1>
      <p className="mb-8 text-center text-gray-500">
        Consulta de Fundos Imobiliários
      </p>

      <h2 className="mb-4 text-xl font-bold text-[#020659]">Todos os FIIs</h2>

      {/* Grid responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fiis.map((fii) => (
          <FiiCard key={fii.id} fii={fii} />
        ))}
      </div>
    </main>
  );
}