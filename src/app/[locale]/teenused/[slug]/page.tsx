import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fetchServices, fetchService, SERVICE_SLUGS } from "@/data/services";
import { localizedHref } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { ServiceIcon, ArrowUpRight } from "@/components/Icons";

export const revalidate = 60;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SERVICE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const service = await fetchService(params.slug);
  if (!service) return {};

  const title = service.metaTitle?.[locale] || `${service.title[locale]} — Torupro`;
  const description = service.metaDesc?.[locale] || service.short[locale];
  const keywords = service.keywords?.[locale] ?? [];
  const canonical = service.canonicalUrl || `https://torupro.ee/${locale}/teenused/${params.slug}`;
  const ogTitle = service.ogTitle?.[locale] || title;
  const ogDesc = service.ogDesc?.[locale] || description;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: "Torupro",
      locale: locale === "et" ? "et_EE" : locale === "en" ? "en_US" : "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const service = await fetchService(params.slug);
  if (!service) notFound();

  const allServices = await fetchServices();
  const related = allServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  const h1 = service.h1?.[locale] || service.title[locale];
  const h2 = service.h2?.[locale] || "";

  // FAQPage JSON-LD for rich snippets
  const faqSchema =
    service.faq && service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item[`question_${locale}` as keyof typeof item] || item.question_et,
            acceptedAnswer: {
              "@type": "Answer",
              text: item[`answer_${locale}` as keyof typeof item] || item.answer_et,
            },
          })),
        }
      : null;

  // LocalBusiness + Service JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: service.short[locale],
    provider: {
      "@type": "LocalBusiness",
      name: "Torupro / BaMu Ehitus OÜ",
      telephone: "+37256058888",
      email: "info@torupro.ee",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pae tn 20",
        addressLocality: "Tallinn",
        addressRegion: "Harjumaa",
        postalCode: "11414",
        addressCountry: "EE",
      },
      areaServed: service.serviceArea || "Tallinn, Harjumaa",
      priceRange: service.priceRange || "€-€€€",
    },
    areaServed: service.serviceArea || "Tallinn, Harjumaa",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header */}
      <section className="relative mesh grain overflow-hidden">
        <div className="shell relative pt-12 lg:pt-16 pb-12 lg:pb-16">
          <Reveal>
            <Link
              href={localizedHref(locale, "/teenused")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand-deep transition-colors"
            >
              <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
              {dict.servicePage.back}
            </Link>
          </Reveal>
          <div className="mt-8 flex items-start gap-5">
            <Reveal>
              <span className="grid place-items-center h-16 w-16 rounded-2xl bg-brand-deep text-white shrink-0">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <span className="display text-sm text-gold">{service.index}</span>
              <h1 className="display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02]">
                {h1}
              </h1>
              {h2 && (
                <p className="lead text-lg mt-3 max-w-2xl">{h2}</p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="shell pt-10">
        <Reveal>
          <div className="relative aspect-[21/9] rounded-[24px] overflow-hidden card shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1400&auto=format&fit=crop"
              alt={service.title[locale]}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Body */}
      <section className="shell py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">{dict.servicePage.overview}</span>
              <p className="lead text-lg mt-5 whitespace-pre-line">{service.long[locale]}</p>
            </Reveal>

            {/* FAQ */}
            {service.faq && service.faq.length > 0 && (
              <Reveal delay={160}>
                <div className="mt-12">
                  <h2 className="display text-2xl mb-6">
                    {locale === "et" ? "Korduma kippuvad küsimused" : locale === "en" ? "Frequently Asked Questions" : "Часто задаваемые вопросы"}
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((item, i) => {
                      const q = item[`question_${locale}` as keyof typeof item] || item.question_et || "";
                      const a = item[`answer_${locale}` as keyof typeof item] || item.answer_et || "";
                      return (
                        <details key={i} className="card p-5 group">
                          <summary className="cursor-pointer font-semibold text-brand-deep list-none flex items-center justify-between gap-4">
                            {q}
                            <ArrowUpRight className="h-4 w-4 rotate-90 group-open:rotate-[270deg] transition-transform shrink-0" />
                          </summary>
                          <p className="mt-3 text-ink-soft text-[0.95rem] leading-relaxed">{a}</p>
                        </details>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={160}>
            <div className="card p-7 lg:p-8 lg:sticky lg:top-24">
              <h2 className="display text-2xl">{dict.servicePage.why}</h2>
              <ul className="mt-6 space-y-4">
                {dict.servicePage.whyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-brand-soft text-brand-deep shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[0.95rem] text-ink-soft leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={localizedHref(locale, "/kontakt")}
                className="btn btn-primary w-full justify-center mt-8"
              >
                {dict.cta.quote}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-paper border-t border-line">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.6rem)] mb-10">
              {dict.servicesSection.title}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} />
              </Reveal>
            ))}
          </div>
        </div>
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
