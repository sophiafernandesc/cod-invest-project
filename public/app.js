const fiis = [
  {
    id: 1,
    titulo: "MXRF11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/1/200/150",
    descricao: "Fundo de recebíveis imobiliários com foco em CRIs de alta qualidade.",
    cotacao: "R$ 10,52",
    dy: "12,4%",
    pvp: "0,95"
  },
  {
    id: 2,
    titulo: "XPCA11",
    setor: "Fiagro",
    imagem: "https://picsum.photos/id/2/200/150",
    descricao: "Fiagro focado em cadeias produtivas agroindustriais e CRAs.",
    cotacao: "R$ 8,71",
    dy: "10,8%",
    pvp: "0,88"
  },
  {
    id: 3,
    titulo: "BTCI11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/3/200/150",
    descricao: "Fundo focado em ativos de crédito imobiliário de alta qualidade.",
    cotacao: "R$ 94,30",
    dy: "13,1%",
    pvp: "0,97"
  },
  {
    id: 4,
    titulo: "HGLG11",
    setor: "Tijolo",
    imagem: "https://picsum.photos/id/4/200/150",
    descricao: "Um dos maiores fundos de logística do mercado brasileiro.",
    cotacao: "R$ 157,40",
    dy: "8,2%",
    pvp: "1,05"
  },
  {
    id: 5,
    titulo: "KNCR11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/5/200/150",
    descricao: "Fundo de papel gerido pela Kinea com foco em CDI.",
    cotacao: "R$ 106,80",
    dy: "14,2%",
    pvp: "1,01"
  },
  {
    id: 6,
    titulo: "KNRI11",
    setor: "Híbrido",
    imagem: "https://picsum.photos/id/6/200/150",
    descricao: "Fundo híbrido com portfólio diversificado entre lajes corporativas e galpões.",
    cotacao: "R$ 138,20",
    dy: "9,5%",
    pvp: "0,92"
  },
  {
    id: 7,
    titulo: "VISC11",
    setor: "Tijolo",
    imagem: "https://picsum.photos/id/7/200/150",
    descricao: "Fundo de shoppings centers com participação em grandes empreendimentos do Brasil.",
    cotacao: "R$ 103,60",
    dy: "9,1%",
    pvp: "0,87"
  },
  {
    id: 8,
    titulo: "BCFF11",
    setor: "Híbrido",
    imagem: "https://picsum.photos/id/8/200/150",
    descricao: "Fundo de fundos que investe em cotas de outros FIIs listados na B3.",
    cotacao: "R$ 75,20",
    dy: "11,3%",
    pvp: "0,91"
  }
];

// Lógica da Home
if (document.getElementById("container-cards")) {
  const containerCards = document.getElementById("container-cards");

  let htmlCards = "";

  fiis.forEach(function(item) {
    htmlCards += `
      <div class="col-12 col-sm-6 col-lg">
        <a href="detalhes.html?id=${item.id}" class="text-decoration-none card-link">
          <article class="artigo-card d-flex flex-column">
            <img src="${item.imagem}" alt="Fundo ${item.titulo}">
            <h3>${item.titulo}</h3>
            <p class="setor-badge">${item.setor}</p>
          </article>
        </a>
      </div>
    `;
  });

  containerCards.innerHTML = htmlCards;
}

// Lógica da página de Detalhes
if (document.getElementById("detalhe-titulo")) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const fii = fiis.find(function(item) {
    return item.id === id;
  });

  if (fii) {
    const imgEl     = document.getElementById("detalhe-imagem");
    const tituloEl  = document.getElementById("detalhe-titulo");
    const setorEl   = document.getElementById("detalhe-setor");
    const descEl    = document.getElementById("detalhe-descricao");
    const cotacaoEl = document.getElementById("detalhe-cotacao");
    const dyEl      = document.getElementById("detalhe-dy");
    const pvpEl     = document.getElementById("detalhe-pvp");

    imgEl.src          = fii.imagem;
    imgEl.alt          = "Fundo " + fii.titulo;
    tituloEl.innerHTML = fii.titulo;
    setorEl.innerHTML  = fii.setor;
    descEl.innerHTML   = fii.descricao;
    cotacaoEl.innerHTML = fii.cotacao;
    dyEl.innerHTML      = fii.dy;
    pvpEl.innerHTML     = fii.pvp;
  }
}
