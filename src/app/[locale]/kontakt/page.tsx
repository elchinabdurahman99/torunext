import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import ReviewSection from "@/components/ReviewSection";
import Reveal from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return { title: dict.meta.contactTitle, description: dict.meta.contactDesc };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.contactPage.eyebrow}
        title={dict.contactPage.title}
        lead={dict.contactPage.lead}
      />

      <ContactSection locale={locale} dict={dict} />

      {/* Map */}
      <section className="bg-paper border-t border-line">
        <div className="shell py-16 lg:py-20">
          <Reveal>
            <span className="eyebrow">{dict.contactPage.reach}</span>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
              <div className="card bg-ivory p-8 lg:p-10 flex flex-col justify-center">
                <p className="display text-2xl">{site.legalName}</p>
                <p className="lead mt-2">
                  {locale === "et"
                    ? "Reg. kood"
                    : locale === "ru"
                    ? "Рег. код"
                    : "Reg. no"}{" "}
                  {site.regCode}
                </p>
                <div className="rule my-6 max-w-[80px]" />
                <p className="lead">{site.address}</p>
                <p className="mt-4">
                  <a href={site.phoneHref} className="display text-xl text-brand-deep hover:text-brand transition-colors">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={site.emailHref} className="display text-xl text-brand-deep hover:text-brand transition-colors">
                    {site.email}
                  </a>
                </p>
                <div className="mt-6">
                  <span className="block text-xs uppercase tracking-luxe text-ink-soft">
                    {dict.contactPage.hours}
                  </span>
                  <span className="display text-lg">{dict.contactPage.hoursValue}</span>
                </div>
              </div>

              <div className="relative min-h-[340px] rounded-[24px] overflow-hidden card">
                <iframe
                  src={site.mapEmbed}
                  title="Torupro"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ReviewSection dict={dict} />
    </>
  );
}
