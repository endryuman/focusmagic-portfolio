import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { getMessages } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} navItems={messages.nav} />
      <main className="flex-1 pb-10">
        <AboutSection messages={messages} />
        <PricingSection messages={messages} />
        <PortfolioSection messages={messages} />
        <ProcessSection messages={messages} />
      </main>
    </div>
  );
}
