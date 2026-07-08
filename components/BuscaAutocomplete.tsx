// components/BuscaAutocomplete.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { fiis } from "@/data/fiis";

interface BuscaAutocompleteProps {
  className?: string;
  aoNavegar?: () => void;
  variante?: "navbar" | "hero";
  comBotao?: boolean;
}

export default function BuscaAutocomplete({
  className = "",
  aoNavegar,
  variante = "navbar",
  comBotao = false,
}: BuscaAutocompleteProps) {
  const router = useRouter();
  const [termo, setTermo] = useState("");
  const [aberto, setAberto] = useState(false);

  const termoUpper = termo.trim().toUpperCase();
  const sugestoes =
    termoUpper.length < 2
      ? []
      : fiis
          .filter(
            (f) =>
              f.ticker.includes(termoUpper) ||
              f.setor.toUpperCase().includes(termoUpper) ||
              f.gestora.toUpperCase().includes(termoUpper)
          )
          .slice(0, 6);

  function irParaDetalhes(id: number) {
    setTermo("");
    setAberto(false);
    aoNavegar?.();
    router.push(`/fiis/${id}`);
  }

  function buscar() {
    const valor = termo.trim();
    if (!valor) return;
    setAberto(false);
    const match = fiis.find((f) => f.ticker === valor.toUpperCase());
    aoNavegar?.();
    if (match) {
      router.push(`/fiis/${match.id}`);
    } else {
      router.push(`/?q=${encodeURIComponent(valor)}`);
    }
  }

  const estiloInput =
    variante === "hero"
      ? "w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-[#020659] placeholder-gray-400 outline-none focus:border-[#D9B573] dark:border-white/10 dark:bg-[#1D3D59] dark:text-white dark:placeholder-white/40"
      : "w-full rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder-white/60 outline-none focus:border-[#D9B573]";

  return (
    <div className={`flex items-stretch gap-2 ${className}`}>
      <div className="relative flex-1">
        <input
          type="text"
          value={termo}
          placeholder="Buscar ticker, setor, gestora..."
          autoComplete="off"
          className={estiloInput}
          onChange={(e) => {
            setTermo(e.target.value);
            setAberto(true);
          }}
          onFocus={() => setAberto(true)}
          onBlur={() => setTimeout(() => setAberto(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setAberto(false);
            if (e.key === "Enter") buscar();
          }}
        />

        {aberto && sugestoes.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-50 mt-1 max-h-72 overflow-y-auto rounded-b-lg border-t-2 border-[#B0944E] bg-[#1D3D59] py-1.5 shadow-lg">
            {sugestoes.map((f) => (
              <li
                key={f.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  irParaDetalhes(f.id);
                }}
                className="flex cursor-pointer items-center justify-between gap-3 px-4 py-2 text-sm text-white transition hover:bg-[#020659] hover:text-[#D9B573]"
              >
                <strong className="font-bold tracking-wide">{f.ticker}</strong>
                <span className="whitespace-nowrap text-xs text-[#D9B573]/80">
                  {f.setor}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {comBotao && (
        <button
          type="button"
          onClick={buscar}
          aria-label="Buscar"
          className="flex shrink-0 items-center justify-center rounded-md bg-[#D9B573] px-4 text-[#020659] transition hover:bg-[#B0944E] hover:text-white"
        >
          <IconeBusca />
        </button>
      )}
    </div>
  );
}

function IconeBusca() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
