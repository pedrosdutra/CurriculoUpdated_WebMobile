export default function SobrePage() {
  const webTechs = [
    { name: 'Next.js 14', desc: 'Framework React com SSR e roteamento baseado em arquivos' },
    { name: 'React 18', desc: 'Biblioteca para construção de interfaces reativas e componentizadas' },
    { name: 'TypeScript', desc: 'Superset do JavaScript com tipagem estática para maior segurança' },
    { name: 'CSS3', desc: 'Estilização com variáveis CSS, gradientes, flexbox e grid' },
  ];

  return (
    <main className="container">
      <section className="card">
        <h1>Sobre Mim</h1>
        <p>
          Sou desenvolvedor com foco em React, Next.js e TypeScript. Tenho experiência na
          criação de interfaces responsivas, aplicações web modernas e integração com APIs
          REST. Este portfólio demonstra habilidades em desenvolvimento front-end utilizando
          as principais tecnologias do mercado.
        </p>
        <p>
          Busco constantemente aprimorar minhas habilidades técnicas e aplicar boas práticas
          de código limpo, acessibilidade e performance em todos os projetos.
        </p>
      </section>

      <section className="card">
        <h2>Tecnologias utilizadas neste projeto</h2>
        <p style={{ fontSize: '0.9rem', color: '#6b7cc4', marginBottom: '1rem' }}>
          Stack completa usada para desenvolver este portfólio
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {webTechs.map((t) => (
            <div
              key={t.name}
              style={{
                background: 'rgba(14,24,64,0.7)',
                border: '1px solid #3b4f8a',
                borderRadius: 10,
                padding: '0.85rem 1rem',
              }}
            >
              <strong style={{ color: '#7e9cff' }}>{t.name}</strong>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.875rem', color: '#c4cfff' }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h2>Outras Habilidades</h2>
        <ul>
          <li>HTML5 semântico e acessível</li>
          <li>CSS Modules / SASS / Styled Components</li>
          <li>Integração com APIs REST (fetch / axios)</li>
          <li>Git & GitHub — controle de versão e colaboração</li>
          <li>Node.js — desenvolvimento back-end básico</li>
          <li>Figma — prototipagem e design de interfaces</li>
        </ul>
      </section>
    </main>
  );
}
