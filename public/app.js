// =============================================================
//  DADOS — 40 FIIs estáticos
//  Distribuição: 12 Papel · 10 Tijolo · 6 Híbrido · 6 Fiagro
//                4 Fundo de Fundos · 2 Hoteleiro
//  Nota: cotistas agora é NUMBER para permitir ordenação
// =============================================================
const fiis = [

  // ── PAPEL (12) ───────────────────────────────────────────
  {
    id: 1, titulo: "MXRF11", setor: "Papel",
    imagem: "https://picsum.photos/id/1/200/150",
    descricao: "Fundo de recebíveis imobiliários com foco em CRIs de alta qualidade.",
    cotacao: "R$ 10,52", dy: "12,4%", pvp: "0,95", gestora: "Maxi Renda",
    dataInicio: "Jan/2012", taxaAdm: "1,10% a.a.", patrimonio: "R$ 4,2 bi",
    cotistas: 891000, imoveis: "47 CRIs", ultimoRendimento: "R$ 0,11",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.2, 11.0, 11.5, 12.0, 11.8, 12.1, 12.3, 12.0, 11.9, 12.2, 12.4, 12.4]
  },
  {
    id: 2, titulo: "KNCR11", setor: "Papel",
    imagem: "https://picsum.photos/id/5/200/150",
    descricao: "Fundo de papel gerido pela Kinea com foco em CDI.",
    cotacao: "R$ 106,80", dy: "14,2%", pvp: "1,01", gestora: "Kinea",
    dataInicio: "Jul/2012", taxaAdm: "1,25% a.a.", patrimonio: "R$ 7,3 bi",
    cotistas: 620000, imoveis: "61 CRIs", ultimoRendimento: "R$ 1,26",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [12.0, 12.5, 13.0, 13.5, 13.8, 14.0, 14.2, 14.0, 14.1, 14.3, 14.2, 14.2]
  },
  {
    id: 3, titulo: "BTCI11", setor: "Papel",
    imagem: "https://picsum.photos/id/3/200/150",
    descricao: "Fundo focado em ativos de crédito imobiliário de alta qualidade.",
    cotacao: "R$ 94,30", dy: "13,1%", pvp: "0,97", gestora: "BTG Pactual",
    dataInicio: "Jun/2019", taxaAdm: "0,95% a.a.", patrimonio: "R$ 2,1 bi",
    cotistas: 310000, imoveis: "38 CRIs", ultimoRendimento: "R$ 1,03",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.5, 12.0, 12.4, 12.8, 13.0, 13.2, 12.9, 13.1, 13.3, 13.0, 13.1, 13.1]
  },
  {
    id: 4, titulo: "CPTS11", setor: "Papel",
    imagem: "https://picsum.photos/id/20/200/150",
    descricao: "Fundo de CRIs gerido pela Capitânia, com portfólio diversificado e foco em IPCA.",
    cotacao: "R$ 8,43", dy: "13,8%", pvp: "0,92", gestora: "Capitânia",
    dataInicio: "Ago/2018", taxaAdm: "1,10% a.a.", patrimonio: "R$ 3,6 bi",
    cotistas: 480000, imoveis: "52 CRIs", ultimoRendimento: "R$ 0,10",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.5, 12.0, 12.5, 13.0, 13.3, 13.6, 13.8, 13.5, 13.7, 13.8, 13.8, 13.8]
  },
  {
    id: 5, titulo: "IRDM11", setor: "Papel",
    imagem: "https://picsum.photos/id/21/200/150",
    descricao: "Fundo de CRIs e debêntures imobiliárias gerido pela Iridium, referência em crédito estruturado.",
    cotacao: "R$ 93,10", dy: "14,5%", pvp: "0,94", gestora: "Iridium",
    dataInicio: "Nov/2018", taxaAdm: "1,00% a.a.", patrimonio: "R$ 2,8 bi",
    cotistas: 360000, imoveis: "44 CRIs", ultimoRendimento: "R$ 1,12",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [12.0, 12.8, 13.2, 13.8, 14.0, 14.3, 14.5, 14.2, 14.4, 14.5, 14.5, 14.5]
  },
  {
    id: 6, titulo: "RECR11", setor: "Papel",
    imagem: "https://picsum.photos/id/22/200/150",
    descricao: "Fundo de recebíveis com estratégia de alta rentabilidade e gestão ativa pela REC.",
    cotacao: "R$ 98,50", dy: "15,1%", pvp: "0,96", gestora: "REC Gestora",
    dataInicio: "Mar/2020", taxaAdm: "1,00% a.a.", patrimonio: "R$ 1,9 bi",
    cotistas: 220000, imoveis: "36 CRIs", ultimoRendimento: "R$ 1,24",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [12.5, 13.0, 13.5, 14.0, 14.5, 14.8, 15.1, 14.8, 15.0, 15.1, 15.1, 15.1]
  },
  {
    id: 7, titulo: "VRTA11", setor: "Papel",
    imagem: "https://picsum.photos/id/23/200/150",
    descricao: "Fundo de papel da Votorantim Asset focado em CRIs de médio e longo prazo.",
    cotacao: "R$ 103,20", dy: "13,6%", pvp: "0,98", gestora: "Votorantim Asset",
    dataInicio: "Mai/2017", taxaAdm: "1,00% a.a.", patrimonio: "R$ 1,5 bi",
    cotistas: 180000, imoveis: "29 CRIs", ultimoRendimento: "R$ 1,17",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.0, 11.5, 12.0, 12.5, 13.0, 13.3, 13.6, 13.3, 13.5, 13.6, 13.6, 13.6]
  },
  {
    id: 8, titulo: "HGCR11", setor: "Papel",
    imagem: "https://picsum.photos/id/24/200/150",
    descricao: "Fundo de CRIs gerido pela CSHG, com foco em alta qualidade de crédito e liquidez.",
    cotacao: "R$ 100,40", dy: "13,0%", pvp: "0,99", gestora: "CSHG",
    dataInicio: "Set/2012", taxaAdm: "1,00% a.a.", patrimonio: "R$ 2,3 bi",
    cotistas: 270000, imoveis: "41 CRIs", ultimoRendimento: "R$ 1,09",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.5, 11.0, 11.5, 12.0, 12.3, 12.7, 13.0, 12.7, 12.9, 13.0, 13.0, 13.0]
  },
  {
    id: 9, titulo: "KNIP11", setor: "Papel",
    imagem: "https://picsum.photos/id/25/200/150",
    descricao: "Fundo de CRIs indexados ao IPCA gerido pela Kinea, proteção contra inflação.",
    cotacao: "R$ 107,60", dy: "12,8%", pvp: "1,00", gestora: "Kinea",
    dataInicio: "Out/2018", taxaAdm: "1,00% a.a.", patrimonio: "R$ 9,1 bi",
    cotistas: 780000, imoveis: "68 CRIs", ultimoRendimento: "R$ 1,14",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.5, 11.0, 11.5, 12.0, 12.3, 12.5, 12.8, 12.5, 12.7, 12.8, 12.8, 12.8]
  },
  {
    id: 10, titulo: "RBRR11", setor: "Papel",
    imagem: "https://picsum.photos/id/26/200/150",
    descricao: "Fundo de CRIs high grade gerido pela RBR Asset, com foco em ativos de baixo risco.",
    cotacao: "R$ 97,80", dy: "12,5%", pvp: "0,97", gestora: "RBR Asset",
    dataInicio: "Jun/2019", taxaAdm: "1,00% a.a.", patrimonio: "R$ 1,3 bi",
    cotistas: 160000, imoveis: "27 CRIs", ultimoRendimento: "R$ 1,02",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.0, 10.5, 11.0, 11.5, 12.0, 12.2, 12.5, 12.2, 12.4, 12.5, 12.5, 12.5]
  },
  {
    id: 11, titulo: "VGIR11", setor: "Papel",
    imagem: "https://picsum.photos/id/27/200/150",
    descricao: "Fundo de papel da Valora com estratégia focada em CDI e baixa volatilidade.",
    cotacao: "R$ 10,15", dy: "13,3%", pvp: "0,96", gestora: "Valora",
    dataInicio: "Fev/2019", taxaAdm: "1,15% a.a.", patrimonio: "R$ 980 mi",
    cotistas: 145000, imoveis: "22 CRIs", ultimoRendimento: "R$ 0,11",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.0, 11.5, 12.0, 12.5, 12.8, 13.0, 13.3, 13.0, 13.2, 13.3, 13.3, 13.3]
  },
  {
    id: 12, titulo: "XPCI11", setor: "Papel",
    imagem: "https://picsum.photos/id/28/200/150",
    descricao: "Fundo de CRIs indexados ao IPCA gerido pela XP Asset, foco em ativos AAA.",
    cotacao: "R$ 8,82", dy: "12,1%", pvp: "0,93", gestora: "XP Asset",
    dataInicio: "Jan/2020", taxaAdm: "1,10% a.a.", patrimonio: "R$ 1,1 bi",
    cotistas: 130000, imoveis: "19 CRIs", ultimoRendimento: "R$ 0,09",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.5, 10.0, 10.5, 11.0, 11.3, 11.7, 12.1, 11.8, 12.0, 12.1, 12.1, 12.1]
  },

  // ── TIJOLO (10) ──────────────────────────────────────────
  {
    id: 13, titulo: "HGLG11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/4/200/150",
    descricao: "Um dos maiores fundos de logística do mercado brasileiro.",
    cotacao: "R$ 157,40", dy: "8,2%", pvp: "1,05", gestora: "CSHG",
    dataInicio: "Fev/2010", taxaAdm: "0,60% a.a.", patrimonio: "R$ 5,8 bi",
    cotistas: 430000, imoveis: "28 galpões", ultimoRendimento: "R$ 1,08",
    vacanciaFisica: "3,2%", vacanciaFinanceira: "2,1%",
    dyHistorico: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2, 8.3, 8.1, 8.2, 8.0, 8.2, 8.2]
  },
  {
    id: 14, titulo: "VISC11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/7/200/150",
    descricao: "Fundo de shoppings centers com participação em grandes empreendimentos do Brasil.",
    cotacao: "R$ 103,60", dy: "9,1%", pvp: "0,87", gestora: "Vinci Partners",
    dataInicio: "Nov/2012", taxaAdm: "0,80% a.a.", patrimonio: "R$ 3,1 bi",
    cotistas: 260000, imoveis: "21 shoppings", ultimoRendimento: "R$ 0,79",
    vacanciaFisica: "4,5%", vacanciaFinanceira: "3,8%",
    dyHistorico: [7.8, 8.0, 8.3, 8.5, 8.7, 8.9, 9.0, 9.1, 9.0, 9.1, 9.1, 9.1]
  },
  {
    id: 15, titulo: "XPLG11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/40/200/150",
    descricao: "Fundo de galpões logísticos de alto padrão localizado em regiões estratégicas do Brasil.",
    cotacao: "R$ 102,80", dy: "8,5%", pvp: "0,96", gestora: "XP Asset",
    dataInicio: "Mai/2018", taxaAdm: "0,75% a.a.", patrimonio: "R$ 3,8 bi",
    cotistas: 340000, imoveis: "19 galpões", ultimoRendimento: "R$ 0,73",
    vacanciaFisica: "2,8%", vacanciaFinanceira: "1,9%",
    dyHistorico: [7.0, 7.5, 7.8, 8.0, 8.2, 8.4, 8.5, 8.3, 8.4, 8.5, 8.5, 8.5]
  },
  {
    id: 16, titulo: "BRCO11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/41/200/150",
    descricao: "Fundo de galpões industriais e logísticos gerido pela Brookfield Asset Management.",
    cotacao: "R$ 109,30", dy: "8,0%", pvp: "0,98", gestora: "Brookfield",
    dataInicio: "Set/2019", taxaAdm: "0,70% a.a.", patrimonio: "R$ 2,2 bi",
    cotistas: 185000, imoveis: "14 galpões", ultimoRendimento: "R$ 0,73",
    vacanciaFisica: "1,5%", vacanciaFinanceira: "1,0%",
    dyHistorico: [6.5, 7.0, 7.3, 7.6, 7.8, 7.9, 8.0, 7.9, 8.0, 8.0, 8.0, 8.0]
  },
  {
    id: 17, titulo: "MALL11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/42/200/150",
    descricao: "Fundo de shopping centers gerido pela Kinea com portfólio diversificado nas maiores cidades.",
    cotacao: "R$ 112,50", dy: "9,4%", pvp: "0,91", gestora: "Kinea",
    dataInicio: "Jun/2018", taxaAdm: "0,80% a.a.", patrimonio: "R$ 2,7 bi",
    cotistas: 220000, imoveis: "16 shoppings", ultimoRendimento: "R$ 0,88",
    vacanciaFisica: "5,1%", vacanciaFinanceira: "4,2%",
    dyHistorico: [7.5, 8.0, 8.3, 8.6, 8.9, 9.1, 9.4, 9.2, 9.3, 9.4, 9.4, 9.4]
  },
  {
    id: 18, titulo: "HSML11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/43/200/150",
    descricao: "Fundo de shoppings regionais gerido pela HSI com foco em cidades do interior.",
    cotacao: "R$ 95,70", dy: "9,8%", pvp: "0,85", gestora: "HSI",
    dataInicio: "Nov/2019", taxaAdm: "0,85% a.a.", patrimonio: "R$ 1,8 bi",
    cotistas: 155000, imoveis: "13 shoppings", ultimoRendimento: "R$ 0,78",
    vacanciaFisica: "6,3%", vacanciaFinanceira: "5,0%",
    dyHistorico: [7.5, 8.0, 8.5, 9.0, 9.2, 9.5, 9.8, 9.5, 9.7, 9.8, 9.8, 9.8]
  },
  {
    id: 19, titulo: "HGRE11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/44/200/150",
    descricao: "Fundo de lajes corporativas de alto padrão gerido pela CSHG nas principais capitais.",
    cotacao: "R$ 121,40", dy: "7,9%", pvp: "0,82", gestora: "CSHG",
    dataInicio: "Mar/2009", taxaAdm: "0,70% a.a.", patrimonio: "R$ 2,5 bi",
    cotistas: 200000, imoveis: "12 edifícios", ultimoRendimento: "R$ 0,80",
    vacanciaFisica: "9,4%", vacanciaFinanceira: "7,8%",
    dyHistorico: [6.5, 7.0, 7.3, 7.5, 7.7, 7.8, 7.9, 7.7, 7.8, 7.9, 7.9, 7.9]
  },
  {
    id: 20, titulo: "BRCR11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/45/200/150",
    descricao: "Fundo de escritórios corporativos AAA nos principais hubs de negócios do Brasil.",
    cotacao: "R$ 77,20", dy: "8,6%", pvp: "0,74", gestora: "BTG Pactual",
    dataInicio: "Out/2007", taxaAdm: "0,25% a.a.", patrimonio: "R$ 1,9 bi",
    cotistas: 130000, imoveis: "10 edifícios", ultimoRendimento: "R$ 0,55",
    vacanciaFisica: "11,2%", vacanciaFinanceira: "9,5%",
    dyHistorico: [7.0, 7.3, 7.6, 7.9, 8.1, 8.3, 8.6, 8.3, 8.5, 8.6, 8.6, 8.6]
  },
  {
    id: 21, titulo: "PVBI11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/46/200/150",
    descricao: "Fundo de lajes corporativas premium gerido pela VBI Real Estate, foco em Faria Lima.",
    cotacao: "R$ 94,10", dy: "7,6%", pvp: "0,88", gestora: "VBI Real Estate",
    dataInicio: "Mar/2021", taxaAdm: "0,75% a.a.", patrimonio: "R$ 1,2 bi",
    cotistas: 95000, imoveis: "5 edifícios", ultimoRendimento: "R$ 0,60",
    vacanciaFisica: "4,8%", vacanciaFinanceira: "3,5%",
    dyHistorico: [5.5, 6.0, 6.5, 7.0, 7.2, 7.4, 7.6, 7.4, 7.5, 7.6, 7.6, 7.6]
  },
  {
    id: 22, titulo: "TRXF11", setor: "Tijolo",
    imagem: "https://picsum.photos/id/47/200/150",
    descricao: "Fundo de imóveis comerciais e varejo gerido pela TRX, com contratos de longo prazo.",
    cotacao: "R$ 9,72", dy: "10,2%", pvp: "0,93", gestora: "TRX",
    dataInicio: "Ago/2019", taxaAdm: "0,90% a.a.", patrimonio: "R$ 890 mi",
    cotistas: 88000, imoveis: "62 imóveis", ultimoRendimento: "R$ 0,08",
    vacanciaFisica: "2,1%", vacanciaFinanceira: "1,4%",
    dyHistorico: [8.5, 9.0, 9.3, 9.6, 9.8, 10.0, 10.2, 10.0, 10.1, 10.2, 10.2, 10.2]
  },

  // ── HÍBRIDO (6) ──────────────────────────────────────────
  {
    id: 23, titulo: "KNRI11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/6/200/150",
    descricao: "Fundo híbrido com portfólio diversificado entre lajes corporativas e galpões.",
    cotacao: "R$ 138,20", dy: "9,5%", pvp: "0,92", gestora: "Kinea",
    dataInicio: "Dez/2010", taxaAdm: "0,75% a.a.", patrimonio: "R$ 3,4 bi",
    cotistas: 290000, imoveis: "19 imóveis", ultimoRendimento: "R$ 1,09",
    vacanciaFisica: "5,8%", vacanciaFinanceira: "4,3%",
    dyHistorico: [8.5, 8.8, 9.0, 9.2, 9.3, 9.4, 9.5, 9.3, 9.4, 9.5, 9.5, 9.5]
  },
  {
    id: 24, titulo: "RBVA11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/60/200/150",
    descricao: "Fundo híbrido da Rio Bravo com ativos diversificados entre renda e ganho de capital.",
    cotacao: "R$ 10,11", dy: "9,8%", pvp: "0,89", gestora: "Rio Bravo",
    dataInicio: "Dez/2010", taxaAdm: "0,80% a.a.", patrimonio: "R$ 1,1 bi",
    cotistas: 110000, imoveis: "15 imóveis", ultimoRendimento: "R$ 0,08",
    vacanciaFisica: "6,5%", vacanciaFinanceira: "5,2%",
    dyHistorico: [8.0, 8.3, 8.6, 9.0, 9.2, 9.5, 9.8, 9.5, 9.7, 9.8, 9.8, 9.8]
  },
  {
    id: 25, titulo: "HGPO11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/61/200/150",
    descricao: "Fundo híbrido da CSHG com foco em renda e valorização, portfólio diversificado.",
    cotacao: "R$ 152,30", dy: "8,4%", pvp: "0,95", gestora: "CSHG",
    dataInicio: "Jun/2012", taxaAdm: "0,70% a.a.", patrimonio: "R$ 780 mi",
    cotistas: 65000, imoveis: "8 imóveis", ultimoRendimento: "R$ 1,07",
    vacanciaFisica: "7,2%", vacanciaFinanceira: "5,9%",
    dyHistorico: [7.0, 7.3, 7.6, 7.9, 8.1, 8.3, 8.4, 8.2, 8.3, 8.4, 8.4, 8.4]
  },
  {
    id: 26, titulo: "RZAK11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/62/200/150",
    descricao: "Fundo híbrido da Riza com foco em ativos de maior retorno e gestão ativa.",
    cotacao: "R$ 10,43", dy: "10,5%", pvp: "0,91", gestora: "Riza",
    dataInicio: "Ago/2020", taxaAdm: "1,00% a.a.", patrimonio: "R$ 650 mi",
    cotistas: 78000, imoveis: "12 imóveis", ultimoRendimento: "R$ 0,09",
    vacanciaFisica: "8,1%", vacanciaFinanceira: "6,5%",
    dyHistorico: [8.5, 9.0, 9.5, 10.0, 10.2, 10.4, 10.5, 10.3, 10.4, 10.5, 10.5, 10.5]
  },
  {
    id: 27, titulo: "VINO11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/63/200/150",
    descricao: "Fundo híbrido da Vinci focado em ativos de qualidade e inquilinos de alta capacidade.",
    cotacao: "R$ 7,92", dy: "9,2%", pvp: "0,86", gestora: "Vinci Partners",
    dataInicio: "Fev/2021", taxaAdm: "0,80% a.a.", patrimonio: "R$ 1,4 bi",
    cotistas: 135000, imoveis: "11 imóveis", ultimoRendimento: "R$ 0,06",
    vacanciaFisica: "5,4%", vacanciaFinanceira: "4,1%",
    dyHistorico: [7.5, 7.8, 8.2, 8.5, 8.8, 9.0, 9.2, 9.0, 9.1, 9.2, 9.2, 9.2]
  },
  {
    id: 28, titulo: "MGFF11", setor: "Híbrido",
    imagem: "https://picsum.photos/id/64/200/150",
    descricao: "Fundo multistrategy da Mogno com atuação em tijolo e papel de forma equilibrada.",
    cotacao: "R$ 81,50", dy: "10,8%", pvp: "0,88", gestora: "Mogno",
    dataInicio: "Nov/2018", taxaAdm: "0,95% a.a.", patrimonio: "R$ 560 mi",
    cotistas: 55000, imoveis: "18 ativos", ultimoRendimento: "R$ 0,73",
    vacanciaFisica: "4,9%", vacanciaFinanceira: "3,8%",
    dyHistorico: [8.5, 9.0, 9.5, 10.0, 10.3, 10.6, 10.8, 10.6, 10.7, 10.8, 10.8, 10.8]
  },

  // ── FIAGRO (6) ───────────────────────────────────────────
  {
    id: 29, titulo: "XPCA11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/2/200/150",
    descricao: "Fiagro focado em cadeias produtivas agroindustriais e CRAs.",
    cotacao: "R$ 8,71", dy: "10,8%", pvp: "0,88", gestora: "XP Asset",
    dataInicio: "Mar/2021", taxaAdm: "1,20% a.a.", patrimonio: "R$ 980 mi",
    cotistas: 142000, imoveis: "18 CRAs", ultimoRendimento: "R$ 0,09",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.0, 9.5, 10.0, 10.2, 10.5, 10.8, 10.6, 10.9, 11.0, 10.7, 10.8, 10.8]
  },
  {
    id: 30, titulo: "RZTR11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/80/200/150",
    descricao: "Fiagro da Riza focado em ativos de crédito do agronegócio com alta diversificação.",
    cotacao: "R$ 9,48", dy: "14,2%", pvp: "0,84", gestora: "Riza",
    dataInicio: "Jun/2021", taxaAdm: "1,10% a.a.", patrimonio: "R$ 1,2 bi",
    cotistas: 168000, imoveis: "24 CRAs", ultimoRendimento: "R$ 0,11",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.2, 14.0, 14.1, 14.2, 14.2, 14.2]
  },
  {
    id: 31, titulo: "SNES11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/81/200/150",
    descricao: "Fiagro da Sênior com foco em CPRs e CRAs de produtores rurais de médio porte.",
    cotacao: "R$ 9,12", dy: "13,5%", pvp: "0,86", gestora: "Sênior",
    dataInicio: "Set/2021", taxaAdm: "1,15% a.a.", patrimonio: "R$ 520 mi",
    cotistas: 72000, imoveis: "16 CRAs", ultimoRendimento: "R$ 0,10",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.0, 11.5, 12.0, 12.5, 13.0, 13.3, 13.5, 13.3, 13.4, 13.5, 13.5, 13.5]
  },
  {
    id: 32, titulo: "GCRA11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/82/200/150",
    descricao: "Fiagro da Galapagos com estratégia de crédito estruturado no agronegócio.",
    cotacao: "R$ 9,65", dy: "13,0%", pvp: "0,91", gestora: "Galapagos",
    dataInicio: "Dez/2021", taxaAdm: "1,00% a.a.", patrimonio: "R$ 680 mi",
    cotistas: 85000, imoveis: "21 CRAs", ultimoRendimento: "R$ 0,10",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.5, 11.0, 11.5, 12.0, 12.3, 12.7, 13.0, 12.7, 12.9, 13.0, 13.0, 13.0]
  },
  {
    id: 33, titulo: "HGAG11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/83/200/150",
    descricao: "Fiagro da CSHG com portfólio diversificado entre CRAs e CPRs do setor agroindustrial.",
    cotacao: "R$ 9,30", dy: "12,8%", pvp: "0,89", gestora: "CSHG",
    dataInicio: "Mar/2022", taxaAdm: "1,10% a.a.", patrimonio: "R$ 420 mi",
    cotistas: 58000, imoveis: "14 CRAs", ultimoRendimento: "R$ 0,10",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [10.0, 10.5, 11.0, 11.5, 12.0, 12.4, 12.8, 12.5, 12.7, 12.8, 12.8, 12.8]
  },
  {
    id: 34, titulo: "KFOF11", setor: "Fiagro",
    imagem: "https://picsum.photos/id/84/200/150",
    descricao: "Fiagro da Kinea com foco em CRAs premium de grandes produtores e tradings.",
    cotacao: "R$ 8,95", dy: "13,6%", pvp: "0,87", gestora: "Kinea",
    dataInicio: "Jun/2022", taxaAdm: "1,10% a.a.", patrimonio: "R$ 870 mi",
    cotistas: 112000, imoveis: "19 CRAs", ultimoRendimento: "R$ 0,10",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [11.0, 11.5, 12.0, 12.5, 13.0, 13.3, 13.6, 13.3, 13.5, 13.6, 13.6, 13.6]
  },

  // ── FUNDO DE FUNDOS (4) ──────────────────────────────────
  {
    id: 35, titulo: "BCFF11", setor: "Fundo de Fundos",
    imagem: "https://picsum.photos/id/8/200/150",
    descricao: "Fundo de fundos que investe em cotas de outros FIIs listados na B3.",
    cotacao: "R$ 75,20", dy: "11,3%", pvp: "0,91", gestora: "BTG Pactual",
    dataInicio: "Abr/2010", taxaAdm: "0,65% a.a.", patrimonio: "R$ 1,8 bi",
    cotistas: 195000, imoveis: "32 FIIs", ultimoRendimento: "R$ 0,71",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.8, 10.2, 10.5, 10.8, 11.0, 11.2, 11.3, 11.1, 11.2, 11.3, 11.3, 11.3]
  },
  {
    id: 36, titulo: "BPFF11", setor: "Fundo de Fundos",
    imagem: "https://picsum.photos/id/100/200/150",
    descricao: "Fundo de fundos da Brasil Plural com gestão ativa e foco em desconto sobre o NAV.",
    cotacao: "R$ 66,40", dy: "12,0%", pvp: "0,88", gestora: "Brasil Plural",
    dataInicio: "Jun/2012", taxaAdm: "0,80% a.a.", patrimonio: "R$ 820 mi",
    cotistas: 90000, imoveis: "28 FIIs", ultimoRendimento: "R$ 0,66",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.5, 10.0, 10.5, 11.0, 11.3, 11.7, 12.0, 11.7, 11.9, 12.0, 12.0, 12.0]
  },
  {
    id: 37, titulo: "RBFF11", setor: "Fundo de Fundos",
    imagem: "https://picsum.photos/id/101/200/150",
    descricao: "Fundo de fundos da Rio Bravo com carteira diversificada entre tijolo e papel.",
    cotacao: "R$ 71,80", dy: "11,7%", pvp: "0,89", gestora: "Rio Bravo",
    dataInicio: "Out/2019", taxaAdm: "0,75% a.a.", patrimonio: "R$ 640 mi",
    cotistas: 70000, imoveis: "25 FIIs", ultimoRendimento: "R$ 0,70",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.5, 9.8, 10.2, 10.6, 11.0, 11.3, 11.7, 11.4, 11.6, 11.7, 11.7, 11.7]
  },
  {
    id: 38, titulo: "HFOF11", setor: "Fundo de Fundos",
    imagem: "https://picsum.photos/id/102/200/150",
    descricao: "Fundo de fundos da Hedge com estratégia de alocação dinâmica e foco em liquidez.",
    cotacao: "R$ 79,30", dy: "10,9%", pvp: "0,92", gestora: "Hedge",
    dataInicio: "Fev/2018", taxaAdm: "0,70% a.a.", patrimonio: "R$ 1,1 bi",
    cotistas: 115000, imoveis: "35 FIIs", ultimoRendimento: "R$ 0,72",
    vacanciaFisica: "—", vacanciaFinanceira: "—",
    dyHistorico: [9.0, 9.3, 9.6, 10.0, 10.3, 10.6, 10.9, 10.6, 10.8, 10.9, 10.9, 10.9]
  },

  // ── HOTELEIRO (2) ────────────────────────────────────────
  {
    id: 39, titulo: "HGHS11", setor: "Hoteleiro",
    imagem: "https://picsum.photos/id/110/200/150",
    descricao: "Fundo de hotéis gerido pela CSHG com ativos nas principais capitais do Brasil.",
    cotacao: "R$ 8,42", dy: "7,5%", pvp: "0,80", gestora: "CSHG",
    dataInicio: "Ago/2007", taxaAdm: "0,60% a.a.", patrimonio: "R$ 540 mi",
    cotistas: 45000, imoveis: "4 hotéis", ultimoRendimento: "R$ 0,05",
    vacanciaFisica: "12,5%", vacanciaFinanceira: "10,8%",
    dyHistorico: [3.0, 4.0, 5.0, 5.5, 6.0, 6.5, 7.0, 7.2, 7.3, 7.4, 7.5, 7.5]
  },
  {
    id: 40, titulo: "XPHT11", setor: "Hoteleiro",
    imagem: "https://picsum.photos/id/111/200/150",
    descricao: "Fundo hoteleiro da XP com portfólio de hotéis premium nas regiões Sul e Sudeste.",
    cotacao: "R$ 9,18", dy: "8,1%", pvp: "0,83", gestora: "XP Asset",
    dataInicio: "Jan/2020", taxaAdm: "0,75% a.a.", patrimonio: "R$ 380 mi",
    cotistas: 38000, imoveis: "3 hotéis", ultimoRendimento: "R$ 0,06",
    vacanciaFisica: "14,2%", vacanciaFinanceira: "12,0%",
    dyHistorico: [2.5, 3.5, 4.5, 5.5, 6.5, 7.0, 7.5, 7.7, 7.9, 8.0, 8.1, 8.1]
  }
];

