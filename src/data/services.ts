import type { Locale } from "@/i18n/config";
import { sanityClient } from "@/lib/sanity";

type LocalizedText = Record<Locale, string>;

export type FaqItem = {
  question_et?: string; question_en?: string; question_ru?: string;
  answer_et?: string;   answer_en?: string;   answer_ru?: string;
};

export type Service = {
  _id?: string;
  slug: string;
  order: number;
  index: string;
  icon: string;
  isPrimary?: boolean;
  title: LocalizedText;
  short: LocalizedText;
  long: LocalizedText;
  // SEO
  metaTitle?: LocalizedText;
  metaDesc?: LocalizedText;
  h1?: LocalizedText;
  h2?: LocalizedText;
  keywords?: Record<Locale, string[]>;
  ogTitle?: LocalizedText;
  ogDesc?: LocalizedText;
  canonicalUrl?: string;
  serviceArea?: string;
  priceRange?: string;
  faq?: FaqItem[];
};

const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id, slug, order, index, icon, isPrimary,
  title_et, title_en, title_ru,
  short_et, short_en, short_ru,
  long_et, long_en, long_ru,
  metaTitle_et, metaTitle_en, metaTitle_ru,
  metaDesc_et, metaDesc_en, metaDesc_ru,
  h1_et, h1_en, h1_ru,
  h2_et, h2_en, h2_ru,
  keywords_et, keywords_en, keywords_ru,
  ogTitle_et, ogTitle_en, ogTitle_ru,
  ogDesc_et, ogDesc_en, ogDesc_ru,
  canonicalUrl, serviceArea, priceRange,
  faq
}`;

function mapSanityService(s: Record<string, unknown>): Service {
  return {
    _id:   s._id as string,
    slug:  s.slug as string,
    order: (s.order as number) ?? 99,
    index: (s.index as string) ?? "00",
    icon:  (s.icon as string) ?? "pipe",
    isPrimary: (s.isPrimary as boolean) ?? false,
    title: { et: (s.title_et as string) ?? "", en: (s.title_en as string) ?? "", ru: (s.title_ru as string) ?? "" },
    short: { et: (s.short_et as string) ?? "", en: (s.short_en as string) ?? "", ru: (s.short_ru as string) ?? "" },
    long:  { et: (s.long_et as string)  ?? "", en: (s.long_en as string)  ?? "", ru: (s.long_ru as string)  ?? "" },
    metaTitle: { et: (s.metaTitle_et as string) ?? "", en: (s.metaTitle_en as string) ?? "", ru: (s.metaTitle_ru as string) ?? "" },
    metaDesc:  { et: (s.metaDesc_et as string)  ?? "", en: (s.metaDesc_en as string)  ?? "", ru: (s.metaDesc_ru as string)  ?? "" },
    h1:        { et: (s.h1_et as string) ?? "", en: (s.h1_en as string) ?? "", ru: (s.h1_ru as string) ?? "" },
    h2:        { et: (s.h2_et as string) ?? "", en: (s.h2_en as string) ?? "", ru: (s.h2_ru as string) ?? "" },
    keywords:  { et: (s.keywords_et as string[]) ?? [], en: (s.keywords_en as string[]) ?? [], ru: (s.keywords_ru as string[]) ?? [] },
    ogTitle:   { et: (s.ogTitle_et as string) ?? "", en: (s.ogTitle_en as string) ?? "", ru: (s.ogTitle_ru as string) ?? "" },
    ogDesc:    { et: (s.ogDesc_et as string)   ?? "", en: (s.ogDesc_en as string)   ?? "", ru: (s.ogDesc_ru as string)   ?? "" },
    canonicalUrl: (s.canonicalUrl as string) ?? undefined,
    serviceArea:  (s.serviceArea as string)  ?? "Tallinn, Harjumaa",
    priceRange:   (s.priceRange as string)   ?? "€-€€€",
    faq:          (s.faq as FaqItem[])       ?? [],
  };
}

export async function fetchServices(): Promise<Service[]> {
  try {
    const raw = await sanityClient.fetch<Record<string, unknown>[]>(SERVICES_QUERY);
    return raw.map(mapSanityService);
  } catch {
    return [];
  }
}

export async function fetchService(slug: string): Promise<Service | undefined> {
  try {
    const raw = await sanityClient.fetch<Record<string, unknown>>(
      `*[_type == "service" && slug == $slug][0] {
        _id, slug, order, index, icon,
        title_et, title_en, title_ru,
        short_et, short_en, short_ru,
        long_et, long_en, long_ru,
        metaTitle_et, metaTitle_en, metaTitle_ru,
        metaDesc_et, metaDesc_en, metaDesc_ru,
        h1_et, h1_en, h1_ru,
        h2_et, h2_en, h2_ru,
        keywords_et, keywords_en, keywords_ru,
        ogTitle_et, ogTitle_en, ogTitle_ru,
        ogDesc_et, ogDesc_en, ogDesc_ru,
        canonicalUrl, serviceArea, priceRange,
        faq
      }`,
      { slug }
    );
    if (!raw) return undefined;
    return mapSanityService(raw);
  } catch {
    return undefined;
  }
}

export const SERVICE_SLUGS = [
  "torutood-tallinnas",
  "torumees-tallinn-247",
  "kanalisatsiooni-remont",
  "ummistuse-likvideerimine",
  "kanalisatsiooni-survepesu",
  "kaamerauuring",
  "veetorude-paigaldus",
  "torude-vahetus-korteris",
  "puestakute-vahetus",
  "vannitoa-torutood",
  "kuuttesusteemide-remont",
  "lekke-otsimine",
  "rasvapuuduri-puhastus",
  "liivapuuduri-puhastus",
  "valiskanalisatsiooni-ehitus",
  "torude-hooldus",
  "survepesuauto",
  "fekaalivedu",
  "kaevude-puhastus",
  "septiku-hooldus",
];
