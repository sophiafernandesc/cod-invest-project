// app/sobre/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-[#020659] hover:text-[#D9B573] dark:text-[#D9B573]"
      >
        ← Voltar
      </Link>

      {/* Hero — Logo + título */}
      <section className="mb-12 text-center">
        <Image
          src="/logo.png"
          alt="Logo Cod Invest"
          width={120}
          height={59}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-[#020659] dark:text-[#D9B573]">
          Sobre a <span className="text-[#D9B573]">Cod</span> Invest
        </h1>
        <p className="mt-4 text-gray-600 dark:text-white/70">
          O mercado de Fundos Imobiliários (FIIs) exige dados precisos,
          organizados e de fácil acesso. O Cod Invest nasceu para ser a sua
          plataforma definitiva de consulta de cotações, notícias e análises
          de FIIs, entregando a informação que você precisa para focar no que
          realmente importa: a estratégia da sua carteira.
        </p>
      </section>

      <div className="flex flex-col gap-4">
        <SobreCard icone="Por que um Bacalhau?">
          <p>
            Se você reparou no nosso logo, um bacalhau elegante, deve ter se
            perguntado de onde veio essa ideia. A resposta une o mundo da
            tecnologia com o mercado financeiro.
          </p>
          <p className="mt-3">
            O nome <strong>&ldquo;Cod&rdquo;</strong> é uma homenagem direta a{" "}
            <strong>Edgar F. Codd</strong>, o brilhante cientista da
            computação consagrado como o{" "}
            <em>&ldquo;pai dos bancos de dados relacionais&rdquo;</em>. O
            impacto de suas regras e teorias foi tão absoluto na tecnologia
            que os trocadilhos com seu sobrenome (<em>cod</em> significa
            bacalhau em inglês) viraram um clássico entre os desenvolvedores,
            a famosa <strong>&ldquo;bacalhoada dos anos 80&rdquo;</strong>.
          </p>
        </SobreCard>

        <SobreCard>
          <p>
            Assim como Edgar Codd revolucionou a forma como o mundo armazena,
            relaciona e consulta informações, o Cod Invest tem uma missão
            clara: simplificar e estruturar a forma como você acessa os dados
            dos seus investimentos.
          </p>
          <p className="mt-3">
            Nós navegamos pelo mar de informações dispersas do mercado
            imobiliário e as entregamos de forma rápida e confiável. Tudo para
            garantir que a sua tomada de decisão seja sempre baseada em dados
            sólidos.
          </p>
        </SobreCard>

        <SobreCard icone="Tecnologias">
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Chart.js",
              "brAPI",
              "Git / GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#1D3D59] px-3 py-1 text-xs font-semibold text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </SobreCard>

        <SobreCard icone="Autora">
          <p>
            Desenvolvido por <strong>Sophia Fernandes</strong> como projeto
            acadêmico para a <strong>PUC Minas</strong> — 2026.
          </p>
        </SobreCard>
      </div>
    </main>
  );
}

function SobreCard({
  icone,
  children,
}: {
  icone?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#1D3D59]">
      {icone && (
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#020659] dark:text-[#D9B573]">
          {icone}
        </h2>
      )}
      <div className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
        {children}
      </div>
    </section>
  );
}
