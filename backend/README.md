# Cod Invest — Backend

API REST em Java + Spring Boot que vai substituir os dados estáticos de `../data/*.ts` por um banco real.

## Stack

- **Java 17** · **Maven**
- **Spring Boot 4.1** (Spring Web/MVC, Spring Data JPA)
- **PostgreSQL**
- Pacote base: `br.com.codinvest.backend`

## Planejado

- **Modelo de dados:** baseado nas interfaces `Fii`, `Indicador`, `Noticia` e `Provento` já validadas pelo front (`../data/*.ts`), migrando campos financeiros de string formatada para tipos numéricos (`BigDecimal`)
- **Camadas:** `controller` / `service` / `repository` / `model` / `dto` / `mapper`
- **Endpoints (contrato inicial, espelhando o `json-server` da versão anterior):**
  - `GET /fiis`
  - `GET /fiis/{id}`
  - `GET /indicadores`
  - `GET /noticias`
  - `GET /proventos?fiiId={id}`

## Setup

```bash
./mvnw spring-boot:run
```

Configurar a conexão com o banco em `src/main/resources/application.properties` antes de rodar.
