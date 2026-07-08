// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 bg-[#020659] shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Hamburguer — mobile */}
        <button
          type="button"
          className="text-white lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(true)}
        >
          <IconeMenu />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={fecharTudo}>
          <Image src="/logo.png" alt="Logo Cod Invest" width={32} height={16} />
          <span className="text-xl font-bold text-white">
            <span className="text-[#D9B573]">Cod</span> Invest
          </span>
        </Link>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
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
            {fiisAberto && (
              <ul className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white py-2 text-[#020659] shadow-lg">
                {SETORES.map((setor) => (
                  <li key={setor}>
                    <Link
                      href={`/?setor=${encodeURIComponent(setor)}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setFiisAberto(false)}
                    >
                      {setor}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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

        {/* Perfil */}
        <button
          type="button"
          className="text-white transition hover:text-[#D9B573]"
          aria-label="Configurações"
          onClick={() => setPerfilAberto(true)}
        >
          <IconePerfil />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={fecharTudo}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-white p-4 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={fecharTudo}>
                <Image src="/logo.png" alt="Logo Cod Invest" width={28} height={14} />
                <span className="font-bold text-[#020659]">
                  <span className="text-[#D9B573]">Cod</span> Invest
                </span>
              </Link>
              <button type="button" onClick={fecharTudo} aria-label="Fechar menu">
                <IconeFechar className="text-[#020659]" />
              </button>
            </div>

            <ul className="flex flex-col gap-1 text-sm font-medium text-[#020659]">
              <li>
                <Link
                  href="/"
                  className="block rounded px-2 py-2 hover:bg-gray-100"
                  onClick={fecharTudo}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-gray-100"
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
                {fiisSubmenuAberto && (
                  <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-gray-200 pl-3">
                    {SETORES.map((setor) => (
                      <li key={setor}>
                        <Link
                          href={`/?setor=${encodeURIComponent(setor)}`}
                          className="block rounded px-2 py-2 text-gray-600 hover:bg-gray-100"
                          onClick={fecharTudo}
                        >
                          {setor}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <span className="block px-2 py-2 text-gray-400">Notícias</span>
              </li>
              <li>
                <span className="block px-2 py-2 text-gray-400">Indicadores</span>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="block rounded px-2 py-2 hover:bg-gray-100"
                  onClick={fecharTudo}
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Painel de configurações (perfil) */}
      {perfilAberto && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPerfilAberto(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[90vw] flex-col bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#020659]">
                Configurações
              </h2>
              <button
                type="button"
                onClick={() => setPerfilAberto(false)}
                aria-label="Fechar"
              >
                <IconeFechar className="text-[#020659]" />
              </button>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Conta
              </p>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D3D59] text-white">
                  <IconePerfil className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#020659]">Visitante</p>
                  <p className="text-xs text-gray-500">Não autenticado</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400">Login e cadastro em breve.</p>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Notificações
              </p>
              <p className="text-xs text-gray-400">
                Alertas de preço e proventos em breve.
              </p>
            </div>
          </div>
        </div>
      )}
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
