const fiis = [
  {
    id: 1,
    titulo: "MXRF11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/1/200/150",
    descricao: "Fundo de recebíveis imobiliários com foco em CRIs de alta qualidade.",
    cotacao: "R$ 10,52",
    dy: "12,4%",
    pvp: "0,95",
    gestora: "Maxi Renda",
    dataInicio: "Jan/2012",
    taxaAdm: "1,10% a.a.",
    patrimonio: "R$ 4,2 bi",
    cotistas: "891.000",
    imoveis: "47 CRIs",
    ultimoRendimento: "R$ 0,11",
    vacanciaFisica: "—",
    vacanciaFinanceira: "—",
    dyHistorico: [10.2, 11.0, 11.5, 12.0, 11.8, 12.1, 12.3, 12.0, 11.9, 12.2, 12.4, 12.4]
  },
  {
    id: 2,
    titulo: "XPCA11",
    setor: "Fiagro",
    imagem: "https://picsum.photos/id/2/200/150",
    descricao: "Fiagro focado em cadeias produtivas agroindustriais e CRAs.",
    cotacao: "R$ 8,71",
    dy: "10,8%",
    pvp: "0,88",
    gestora: "XP Asset",
    dataInicio: "Mar/2021",
    taxaAdm: "1,20% a.a.",
    patrimonio: "R$ 980 mi",
    cotistas: "142.000",
    imoveis: "18 CRAs",
    ultimoRendimento: "R$ 0,09",
    vacanciaFisica: "—",
    vacanciaFinanceira: "—",
    dyHistorico: [9.0, 9.5, 10.0, 10.2, 10.5, 10.8, 10.6, 10.9, 11.0, 10.7, 10.8, 10.8]
  },
  {
    id: 3,
    titulo: "BTCI11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/3/200/150",
    descricao: "Fundo focado em ativos de crédito imobiliário de alta qualidade.",
    cotacao: "R$ 94,30",
    dy: "13,1%",
    pvp: "0,97",
    gestora: "BTG Pactual",
    dataInicio: "Jun/2019",
    taxaAdm: "0,95% a.a.",
    patrimonio: "R$ 2,1 bi",
    cotistas: "310.000",
    imoveis: "38 CRIs",
    ultimoRendimento: "R$ 1,03",
    vacanciaFisica: "—",
    vacanciaFinanceira: "—",
    dyHistorico: [11.5, 12.0, 12.4, 12.8, 13.0, 13.2, 12.9, 13.1, 13.3, 13.0, 13.1, 13.1]
  },
  {
    id: 4,
    titulo: "HGLG11",
    setor: "Tijolo",
    imagem: "https://picsum.photos/id/4/200/150",
    descricao: "Um dos maiores fundos de logística do mercado brasileiro.",
    cotacao: "R$ 157,40",
    dy: "8,2%",
    pvp: "1,05",
    gestora: "CSHG",
    dataInicio: "Fev/2010",
    taxaAdm: "0,60% a.a.",
    patrimonio: "R$ 5,8 bi",
    cotistas: "430.000",
    imoveis: "28 galpões",
    ultimoRendimento: "R$ 1,08",
    vacanciaFisica: "3,2%",
    vacanciaFinanceira: "2,1%",
    dyHistorico: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2, 8.3, 8.1, 8.2, 8.0, 8.2, 8.2]
  },
  {
    id: 5,
    titulo: "KNCR11",
    setor: "Papel",
    imagem: "https://picsum.photos/id/5/200/150",
    descricao: "Fundo de papel gerido pela Kinea com foco em CDI.",
    cotacao: "R$ 106,80",
    dy: "14,2%",
    pvp: "1,01",
    gestora: "Kinea",
    dataInicio: "Jul/2012",
    taxaAdm: "1,25% a.a.",
    patrimonio: "R$ 7,3 bi",
    cotistas: "620.000",
    imoveis: "61 CRIs",
    ultimoRendimento: "R$ 1,26",
    vacanciaFisica: "—",
    vacanciaFinanceira: "—",
    dyHistorico: [12.0, 12.5, 13.0, 13.5, 13.8, 14.0, 14.2, 14.0, 14.1, 14.3, 14.2, 14.2]
  },
  {
    id: 6,
    titulo: "KNRI11",
    setor: "Híbrido",
    imagem: "https://picsum.photos/id/6/200/150",
    descricao: "Fundo híbrido com portfólio diversificado entre lajes corporativas e galpões.",
    cotacao: "R$ 138,20",
    dy: "9,5%",
    pvp: "0,92",
    gestora: "Kinea",
    dataInicio: "Dez/2010",
    taxaAdm: "0,75% a.a.",
    patrimonio: "R$ 3,4 bi",
    cotistas: "290.000",
    imoveis: "19 imóveis",
    ultimoRendimento: "R$ 1,09",
    vacanciaFisica: "5,8%",
    vacanciaFinanceira: "4,3%",
    dyHistorico: [8.5, 8.8, 9.0, 9.2, 9.3, 9.4, 9.5, 9.3, 9.4, 9.5, 9.5, 9.5]
  },
  {
    id: 7,
    titulo: "VISC11",
    setor: "Tijolo",
    imagem: "https://picsum.photos/id/7/200/150",
    descricao: "Fundo de shoppings centers com participação em grandes empreendimentos do Brasil.",
    cotacao: "R$ 103,60",
    dy: "9,1%",
    pvp: "0,87",
    gestora: "Vinci Partners",
    dataInicio: "Nov/2012",
    taxaAdm: "0,80% a.a.",
    patrimonio: "R$ 3,1 bi",
    cotistas: "260.000",
    imoveis: "21 shoppings",
    ultimoRendimento: "R$ 0,79",
    vacanciaFisica: "4,5%",
    vacanciaFinanceira: "3,8%",
    dyHistorico: [7.8, 8.0, 8.3, 8.5, 8.7, 8.9, 9.0, 9.1, 9.0, 9.1, 9.1, 9.1]
  },
  {
    id: 8,
    titulo: "BCFF11",
    setor: "Híbrido",
    imagem: "https://picsum.photos/id/8/200/150",
    descricao: "Fundo de fundos que investe em cotas de outros FIIs listados na B3.",
    cotacao: "R$ 75,20",
    dy: "11,3%",
    pvp: "0,91",
    gestora: "BTG Pactual",
    dataInicio: "Abr/2010",
    taxaAdm: "0,65% a.a.",
    patrimonio: "R$ 1,8 bi",
    cotistas: "195.000",
    imoveis: "32 FIIs",
    ultimoRendimento: "R$ 0,71",
    vacanciaFisica: "—",
    vacanciaFinanceira: "—",
    dyHistorico: [9.8, 10.2, 10.5, 10.8, 11.0, 11.2, 11.3, 11.1, 11.2, 11.3, 11.3, 11.3]
  }
];

