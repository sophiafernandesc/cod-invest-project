/* ==========================================================
   app.js — Cod Invest
   Dados via JSON Server (fetch/async-await)
   Endpoints:
     GET /fiis          → todos os FIIs
     GET /fiis/:id      → FII específico
     GET /indicadores   → indicadores de mercado
     GET /noticias      → notícias
   ========================================================== */

const API = 'http://localhost:3000';

// Cache local dos FIIs para autocomplete e filtros sem refetch
let cacheFiis = [];

// =============================================================
//  UTILITÁRIOS
// =============================================================
function formatarCotistas(n) {
  return Number(n).toLocaleString('pt-BR');
}

function avatarSetor(setor, titulo, extra = '') {
  const classe = setor.toLowerCase().replace(/\s/g, '-');
  return `<div class="fii-avatar fii-avatar--${classe} ${extra}">${titulo}</div>`;
}

// =============================================================
//  ROTEADOR
// =============================================================
if (document.getElementById('container-cards')) iniciarHome();
if (document.getElementById('detalhe-titulo'))   iniciarDetalhes();

// =============================================================
//  HOME
// =============================================================
async function iniciarHome() {
  try {
    const [fiis, indicadores, noticias] = await Promise.all([
      fetch(`${API}/fiis`).then(r => r.json()),
      fetch(`${API}/indicadores`).then(r => r.json()),
      fetch(`${API}/noticias`).then(r => r.json())
    ]);

    cacheFiis = fiis;

    const destaques = [...fiis].sort((a, b) => b.cotistas - a.cotistas).slice(0, 8);
    renderCards(destaques);
    renderIndicadores(indicadores);
    renderNoticias(noticias);
    inicializarFiltroSetor();
    inicializarBusca();

  } catch (erro) {
    console.error('Erro ao carregar home:', erro);
    document.getElementById('container-cards').innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-danger">Servidor não encontrado. Execute: <code>npm start</code></p>
      </div>`;
  }
}

// =============================================================
//  RENDERIZAÇÃO — HOME
// =============================================================
function renderCards(lista) {
  const container = document.getElementById('container-cards');
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
          ${avatarSetor(item.setor, item.titulo)}
          <h3>${item.titulo}</h3>
          <p class="setor-badge">${item.setor}</p>
          <div class="card-indicadores-mini">
            <span><strong>DY</strong> ${item.dy}</span>
            <span><strong>P/VP</strong> ${item.pvp}</span>
          </div>
        </article>
      </a>
    </div>
  `).join('');
}

function renderIndicadores(indicadores) {
  const container = document.getElementById('container-indicadores');
  if (!container) return;
  container.innerHTML = indicadores.map(ind => `
    <div class="card-indicador">
      <strong>${ind.nome}</strong><br>${ind.valor}
    </div>
  `).join('');
}

function renderNoticias(noticias) {
  const container = document.getElementById('container-noticias');
  if (!container) return;
  container.innerHTML = noticias.map(n => `
    <div class="col-12 col-sm-6 col-lg">
      <article class="card-noticia">
        <img src="${n.imagem}" alt="${n.titulo}">
        <div class="card-noticia-caption">
          <span class="card-noticia-categoria">${n.categoria}</span>
          <p class="card-noticia-titulo">${n.titulo}</p>
        </div>
      </article>
    </div>
  `).join('');
}

function atualizarTituloSecao(texto, mostrarBotao = false) {
  const titulo = document.getElementById('titulo-destaques');
  const botao  = document.getElementById('btn-ver-todos');
  if (titulo) titulo.textContent = texto;
  if (botao)  botao.style.display = mostrarBotao ? 'inline-block' : 'none';
}

