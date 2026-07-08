// components/SecaoIndicadores.tsx
import { indicadores } from "@/data/indicadores";

export default function SecaoIndicadores() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <h2 className="mb-4 text-xl font-bold text-[#020659] dark:text-[#D9B573]">
        Indicadores de Mercado
      </h2>
      <div className="flex snap-x gap-4 overflow-x-auto pb-3 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B0944E] [&::-webkit-scrollbar-track]:bg-transparent">
        {indicadores.map((ind) => (
          <div
            key={ind.id}
            className="min-w-[160px] flex-1 shrink-0 snap-start rounded-lg border-b-4 border-[#204953] bg-white p-5 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:bg-[#1D3D59] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          >
            <strong className="block text-sm font-bold text-[#020659] dark:text-[#D9B573]">
              {ind.nome}
            </strong>
            <span className="mt-1 block text-gray-600 dark:text-white/70">
              {ind.valor}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
