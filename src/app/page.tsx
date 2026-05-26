import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Meu Currículo & Portfólio</h1>
        <p>
          Desenvolvedor Web com foco em React, Next.js e TypeScript. Este portfólio foi
          desenvolvido com Next.js 14, React 18, TypeScript e CSS3. O layout foi planejado
          no Figma e o código escrito do zero.
        </p>
      </section>

      <section className="cliente">
        <h2>Sobre Mim</h2>
        <p>
          Desenvolvedor com experiência em criação de interfaces responsivas, integração
          com APIs REST e desenvolvimento mobile. Apaixonado por boas práticas, código
          limpo e UX de qualidade.
        </p>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>HTML5 / CSS3 / SASS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="quick-actions">
        <h2>Ações Rápidas</h2>
        <div className="quick-nav">
          <Link href="/academica"    className="btn">Exp. Acadêmica</Link>
          <Link href="/profissional" className="btn">Exp. Profissional</Link>
          <Link href="/projetos"     className="btn">Projetos</Link>
          <Link href="/forca"        className="btn">Jogo da Forca 🎮</Link>
          <Link href="/sobre"        className="btn">Sobre</Link>
        </div>
      </section>
    </main>
  );
}

