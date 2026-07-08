// lib/tema.ts
// Alterna entre tema claro/escuro adicionando/removendo a classe "dark"
// em <html>, com persistência em localStorage.

export type Tema = "light" | "dark";

export function aplicarTema(tema: Tema) {
  document.documentElement.classList.toggle("dark", tema === "dark");
  localStorage.setItem("tema", tema);
}

export function temaAtual(): Tema {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Executado inline no <head>, antes da hidratação, para evitar
// flash de tema errado (FOUC).
export const SCRIPT_INICIALIZAR_TEMA = `
(function () {
  try {
    var salvo = localStorage.getItem('tema');
    var prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var tema = salvo || (prefereDark ? 'dark' : 'light');
    if (tema === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;
