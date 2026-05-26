import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Currículo & Portfólio',
  description: 'Currículo e portfolio com jogo da forca em Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
