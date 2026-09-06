"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Начало" },
  { href: "/project", label: "Галерия" },
  { href: "/about", label: "За автора" },
  { href: "/contact", label: "Контакти" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfcf] bg-[#fffdf7]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] w-[min(1240px,calc(100%_-_40px))] items-center justify-between gap-6 max-[620px]:w-[min(1240px,calc(100%_-_28px))]">
        <Link href="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d8c48d] bg-[#f4c84b] text-lg text-[#4b3a1f]">✦</span>
          <span className="font-serif text-xl font-semibold tracking-[-0.02em] text-[#2d2a22]">GabiCraft</span>
        </Link>

        <nav className="flex items-center gap-7 max-[820px]:hidden" aria-label="Основна навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b py-[27px] text-sm font-semibold transition-colors ${pathname === item.href ? "border-[#b88121] text-[#7e5b1e]" : "border-transparent text-[#70685c] hover:text-[#2d2a22]"}`}
            >
              {item.label}
            </Link>
          ))}
          <a className="rounded-full border border-[#d9cfbf] bg-white px-4 py-2 text-sm font-semibold text-[#615b51] transition-colors hover:border-[#c3aa78] hover:text-[#7e5b1e]" href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer">
            Изработка ↗
          </a>
        </nav>

        <button
          type="button"
          aria-label="Отвори меню"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="hidden h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#ddd2bf] bg-white max-[820px]:flex"
        >
          <span className="h-px w-[17px] bg-[#403a31]" />
          <span className="h-px w-[17px] bg-[#403a31]" />
        </button>
      </div>

      {open && (
        <nav className="hidden border-t border-[#ebe3d5] bg-[#fffdf7] px-5 py-3 max-[820px]:grid" aria-label="Мобилна навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[#eee6d9] py-3 text-sm font-semibold ${pathname === item.href ? "text-[#8b641f]" : "text-[#645f56]"}`}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://viktor-iliev.site/portfolio/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="py-3 text-sm font-semibold text-[#8b641f]">
            Изработка ↗
          </a>
        </nav>
      )}
    </header>
  );
}
