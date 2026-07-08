// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#020659] shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            <span className="text-[#D9B573]">Cod</span> Invest
          </span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-white">
          <li>
            <Link href="/" className="transition hover:text-[#D9B573]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="transition hover:text-[#D9B573]">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}