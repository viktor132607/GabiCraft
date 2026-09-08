import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e3d8c7] bg-[#fffdf7] text-[#59657a]">
      <div className="mx-auto w-[min(1180px,calc(100%_-_40px))] py-[72px] max-[620px]:w-[min(1180px,calc(100%_-_28px))] max-[620px]:py-12">
        <div className="grid grid-cols-[1.45fr_0.8fr_1fr] gap-14 max-[900px]:grid-cols-2 max-[900px]:gap-10 max-[620px]:grid-cols-1 max-[620px]:gap-12">
          <div className="max-[900px]:col-span-2 max-[620px]:col-span-1">
            <div className="font-serif text-3xl font-semibold text-[#2d2a22]">GabiCraft</div>
            <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-[#697386]">
              Оригинални картини, арт проекти и ръчно създадени творби с характер и собствен стил.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2a22] text-white transition hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                  <path d="M13.7 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6h1.8V4a24 24 0 0 0-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.2H7.3v3.2h2.9V22h3.5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2a22] text-white transition hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#202534]">Страници</h3>
            <div className="grid gap-4 text-[16px]">
              <Link className="transition hover:text-[#2d2a22]" href="/">Начало</Link>
              <Link className="transition hover:text-[#2d2a22]" href="/project">Галерия</Link>
              <Link className="transition hover:text-[#2d2a22]" href="/about">За автора</Link>
              <Link className="transition hover:text-[#2d2a22]" href="/contact">Контакти</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#202534]">Информация</h3>
            <div className="grid gap-4 text-[16px]">
              <a className="transition hover:text-[#2d2a22]" href="#">Политика за поверителност</a>
              <a className="transition hover:text-[#2d2a22]" href="#">Общи условия</a>
              <a className="transition hover:text-[#2d2a22]" href="#">Бисквитки</a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 text-[16px] max-[620px]:mt-10">
          <a className="flex items-center gap-3 transition hover:text-[#2d2a22]" href="mailto:">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>Контакт по имейл</span>
          </a>
        </div>

        <div className="mt-14 border-t border-[#d9dee7] pt-7 text-center text-sm leading-8 text-[#738097] max-[620px]:mt-10">
          <div>© {new Date().getFullYear()} GabiCraft. Всички права запазени.</div>
          <div>
            Site created by{" "}
            <a
              className="font-semibold text-[#2d2a22] hover:underline"
              href="https://viktor-iliev.site/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Viktor Iliev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
