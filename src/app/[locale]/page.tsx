import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { fetchServices } from "@/data/services";
import { site } from "@/data/site";
import { localizedHref } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight, Phone } from "@/components/Icons";

export const revalidate = 60;

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const allServices = await fetchServices();
  const services = allServices.filter((s) => s.isPrimary).slice(0, 6);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-paper overflow-hidden">
        <div className="shell grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center pt-14 lg:pt-20 pb-16 lg:pb-24">
          {/* Left column */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 bg-ink text-white rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">
                  {dict.hero.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              {(() => {
                const words = dict.hero.title.split(" ");
                const lastWord = words.pop() ?? "";
                const rest = words.join(" ");
                return (
                  <h1
                    className="font-sans font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] mt-5 leading-[1.06] tracking-tight"
                    style={{ fontWeight: 800 }}
                  >
                    {rest}{" "}
                    <span className="relative inline-block">
                      {lastWord}
                      <span className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full bg-gradient-to-r from-brand to-gold-soft" />
                    </span>
                  </h1>
                );
              })()}
            </Reveal>

            <Reveal delay={180}>
              <p className="lead text-lg mt-6 max-w-lg">{dict.hero.subtitle}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap gap-2 mt-6">
                {allServices.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={localizedHref(locale, `/teenused/${s.slug}`)}
                    className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors duration-200"
                  >
                    {s.title[locale]}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={site.phoneHref} className="btn btn-primary justify-center sm:justify-start">
                  <Phone className="h-4 w-4" />
                  {dict.cta.call}
                </a>
                <Link
                  href={localizedHref(locale, "/kontakt")}
                  className="btn btn-dark justify-center sm:justify-start"
                >
                  {dict.cta.quote}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right column — image slider */}
          <Reveal delay={180}>
            <HeroSlider />
          </Reveal>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="shell py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden card shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">{dict.intro.eyebrow}</span>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mt-4">
                {dict.intro.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead text-lg mt-6">{dict.intro.body}</p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href={localizedHref(locale, "/meist")}
                className="inline-flex items-center gap-2 mt-8 font-semibold text-brand-deep group"
              >
                {dict.cta.services}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative bg-paper border-y border-line">
        <div className="shell py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <Reveal>
              <span className="eyebrow">{dict.servicesSection.eyebrow}</span>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mt-4 max-w-xl">
                {dict.servicesSection.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead max-w-sm">{dict.servicesSection.subtitle}</p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} primary />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="shell py-20 lg:py-28">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] max-w-xl">
            {dict.values.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {dict.values.items.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <div>
                <span className="display text-gold text-2xl">0{i + 1}</span>
                <div className="rule mt-4 mb-5" />
                <h3 className="display text-xl">{item.title}</h3>
                <p className="lead text-[0.95rem] mt-3">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <TestimonialsSection locale={locale} dict={dict} />

      <CtaBand
        locale={locale}
        title={dict.servicePage.ctaTitle}
        body={dict.servicePage.ctaBody}
        primaryLabel={dict.cta.contact}
      />
    </>
  );
}
