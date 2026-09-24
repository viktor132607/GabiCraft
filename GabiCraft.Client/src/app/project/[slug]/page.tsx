import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { getProjectTheme, projectThemes } from "@/lib/projectThemes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabicraft.onrender.com";

type ProjectThemePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectThemes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: ProjectThemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = getProjectTheme(slug);

  if (!theme) {
    return {};
  }

  const path = `/project/${theme.slug}`;
  const title = `${theme.title} — арт направление`;

  return {
    title,
    description: theme.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "bg_BG",
      url: path,
      siteName: "GabiCraft",
      title: `${title} | GabiCraft`,
      description: theme.description,
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
      title: `${title} | GabiCraft`,
      description: theme.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectThemePage({ params }: ProjectThemePageProps) {
  const { slug } = await params;
  const theme = getProjectTheme(slug);

  if (!theme) {
    notFound();
  }

  const pageUrl = `${siteUrl}/project/${theme.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: pageUrl,
      name: `${theme.title} | GabiCraft`,
      description: theme.description,
      inLanguage: "bg-BG",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Thing",
        name: theme.title,
        description: theme.longDescription,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Галерия",
          item: `${siteUrl}/project`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: theme.title,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <article className="bg-[#fffdf7] py-[92px] pt-[104px] max-[820px]:pt-[76px] max-[620px]:py-[54px]">
        <div className="mx-auto w-[min(1000px,calc(100%_-_40px))] max-[620px]:w-[min(1000px,calc(100%_-_28px))]">
          <nav aria-label="Навигация по пътя" className="mb-8 text-sm text-[#807667]">
            <Link className="hover:text-[#765920]" href="/">Начало</Link>
            <span aria-hidden="true"> / </span>
            <Link className="hover:text-[#765920]" href="/project">Галерия</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{theme.title}</span>
          </nav>

          <header className="mb-12 max-w-[780px]">
            <span className="mb-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a25]">Арт направление</span>
            <h1 className="mb-6 font-serif text-[clamp(48px,7vw,82px)] leading-[0.98] tracking-[-0.04em] text-[#2d2a22]">{theme.title}</h1>
            <p className="text-[clamp(18px,2vw,21px)] leading-[1.7] text-[#736b5d]">{theme.description}</p>
          </header>

          <div
            role="img"
            aria-label={`${theme.title} — цветова и композиционна визуализация`}
            className={`relative mb-12 aspect-[16/9] overflow-hidden rounded-[26px] border border-[#e1d5c4] ${theme.art}`}
          >
            <div className="absolute inset-6 rounded-[18px] border border-white/45" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <section aria-labelledby="theme-description-heading" className="grid grid-cols-[1.15fr_.85fr] gap-14 max-[820px]:grid-cols-1 max-[820px]:gap-8">
            <div>
              <h2 id="theme-description-heading" className="mb-5 font-serif text-[clamp(32px,4vw,46px)] leading-tight text-[#302b23]">За направлението</h2>
              <p className="text-[17px] leading-8 text-[#756d61]">{theme.longDescription}</p>
            </div>

            <aside aria-labelledby="theme-highlights-heading" className="rounded-[22px] border border-[#e3d7c5] bg-[#fffaf0] p-7">
              <h2 id="theme-highlights-heading" className="mb-5 font-serif text-2xl font-semibold text-[#302b23]">Основни характеристики</h2>
              <ul className="grid gap-4 text-[#746b5e]">
                {theme.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#b58935]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <div className="mt-14 border-t border-[#e4d9c7] pt-8">
            <Link className="inline-block border-b border-[#b58935] pb-1 font-semibold text-[#765920]" href="/project">← Обратно към галерията</Link>
          </div>
        </div>
      </article>
    </>
  );
}
