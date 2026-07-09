import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fetchPosts } from "@/data/posts";
import { localizedHref } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight } from "@/components/Icons";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.blogTitle,
    description: dict.meta.blogDesc,
    alternates: {
      canonical: `https://torupro.ee/${locale}/blogi`,
      languages: {
        et: "https://torupro.ee/et/blogi",
        en: "https://torupro.ee/en/blogi",
        ru: "https://torupro.ee/ru/blogi",
        "x-default": "https://torupro.ee/et/blogi",
      },
    },
    openGraph: {
      title: dict.meta.blogTitle,
      description: dict.meta.blogDesc,
      type: "website",
    },
  };
}

function formatDate(dateStr: string, locale: Locale) {
  if (!dateStr) return "";
  const localeMap: Record<Locale, string> = { et: "et-EE", en: "en-GB", ru: "ru-RU" };
  return new Date(dateStr).toLocaleDateString(localeMap[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogListPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const posts = await fetchPosts();

  return (
    <>
      {/* Header */}
      <section className="relative mesh grain overflow-hidden">
        <div className="shell pt-16 pb-14 lg:pt-20 lg:pb-18">
          <Reveal>
            <span className="eyebrow">{dict.blogPage.eyebrow}</span>
            <h1 className="display text-[clamp(2.4rem,5vw,4rem)] mt-4 leading-[1.04] max-w-2xl">
              {dict.blogPage.title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead text-lg mt-6 max-w-xl">{dict.blogPage.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="shell py-16 lg:py-24">
        {posts.length === 0 ? (
          <p className="lead text-center py-20">{dict.blogPage.noPostsFound}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <article className="card group flex flex-col overflow-hidden h-full">
                  {/* Cover image */}
                  <Link
                    href={localizedHref(locale, `/blogi/${post.slug}`)}
                    className="block relative aspect-[16/9] overflow-hidden bg-brand-soft"
                    tabIndex={-1}
                    aria-hidden
                  >
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title[locale]}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        loading={i < 3 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-deep" />
                    )}
                    {/* Category badge */}
                    {post.category[locale] && (
                      <span className="absolute top-4 left-4 inline-block bg-white/90 backdrop-blur-sm text-brand-deep text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        {post.category[locale]}
                      </span>
                    )}
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-ink-soft mb-4">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt, locale)}
                      </time>
                      {post.readingTime > 0 && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-line" />
                          <span>{post.readingTime} {dict.blogPage.minRead}</span>
                        </>
                      )}
                    </div>

                    <h2 className="display text-xl leading-snug mb-3">
                      <Link
                        href={localizedHref(locale, `/blogi/${post.slug}`)}
                        className="hover:text-brand transition-colors"
                      >
                        {post.title[locale]}
                      </Link>
                    </h2>

                    <p className="lead text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt[locale]}
                    </p>

                    <Link
                      href={localizedHref(locale, `/blogi/${post.slug}`)}
                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-deep group/link"
                    >
                      {dict.blogPage.readMore}
                      <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        locale={locale}
        title={dict.servicePage.ctaTitle}
        body={dict.servicePage.ctaBody}
        primaryLabel={dict.cta.contact}
      />
    </>
  );
}
