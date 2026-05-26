'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/academica', label: 'Exp. Acadêmica' },
  { href: '/profissional', label: 'Exp. Profissional' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/forca', label: 'Jogo da Forca' },
  { href: '/sobre', label: 'Sobre' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand" onClick={() => setOpen(false)}>
        Portfólio
      </Link>

      <button
        className="navbar-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
