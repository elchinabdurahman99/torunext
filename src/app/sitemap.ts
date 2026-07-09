import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SERVICE_SLUGS } from "@/data/services";
import { POST_SLUGS } from "@/data/posts";

const BASE = "https://torupro.ee";

const staticPages = ["", "/meist", "/teenused", "/hinnakiri", "/blogi", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const page of staticPages) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${BASE}/${locale}${page}`;
    }
    alternates["x-default"] = `${BASE}/et${page}`;

    entries.push({
      url: `${BASE}/et${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: { languages: alternates },
    });

    for (const locale of locales.filter((l) => l !== "et")) {
      entries.push({
        url: `${BASE}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: { languages: alternates },
      });
    }
  }

  // Service detail pages
  for (const slug of SERVICE_SLUGS) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${BASE}/${locale}/teenused/${slug}`;
    }
    alternates["x-default"] = `${BASE}/et/teenused/${slug}`;

    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}/teenused/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: alternates },
      });
    }
  }

  // Blog post pages
  for (const slug of POST_SLUGS) {
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${BASE}/${locale}/blogi/${slug}`;
    }
    alternates["x-default"] = `${BASE}/et/blogi/${slug}`;

    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}/blogi/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
