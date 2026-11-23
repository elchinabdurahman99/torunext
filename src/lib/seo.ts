import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { site } from "@/data/site";

export const SITE_URL = "https://torupro.ee";

export const OG_LOCALE: Record<Locale, string> = {
  et: "et_EE",
  en: "en_US",
  ru: "ru_RU",
};

/** Absolute URL for a locale + path, e.g. ("et", "/teenused") -> https://torupro.ee/et/teenused */
export function localeUrl(locale: Locale, path: string = ""): string {
  const clean = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}/${locale}${clean}`;
}

/** hreflang map (et/en/ru + x-default -> et) for a locale-independent path. */
export function languageAlternates(path: string = ""): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[l] = localeUrl(l, path);
  out["x-default"] = localeUrl("et", path);
  return out;
}

type PageMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  keywords?: string[];
  noindex?: boolean;
};

/**
 * Complete per-page metadata. Titles are used as-is (no brand template):
 * the brand only appears in og:site_name and structured data.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const canonical = localeUrl(input.locale, input.path);
  const ogTitle = input.ogTitle || input.title;
  const ogDescription = input.ogDescription || input.description;
  // Default share image: the locale's generated OG card (src/app/[locale]/opengraph-image.tsx).
  const images =
    input.images && input.images.length
      ? input.images
      : [{ url: `${SITE_URL}/${input.locale}/opengraph-image`, width: 1200, height: 630, alt: input.title }];
  return {
    title: { absolute: input.title },
    description: input.description,
    keywords: input.keywords && input.keywords.length ? input.keywords : undefined,
    alternates: { canonical, languages: languageAlternates(input.path) },
    robots: input.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: site.name,
      locale: OG_LOCALE[input.locale],
      alternateLocale: locales.filter((l) => l !== input.locale).map((l) => OG_LOCALE[l]),
      type: input.type ?? "website",
      ...(input.type === "article"
        ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime }
        : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: images.map((i) => i.url),
    },
  };
}

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const SCHEMA_LANG: Record<Locale, string> = { et: "et-EE", en: "en", ru: "ru" };

/** Site-wide Organization/Plumber + WebSite graph. NAP mirrors src/data/site.ts. */
export function siteGraph(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "Organization"],
        "@id": BUSINESS_ID,
        name: site.name,
        legalName: site.legalName,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
        image: `${SITE_URL}/torupro.jpeg`,
        telephone: site.phone.replace(/\s/g, ""),
        email: site.email,
        identifier: { "@type": "PropertyValue", propertyID: "Äriregistri kood", value: site.regCode },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pae tn 20",
          addressLocality: "Tallinn",
          addressRegion: "Harjumaa",
          postalCode: "11414",
          addressCountry: "EE",
        },
        hasMap: "https://www.google.com/maps?q=Pae+tn+20,+Tallinn",
        areaServed: [
          { "@type": "City", name: "Tallinn" },
          { "@type": "AdministrativeArea", name: "Harjumaa" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone.replace(/\s/g, ""),
            contactType: "customer service",
            areaServed: "EE",
            availableLanguage: ["et", "en", "ru"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: site.name,
        inLanguage: SCHEMA_LANG[locale],
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export const HOME_LABEL: Record<Locale, string> = { et: "Avaleht", en: "Home", ru: "Главная" };

/** JSON string safe for embedding in <script type="application/ld+json">. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
