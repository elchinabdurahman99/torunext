import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/data/services";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return { title: dict.meta.servicesTitle, description: dict.meta.servicesDesc };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);

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

      <section className="shell pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