// =============================================================
//  FILTRO POR SETOR
// =============================================================
function inicializarFiltroSetor() {
  document.querySelectorAll('[data-setor]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const setor     = this.dataset.setor;
      const resultado = cacheFiis.filter(f => f.setor === setor);
      renderCards(resultado);
      atualizarTituloSecao(`FIIs — ${setor}`, true);

      const offcanvas = document.getElementById('menuLateral');
      if (offcanvas) {
        const inst = bootstrap.Offcanvas.getInstance(offcanvas);
        if (inst) inst.hide();
      }
      document.getElementById('secao-destaques')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.getElementById('btn-ver-todos')?.addEventListener('click', () => {
    const destaques = [...cacheFiis].sort((a, b) => b.cotistas - a.cotistas).slice(0, 8);
    renderCards(destaques);
    atualizarTituloSecao('Destaques FIIs', false);
  });
}

// =============================================================
//  BUSCA COM AUTOCOMPLETE
// =============================================================
function inicializarBusca() {
  criarAutocomplete(document.getElementById('busca-navbar'));
  criarAutocomplete(document.getElementById('busca-offcanvas'));
  criarAutocomplete(document.getElementById('busca-principal'));

  document.querySelector('.botao-busca')?.addEventListener('click', function (e) {
    e.preventDefault();
    const termo = document.getElementById('busca-principal')?.value.trim();
    const match = cacheFiis.find(f => f.titulo === termo?.toUpperCase());
    if (match) {
      window.location.href = `detalhes.html?id=${match.id}`;
    } else {
      filtrarCards(termo);
      document.getElementById('secao-destaques')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function criarAutocomplete(inputEl) {
  if (!inputEl) return;

  const lista = document.createElement('ul');
  lista.className = 'autocomplete-lista';
  inputEl.parentElement.style.position = 'relative';
  inputEl.parentElement.appendChild(lista);

  function fechar() { lista.innerHTML = ''; lista.style.display = 'none'; }

  function abrir(sugestoes) {
    lista.innerHTML = sugestoes.map(f => `
      <li class="autocomplete-item" data-id="${f.id}">
        <strong>${f.titulo}</strong>
        <span class="autocomplete-setor">${f.setor}</span>
      </li>
    `).join('');
    lista.style.display = sugestoes.length ? 'block' : 'none';
    lista.querySelectorAll('.autocomplete-item').forEach(item => {
      item.addEventListener('mousedown', e => {
        e.preventDefault();
        window.location.href = `detalhes.html?id=${item.dataset.id}`;
      });
    });
  }

  inputEl.addEventListener('input', function () {
    const termo   = this.value.trim().toUpperCase();
    const outroId = inputEl.id === 'busca-navbar' ? 'busca-offcanvas' : 'busca-navbar';
    const outro   = document.getElementById(outroId);
    if (outro) outro.value = this.value;
    if (termo.length < 2) { fechar(); filtrarCards(''); return; }
    const sugestoes = cacheFiis.filter(f =>
      f.titulo.includes(termo) ||
      f.setor.toUpperCase().includes(termo) ||
      f.gestora.toUpperCase().includes(termo)
    ).slice(0, 6);
    abrir(sugestoes);
    filtrarCards(this.value.trim());
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { fechar(); return; }
    if (e.key === 'Enter') {
      const match = cacheFiis.find(f => f.titulo === this.value.trim().toUpperCase());
      if (match) window.location.href = `detalhes.html?id=${match.id}`;
      fechar();
    }
  });

  inputEl.addEventListener('blur', () => setTimeout(fechar, 150));
}

function filtrarCards(termo) {
  if (!termo) {
    const destaques = [...cacheFiis].sort((a, b) => b.cotistas - a.cotistas).slice(0, 8);
    renderCards(destaques);
    atualizarTituloSecao('Destaques FIIs', false);
    return;
  }
  const termoUpper = termo.toUpperCase();
  const resultado  = cacheFiis.filter(f =>
    f.titulo.includes(termoUpper) ||
    f.setor.toUpperCase().includes(termoUpper) ||
    f.gestora.toUpperCase().includes(termoUpper)
  );
  atualizarTituloSecao(`Resultados para "${termo}"`, true);
  renderCards(resultado);
}

// =============================================================
//  DETALHES
// =============================================================
async function iniciarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  if (!id) { window.location.href = 'index.html'; return; }

  try {
    const [fii, todos] = await Promise.all([
      fetch(`${API}/fiis/${id}`).then(r => r.json()),
      fetch(`${API}/fiis`).then(r => r.json())
    ]);

    renderDetalhe(fii);
    renderRelacionados(todos.filter(f => f.setor === fii.setor && f.id !== fii.id));

  } catch (erro) {
    console.error('Erro ao carregar detalhes:', erro);
  }
}

function renderDetalhe(fii) {
  document.title = fii.titulo + ' — Cod Invest';

  const imgEl = document.getElementById('detalhe-imagem');
  if (imgEl) imgEl.outerHTML = avatarSetor(fii.setor, fii.titulo, 'fii-avatar--detalhe');

  document.getElementById('detalhe-titulo').textContent     = fii.titulo;
  document.getElementById('detalhe-setor').textContent      = fii.setor;
  document.getElementById('detalhe-descricao').textContent  = fii.descricao;
  document.getElementById('detalhe-cotacao').textContent    = fii.cotacao;
  document.getElementById('detalhe-dy').textContent         = fii.dy;
  document.getElementById('detalhe-pvp').textContent        = fii.pvp;
  document.getElementById('detalhe-rendimento').textContent = fii.ultimoRendimento;
  document.getElementById('detalhe-patrimonio').textContent = fii.patrimonio;
  document.getElementById('detalhe-cotistas').textContent   = formatarCotistas(fii.cotistas);
  document.getElementById('detalhe-gestora').textContent    = fii.gestora;
  document.getElementById('detalhe-inicio').textContent     = fii.dataInicio;
  document.getElementById('detalhe-taxa').textContent       = fii.taxaAdm;
  document.getElementById('detalhe-imoveis').textContent    = fii.imoveis;

  const vacanciaSection = document.getElementById('secao-vacancia');
  if (vacanciaSection) {
    if (fii.vacanciaFisica === '—') {
      vacanciaSection.style.display = 'none';
    } else {
      document.getElementById('detalhe-vac-fisica').textContent     = fii.vacanciaFisica;
      document.getElementById('detalhe-vac-financeira').textContent = fii.vacanciaFinanceira;
    }
  }

  if (fii.dyHistorico) renderGraficoDY(fii.dyHistorico);
}

function renderGraficoDY(historico) {
  const canvas = document.getElementById('grafico-dy');
  if (!canvas) return;
  const meses = ['Mai','Jun','Jul','Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr'];
  new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: meses,
      datasets: [{
        label: 'DY (%)', data: historico,
        borderColor: '#D9B573', backgroundColor: 'rgba(217,181,115,0.12)',
        borderWidth: 2.5, pointBackgroundColor: '#D9B573',
        pointBorderColor: '#fff', pointBorderWidth: 2,
        pointRadius: 4, pointHoverRadius: 6, tension: 0.4, fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#020659', titleColor: '#D9B573', bodyColor: '#fff',
          callbacks: { label: ctx => '  DY: ' + ctx.parsed.y.toFixed(1) + '%' }
        }
      },
      scales: {
        y: { ticks: { callback: v => v + '%', color: '#888', font: { size: 11 } }, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { ticks: { color: '#888', font: { size: 11 } }, grid: { display: false } }
      }
    }
  });
}

function renderRelacionados(relacionados) {
  const secao     = document.getElementById('secao-relacionados');
  const container = document.getElementById('container-relacionados');
  if (!container) return;

  if (relacionados.length === 0) {
    if (secao) secao.style.display = 'none';
    return;
  }

  container.innerHTML = relacionados.map(f => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a href="detalhes.html?id=${f.id}" class="text-decoration-none card-link">
        <article class="artigo-card d-flex flex-column">
          ${avatarSetor(f.setor, f.titulo)}
          <h3>${f.titulo}</h3>
          <p class="setor-badge">${f.setor}</p>
          <div class="card-indicadores-mini">
            <span><strong>DY</strong> ${f.dy}</span>
            <span><strong>P/VP</strong> ${f.pvp}</span>
          </div>
        </article>
      </a>
    </div>
  `).join('');
}

// =============================================================
//  DARK MODE + PAINEL DE CONFIGURAÇÕES
// =============================================================
function inicializarDarkMode() {
  const btnClaro  = document.getElementById('tema-claro');
  const btnEscuro = document.getElementById('tema-escuro');
  const temaSalvo   = localStorage.getItem('tema');
  const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  aplicarTema(temaSalvo || (prefereDark ? 'dark' : 'light'));
  btnClaro?.addEventListener('click',  () => aplicarTema('light'));
  btnEscuro?.addEventListener('click', () => aplicarTema('dark'));
}

function aplicarTema(tema) {
  const html      = document.documentElement;
  const btnClaro  = document.getElementById('tema-claro');
  const btnEscuro = document.getElementById('tema-escuro');
  html.setAttribute('data-theme', tema);
  localStorage.setItem('tema', tema);
  if (tema === 'dark') {
    btnClaro?.classList.remove('ativo');
    btnEscuro?.classList.add('ativo');
  } else {
    btnEscuro?.classList.remove('ativo');
    btnClaro?.classList.add('ativo');
  }
}

inicializarDarkMode();