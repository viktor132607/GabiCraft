import Link from "next/link";

const works = [
  { title: "Картина 01", className: "art-one" },
  { title: "Картина 02", className: "art-two" },
  { title: "Картина 03", className: "art-three" },
];

export default function Home() {
  return (
    <>
      <section className="hero section art-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Живопис · Цвят · Светлина</span>
            <h1>Изкуство, което носи слънце.</h1>
            <p className="hero-copy">
              GabiCraft е арт портфолио за картини и авторски творби, изградено около топли цветове, естествени форми и чисто представяне на работите.
            </p>
            <div className="actions">
              <Link className="button button-dark" href="/project">Виж галерията</Link>
              <Link className="button button-light" href="/about">За автора</Link>
            </div>
          </div>

          <div className="hero-art" aria-label="Декоративен плейсхолдър за картина">
            <div className="sunflower-art" aria-hidden="true">
              <span className="sunflower-core" />
            </div>
            <div className="art-caption">
              <span>Featured work</span>
              <strong>Плейсхолдър за картина</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Избрани творби</span>
            <h2>Галерия</h2>
            <p>Временни визуални плейсхолдъри, които могат директно да бъдат заменени с реалните картини.</p>
          </div>

          <div className="art-grid">
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

          <div className="section-action">
            <Link className="text-link" href="/project">Разгледай цялата галерия →</Link>
          </div>
        </div>
      </section>

      <section className="section section-muted artist-note">
        <div className="container split-block">
          <div>
            <span className="eyebrow">GabiCraft</span>
            <h2>Топло, лично, естествено</h2>
          </div>
          <div className="prose">
            <p>
              Визията използва слънчогледово жълто, охра, маслинено зелено и кремав фон. Декоративните елементи остават фини, за да не отнемат вниманието от самите картини.
            </p>
            <Link className="text-link" href="/contact">Контакти →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
