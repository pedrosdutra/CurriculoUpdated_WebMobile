'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, GraduationCap, Briefcase, FolderKanban, Gamepad2, User } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/academica', label: 'Exp. Acadêmica', icon: GraduationCap },
  { href: '/profissional', label: 'Exp. Profissional', icon: Briefcase },
  { href: '/projetos', label: 'Projetos', icon: FolderKanban },
  { href: '/forca', label: 'Jogo da Forca', icon: Gamepad2 },
  { href: '/sobre', label: 'Sobre', icon: User },
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
        {LINKS.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <Icon size={16} strokeWidth={1.8} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
