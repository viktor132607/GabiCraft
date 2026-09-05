import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">GabiCraft</div>
          <p className="footer-copy">
            Арт портфолио с топла слънчогледова палитра, чиста композиция и място за оригинални картини.
          </p>
        </div>

        <div>
          <div className="footer-title">Навигация</div>
          <div className="footer-links">
            <Link href="/">Начало</Link>
            <Link href="/project">Галерия</Link>
            <Link href="/about">За автора</Link>
            <Link href="/contact">Контакти</Link>
          </div>
        </div>

        <div>
          <div className="footer-title">Връзки</div>
          <div className="footer-links">
            <a href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer">
              Изработка: Viktor Iliev ↗
            </a>
            <a href="https://github.com/viktor132607/GabiCraft" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} GabiCraft</div>
    </footer>
  );
}
