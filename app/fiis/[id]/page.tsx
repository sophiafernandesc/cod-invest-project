// app/fiis/[id]/page.tsx
// Rota dinâmica: [id] captura o número da URL.
// /fiis/1 → params.id = "1"
// /fiis/2 → params.id = "2"

import { fiis } from "@/data/fiis";
import Link from "next/link";
import { notFound } from "next/navigation";

// No Next 15+, params é uma Promise — por isso o async/await.
export default async function DetalhesFii({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Busca o FII pelo id da URL. Number() converte "1" (string) em 1 (número).
  const fii = fiis.find((f) => f.id === Number(id));

  // Se não achar (ex: /fiis/999), mostra a página 404 do Next.
  if (!fii) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Voltar */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[#020659] hover:text-[#D9B573]"
      >
        ← Voltar
      </Link>

      {/* Cabeçalho */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#020659]">{fii.ticker}</h1>
          <span className="rounded-full bg-[#1D3D59] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {fii.setor}
          </span>
        </div>
        <p className="mt-3 text-gray-600">{fii.descricao}</p>

        {/* Grid de indicadores */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Indicador label="Cotação" valor={fii.cotacao} />
          <Indicador label="Dividend Yield" valor={fii.dy} destaque />
          <Indicador label="P/VP" valor={fii.pvp} />
          <Indicador label="Último Rendimento" valor={fii.ultimoRendimento} destaque />
          <Indicador label="Patrimônio" valor={fii.patrimonio} />
          <Indicador label="Cotistas" valor={fii.cotistas.toLocaleString("pt-BR")} />
          <Indicador label="Gestora" valor={fii.gestora} />
        </div>
      </div>

      {/* Placeholder — Gráfico de DY */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#020659]">
          Histórico de Dividend Yield
        </h2>
        <div className="flex h-48 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
          Gráfico em breve
        </div>
      </section>

      {/* Placeholder — Proventos */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#020659]">
          Proventos Recentes
        </h2>
        <div className="flex h-32 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
          Proventos em breve
        </div>
      </section>
    </main>
  );
}

// Componente auxiliar — um "sub-componente" só usado aqui.
// Mostra um indicador (label + valor). O 'destaque' pinta de dourado.
function Indicador({
  label,
  valor,
  destaque = false,
}: {
  label: string;
  valor: string;
  destaque?: boolean;
}) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p
        className={`mt-1 text-lg font-bold ${
          destaque ? "text-[#D9B573]" : "text-[#020659]"
        }`}
      >
        {valor}
      </p>
    </div>
  );
}