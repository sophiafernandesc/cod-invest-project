// data/indicadores.ts
// Migrado do db.json (json-server) que alimentava a versão vanilla JS do projeto.

export interface Indicador {
  id: number;
  nome: string;
  valor: string;
}

export const indicadores: Indicador[] = [
  { id: 1, nome: "Dólar", valor: "R$ 5,87" },
  { id: 2, nome: "Ibovespa", valor: "130.000 pts" },
  { id: 3, nome: "CDI", valor: "10,40% a.a." },
  { id: 4, nome: "DOW JONES", valor: "39.000 pts" },
  { id: 5, nome: "S&P 500", valor: "5.100 pts" },
  { id: 6, nome: "Ouro", valor: "+1,2%" },
  { id: 7, nome: "Selic", valor: "10,50% a.a." },
  { id: 8, nome: "IFIX", valor: "3.200 pts" },
];
