import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e3d8c7] bg-[#2f3027] pb-6 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.6fr_1fr_1fr] gap-12 pt-[72px] max-[900px]:grid-cols-2 max-[900px]:gap-8 max-[620px]:w-[min(1180px,calc(100%_-_28px))] max-[620px]:grid-cols-1 max-[620px]:pt-14">
        <div className="max-[900px]:col-span-2 max-[620px]:col-span-1">
          <div className="font-serif text-2xl font-semibold">GabiCraft</div>
          <p className="mt-4 max-w-[380px] leading-7 text-[#d7d0c2]">
            Арт портфолио с топла слънчогледова палитра, чиста композиция и място за оригинални картини.
          </p>
        </div>

        <div>
          <div className="mb-[18px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#aaa493]">Навигация</div>
          <div className="grid gap-3 text-sm text-[#ece7dd]">
            <Link className="hover:text-white" href="/">Начало</Link>
            <Link className="hover:text-white" href="/project">Галерия</Link>
            <Link className="hover:text-white" href="/about">За автора</Link>
            <Link className="hover:text-white" href="/contact">Контакти</Link>
          </div>
        </div>

        <div>
          <div className="mb-[18px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#aaa493]">Връзки</div>
          <div className="grid gap-3 text-sm text-[#ece7dd]">
            <a className="hover:text-white" href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer">Изработка: Viktor Iliev ↗</a>
            <a className="hover:text-white" href="https://github.com/viktor132607/GabiCraft" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 w-[min(1180px,calc(100%_-_40px))] border-t border-[#4a4b40] pt-[22px] text-xs text-[#a9a596] max-[620px]:mt-9 max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
        © {new Date().getFullYear()} GabiCraft
      </div>
    </footer>
  );
}
