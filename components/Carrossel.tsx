// components/Carrossel.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fiis } from "@/data/fiis";

const destaques = fiis.filter((fii) => fii.destaque);

export default function Carrossel() {
  const [atual, setAtual] = useState(0);

  if (destaques.length === 0) return null;

  const fii = destaques[atual];

  function anterior() {
    setAtual((i) => (i === 0 ? destaques.length - 1 : i - 1));
  }

  function proximo() {
    setAtual((i) => (i === destaques.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <h2 className="mb-4 text-xl font-bold text-[#020659]">FIIs em Destaque</h2>

      <div className="relative overflow-hidden rounded-xl">
        <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
          <Image
            src={fii.imagem}
            alt={fii.ticker}
            fill
            className="object-cover brightness-[0.55]"
            priority
          />
        </div>

        {/* Legenda */}
        <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-[#020659]/90 to-[#020659]/30 px-6 py-6 sm:px-9 sm:py-8">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-xl font-bold text-white sm:text-3xl">{fii.ticker}</h3>
            <span className="rounded-full bg-[#1D3D59] px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
              {fii.setor}
            </span>
          </div>
          <p className="mb-3 hidden max-w-xl text-sm text-white/85 sm:block">
            {fii.descricao}
          </p>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#D9B573] bg-[#D9B573]/20 px-3 py-1 text-xs font-bold text-[#D9B573]">
              DY {fii.dy}
            </span>
            <span className="rounded-full border border-[#D9B573] bg-[#D9B573]/20 px-3 py-1 text-xs font-bold text-[#D9B573]">
              P/VP {fii.pvp}
            </span>
            <span className="rounded-full border border-[#D9B573] bg-[#D9B573]/20 px-3 py-1 text-xs font-bold text-[#D9B573]">
              Cota {fii.cotacao}
            </span>
          </div>
          <Link
            href={`/fiis/${fii.id}`}
            className="inline-block rounded-md bg-[#D9B573] px-6 py-2 text-sm font-bold text-[#020659] transition hover:bg-[#B0944E] hover:text-white"
          >
            Ver Detalhes
          </Link>
        </div>

        {/* Setas */}
        {destaques.length > 1 && (
          <>
            <button
              type="button"
              onClick={anterior}
              aria-label="Slide anterior"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={proximo}
              aria-label="Próximo slide"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Indicadores */}
      {destaques.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {destaques.map((d, i) => (
            <button
              key={d.id}
              type="button"
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => setAtual(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === atual ? "bg-[#020659]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
