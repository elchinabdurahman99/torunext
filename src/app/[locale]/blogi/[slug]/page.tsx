import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fetchPosts, fetchPost, POST_SLUGS } from "@/data/posts";
import { localizedHref } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight } from "@/components/Icons";

export const revalidate = 60;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    POST_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const post = await fetchPost(params.slug);
  if (!post) return {};

  const title = post.metaTitle?.[locale] || `${post.title[locale]} — Torupro`;
  const description = post.metaDesc?.[locale] || post.excerpt[locale];
  const keywords = post.keywords?.[locale] ?? [];
  const canonical = `https://torupro.ee/${locale}/blogi/${params.slug}`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical,
      languages: {
        et: `https://torupro.ee/et/blogi/${params.slug}`,
        en: `https://torupro.ee/en/blogi/${params.slug}`,
        ru: `https://torupro.ee/ru/blogi/${params.slug}`,
        "x-default": `https://torupro.ee/et/blogi/${params.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Torupro",
      type: "article",
      publishedTime: post.publishedAt,
      locale: locale === "et" ? "et_EE" : locale === "en" ? "en_US" : "ru_RU",
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const post = await fetchPost(params.slug);
  if (!post) notFound();

  const allPosts = await fetchPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.excerpt[locale],
    image: post.coverImage || undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Torupro",
      url: "https://torupro.ee",
    },
    publisher: {
      "@type": "Organization",
      name: "Torupro",
      url: "https://torupro.ee",
      logo: {
        "@type": "ImageObject",
        url: "https://torupro.ee/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://torupro.ee/${locale}/blogi/${params.slug}`,
    },
  };

  const paragraphs = post.body[locale]
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back link */}
      <div className="shell pt-10 pb-2">
        <Reveal>
          <Link
            href={localizedHref(locale, "/blogi")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand-deep transition-colors"
          >
            <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
            {dict.blogPage.backToList}
          </Link>
        </Reveal>
      </div>

      {/* Hero */}
      <section className="shell pt-6 pb-0">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.category[locale] && (
              <span className="inline-block bg-brand-soft text-brand-deep text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                {post.category[locale]}
              </span>
            )}
            <time
              dateTime={post.publishedAt}
              className="text-xs text-ink-soft"
            >
              {formatDate(post.publishedAt, locale)}
            </time>
            {post.readingTime > 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span className="text-xs text-ink-soft">
                  {post.readingTime} {dict.blogPage.minRead}
                </span>
              </>
            )}
          </div>

          <h1 className="display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.04] max-w-3xl">
            {post.title[locale]}
          </h1>

          {post.excerpt[locale] && (
            <p className="lead text-lg mt-5 max-w-2xl">{post.excerpt[locale]}</p>
          )}
        </Reveal>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="shell pt-10">
          <Reveal>
            <div className="relative aspect-[21/9] rounded-[24px] overflow-hidden card shadow-soft">
              <Image
                src={post.coverImage}
                alt={post.title[locale]}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      )}

      {/* Article body */}
      <article className="shell py-14 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-6">
            {paragraphs.map((para, i) => {
              // H2 headings: lines that start with ##
              if (para.startsWith("## ")) {
                return (
                  <Reveal key={i}>
                    <h2 className="display text-2xl lg:text-3xl mt-10 mb-2 text-ink">
                      {para.replace(/^## /, "")}
                    </h2>
                    <div className="rule max-w-[60px] mb-4" />
                  </Reveal>
                );
              }
              // H3 headings: lines that start with ###
              if (para.startsWith("### ")) {
                return (
                  <Reveal key={i}>
                    <h3 className="font-sans font-semibold text-xl mt-7 mb-2 text-brand-deep">
                      {para.replace(/^### /, "")}
                    </h3>
                  </Reveal>
                );
              }
              // Bullet lists
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <Reveal key={i}>
                    <ul className="space-y-2 mt-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span className="lead text-[0.97rem] leading-relaxed">
                            {item.replace(/^- /, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              // CTA callout box: lines that start with >
              if (para.startsWith("> ")) {
                return (
                  <Reveal key={i}>
                    <div className="card border-l-4 border-brand bg-brand-soft/50 px-6 py-5 my-6">
                      <p className="text-brand-deep font-semibold text-[0.97rem] leading-relaxed">
                        {para.replace(/^> /, "")}
                      </p>
                    </div>
                  </Reveal>
                );
              }
              // Normal paragraphs
              return (
                <Reveal key={i}>
                  <p className="lead text-[1.02rem] leading-[1.75]">{para}</p>
                </Reveal>
              );
            })}
          </div>

          {/* Author / CTA card */}
          <Reveal>
            <div className="mt-14 card p-7 lg:p-8 bg-brand-deep text-white flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="display text-xl">{dict.servicePage.ctaTitle}</p>
                <p className="text-white/70 text-sm mt-2">{dict.servicePage.ctaBody}</p>
              </div>
              <Link
                href={localizedHref(locale, "/kontakt")}
                className="btn shrink-0"
                style={{ background: "linear-gradient(135deg, var(--gold-soft), var(--gold))", color: "#0c3a47" }}
              >
                {dict.cta.quote}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-paper border-t border-line">
          <div className="shell py-14 lg:py-20">
            <Reveal>
              <h2 className="display text-[clamp(1.8rem,3.4vw,2.6rem)] mb-10">
                {dict.blogPage.relatedTitle}
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <article className="card group overflow-hidden flex flex-col">
                    {p.coverImage && (
                      <Link
                        href={localizedHref(locale, `/blogi/${p.slug}`)}
                        className="block relative aspect-[16/9] overflow-hidden"
                        tabIndex={-1}
                        aria-hidden
                      >
                        <Image
                          src={p.coverImage}
                          alt={p.title[locale]}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs text-ink-soft mb-3">
                        {formatDate(p.publishedAt, locale)}
                      </p>
                      <h3 className="display text-xl mb-2">
                        <Link
                          href={localizedHref(locale, `/blogi/${p.slug}`)}
                          className="hover:text-brand transition-colors"
                        >
                          {p.title[locale]}
                        </Link>
                      </h3>
                      <p className="lead text-sm line-clamp-2 flex-1">{p.excerpt[locale]}</p>
                      <Link
                        href={localizedHref(locale, `/blogi/${p.slug}`)}
                        className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-deep group/link"
                      >
                        {dict.blogPage.readMore}
                        <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        locale={locale}
        title={dict.servicePage.ctaTitle}
        body={dict.servicePage.ctaBody}
        primaryLabel={dict.cta.contact}
      />
    </>
  );
}
