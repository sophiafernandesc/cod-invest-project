// components/FiiCard.tsx
import Link from "next/link";
import { Fii } from "@/data/fiis";

interface FiiCardProps {
  fii: Fii;
}

export default function FiiCard({ fii }: FiiCardProps) {
  return (
    <Link
      href={`/fiis/${fii.id}`}
      className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-lg font-bold text-[#020659]">{fii.ticker}</h3>

      <span className="mt-1 inline-block rounded-full bg-[#1D3D59] px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
        {fii.setor}
      </span>

      <div className="mt-3 flex gap-4 border-t border-gray-100 pt-3 text-sm text-gray-600">
        <span>
          <strong className="text-[#020659]">DY</strong> {fii.dy}
        </span>
        <span>
          <strong className="text-[#020659]">P/VP</strong> {fii.pvp}
        </span>
      </div>
    </Link>
  );
}