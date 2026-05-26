import Link from 'next/link';

const PROJECTS = [
  {
    name: 'Currículo & Portfólio Web',
    desc: 'Site de portfólio pessoal construído com Next.js 14 e React 18. Inclui navegação entre páginas (Home, Sobre, Exp. Acadêmica, Exp. Profissional, Projetos e Jogo da Forca).',
    techs: ['Next.js 14', 'React 18', 'TypeScript', 'CSS3'],
    status: 'Concluído',
    statusClass: 'badge-green',
    typeClass: 'badge-blue',
    type: 'Web',
  },
  {
    name: 'Jogo da Forca',
    desc: 'Implementação do clássico jogo da forca com interface CSS responsiva. Boneco desenhado via HTML/CSS puro, controle de estado com React Hooks e feedback visual em tempo real.',
    techs: ['React', 'TypeScript', 'CSS3', 'React Hooks'],
    status: 'Concluído',
    statusClass: 'badge-green',
    typeClass: 'badge-blue',
    type: 'Web',
    repo: null,
    internal: '/forca',
  },
  {
    name: 'API REST com Node.js',
    desc: 'API de gerenciamento de tarefas com autenticação JWT, rotas protegidas e integração com banco de dados MongoDB.',
    techs: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    status: 'Em desenvolvimento',
    statusClass: 'badge-amber',
    typeClass: 'badge-purple',
    type: 'Backend',
    repo: null,
  },
  {
    name: 'Dashboard Administrativo',
    desc: 'Painel de controle com gráficos e tabelas dinâmicas, desenvolvido com React e integrado a uma API REST.',
    techs: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    status: 'Em desenvolvimento',
    statusClass: 'badge-amber',
    typeClass: 'badge-blue',
    type: 'Web',
    repo: null,
  },
];

export default function ProjetosPage() {
  return (
    <main className="container">
      <section className="card">
        <h1>Projetos</h1>
        <p>
          Projetos desenvolvidos durante minha trajetória acadêmica e profissional,
          abrangendo desenvolvimento web e backend.
        </p>
      </section>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.name} className="project-card">
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className={`badge ${p.typeClass}`}>{p.type}</span>
              <span className={`badge ${p.statusClass}`}>{p.status}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <ul className="tech-list" style={{ marginTop: 'auto' }}>
              {p.techs.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-footer">
              {p.internal && (
                <Link href={p.internal} className="project-link">
                  Abrir →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
