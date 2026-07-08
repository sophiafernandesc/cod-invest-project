// app/layout.tsx
// Este é o layout raiz — envolve TODAS as páginas da aplicação.
// O que você colocar aqui (navbar, footer) aparece em todas as rotas.
// O {children} é onde cada página (page.tsx) é injetada.

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#F4F6F8] text-gray-800 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}