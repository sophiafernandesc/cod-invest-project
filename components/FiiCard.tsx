// components/FiiCard.tsx
import Link from "next/link";
import { Fii } from "@/data/fiis";
import AvatarSetor from "@/components/AvatarSetor";

interface FiiCardProps {
  fii: Fii;
}

export default function FiiCard({ fii }: FiiCardProps) {
  return (
    <Link
      href={`/fiis/${fii.id}`}
      className="block rounded-xl border-b-[3px] border-transparent bg-white p-4 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[#D9B573] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] dark:bg-[#1D3D59] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
    >
      <AvatarSetor setor={fii.setor} ticker={fii.ticker} />

      <h3 className="mt-3 text-lg font-bold text-[#020659] dark:text-[#D9B573]">
        {fii.ticker}
      </h3>

      <span className="mt-1 inline-block rounded-full bg-[#1D3D59] px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white dark:bg-[#020659]">
        {fii.setor}
      </span>

      <div className="mt-3 flex gap-4 border-t border-gray-100 pt-3 text-sm text-gray-600 dark:border-white/10 dark:text-white/70">
        <span>
          <strong className="text-[#020659] dark:text-[#D9B573]">DY</strong> {fii.dy}
        </span>
        <span>
          <strong className="text-[#020659] dark:text-[#D9B573]">P/VP</strong> {fii.pvp}
        </span>
      </div>
    </Link>
  );
}