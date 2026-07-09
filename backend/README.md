# Cod Invest — Backend

API REST em Java + Spring Boot que vai substituir os dados estáticos de `../data/*.ts` por um banco real.

## Planejado

- **Stack:** Spring Boot, Spring Data JPA, PostgreSQL
- **Modelo de dados:** baseado nas interfaces `Fii`, `Indicador`, `Noticia` e `Provento` já validadas pelo front (`../data/*.ts`), migrando campos financeiros de string formatada para tipos numéricos
- **Endpoints (contrato inicial, espelhando o `json-server` da versão anterior):**
  - `GET /fiis`
  - `GET /fiis/{id}`
  - `GET /indicadores`
  - `GET /noticias`
  - `GET /proventos?fiiId={id}`

## Setup

Projeto a ser criado via Spring Initializr (IntelliJ) diretamente nesta pasta.
