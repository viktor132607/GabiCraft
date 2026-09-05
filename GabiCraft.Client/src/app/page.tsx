import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Next.js · .NET · PostgreSQL</span>
            <h1>GabiCraft</h1>
            <p className="hero-copy">
              A clean starting point for a modern full-stack product, with a simple interface and a scalable client-server structure.
            </p>
            <div className="actions">
              <Link className="button button-dark" href="/about">About the project</Link>
              <a className="button button-light" href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer">
                My portfolio ↗
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <span className="panel-label">Status</span>
            <strong>Work in progress</strong>
            <p>Next.js frontend, ASP.NET Core Web API and PostgreSQL architecture are in place.</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Foundation</span>
            <h2>Core building blocks</h2>
            <p>The project starts deliberately small and can grow without carrying unnecessary UI or architectural complexity.</p>
          </div>
          <div className="card-grid">
            <article className="card"><span>01</span><h3>Frontend</h3><p>Responsive Next.js pages, reusable UI elements and straightforward navigation.</p></article>
            <article className="card"><span>02</span><h3>API</h3><p>ASP.NET Core Web API ready for domain services, authentication and real endpoints.</p></article>
            <article className="card"><span>03</span><h3>Data</h3><p>PostgreSQL and Entity Framework Core prepared for persistent application data.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-block">
          <div>
            <span className="eyebrow">Architecture</span>
            <h2>Simple client-server separation</h2>
          </div>
          <div className="prose">
            <p>The frontend and backend stay clearly separated while sharing a predictable API contract and development workflow.</p>
            <Link className="text-link" href="/project">View the structure →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
