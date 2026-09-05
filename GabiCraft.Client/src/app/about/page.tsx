export default function AboutPage() {
  return (
    <section className="section page-hero">
      <div className="container narrow">
        <span className="eyebrow">About</span>
        <h1>GabiCraft</h1>
        <p className="hero-copy">
          GabiCraft is currently a clean technical foundation: enough structure to build on, without prematurely locking the project into a heavy interface or complex domain model.
        </p>
        <div className="info-list">
          <div><strong>Interface</strong><span>Minimal visual language, clear hierarchy and responsive navigation.</span></div>
          <div><strong>Architecture</strong><span>Separate Next.js client and ASP.NET Core API with PostgreSQL persistence.</span></div>
          <div><strong>Next steps</strong><span>Ready for real product features, authentication, administration and domain-specific workflows.</span></div>
        </div>
      </div>
    </section>
  );
}
