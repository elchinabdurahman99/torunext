import type { Locale } from "@/i18n/config";

type LocalizedText = Record<Locale, string>;

export type PriceRow = {
  service: LocalizedText;
  price: LocalizedText;
};

const eur = (v: string): LocalizedText => ({ et: v, en: v, ru: v });

export const priceRows: PriceRow[] = [
  {
    service: {
      et: "Tehnosüsteemide avariitööd",
      en: "Emergency technical-system works",
      ru: "Аварийные работы инженерных систем",
    },
    price: eur("32 €/h"),
  },
  {
    service: {
      et: "Sanitaartehnilised tööd",
      en: "Sanitary-engineering works",
      ru: "Сантехнические работы",
    },
    price: eur("32 €/h"),
  },
  {
    service: {
      et: "Kanalisatsiooniummistuste likvideerimine (Rothenberger R-600)",
      en: "Sewer unclogging (Rothenberger R-600)",
      ru: "Устранение засоров канализации (Rothenberger R-600)",
    },
    price: eur("32 €/h"),
  },
  {
    service: { et: "Elektritööd", en: "Electrical works", ru: "Электромонтажные работы" },
    price: eur("32 €/h"),
  },
  {
    service: {
      et: "Kaamerauuring (Rothenberger i2000, 20 m)",
      en: "Camera inspection (Rothenberger i2000, 20 m)",
      ru: "Видеодиагностика (Rothenberger i2000, 20 м)",
    },
    price: eur("50 €/h"),
  },
  {
    service: { et: "Keevitustööd", en: "Welding works", ru: "Сварочные работы" },
    price: eur("50 €/h"),
  },
  {
    service: {
      et: "PEM-toru keevitamine (EURO SP1)",
      en: "PE pipe welding (EURO SP1)",
      ru: "Сварка ПЭ труб (EURO SP1)",
    },
    price: eur("50 €/h"),
  },
  {
    service: {
      et: "Survepesu kanalisatsioon",
      en: "Sewer pressure washing",
      ru: "Промывка канализации",
    },
    price: { et: "al. 115,00 €/h", en: "from €115.00/h", ru: "от 115,00 €/ч" },
  },
  {
    service: {
      et: "Rasva-/liivapüüdja puhastus",
      en: "Grease/sand trap cleaning",
      ru: "Очистка жиро-/песколовки",
    },
    price: eur("245 €"),
  },
  {
    service: {
      et: "Reovee/rasva/liiva utiliseerimistasu",
      en: "Wastewater/grease/sand disposal fee",
      ru: "Утилизация стоков/жира/песка",
    },
    price: { et: "+95 €/1 m³", en: "+€95/1 m³", ru: "+95 €/1 м³" },
  },
  {
    service: {
      et: "Kilomeetritasu väljaspool Tallinna (väike auto)",
      en: "Mileage outside Tallinn (small vehicle)",
      ru: "Километраж вне Таллинна (малый авто)",
    },
    price: eur("1,00 €/km"),
  },
  {
    service: {
      et: "Kilomeetritasu väljaspool Tallinna (suur auto)",
      en: "Mileage outside Tallinn (large vehicle)",
      ru: "Километраж вне Таллинна (большой авто)",
    },
    price: eur("1,50 €/km"),
  },
];
