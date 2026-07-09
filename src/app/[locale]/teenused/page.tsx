import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fetchServices } from "@/data/services";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDesc,
    alternates: {
      canonical: `https://torupro.ee/${locale}/teenused`,
      languages: {
        et: "https://torupro.ee/et/teenused",
        en: "https://torupro.ee/en/teenused",
        ru: "https://torupro.ee/ru/teenused",
        "x-default": "https://torupro.ee/et/teenused",
      },
    },
  };
}

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const services = await fetchServices();

  const primary = services.filter((s) => s.isPrimary);
  const secondary = services.filter((s) => !s.isPrimary);

  const sectionLabel: Record<Locale, { primary: string; secondary: string }> = {
    et: { primary: "Põhiteenused", secondary: "Lisateenused" },
    en: { primary: "Core Services", secondary: "Additional Services" },
    ru: { primary: "Основные услуги", secondary: "Дополнительные услуги" },
  };
  const labels = sectionLabel[locale];

  return (
    <>
      <PageHeader
        eyebrow={dict.servicesPage.eyebrow}
        title={dict.servicesPage.title}
        lead={dict.servicesPage.lead}
      />

      <section className="shell pt-4 pb-8">
        <Reveal>
          <p className="lead text-lg max-w-3xl">{dict.servicesPage.body}</p>
        </Reveal>
      </section>

      {/* Primary services */}
      {primary.length > 0 && (
        <section className="shell pb-14">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">{labels.primary}</span>
              <span className="h-px flex-1 bg-brand-deep/20" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primary.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} primary />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Secondary services */}
      {secondary.length > 0 && (
        <section className="shell pb-20 lg:pb-28">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">{labels.secondary}</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {secondary.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

    </>
  );
}
