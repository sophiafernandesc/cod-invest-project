// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BuscaAutocomplete from "@/components/BuscaAutocomplete";
import { aplicarTema, temaAtual, type Tema } from "@/lib/tema";

const SETORES = [
  "Tijolo",
  "Papel",
  "Híbrido",
  "Fiagro",
  "Fundo de Fundos",
  "Hoteleiro",
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [fiisAberto, setFiisAberto] = useState(false);
  const [fiisSubmenuAberto, setFiisSubmenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const [tema, setTema] = useState<Tema>(() =>
    typeof window === "undefined" ? "light" : temaAtual()
  );
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function aoClicarFora(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFiisAberto(false);
      }
    }
    document.addEventListener("mousedown", aoClicarFora);
    return () => document.removeEventListener("mousedown", aoClicarFora);
  }, []);

  function fecharTudo() {
    setMenuAberto(false);
    setFiisAberto(false);
    setFiisSubmenuAberto(false);
  }

  function trocarTema(novoTema: Tema) {
    aplicarTema(novoTema);
    setTema(novoTema);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#020659] shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center px-4 py-3">
        {/* Esquerda: hamburguer (mobile) + logo */}
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            className="text-white lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(true)}
          >
            <IconeMenu />
          </button>

          <Link href="/" className="flex items-center gap-3" onClick={fecharTudo}>
            <Image src="/logo.png" alt="Logo Cod Invest" width={44} height={22} />
            <span className="text-2xl font-bold text-white">
              <span className="text-[#D9B573]">Cod</span> Invest
            </span>
          </Link>
        </div>

        {/* Centro: busca + links — desktop, centralizado de verdade */}
        <div className="hidden items-center gap-6 lg:flex">
          <BuscaAutocomplete className="w-56" />

          <ul className="flex items-center gap-6 text-sm font-medium text-white">
            <li>
              <Link href="/" className="transition hover:text-[#D9B573]">
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-1 transition hover:text-[#D9B573]"
                onClick={() => setFiisAberto((v) => !v)}
                aria-expanded={fiisAberto}
              >
                FIIs
                <span
                  className={`text-xs transition-transform ${fiisAberto ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 w-48 rounded-lg bg-white py-2 text-[#020659] shadow-lg transition duration-150 ease-out dark:bg-[#1D3D59] dark:text-white ${
                  fiisAberto
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                {SETORES.map((setor) => (
                  <li key={setor}>
                    <Link
                      href={`/?setor=${encodeURIComponent(setor)}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#020659]"
                      onClick={() => setFiisAberto(false)}
                    >
                      {setor}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <span className="cursor-default text-white/40">Notícias</span>
            </li>
            <li>
              <span className="cursor-default text-white/40">Indicadores</span>
            </li>
            <li>
              <Link href="/sobre" className="transition hover:text-[#D9B573]">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        {/* Direita: perfil */}
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="text-white transition hover:text-[#D9B573]"
            aria-label="Configurações"
            onClick={() => setPerfilAberto(true)}
          >
            <IconePerfil />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuAberto ? "" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuAberto ? "opacity-100" : "opacity-0"
          }`}
          onClick={fecharTudo}
          aria-hidden="true"
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-white p-4 shadow-xl transition-transform duration-300 ease-out dark:bg-[#0d1b2e] ${
            menuAberto ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={fecharTudo}>
              <Image src="/logo.png" alt="Logo Cod Invest" width={32} height={16} />
              <span className="font-bold text-[#020659] dark:text-white">
                <span className="text-[#D9B573]">Cod</span> Invest
              </span>
            </Link>
            <button type="button" onClick={fecharTudo} aria-label="Fechar menu">
              <IconeFechar className="text-[#020659] dark:text-white" />
            </button>
          </div>

          <BuscaAutocomplete
            className="mb-4 rounded-md bg-[#020659] p-2"
            aoNavegar={fecharTudo}
          />

          <ul className="flex flex-col gap-1 text-sm font-medium text-[#020659] dark:text-white">
            <li>
              <Link
                href="/"
                className="block rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={fecharTudo}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={() => setFiisSubmenuAberto((v) => !v)}
                aria-expanded={fiisSubmenuAberto}
              >
                FIIs
                <span
                  className={`text-xs transition-transform ${fiisSubmenuAberto ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              <ul
                className={`ml-3 flex flex-col gap-1 overflow-hidden border-l border-gray-200 pl-3 transition-all duration-300 ease-out dark:border-white/10 ${
                  fiisSubmenuAberto ? "mt-1 max-h-72 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {SETORES.map((setor) => (
                  <li key={setor}>
                    <Link
                      href={`/?setor=${encodeURIComponent(setor)}`}
                      className="block rounded px-2 py-2 text-gray-600 hover:bg-gray-100 dark:text-white/70 dark:hover:bg-white/10"
                      onClick={fecharTudo}
                    >
                      {setor}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <span className="block px-2 py-2 text-gray-400 dark:text-white/40">
                Notícias
              </span>
            </li>
            <li>
              <span className="block px-2 py-2 text-gray-400 dark:text-white/40">
                Indicadores
              </span>
            </li>
            <li>
              <Link
                href="/sobre"
                className="block rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={fecharTudo}
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Painel de configurações (perfil) */}
      <div className={`fixed inset-0 z-50 ${perfilAberto ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            perfilAberto ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setPerfilAberto(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[90vw] flex-col bg-white p-6 shadow-xl transition-transform duration-300 ease-out dark:bg-[#0d1b2e] ${
            perfilAberto ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#020659] dark:text-[#D9B573]">
              Configurações
            </h2>
            <button
              type="button"
              onClick={() => setPerfilAberto(false)}
              aria-label="Fechar"
            >
              <IconeFechar className="text-[#020659] dark:text-white" />
            </button>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Conta
            </p>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-[#0c1e2e]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D3D59] text-white">
                <IconePerfil className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#020659] dark:text-white">
                  Visitante
                </p>
                <p className="text-xs text-gray-500 dark:text-white/50">
                  Não autenticado
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-400 dark:text-white/40">
              Login e cadastro em breve.
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Aparência
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => trocarTema("light")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  tema === "light"
                    ? "border-[#D9B573] bg-[#D9B573]/10 text-[#020659] dark:text-[#D9B573]"
                    : "border-gray-200 text-gray-500 dark:border-white/10 dark:text-white/50"
                }`}
              >
                <IconeClaro /> Claro
              </button>
              <button
                type="button"
                onClick={() => trocarTema("dark")}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  tema === "dark"
                    ? "border-[#D9B573] bg-[#D9B573]/10 text-[#020659] dark:text-[#D9B573]"
                    : "border-gray-200 text-gray-500 dark:border-white/10 dark:text-white/50"
                }`}
              >
                <IconeEscuro /> Escuro
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Notificações
            </p>
            <p className="text-xs text-gray-400 dark:text-white/40">
              Alertas de preço e proventos em breve.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconeMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function IconePerfil({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function IconeFechar({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconeClaro() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function IconeEscuro() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}
