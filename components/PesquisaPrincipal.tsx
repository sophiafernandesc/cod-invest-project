// components/PesquisaPrincipal.tsx
"use client";

import BuscaAutocomplete from "@/components/BuscaAutocomplete";

export default function PesquisaPrincipal() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-10">
      {/* Título oculto — mantém hierarquia semântica sem repetir "Pesquise" visualmente */}
      <h2 className="sr-only">Pesquise</h2>
      <div className="flex flex-col gap-2 sm:flex-row">
        <select
          defaultValue="br"
          aria-label="País"
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#020659] outline-none focus:border-[#D9B573] dark:border-white/10 dark:bg-[#1D3D59] dark:text-white"
        >
          <option value="br">Brasil (B3)</option>
          <option value="us" disabled>
            EUA (em breve)
          </option>
        </select>
        <BuscaAutocomplete variante="hero" comBotao className="flex-1" />
      </div>
    </section>
  );
}
