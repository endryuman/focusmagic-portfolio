import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/messages/en";
import { et } from "@/lib/i18n/messages/et";
import { ru } from "@/lib/i18n/messages/ru";
import { uk } from "@/lib/i18n/messages/uk";
import type { SiteMessages } from "@/lib/i18n/types";

const messages: Record<Locale, SiteMessages> = {
  en,
  et,
  uk,
  ru,
};

export function getMessages(locale: Locale): SiteMessages {
  return messages[locale] ?? messages[defaultLocale];
}
