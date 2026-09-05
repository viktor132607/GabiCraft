export default function ProjectPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Technical structure</span>
          <h1>Project</h1>
          <p>A lightweight but real full-stack setup prepared for continued development.</p>
        </div>
        <div className="card-grid">
          <article className="card"><span>Frontend</span><h3>Next.js</h3><p>App Router, TypeScript, reusable UI components and Axios API access.</p></article>
          <article className="card"><span>Backend</span><h3>ASP.NET Core</h3><p>.NET 10 Web API with separate Domain and Data projects.</p></article>
          <article className="card"><span>Database</span><h3>PostgreSQL</h3><p>Entity Framework Core, Npgsql and Docker Compose for local development.</p></article>
        </div>
      </div>
    </section>
  );
}
