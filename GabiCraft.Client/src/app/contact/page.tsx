import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabicraft.onrender.com";

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteUrl}/contact`,
  name: "Контакти и запитвания | GabiCraft",
  inLanguage: "bg-BG",
  about: {
    "@id": `${siteUrl}/#organization`,
  },
};

export const metadata: Metadata = {
  title: "Контакти и запитвания",
  description: "Свържете се с GabiCraft за запитвания относно авторски картини, поръчки, арт проекти, бранд идентичност и уеб визия.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "/contact",
    siteName: "GabiCraft",
    title: "Контакти и запитвания | GabiCraft",
    description: "Свържете се с GabiCraft за запитвания относно авторски картини, поръчки, арт проекти, бранд идентичност и уеб визия.",
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
    title: "Контакти и запитвания | GabiCraft",
    description: "Свържете се с GabiCraft за запитвания относно авторски картини, поръчки, арт проекти, бранд идентичност и уеб визия.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const rows = [
    ["Картини", "Запитвания за налични авторски творби и информация за конкретни работи."],
    ["Поръчки", "Запитвания за индивидуални творби и проекти според конкретна идея или пространство."],
    ["Дизайн", "Запитвания за бранд идентичност, уеб визия и цялостна визуална концепция."],
  ];

  return (
    <>
      <StructuredData data={contactStructuredData} />
      <section className="min-h-[68vh] bg-[#fffdf7] py-[92px] pt-[104px] max-[820px]:min-h-0 max-[820px]:pt-[76px] max-[620px]:py-[54px]">
      <div className="mx-auto w-[min(820px,calc(100%_-_40px))] max-[620px]:w-[min(820px,calc(100%_-_28px))]">
        <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Контакти</span>
        <h1 className="mb-6 font-serif text-[clamp(52px,7vw,88px)] leading-[0.98] tracking-[-0.04em] text-[#2d2a22] max-[620px]:text-[clamp(42px,13vw,62px)]">Запитвания за творби</h1>
        <p className="mb-8 max-w-[760px] text-[clamp(18px,2vw,21px)] leading-[1.7] text-[#736b5d] max-[620px]:text-base">
          Изпратете запитване за авторски картини, индивидуални поръчки или дизайн услуги според нуждите на проекта.
        </p>

        <dl className="mt-[52px] border-t border-[#e4d9c7] max-[620px]:mt-9">
          {rows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[180px_minmax(0,1fr)] gap-7 border-b border-[#e4d9c7] py-6 max-[820px]:grid-cols-1 max-[820px]:gap-2">
              <dt className="font-semibold text-[#795b21]">{label}</dt>
              <dd className="m-0 leading-[1.7] text-[#756d61]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      </section>
    </>
  );
}
