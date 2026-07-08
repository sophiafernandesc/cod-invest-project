# Cod Invest

Um painel de controle responsivo e intuitivo desenhado de investidor para investidor, com foco exclusivo em Fundos Imobiliários (FIIs).

## Informações Gerais

O mercado de Fundos Imobiliários (FIIs) exige rapidez e clareza. O Cod Invest nasce para transformar a complexidade dos indicadores financeiros em uma experiência visual intuitiva e responsiva. Mais do que um dashboard, é uma central de comando para o investidor moderno que busca monitorar proventos, notícias e oscilações do mercado em tempo real, sem perder o foco no que realmente importa: a rentabilidade.

**Benchmarking:** Status Invest e Corretora Rico (XP Inc.)

---

## Sobre a Migração para Next.js

Esta versão marca a migração do Cod Invest de uma stack Vanilla JS (HTML + CSS + Bootstrap + JSON Server) para **Next.js 16 (App Router)**, com **TypeScript** e **Tailwind CSS v4**.

A reescrita manteve paridade funcional completa com a versão anterior — busca com autocomplete, filtro por setor, carrossel de destaques, indicadores de mercado, dark mode, gráfico de Dividend Yield, FIIs relacionados e proventos recentes — e trouxe ganhos próprios da nova stack: componentização real com React, tipagem estática de ponta a ponta, roteamento por arquivo com rotas dinâmicas (`/fiis/[id]`) e um design system consistente via Tailwind.

O estado final da versão Vanilla JS foi preservado na branch [`v6-vanilla-js`](../../tree/v6-vanilla-js), para referência histórica da evolução do projeto.

---

## Telas da Aplicação

<div align="center">
  <img src="./public/screenshots/home.png" alt="Tela inicial — indicadores, carrossel de destaques e grid de FIIs" width="90%">
  <br><br>
  <img src="./public/screenshots/detalhes.png" alt="Página de detalhes — indicadores do fundo e gráfico de Dividend Yield" width="90%">
  <br><br>
  <img src="./public/screenshots/dark-mode.png" alt="Tema escuro" width="90%">
</div>

<!--
  Adicione os 3 prints em public/screenshots/ com esses nomes
  (home.png, detalhes.png, dark-mode.png) ou ajuste os caminhos acima.
-->

---

## Funcionalidades

* **Busca com Autocomplete:** Filtra FIIs em tempo real por *ticker*, setor ou gestora. Pressionar *Enter* redireciona direto para a página de detalhes.
* **Filtro por Setor:** Dropdown no menu filtra os cards pelas categorias: Tijolo, Papel, Híbrido, Fiagro, Fundo de Fundos (FoF) ou Hoteleiro.
* **Destaques Dinâmicos:** Exibe os 8 FIIs com o maior número de cotistas logo na página inicial (*Home*), com opção de ver todos via filtro.
* **Página de Detalhes Completa:** Apresenta dados essenciais como Cotação, *Dividend Yield* (DY), P/VP, Patrimônio Líquido, Vacância, gráfico histórico de DY, FIIs relacionados do mesmo setor e proventos recentes.
* **Avatares por Setor:** Cards identificados visualmente por cor e *ticker* no lugar de imagens genéricas, facilitando a leitura rápida.
* **Indicadores de Mercado:** *Scroll* horizontal no topo informando variações do Dólar, Ibovespa, CDI, Dow Jones, S&P 500 e Ouro.
* **Modo Escuro:** Alternância de tema persistida entre sessões, sem *flash* de tema errado no carregamento.
* **Layout Responsivo:** *Navbar* com menu mobile nativo e menu *dropdown* fluido no desktop, com transições suaves.

---

## Tecnologias Utilizadas

* **Front-end:** Next.js 16 (App Router), React, TypeScript e Tailwind CSS v4
* **Dados:** Dados estáticos tipados (`data/*.ts`), migrados da API mock (`json-server`) usada na versão anterior
* **Controle de Versão:** Git e GitHub

---

## Estrutura de Branches

O desenvolvimento seguiu uma esteira lógica de evolução, separada pelas seguintes *branches*:

| Branch | Descrição |
|--------|-----------|
| `main` | Código estável e versão de produção — atualmente na versão Next.js |
| `develop` | Branch base para integração contínua de novas *features* |
| `v1-html-css` | Primeira versão: Estrutura estática em HTML e CSS puro |
| `v2-html-css-bootstrap` | Segunda versão: Refatoração de layout integrando o *framework* Bootstrap |
| `v3-javascript-dinamico` | Terceira versão: Inclusão de JS dinâmico renderizando dados de uma base estática/mock |
| `v4-javascript-api` | Quarta versão: Evolução final integrando o painel de FIIs à **brAPI** |
| `v6-vanilla-js` | Estado final da versão Vanilla JS (dark mode, busca, autocomplete, JSON Server), preservado antes da migração para Next.js |

---

## Rodando o Projeto Localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.
