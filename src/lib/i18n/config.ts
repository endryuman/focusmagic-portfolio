export const locales = ["en", "et", "uk", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabel: Record<Locale, string> = {
  en: "EN",
  et: "ET",
  uk: "UK",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
