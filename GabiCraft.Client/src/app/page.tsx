import Link from "next/link";

const works = [
  {
    title: "Картина 01",
    art: "bg-[linear-gradient(145deg,#f4d365_0%,#f0ad3a_45%,#6f7b43_100%)]",
  },
  {
    title: "Картина 02",
    art: "bg-[linear-gradient(155deg,#f7ead0_0%,#c98b48_48%,#6c5539_100%)]",
  },
  {
    title: "Картина 03",
    art: "bg-[linear-gradient(135deg,#8a924c_0%,#d9ba48_46%,#f5e5a5_100%)]",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fffaf0] py-24 max-[820px]:py-16 max-[620px]:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#f3c94d]/20 blur-3xl" />
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.08fr_.92fr] items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
          <div className="relative z-10">
            <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Живопис · Цвят · Светлина</span>
            <h1 className="mb-6 max-w-[780px] font-serif text-[clamp(52px,7vw,92px)] leading-[0.98] tracking-[-0.04em] text-[#2d2a22] max-[620px]:text-[clamp(42px,13vw,62px)]">
              Изкуство, което носи слънце.
            </h1>
            <p className="mb-8 max-w-[720px] text-[clamp(18px,2vw,21px)] leading-[1.7] text-[#736b5d] max-[620px]:text-base">
              GabiCraft е арт портфолио за картини и авторски творби, изградено около топли цветове, естествени форми и чисто представяне на работите.
            </p>
            <div className="flex flex-wrap gap-3 max-[620px]:flex-col">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#3f4830] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#303824] max-[620px]:w-full" href="/project">Виж галерията</Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7c8aa] bg-white px-6 text-sm font-semibold text-[#625b50] transition-colors hover:border-[#b99a5c] hover:text-[#7e5b1e] max-[620px]:w-full" href="/about">За автора</Link>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[#e2d3b7] bg-[#f4d25d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_42%,#5d4325_0_10%,#8b682d_10%_18%,#e7b936_18%_36%,transparent_36%),radial-gradient(ellipse_at_56%_52%,rgba(101,118,57,.92)_0_10%,transparent_11%),linear-gradient(145deg,#fff3c4_0%,#edc24e_48%,#7d8949_100%)]" />
              <div className="absolute left-[8%] top-[14%] h-[70%] w-[84%] rounded-[50%] border border-white/40" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/88 px-6 py-5 backdrop-blur-sm">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b7b31]">Featured work</span>
                <strong className="mt-1 block font-serif text-xl font-semibold text-[#302b23]">Плейсхолдър за картина</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf7] py-[92px] max-[820px]:py-[68px] max-[620px]:py-[54px]">
        <div className="mx-auto w-[min(1180px,calc(100%_-_40px))] max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
          <div className="mb-10 max-w-[760px]">
            <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Избрани творби</span>
            <h2 className="mb-[18px] font-serif text-[clamp(38px,4.6vw,60px)] leading-none tracking-[-0.03em] text-[#2d2a22]">Галерия</h2>
            <p className="text-[17px] leading-[1.7] text-[#756d61] max-[620px]:text-base">Временни визуални плейсхолдъри, които могат директно да бъдат заменени с реалните картини.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
            {works.map((work, index) => (
              <article key={work.title} className="group">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#e1d5c4] ${work.art}`} aria-label={`Плейсхолдър ${work.title}`}>
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-[#6c604c]">0{index + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="pt-4">
                  <h3 className="mb-1 font-serif text-[24px] font-semibold text-[#302b23]">{work.title}</h3>
                  <span className="text-sm text-[#8a8174]">Авторска творба · плейсхолдър</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link className="inline-block border-b border-[#b58935] pb-1 font-semibold text-[#765920]" href="/project">Разгледай цялата галерия →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8decd] bg-[#fffaf0] py-[82px] max-[820px]:py-[64px] max-[620px]:py-[50px]">
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[0.9fr_1.1fr] gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-7 max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
          <div>
            <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Дизайн услуги</span>
            <h2 className="font-serif text-[clamp(36px,4.4vw,56px)] leading-none tracking-[-0.03em] text-[#2d2a22]">Дизайн и визуална концепция</h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.7] text-[#756d61] max-[620px]:text-base">
              Изграждане на цялостна визуална посока за брандове и дигитални проекти – идентичност на бранда, визия и структура на уебсайт, цветова система, типография и последователен стил във всички основни елементи.
            </p>
            <Link className="mt-4 inline-block border-b border-[#b58935] pb-1 font-semibold text-[#765920]" href="/contact">Запитване →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8decd] bg-[#f7f0e4] py-[92px] max-[820px]:py-[68px] max-[620px]:py-[54px]">
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-2 gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-7 max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
          <div>
            <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">GabiCraft</span>
            <h2 className="font-serif text-[clamp(38px,4.6vw,60px)] leading-none tracking-[-0.03em] text-[#2d2a22]">Топло, лично, естествено</h2>
          </div>
          <div>
            <p className="text-[17px] leading-[1.7] text-[#756d61] max-[620px]:text-base">
              Визията използва слънчогледово жълто, охра, маслинено зелено и кремав фон. Декоративните елементи остават фини, за да не отнемат вниманието от самите картини.
            </p>
            <Link className="mt-[10px] inline-block border-b border-[#b58935] pb-1 font-semibold text-[#765920]" href="/contact">Контакти →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
