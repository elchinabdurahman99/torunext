import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { sanityClient } from "@/lib/sanity";
import { languageAlternates, localeUrl } from "@/lib/seo";

export const revalidate = 3600;

type Entry = { path: string; lastModified: Date; changeFrequency: "weekly" | "monthly"; priority: number };

/** All indexable URLs × locales, with hreflang alternates. Noindex pages (privacy, terms) are excluded. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let services: { slug: string; _updatedAt: string }[] = [];
  let posts: { slug: string; _updatedAt: string; publishedAt?: string }[] = [];
  try {
    [services, posts] = await Promise.all([
      sanityClient.fetch(`*[_type == "service" && defined(slug)]{ slug, _updatedAt }`),
      sanityClient.fetch(`*[_type == "post" && defined(slug)]{ slug, _updatedAt, publishedAt }`),
    ]);
  } catch {
    // Sanity unreachable: fall back to static pages only.
  }

  const latest = (dates: string[]) =>
    dates.length ? new Date(Math.max(...dates.map((d) => new Date(d).getTime()))) : new Date();
  const servicesUpdated = latest(services.map((s) => s._updatedAt));

  const pages: Entry[] = [
    { path: "", lastModified: servicesUpdated, changeFrequency: "weekly", priority: 1.0 },
    { path: "/teenused", lastModified: servicesUpdated, changeFrequency: "weekly", priority: 0.9 },
    { path: "/hinnakiri", lastModified: new Date("2026-11-12"), changeFrequency: "monthly", priority: 0.8 },
    { path: "/kontakt", lastModified: new Date("2026-11-12"), changeFrequency: "monthly", priority: 0.8 },
    { path: "/meist", lastModified: new Date("2026-11-12"), changeFrequency: "monthly", priority: 0.6 },
    ...services.map((s) => ({
      path: `/teenused/${s.slug}`,
      lastModified: new Date(s._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // The blog index is noindex while empty, so only list it when posts exist.
  if (posts.length > 0) {
    pages.push({
      path: "/blogi",
      lastModified: latest(posts.map((p) => p._updatedAt)),
      changeFrequency: "weekly",
      priority: 0.6,
    });
    for (const p of posts) {
      pages.push({
        path: `/blogi/${p.slug}`,
        lastModified: new Date(p._updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: localeUrl(locale, page.path),
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: languageAlternates(page.path) },
    }))
  );
}
