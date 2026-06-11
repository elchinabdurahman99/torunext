export const locales = ["et", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "et";

export const localeNames: Record<Locale, string> = {
  et: "Eesti",
  en: "English",
  ru: "Русский",
};

export const localeShort: Record<Locale, string> = {
  et: "ET",
  en: "EN",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
