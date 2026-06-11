import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
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
  return { title: dict.meta.pricingTitle, description: dict.meta.pricingDesc };
}

export default function PricingPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.pricing.eyebrow} title={dict.pricing.title} lead={dict.pricing.lead} />

      <section className="shell py-14 lg:py-20">
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
