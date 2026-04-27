import { notFound } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  et: "et_EE",
  uk: "uk_UA",
  ru: "ru_RU",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = getMessages(locale);
  const pageUrl = `${siteUrl}/${locale}`;
  return {
    title: messages.meta.title,
    description: messages.meta.description,
    keywords: messages.meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        et: "/et",
        uk: "/uk",
        ru: "/ru",
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: pageUrl,
      siteName: "focusmagic",
      locale: openGraphLocale[locale],
      type: "website",
      images: ["/assets/photographer/photograph1.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: ["/assets/photographer/photograph1.webp"],
    },
  };
}

function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "focusmagic",
        alternateName: ["focusmagic.q", "@focusmagic.q"],
        description: "Photography portfolio — Masha Batii, Tartu. Instagram @focusmagic.q.",
        inLanguage: ["en", "et", "uk", "ru"],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Masha Batii",
        alternateName: ["focusmagic", "focusmagic.q", "@focusmagic.q", "Маша Батій", "Маша Батий"],
        jobTitle: "Photographer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tartu",
          addressCountry: "EE",
        },
        url: `${siteUrl}/${locale}`,
        image: `${siteUrl}/assets/photographer/photograph1.webp`,
        sameAs: [
          "https://www.instagram.com/focusmagic.q",
          "https://www.tiktok.com/@focusmagic.q5",
        ],
      },
    ],
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const ld = personJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div data-locale={locale as Locale}>{children}</div>
    </>
  );
}
