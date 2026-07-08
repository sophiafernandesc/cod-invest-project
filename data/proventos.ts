// data/proventos.ts
// Migrado do db.json (json-server) que alimentava a versão vanilla JS do projeto.
// Só os 6 FIIs originais (seed inicial) têm proventos cadastrados — os outros 34,
// adicionados depois na expansão da base, não têm. A seção "Proventos Recentes"
// só aparece na página de detalhes quando há dados (mesma regra do app antigo).

export interface Provento {
  id: number;
  fiiId: number;
  titulo: string;
  mes: string;
  valor: string;
  imagem: string;
}

export const proventos: Provento[] = [
  { id: 1, fiiId: 1, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 0,11", imagem: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=400&h=300&fit=crop" },
  { id: 2, fiiId: 1, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 0,11", imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop" },
  { id: 3, fiiId: 1, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 0,10", imagem: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop" },
  { id: 4, fiiId: 2, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 1,26", imagem: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop" },
  { id: 5, fiiId: 2, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 1,25", imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
  { id: 6, fiiId: 2, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 1,24", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
  { id: 7, fiiId: 13, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 1,08", imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
  { id: 8, fiiId: 13, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 1,07", imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { id: 9, fiiId: 13, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 1,06", imagem: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop" },
  { id: 10, fiiId: 23, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 1,09", imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { id: 11, fiiId: 23, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 1,08", imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
  { id: 12, fiiId: 23, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 1,07", imagem: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop" },
  { id: 13, fiiId: 14, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 0,79", imagem: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop" },
  { id: 14, fiiId: 14, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 0,78", imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop" },
  { id: 15, fiiId: 14, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 0,77", imagem: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=400&h=300&fit=crop" },
  { id: 16, fiiId: 35, titulo: "Provento Abr/2025", mes: "Abr/2025", valor: "R$ 0,71", imagem: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop" },
  { id: 17, fiiId: 35, titulo: "Provento Mar/2025", mes: "Mar/2025", valor: "R$ 0,70", imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
  { id: 18, fiiId: 35, titulo: "Provento Fev/2025", mes: "Fev/2025", valor: "R$ 0,69", imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
];
