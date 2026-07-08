// data/noticias.ts
// Migrado do db.json (json-server) que alimentava a versão vanilla JS do projeto.

export interface Noticia {
  id: number;
  titulo: string;
  categoria: string;
  imagem: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Selic mantém estabilidade e favorece novos aportes em FIIs de tijolo.",
    categoria: "Economia",
    imagem: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    titulo: "Relatório Focus indica leve queda na inflação para o próximo semestre.",
    categoria: "Inflação",
    imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    titulo: "Novos IPOs de Fiagros agitam o mercado de renda variável.",
    categoria: "Mercado",
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    titulo: "Entenda o impacto da reforma tributária nos dividendos mensais.",
    categoria: "Tributação",
    imagem: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    titulo: "Vacância em escritórios de alto padrão em SP atinge mínima histórica.",
    categoria: "Tijolo",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
  },
];
