// components/AvatarSetor.tsx
// Exibe um bloco colorido com o ticker do FII.
// A cor muda conforme o setor — estilos condicionais com Tailwind.

const coresPorSetor: Record<string, string> = {
    Papel:             "bg-[#EBF2F7] text-[#1D3D59] border-[#C5DCF0]",
    Tijolo:            "bg-[#FDF3E3] text-[#7A5E1E] border-[#F5D9A8]",
    Híbrido:           "bg-[#E6F3F5] text-[#123038] border-[#B2D8DE]",
    Fiagro:            "bg-[#EAF3DE] text-[#274a09] border-[#C0DD97]",
    "Fundo de Fundos": "bg-[#EEEDFE] text-[#3C3489] border-[#CECBF6]",
    Hoteleiro:         "bg-[#FAECE7] text-[#712B13] border-[#F5C4B3]",
  };
  
  const corPadrao = "bg-gray-100 text-gray-600 border-gray-200";
  
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