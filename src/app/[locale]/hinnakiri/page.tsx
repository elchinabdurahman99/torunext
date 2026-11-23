import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata, breadcrumbSchema, localeUrl, HOME_LABEL, jsonLd } from "@/lib/seo";
import { priceRows } from "@/data/pricing";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/hinnakiri",
    title: dict.meta.pricingTitle,
    description: dict.meta.pricingDesc,
  });
}

export default function PricingPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const info = dict.pricing.info;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: HOME_LABEL[locale], url: localeUrl(locale) },
              { name: dict.nav.pricing, url: localeUrl(locale, "/hinnakiri") },
            ])
          ),
        }}
      />
      <PageHeader eyebrow={dict.pricing.eyebrow} title={dict.pricing.title} lead={dict.pricing.lead} />

      <section className="shell py-14 lg:py-20">
        {/* Info */}
        <Reveal>
          <div className="card p-6 lg:p-8 mb-10 lg:mb-14">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-line bg-[rgba(228,238,240,0.45)] p-5">
                <p className="text-xs uppercase tracking-luxe text-ink-soft mb-2">{info.discountLabel}</p>
                <p className="text-brand-deep font-medium leading-relaxed">{info.discountHours}</p>
              </div>
              <div className="rounded-2xl border border-line bg-[rgba(228,238,240,0.45)] p-5">
                <p className="text-xs uppercase tracking-luxe text-ink-soft mb-2">{info.nightLabel}</p>
                <p className="text-brand-deep font-medium leading-relaxed">{info.nightSurcharge}</p>
              </div>
            </div>
            <p className="text-[0.95rem] text-ink-soft leading-relaxed mb-6">{info.transport}</p>
            <div className="rounded-2xl border border-[rgba(169,133,79,0.3)] bg-[rgba(198,163,106,0.1)] p-5">
              <p className="display text-lg text-brand-deep mb-1.5">{info.qualityTitle}</p>
              <p className="text-[0.92rem] text-ink-soft leading-relaxed">{info.qualityBody}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Table */}
          <Reveal>
            <div className="card overflow-hidden">
              <div className="hidden sm:grid grid-cols-[1fr_auto] gap-4 px-6 lg:px-8 py-4 bg-brand-deep text-white">
                <span className="text-xs uppercase tracking-luxe">{dict.pricing.colService}</span>
                <span className="text-xs uppercase tracking-luxe text-right">
                  {dict.pricing.colPrice}
                </span>
              </div>
              <ul>
                {priceRows.map((row, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 px-6 lg:px-8 py-4 border-t border-line first:border-t-0 sm:first:border-t hover:bg-brand-soft/40 transition-colors"
                  >
                    <span className="text-[0.95rem] text-ink leading-snug">
                      {row.service[locale]}
                    </span>
                    <span className="display text-brand-deep text-lg sm:text-right whitespace-nowrap">
                      {row.price[locale]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Notes */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-3.5 mb-4">
                <span aria-hidden="true">🏷️</span>
                <p className="text-sm font-semibold text-red-600">{info.taxNote}</p>
              </div>
              <div className="rounded-2xl border border-line bg-brand-soft px-5 py-4 mb-8 text-brand-deep font-medium">
                {info.discountSecondHour}
              </div>
              <h2 className="display text-2xl">{dict.pricing.notesTitle}</h2>
              <div className="rule mt-4 mb-6 max-w-[80px]" />
              <ol className="space-y-4">
                {dict.pricing.important.map((note, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="display text-gold text-sm tabular-nums mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.92rem] text-ink-soft leading-relaxed">{note}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 space-y-4">
                <p className="text-[0.92rem] text-ink-soft leading-relaxed">{info.hourlyOnePerson}</p>
                <p className="text-[0.92rem] text-brand-deep font-semibold leading-relaxed">{info.warrantyNb}</p>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed border-l-2 border-[rgba(169,133,79,0.5)] pl-4 py-0.5">
                  {info.pressureBefore}
                  <strong className="italic font-semibold text-brand-deep">{info.pressureImportant}</strong>
                  {info.pressureAfter}
                </p>
                <p className="display text-lg text-ink">{info.callIntro}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.servicePage.ctaTitle}
        body={dict.servicePage.ctaBody}
        primaryLabel={dict.cta.order}
      />
    </>
  );
}