// ─── HOME ────────────────────────────────────────────────────────────────────
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

// ─── DETALHES ────────────────────────────────────────────────────────────────
if (document.getElementById("detalhe-titulo")) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const fii = fiis.find(item => item.id === id);

  if (fii) {
    document.title = fii.titulo + " — Cod Invest";

    document.getElementById("detalhe-imagem").src             = fii.imagem;
    document.getElementById("detalhe-imagem").alt             = "Fundo " + fii.titulo;
    document.getElementById("detalhe-titulo").textContent     = fii.titulo;
    document.getElementById("detalhe-setor").textContent      = fii.setor;
    document.getElementById("detalhe-descricao").textContent  = fii.descricao;
    document.getElementById("detalhe-cotacao").textContent    = fii.cotacao;
    document.getElementById("detalhe-dy").textContent         = fii.dy;
    document.getElementById("detalhe-pvp").textContent        = fii.pvp;
    document.getElementById("detalhe-rendimento").textContent = fii.ultimoRendimento;
    document.getElementById("detalhe-patrimonio").textContent = fii.patrimonio;
    document.getElementById("detalhe-cotistas").textContent   = fii.cotistas;
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
  const ctx = document.getElementById("grafico-dy").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: meses,
      datasets: [{
        label: "DY (%)",
        data: historico,
        borderColor: "#D9B573",
        backgroundColor: "rgba(217,181,115,0.12)",
        borderWidth: 2.5,
        pointBackgroundColor: "#D9B573",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#020659",
          titleColor: "#D9B573",
          bodyColor: "#fff",
          callbacks: {
            label: ctx => "  DY: " + ctx.parsed.y.toFixed(1) + "%"
          }
        }
      },
      scales: {
        y: {
          ticks: { callback: v => v + "%", color: "#888", font: { size: 11 } },
          grid: { color: "rgba(0,0,0,0.05)" }
        },
        x: {
          ticks: { color: "#888", font: { size: 11 } },
          grid: { display: false }
        }
      }
    }
  });
}

function renderRelacionados(fiiAtual) {
  const relacionados = fiis.filter(f => f.setor === fiiAtual.setor && f.id !== fiiAtual.id);
  const container = document.getElementById("container-relacionados");

  if (relacionados.length === 0) {
    document.getElementById("secao-relacionados").style.display = "none";
    return;
  }

  container.innerHTML = relacionados.map(f => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a href="detalhes.html?id=${f.id}" class="text-decoration-none card-link">
        <article class="artigo-card d-flex flex-column">
          <img src="${f.imagem}" alt="Fundo ${f.titulo}">
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