// =============================================================
//  UTILITÁRIOS
// =============================================================
function formatarCotistas(n) {
  return n.toLocaleString("pt-BR");
}

function getDestaques(n = 8) {
  return [...fiis]
    .sort((a, b) => b.cotistas - a.cotistas)
    .slice(0, n);
}

// =============================================================
//  RENDERIZAÇÃO DE CARDS
// =============================================================
function renderCards(lista) {
  const container = document.getElementById("container-cards");
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">Nenhum FII encontrado.</p>
      </div>`;
    return;
  }

  container.innerHTML = lista.map(item => `
    <div class="col-12 col-sm-6 col-lg">
      <a href="detalhes.html?id=${item.id}" class="text-decoration-none card-link">
        <article class="artigo-card d-flex flex-column">
          <div class="fii-avatar fii-avatar--${item.setor.toLowerCase().replace(/\s/g, '-')}">${item.titulo}</div>
          <h3>${item.titulo}</h3>
          <p class="setor-badge">${item.setor}</p>
          <div class="card-indicadores-mini">
            <span><strong>DY</strong> ${item.dy}</span>
            <span><strong>P/VP</strong> ${item.pvp}</span>
          </div>
        </article>
      </a>
    </div>
  `).join("");
}

function atualizarTituloSecao(texto, mostrarBotao = false) {
  const titulo = document.getElementById("titulo-destaques");
  const botao  = document.getElementById("btn-ver-todos");
  if (titulo) titulo.textContent = texto;
  if (botao)  botao.style.display = mostrarBotao ? "inline-block" : "none";
}

// =============================================================
//  FILTRO POR SETOR (dropdown do menu)
// =============================================================
function inicializarFiltroSetor() {
  document.querySelectorAll("[data-setor]").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const setor    = this.dataset.setor;
      const resultado = fiis.filter(f => f.setor === setor);
      renderCards(resultado);
      atualizarTituloSecao(`FIIs — ${setor}`, true);

      // Fecha offcanvas se aberto
      const offcanvas = document.getElementById("menuLateral");
      if (offcanvas) {
        const inst = bootstrap.Offcanvas.getInstance(offcanvas);
        if (inst) inst.hide();
      }

      document.getElementById("secao-destaques")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("btn-ver-todos")?.addEventListener("click", () => {
    renderCards(getDestaques());
    atualizarTituloSecao("Destaques FIIs", false);
  });
}

// =============================================================
//  AUTOCOMPLETE
// =============================================================
function criarAutocomplete(inputEl) {
  if (!inputEl) return;

  const lista = document.createElement("ul");
  lista.className = "autocomplete-lista";
  inputEl.parentElement.style.position = "relative";
  inputEl.parentElement.appendChild(lista);

  function fechar() {
    lista.innerHTML = "";
    lista.style.display = "none";
  }

  function abrir(sugestoes) {
    lista.innerHTML = sugestoes.map(f => `
      <li class="autocomplete-item" data-id="${f.id}">
        <strong>${f.titulo}</strong>
        <span class="autocomplete-setor">${f.setor}</span>
      </li>
    `).join("");
    lista.style.display = sugestoes.length ? "block" : "none";

    lista.querySelectorAll(".autocomplete-item").forEach(item => {
      item.addEventListener("mousedown", (e) => {
        e.preventDefault();
        window.location.href = `detalhes.html?id=${item.dataset.id}`;
      });
    });
  }

  inputEl.addEventListener("input", function () {
    const termo = this.value.trim().toUpperCase();

    // Sincroniza campos
    const outroId = inputEl.id === "busca-navbar" ? "busca-offcanvas" : "busca-navbar";
    const outro   = document.getElementById(outroId);
    if (outro) outro.value = this.value;

    if (termo.length < 2) { fechar(); filtrarCards(""); return; }

    const sugestoes = fiis.filter(f =>
      f.titulo.includes(termo) ||
      f.setor.toUpperCase().includes(termo) ||
      f.gestora.toUpperCase().includes(termo)
    ).slice(0, 6);

    abrir(sugestoes);
    filtrarCards(this.value.trim());
  });

  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { fechar(); return; }
    if (e.key === "Enter") {
      const match = fiis.find(f => f.titulo === this.value.trim().toUpperCase());
      if (match) window.location.href = `detalhes.html?id=${match.id}`;
      fechar();
    }
  });

  inputEl.addEventListener("blur", () => setTimeout(fechar, 150));
}

function filtrarCards(termo) {
  if (!termo) {
    renderCards(getDestaques());
    atualizarTituloSecao("Destaques FIIs", false);
    return;
  }
  const termoUpper = termo.toUpperCase();
  const resultado  = fiis.filter(f =>
    f.titulo.includes(termoUpper) ||
    f.setor.toUpperCase().includes(termoUpper) ||
    f.gestora.toUpperCase().includes(termoUpper)
  );
  atualizarTituloSecao(`Resultados para "${termo}"`, true);
  renderCards(resultado);
}

// =============================================================
//  INICIALIZAÇÃO — HOME
// =============================================================
if (document.getElementById("container-cards")) {
  renderCards(getDestaques());
  inicializarFiltroSetor();
  criarAutocomplete(document.getElementById("busca-navbar"));
  criarAutocomplete(document.getElementById("busca-offcanvas"));
  criarAutocomplete(document.getElementById("busca-principal"));

  // Botão de busca da barra principal
  document.querySelector(".botao-busca")?.addEventListener("click", function (e) {
    e.preventDefault();
    const termo = document.getElementById("busca-principal").value.trim();
    const match = fiis.find(f => f.titulo === termo.toUpperCase());
    if (match) {
      window.location.href = `detalhes.html?id=${match.id}`;
    } else {
      filtrarCards(termo);
      document.getElementById("secao-destaques")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// =============================================================
//  DETALHES
// =============================================================
if (document.getElementById("detalhe-titulo")) {
  const params = new URLSearchParams(window.location.search);
  const id     = Number(params.get("id"));
  const fii    = fiis.find(item => item.id === id);

  if (fii) {
    document.title = fii.titulo + " — Cod Invest";

    document.getElementById("detalhe-imagem").src             = fii.imagem;
    document.getElementById("detalhe-imagem").alt             = "Fundo " + fii.titulo;
    document.getElementById("detalhe-titulo").textContent     = fii.titulo;
    const avatarDetalhe = document.getElementById("detalhe-imagem");
    avatarDetalhe.outerHTML = `<div class="fii-avatar fii-avatar--${fii.setor.toLowerCase().replace(/\s/g, '-')} fii-avatar--detalhe">${fii.titulo}</div>`;
    document.getElementById("detalhe-setor").textContent      = fii.setor;
    document.getElementById("detalhe-descricao").textContent  = fii.descricao;
    document.getElementById("detalhe-cotacao").textContent    = fii.cotacao;
    document.getElementById("detalhe-dy").textContent         = fii.dy;
    document.getElementById("detalhe-pvp").textContent        = fii.pvp;
    document.getElementById("detalhe-rendimento").textContent = fii.ultimoRendimento;
    document.getElementById("detalhe-patrimonio").textContent = fii.patrimonio;
    document.getElementById("detalhe-cotistas").textContent   = formatarCotistas(fii.cotistas);
    document.getElementById("detalhe-gestora").textContent    = fii.gestora;
    document.getElementById("detalhe-inicio").textContent     = fii.dataInicio;
    document.getElementById("detalhe-taxa").textContent       = fii.taxaAdm;
    document.getElementById("detalhe-imoveis").textContent    = fii.imoveis;

    const vacanciaSection = document.getElementById("secao-vacancia");
    if (fii.vacanciaFisica === "—") {
      vacanciaSection.style.display = "none";
    } else {
      document.getElementById("detalhe-vac-fisica").textContent     = fii.vacanciaFisica;
      document.getElementById("detalhe-vac-financeira").textContent = fii.vacanciaFinanceira;
    }

    renderGraficoDY(fii.dyHistorico);
    renderRelacionados(fii);
  }
}

function renderGraficoDY(historico) {
  const meses = ["Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Jan","Fev","Mar","Abr"];
  const ctx   = document.getElementById("grafico-dy").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: meses,
      datasets: [{
        label: "DY (%)", data: historico,
        borderColor: "#D9B573", backgroundColor: "rgba(217,181,115,0.12)",
        borderWidth: 2.5, pointBackgroundColor: "#D9B573",
        pointBorderColor: "#fff", pointBorderWidth: 2,
        pointRadius: 4, pointHoverRadius: 6, tension: 0.4, fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#020659", titleColor: "#D9B573", bodyColor: "#fff",
          callbacks: { label: ctx => "  DY: " + ctx.parsed.y.toFixed(1) + "%" }
        }
      },
      scales: {
        y: { ticks: { callback: v => v + "%", color: "#888", font: { size: 11 } }, grid: { color: "rgba(0,0,0,0.05)" } },
        x: { ticks: { color: "#888", font: { size: 11 } }, grid: { display: false } }
      }
    }
  });
}

function renderRelacionados(fiiAtual) {
  const relacionados = fiis.filter(f => f.setor === fiiAtual.setor && f.id !== fiiAtual.id);
  const container    = document.getElementById("container-relacionados");

  if (relacionados.length === 0) {
    document.getElementById("secao-relacionados").style.display = "none";
    return;
  }

  container.innerHTML = relacionados.map(f => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a href="detalhes.html?id=${f.id}" class="text-decoration-none card-link">
        <article class="artigo-card d-flex flex-column">
          <div class="fii-avatar fii-avatar--${f.setor.toLowerCase().replace(/\s/g, '-')}">${f.titulo}</div>
          <h3>${f.titulo}</h3>
          <p class="setor-badge">${f.setor}</p>
          <div class="card-indicadores-mini">
            <span><strong>DY</strong> ${f.dy}</span>
            <span><strong>P/VP</strong> ${f.pvp}</span>
          </div>
        </article>
      </a>
    </div>
  `).join("");
}

// =============================================================
//  DARK MODE + PAINEL DE CONFIGURAÇÕES
// =============================================================

function inicializarDarkMode() {
  const btnClaro  = document.getElementById("tema-claro");
  const btnEscuro = document.getElementById("tema-escuro");

  const temaSalvo   = localStorage.getItem("tema");
  const prefereDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const temaInicial = temaSalvo || (prefereDark ? "dark" : "light");

  aplicarTema(temaInicial);

  btnClaro?.addEventListener("click",  () => aplicarTema("light"));
  btnEscuro?.addEventListener("click", () => aplicarTema("dark"));
}

function aplicarTema(tema) {
  const html      = document.documentElement;
  const btnClaro  = document.getElementById("tema-claro");
  const btnEscuro = document.getElementById("tema-escuro");

  html.setAttribute("data-theme", tema);
  localStorage.setItem("tema", tema);

  if (tema === "dark") {
    btnClaro?.classList.remove("ativo");
    btnEscuro?.classList.add("ativo");
  } else {
    btnEscuro?.classList.remove("ativo");
    btnClaro?.classList.add("ativo");
  }
}

inicializarDarkMode();