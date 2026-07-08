// app/layout.tsx
// Este é o layout raiz — envolve TODAS as páginas da aplicação.
// O que você colocar aqui (navbar, footer) aparece em todas as rotas.
// O {children} é onde cada página (page.tsx) é injetada.

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SCRIPT_INICIALIZAR_TEMA } from "@/lib/tema";

export const metadata: Metadata = {
  title: "Cod Invest — Consulta de FIIs",
  description: "Painel de consulta de Fundos Imobiliários",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Aplica o tema salvo antes da hidratação, evitando flash de tema errado */}
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_INICIALIZAR_TEMA }} />
      </head>
      <body className="min-h-screen bg-[#F4F6F8] text-gray-800 antialiased dark:bg-[#010440] dark:text-[#e8e8e8]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}