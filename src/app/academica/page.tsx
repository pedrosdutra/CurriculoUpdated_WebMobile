export default function AcademicaPage() {
  return (
    <main className="container">
      <section className="card">
        <h1>Experiência Acadêmica</h1>
        <p>Formação e cursos realizados ao longo da minha trajetória.</p>
      </section>

      <section className="card">
        <h2>Graduação</h2>
        <div className="timeline-item">
          <h3>Ciência da Computação</h3>
          <div className="timeline-meta">
            <span className="timeline-period">2022 – 2026</span>
            <span className="badge badge-blue">Em andamento</span>
          </div>

          <strong style={{ color: '#acc4ff', fontSize: '0.9rem' }}>Disciplinas cursadas</strong>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '4px 0 2px' }}>2022.2</p>
          <ul className="activity-list">
            <li>Eletrônica Básica</li>
            <li>Filosofia e Conhecimento Tecnológico</li>
            <li>Introdução à Ciência da Computação</li>
            <li>Lógica Matemática</li>
            <li>Português Instrumental II</li>
            <li>Programação I</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2023.1</p>
          <ul className="activity-list">
            <li>Circuitos Digitais</li>
            <li>Humanidade e Transcendência</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2023.2</p>
          <ul className="activity-list">
            <li>Álgebra Linear I</li>
            <li>Humanismo e Cidadania</li>
            <li>Introdução à Robótica</li>
            <li>Programação Estruturada</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2024.1</p>
          <ul className="activity-list">
            <li>Cálculo Diferencial e Integral I</li>
            <li>Estatística e Probabilidade</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2024.2</p>
          <ul className="activity-list">
            <li>Cálculo Diferencial e Integral II</li>
            <li>Estrutura de Dados I</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2025.1</p>
          <ul className="activity-list">
            <li>Estrutura de Dados II</li>
            <li>Informática e Sociedade</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2025.2</p>
          <ul className="activity-list">
            <li>Linguagens Formais</li>
            <li>Programação Orientada a Objetos</li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>2026.1</p>
          <ul className="activity-list">
            <li>Arquitetura e Organização de Computadores <span style={{ fontSize: '0.75rem', color: '#6699cc' }}>(Matriculado)</span></li>
            <li>Programação Web e Mobile <span style={{ fontSize: '0.75rem', color: '#6699cc' }}>(Matriculado)</span></li>
            <li>Análise de Algoritmos <span style={{ fontSize: '0.75rem', color: '#6699cc' }}>(Matriculado)</span></li>
          </ul>

          <p style={{ color: '#8899cc', fontSize: '0.8rem', margin: '8px 0 2px' }}>Equivalências</p>
          <ul className="activity-list">
            <li>Programação II</li>
            <li>Programação III</li>
            <li>Arquitetura e Organização de Computadores I</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Cursos Complementares</h2>
        <div className="timeline-item">
          <h3>React &amp; Next.js — Desenvolvimento Web Moderno</h3>
          <div className="timeline-meta">
            <span className="timeline-period">2025</span>
            <span className="badge badge-green">Concluído</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#c4cfff' }}>
            Plataforma de ensino online
          </p>
        </div>
        <div className="timeline-item">
          <h3>TypeScript do Zero ao Avançado</h3>
          <div className="timeline-meta">
            <span className="timeline-period">2025</span>
            <span className="badge badge-green">Concluído</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#c4cfff' }}>
            Plataforma de ensino online
          </p>
        </div>
        <div className="timeline-item">
          <h3>Análise de Dados — Fundamentos</h3>
          <div className="timeline-meta">
            <span className="timeline-period">2023</span>
            <span className="badge badge-green">Concluído</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#c4cfff' }}>
            ENAP — Escola Nacional de Administração Pública · 128h
          </p>
        </div>
        <div className="timeline-item">
          <h3>Git &amp; GitHub — Controle de Versão</h3>
          <div className="timeline-meta">
            <span className="timeline-period">2022</span>
            <span className="badge badge-green">Concluído</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#c4cfff' }}>
            Plataforma de ensino online
          </p>
        </div>
      </section>
    </main>
  );
}
