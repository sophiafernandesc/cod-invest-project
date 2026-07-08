// components/SecaoNoticias.tsx
import Image from "next/image";
import { noticias } from "@/data/noticias";

export default function SecaoNoticias() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <h2 className="mb-4 text-xl font-bold text-[#020659] dark:text-[#D9B573]">
        Notícias
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {noticias.map((n) => (
          <article
            key={n.id}
            className="group relative h-64 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)]"
          >
            <Image
              src={n.imagem}
              alt={n.titulo}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020659] to-transparent px-4 pb-4 pt-8">
              <span className="mb-2 inline-block rounded-full bg-[#D9B573] px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-wide text-[#020659]">
                {n.categoria}
              </span>
              <p className="text-sm font-semibold leading-snug text-white">
                {n.titulo}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
