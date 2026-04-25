import { notFound } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import type { Metadata } from "next";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: messages.meta.title,
    description: messages.meta.description,
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
      images: ["/assets/photographer/photograph1.webp"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <div data-locale={locale as Locale}>{children}</div>;
}
