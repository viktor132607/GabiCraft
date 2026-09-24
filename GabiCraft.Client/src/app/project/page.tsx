import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabicraft.onrender.com";

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${siteUrl}/project`,
  name: "Галерия с авторски картини | GabiCraft",
  description: "Подбрана галерия с авторски творби на GabiCraft.",
  inLanguage: "bg-BG",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

const works = [
  ["Творба 01", "bg-[linear-gradient(145deg,#f4d365_0%,#f0ad3a_45%,#6f7b43_100%)]"],
  ["Творба 02", "bg-[linear-gradient(155deg,#f7ead0_0%,#c98b48_48%,#6c5539_100%)]"],
  ["Творба 03", "bg-[linear-gradient(135deg,#8a924c_0%,#d9ba48_46%,#f5e5a5_100%)]"],
  ["Творба 04", "bg-[linear-gradient(145deg,#f8df91_0%,#c56d45_48%,#754f3a_100%)]"],
  ["Творба 05", "bg-[linear-gradient(135deg,#d9c27e_0%,#74804d_50%,#384332_100%)]"],
  ["Творба 06", "bg-[linear-gradient(150deg,#f8eee0_0%,#d4a94f_42%,#98703b_100%)]"],
];


export const metadata: Metadata = {
  title: "Галерия с авторски картини",
  description: "Разгледайте галерията на GabiCraft с подбрани авторски картини и арт творби в топла, естествена визуална стилистика.",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "/project",
    siteName: "GabiCraft",
    title: "Галерия с авторски картини | GabiCraft",
    description: "Разгледайте галерията на GabiCraft с подбрани авторски картини и арт творби в топла, естествена визуална стилистика.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GabiCraft — арт портфолио и дизайн услуги",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Галерия с авторски картини | GabiCraft",
    description: "Разгледайте галерията на GabiCraft с подбрани авторски картини и арт творби в топла, естествена визуална стилистика.",
    images: ["/og-image.png"],
  },
};
export default function ProjectPage() {
  return (
    <>
      <StructuredData data={collectionStructuredData} />
      <section className="min-h-[68vh] bg-[#fffdf7] py-[92px] pt-[104px] max-[820px]:min-h-0 max-[820px]:pt-[76px] max-[620px]:py-[54px]">
      <div className="mx-auto w-[min(1180px,calc(100%_-_40px))] max-[620px]:w-[min(1180px,calc(100%_-_28px))]">
        <div className="mb-12 max-w-[760px]">
          <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Галерия</span>
          <h1 className="mb-6 font-serif text-[clamp(52px,7vw,88px)] leading-[0.98] tracking-[-0.04em] text-[#2d2a22] max-[620px]:text-[clamp(42px,13vw,62px)]">Избрани творби</h1>
          <p className="text-[17px] leading-[1.7] text-[#756d61] max-[620px]:text-base">Подбрана селекция от авторски творби с топла палитра, естествени форми и различни композиционни решения.</p>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-10 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {works.map(([title, art], index) => (
            <article key={title}>
              <div className={`relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#e1d5c4] ${art}`} aria-label={title}>
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-[#6c604c]">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="pt-4">
                <h3 className="mb-1 font-serif text-[24px] font-semibold text-[#302b23]">{title}</h3>
                <span className="text-sm text-[#8a8174]">Авторска творба</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
