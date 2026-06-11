import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/lib/paths";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return { title: dict.meta.aboutTitle, description: dict.meta.aboutDesc };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} />

      <section className="shell py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden card shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead text-lg">{dict.about.body}</p>
            <Link
              href={localizedHref(locale, "/teenused")}
              className="inline-flex items-center gap-2 mt-8 font-semibold text-brand-deep group"
            >
              {dict.cta.services}
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper border-y border-line">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <span className="eyebrow">{dict.about.statsTitle}</span>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {dict.about.stats.map((s, i) => (
              <Reveal key={i} delay={(i % 4) * 90}>
                <div>
                  <p className="display text-[clamp(2.6rem,5vw,4rem)] text-brand-deep leading-none">
                    {s.value}
                  </p>
                  <div className="rule mt-4 mb-3 max-w-[60px]" />
                  <p className="text-sm uppercase tracking-wide text-ink-soft">{s.label}</p>
                </div>
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
