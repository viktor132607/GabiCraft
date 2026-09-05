import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">GabiCraft</div>
          <p className="footer-copy">
            A clean full-stack foundation for the next stage of the project.
          </p>
        </div>

        <div>
          <div className="footer-title">Navigation</div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/project">Project</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="footer-title">Links</div>
          <div className="footer-links">
            <a href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer">
              Viktor Iliev — Portfolio ↗
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
