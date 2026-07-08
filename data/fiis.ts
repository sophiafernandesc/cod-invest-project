// data/fiis.ts
// Tipagem dos dados de um FII — o TypeScript garante que todo FII
// tenha exatamente esses campos, evitando erros de digitação.

export interface Fii {
    id: number;
    ticker: string;
    setor: string;
    gestora: string;
    descricao: string;
    cotacao: string;
    dy: string;
    pvp: string;
    ultimoRendimento: string;
    patrimonio: string;
    cotistas: number;
  }
  
  // O array de dados. Começamos com 6 FIIs representando setores diferentes.
  export const fiis: Fii[] = [
    {
      id: 1,
      ticker: "MXRF11",
      setor: "Papel",
      gestora: "Maxi Renda",
      descricao: "Fundo de recebíveis imobiliários com foco em CRIs de alta qualidade.",
      cotacao: "R$ 10,52",
      dy: "12,4%",
      pvp: "0,95",
      ultimoRendimento: "R$ 0,11",
      patrimonio: "R$ 4,2 bi",
      cotistas: 891000,
    },
    {
      id: 2,
      ticker: "HGLG11",
      setor: "Tijolo",
      gestora: "CSHG",
      descricao: "Um dos maiores fundos de logística do mercado brasileiro.",
      cotacao: "R$ 157,40",
      dy: "8,2%",
      pvp: "1,05",
      ultimoRendimento: "R$ 1,08",
      patrimonio: "R$ 5,8 bi",
      cotistas: 430000,
    },
    {
      id: 3,
      ticker: "KNRI11",
      setor: "Híbrido",
      gestora: "Kinea",
      descricao: "Fundo híbrido com portfólio diversificado entre lajes corporativas e galpões.",
      cotacao: "R$ 138,20",
      dy: "9,5%",
      pvp: "0,92",
      ultimoRendimento: "R$ 1,09",
      patrimonio: "R$ 3,4 bi",
      cotistas: 290000,
    },
    {
      id: 4,
      ticker: "XPCA11",
      setor: "Fiagro",
      gestora: "XP Asset",
      descricao: "Fiagro focado em cadeias produtivas agroindustriais e CRAs.",
      cotacao: "R$ 8,71",
      dy: "10,8%",
      pvp: "0,88",
      ultimoRendimento: "R$ 0,09",
      patrimonio: "R$ 980 mi",
      cotistas: 142000,
    },
    {
      id: 5,
      ticker: "VISC11",
      setor: "Tijolo",
      gestora: "Vinci Partners",
      descricao: "Fundo de shoppings centers com participação em grandes empreendimentos do Brasil.",
      cotacao: "R$ 103,60",
      dy: "9,1%",
      pvp: "0,87",
      ultimoRendimento: "R$ 0,79",
      patrimonio: "R$ 3,1 bi",
      cotistas: 260000,
    },
    {
      id: 6,
      ticker: "BCFF11",
      setor: "Fundo de Fundos",
      gestora: "BTG Pactual",
      descricao: "Fundo de fundos que investe em cotas de outros FIIs listados na B3.",
      cotacao: "R$ 75,20",
      dy: "11,3%",
      pvp: "0,91",
      ultimoRendimento: "R$ 0,71",
      patrimonio: "R$ 1,8 bi",
      cotistas: 195000,
    },
  ];