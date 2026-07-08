// app/fiis/[id]/page.tsx
import Image from "next/image";
import { fiis } from "@/data/fiis";
import { proventos } from "@/data/proventos";
import Link from "next/link";
import { notFound } from "next/navigation";
import AvatarSetor from "@/components/AvatarSetor";
import FiiCard from "@/components/FiiCard";
import GraficoDY from "@/components/GraficoDY";

export default async function DetalhesFii({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fii = fiis.find((f) => f.id === Number(id));

  if (!fii) {
    notFound();
  }

  // Fundos de papel/fiagro não têm vacância (imóveis físicos) —
  // mesma regra usada na versão vanilla (vacanciaFisica === "—").
  const temVacancia = fii.vacanciaFisica !== "—";

  const relacionados = fiis.filter((f) => f.setor === fii.setor && f.id !== fii.id);
  const proventosFii = proventos.filter((p) => p.fiiId === fii.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Voltar */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[#020659] hover:text-[#D9B573] dark:text-[#D9B573]"
      >
        ← Voltar
      </Link>

      {/* Cabeçalho */}
      <div className="rounded-xl border-t-4 border-[#D9B573] bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] dark:bg-[#1D3D59] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)]">
        <AvatarSetor setor={fii.setor} ticker={fii.ticker} tamanho="grande" />

        <div className="mt-4 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#020659] dark:text-[#D9B573]">
            {fii.ticker}
          </h1>
          <span className="rounded-full bg-[#1D3D59] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-[#020659]">
            {fii.setor}
          </span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-white/70">{fii.descricao}</p>

        {/* Grid de indicadores principais */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Indicador label="Cotação" valor={fii.cotacao} />
          <Indicador label="Dividend Yield" valor={fii.dy} destaque />
          <Indicador label="P/VP" valor={fii.pvp} />
          <Indicador label="Último Rendimento" valor={fii.ultimoRendimento} destaque />
          <Indicador label="Patrimônio Líquido" valor={fii.patrimonio} />
          <Indicador label="Nº de Cotistas" valor={fii.cotistas.toLocaleString("pt-BR")} />
        </div>

        {/* Vacância — só exibe se o fundo tiver imóveis físicos */}
        {temVacancia && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <Indicador label="Vacância Física" valor={fii.vacanciaFisica} alerta />
            <Indicador label="Vacância Financeira" valor={fii.vacanciaFinanceira} alerta />
          </div>
        )}
      </div>

      {/* Linha 2: Sobre o fundo + Gráfico */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sobre o Fundo */}
        <section className="rounded-xl border-t-4 border-[#D9B573] bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] dark:bg-[#1D3D59] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)] lg:col-span-1">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#020659] dark:text-[#D9B573]">
            Sobre o Fundo
          </h2>
          <dl className="flex flex-col gap-3 text-sm">
            <InfoLinha label="Gestora" valor={fii.gestora} />
            <InfoLinha label="Início do Fundo" valor={fii.dataInicio} />
            <InfoLinha label="Taxa de Adm." valor={fii.taxaAdm} />
            <InfoLinha label="Ativos / Imóveis" valor={fii.imoveis} />
          </dl>
        </section>

        {/* Gráfico de DY */}
        <section className="rounded-xl border-t-4 border-[#D9B573] bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] dark:bg-[#1D3D59] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)] lg:col-span-2">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#020659] dark:text-[#D9B573]">
            Histórico de Dividend Yield (12 meses)
          </h2>
          <GraficoDY dados={fii.dyHistorico} />
        </section>
      </div>

      {/* FIIs relacionados */}
      {relacionados.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 inline-block border-b-2 border-[#D9B573] pb-2 text-lg font-bold text-[#020659] dark:text-[#D9B573]">
            FIIs do mesmo setor
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relacionados.map((r) => (
              <FiiCard key={r.id} fii={r} />
            ))}
          </div>
        </section>
      )}

      {/* Proventos recentes — só existe para os 6 FIIs do seed original */}
      {proventosFii.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 inline-block border-b-2 border-[#D9B573] pb-2 text-lg font-bold text-[#020659] dark:text-[#D9B573]">
            Proventos Recentes
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {proventosFii.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-lg border-b-[3px] border-[#D9B573] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.07)] dark:bg-[#0c1e2e] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
              >
                <div className="relative h-32 w-full">
                  <Image src={p.imagem} alt={p.titulo} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-[#020659] dark:text-white">
                    {p.titulo}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-white/40">
                    {p.mes}
                  </p>
                  <p className="mt-1.5 text-lg font-bold text-[#1a7f4b] dark:text-[#3ecb84]">
                    {p.valor} / cota
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Indicador({
  label,
  valor,
  destaque = false,
  alerta = false,
}: {
  label: string;
  valor: string;
  destaque?: boolean;
  alerta?: boolean;
}) {
  const corValor = alerta
    ? "text-red-600 dark:text-red-400"
    : destaque
    ? "text-[#D9B573]"
    : "text-[#020659] dark:text-white";

  return (
    <div className="rounded-lg bg-gray-50 p-4 dark:bg-[#0c1e2e]">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
        {label}
      </p>
      <p className={`mt-1 text-lg font-bold ${corValor}`}>{valor}</p>
    </div>
  );
}

function InfoLinha({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0 dark:border-white/10">
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-white/40">
        {label}
      </dt>
      <dd className="text-sm font-bold text-[#020659] dark:text-[#D9B573]">{valor}</dd>
    </div>
  );
}
