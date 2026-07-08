// components/AvatarSetor.tsx
// Exibe um bloco colorido com o ticker do FII.
// A cor muda conforme o setor — estilos condicionais com Tailwind.

const coresPorSetor: Record<string, string> = {
    Papel:             "bg-[#EBF2F7] text-[#1D3D59] border-[#C5DCF0] dark:bg-[#0f2233] dark:text-[#7ab3d4] dark:border-[#1D3D59]",
    Tijolo:            "bg-[#FDF3E3] text-[#7A5E1E] border-[#F5D9A8] dark:bg-[#231a08] dark:text-[#D9B573] dark:border-[#B0944E]",
    Híbrido:           "bg-[#E6F3F5] text-[#123038] border-[#B2D8DE] dark:bg-[#0a1e22] dark:text-[#5eb8c8] dark:border-[#204953]",
    Fiagro:            "bg-[#EAF3DE] text-[#274a09] border-[#C0DD97] dark:bg-[#0f1e08] dark:text-[#8bc34a] dark:border-[#3B6D11]",
    "Fundo de Fundos": "bg-[#EEEDFE] text-[#3C3489] border-[#CECBF6] dark:bg-[#14103a] dark:text-[#a89ee8] dark:border-[#534AB7]",
    Hoteleiro:         "bg-[#FAECE7] text-[#712B13] border-[#F5C4B3] dark:bg-[#2a0e06] dark:text-[#e8896a] dark:border-[#993C1D]",
  };

  const corPadrao = "bg-gray-100 text-gray-600 border-gray-200 dark:bg-white/5 dark:text-white/60 dark:border-white/10";
  
  interface AvatarSetorProps {
    setor: string;
    ticker: string;
    tamanho?: "normal" | "grande";
  }
  
  export default function AvatarSetor({
    setor,
    ticker,
    tamanho = "normal",
  }: AvatarSetorProps) {
    const cores = coresPorSetor[setor] ?? corPadrao;
    const alturaClasse = tamanho === "grande" ? "h-48" : "h-28";
    const textoClasse  = tamanho === "grande" ? "text-3xl" : "text-lg";
  
    return (
      <div
        className={`flex w-full items-center justify-center rounded-lg border font-bold tracking-wide ${alturaClasse} ${textoClasse} ${cores}`}
      >
        {ticker}
      </div>
    );
  }