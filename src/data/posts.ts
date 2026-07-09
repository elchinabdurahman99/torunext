import type { Locale } from "@/i18n/config";
import { sanityClient } from "@/lib/sanity";

type LocalizedText = Record<Locale, string>;

export type Post = {
  _id: string;
  slug: string;
  publishedAt: string;
  coverImage: string;
  readingTime: number;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  metaTitle?: LocalizedText;
  metaDesc?: LocalizedText;
  keywords?: Record<Locale, string[]>;
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, slug, publishedAt, coverImage, readingTime,
  category_et, category_en, category_ru,
  title_et, title_en, title_ru,
  excerpt_et, excerpt_en, excerpt_ru,
  body_et, body_en, body_ru,
  metaTitle_et, metaTitle_en, metaTitle_ru,
  metaDesc_et, metaDesc_en, metaDesc_ru,
  keywords_et, keywords_en, keywords_ru
}`;

function mapSanityPost(p: Record<string, unknown>): Post {
  return {
    _id:         p._id as string,
    slug:        p.slug as string,
    publishedAt: (p.publishedAt as string) ?? "",
    coverImage:  (p.coverImage as string) ?? "",
    readingTime: (p.readingTime as number) ?? 5,
    category:    { et: (p.category_et as string) ?? "", en: (p.category_en as string) ?? "", ru: (p.category_ru as string) ?? "" },
    title:       { et: (p.title_et as string) ?? "", en: (p.title_en as string) ?? "", ru: (p.title_ru as string) ?? "" },
    excerpt:     { et: (p.excerpt_et as string) ?? "", en: (p.excerpt_en as string) ?? "", ru: (p.excerpt_ru as string) ?? "" },
    body:        { et: (p.body_et as string) ?? "", en: (p.body_en as string) ?? "", ru: (p.body_ru as string) ?? "" },
    metaTitle:   { et: (p.metaTitle_et as string) ?? "", en: (p.metaTitle_en as string) ?? "", ru: (p.metaTitle_ru as string) ?? "" },
    metaDesc:    { et: (p.metaDesc_et as string) ?? "", en: (p.metaDesc_en as string) ?? "", ru: (p.metaDesc_ru as string) ?? "" },
    keywords:    { et: (p.keywords_et as string[]) ?? [], en: (p.keywords_en as string[]) ?? [], ru: (p.keywords_ru as string[]) ?? [] },
  };
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const raw = await sanityClient.fetch<Record<string, unknown>[]>(POSTS_QUERY);
    return (raw ?? []).map(mapSanityPost);
  } catch {
    return [];
  }
}

export async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug == $slug][0] {
      _id, slug, publishedAt, coverImage, readingTime,
      category_et, category_en, category_ru,
      title_et, title_en, title_ru,
      excerpt_et, excerpt_en, excerpt_ru,
      body_et, body_en, body_ru,
      metaTitle_et, metaTitle_en, metaTitle_ru,
      metaDesc_et, metaDesc_en, metaDesc_ru,
      keywords_et, keywords_en, keywords_ru
    }`;
    const raw = await sanityClient.fetch<Record<string, unknown> | null>(query, { slug });
    return raw ? mapSanityPost(raw) : null;
  } catch {
    return null;
  }
}

export const POST_SLUGS = [
  "kanalisatsiooni-ummistus-lahendused",
  "millal-vahetada-torustik",
];
