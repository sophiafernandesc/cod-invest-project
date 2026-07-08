// components/GraficoDY.tsx
// Gráfico de linha em SVG puro (sem biblioteca externa) para o histórico
// de Dividend Yield dos últimos 12 meses.

const MESES = ["Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar", "Abr"];

const LARGURA = 600;
const ALTURA = 220;
const MARGEM = { topo: 16, base: 28, esquerda: 8, direita: 8 };

export default function GraficoDY({ dados }: { dados: number[] }) {
  const min = Math.min(...dados);
  const max = Math.max(...dados);
  const folga = (max - min) * 0.2 || 1;
  const yMin = min - folga;
  const yMax = max + folga;

  const larguraUtil = LARGURA - MARGEM.esquerda - MARGEM.direita;
  const alturaUtil = ALTURA - MARGEM.topo - MARGEM.base;

  const pontos = dados.map((valor, i) => {
    const x = MARGEM.esquerda + (i / (dados.length - 1)) * larguraUtil;
    const y = MARGEM.topo + (1 - (valor - yMin) / (yMax - yMin)) * alturaUtil;
    return { x, y, valor };
  });

  const linha = pontos.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${linha} L${pontos[pontos.length - 1].x},${MARGEM.topo + alturaUtil} L${pontos[0].x},${MARGEM.topo + alturaUtil} Z`;

  const linhasGrade = [0, 0.25, 0.5, 0.75, 1].map((f) => MARGEM.topo + f * alturaUtil);

  return (
    <svg viewBox={`0 0 ${LARGURA} ${ALTURA}`} className="w-full" role="img" aria-label="Gráfico de Dividend Yield dos últimos 12 meses">
      {/* Linhas de grade horizontais */}
      {linhasGrade.map((y) => (
        <line
          key={y}
          x1={MARGEM.esquerda}
          x2={LARGURA - MARGEM.direita}
          y1={y}
          y2={y}
          className="stroke-black/5 dark:stroke-white/10"
          strokeWidth={1}
        />
      ))}

      {/* Área preenchida */}
      <path d={area} fill="rgba(217,181,115,0.15)" />

      {/* Linha */}
      <path d={linha} fill="none" stroke="#D9B573" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

      {/* Pontos */}
      {pontos.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#D9B573" stroke="#fff" strokeWidth={1.5}>
          <title>{`${MESES[i]}: DY ${p.valor.toFixed(1)}%`}</title>
        </circle>
      ))}

      {/* Rótulos dos meses */}
      {pontos.map((p, i) => (
        <text
          key={i}
          x={p.x}
          y={ALTURA - 8}
          textAnchor="middle"
          className="fill-gray-400 text-[10px] dark:fill-white/40"
        >
          {MESES[i]}
        </text>
      ))}
    </svg>
  );
}
