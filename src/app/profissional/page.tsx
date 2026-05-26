export default function ProfissionalPage() {
  return (
    <main className="container">
      <section className="card">
        <h1>Experiência Profissional</h1>
        <p>Histórico de trabalhos e atividades profissionais realizadas.</p>
      </section>

      <section className="card">
        <h2>Histórico</h2>

        <div className="timeline-item">
          <h3>Estágio — Desenvolvedor Web</h3>
          <p className="institution">Casa da Bateria</p>
          <div className="timeline-meta">
            <span className="timeline-period">2025 – Em andamento</span>
            <span className="badge badge-blue">Estágio</span>
          </div>
          <p>
            Desenvolvimento e manutenção de aplicações web e mobile, atuando no backend e
            na integração com APIs externas, com versionamento via Git e gerenciamento de
            banco de dados.
          </p>
          <strong style={{ color: '#acc4ff', fontSize: '0.9rem' }}>Atividades</strong>
          <ul className="activity-list">
            <li>Desenvolvimento Web e Mobile</li>
            <li>Desenvolvimento Backend</li>
            <li>Integração de APIs REST</li>
            <li>Versionamento de código com Git e GitHub</li>
            <li>Modelagem e gerenciamento de Banco de Dados</li>
          </ul>
        </div>

        <div className="timeline-item">
          <h3>Freelancer — Desenvolvimento Web</h3>
          <p className="institution">Projetos Autônomos</p>
          <div className="timeline-meta">
            <span className="timeline-period">2023</span>
            <span className="badge badge-blue">Freelance</span>
          </div>
          <p>
            Criação de sites e landing pages para clientes variados, com foco em performance,
            responsividade e SEO básico.
          </p>
          <strong style={{ color: '#acc4ff', fontSize: '0.9rem' }}>Atividades</strong>
          <ul className="activity-list">
            <li>Desenvolvimento de landing pages responsivas</li>
            <li>Integração com formulários de contato</li>
            <li>Otimização de imagens e assets para web</li>
            <li>Entrega de projetos dentro dos prazos acordados</li>
          </ul>
          <ul className="tech-list" style={{ marginTop: '0.75rem' }}>
            <li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Next.js</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
