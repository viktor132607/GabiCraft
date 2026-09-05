const works = [
  { title: "Картина 01", className: "art-one" },
  { title: "Картина 02", className: "art-two" },
  { title: "Картина 03", className: "art-three" },
  { title: "Картина 04", className: "art-four" },
  { title: "Картина 05", className: "art-five" },
  { title: "Картина 06", className: "art-six" },
];

export default function ProjectPage() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Галерия</span>
          <h1>Избрани творби</h1>
          <p>Плейсхолдъри за картините с различни композиции и пропорции, готови за замяна с реални изображения.</p>
        </div>

        <div className="art-grid gallery-full">
          {works.map((work, index) => (
            <article className="art-card" key={work.title}>
              <div className={`art-placeholder ${work.className}`} aria-label={`Плейсхолдър ${work.title}`}>
                <span className="art-number">0{index + 1}</span>
              </div>
              <div className="art-meta">
                <h3>{work.title}</h3>
                <span>Авторска творба · плейсхолдър</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
