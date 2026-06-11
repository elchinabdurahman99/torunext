import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { localizedHref } from "@/lib/paths";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight, Phone, ServiceIcon } from "@/components/Icons";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative mesh grain overflow-hidden">
        <div className="shell relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center pt-14 lg:pt-20 pb-16 lg:pb-24">
          <div>
            <Reveal>
              <span className="eyebrow">{dict.hero.eyebrow}</span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display text-[clamp(2.6rem,6.4vw,5rem)] mt-5 leading-[1.0]">
                {dict.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="lead text-lg mt-7 max-w-xl">{dict.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href={localizedHref(locale, "/kontakt")} className="btn btn-primary">
                  {dict.cta.contact}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={site.phoneHref} className="btn btn-ghost">
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-8 text-sm text-ink-soft flex flex-wrap items-center gap-x-2 gap-y-1">
                {dict.hero.note.split("·").map((part, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
                    {part.trim()}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          {/* Visual stack */}
          <Reveal delay={200} className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[32px] overflow-hidden card shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop"
                  alt="Torupro"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 card bg-paper px-6 py-5 shadow-soft">
                <p className="display text-3xl text-brand-deep leading-none">24/7</p>
                <p className="text-xs uppercase tracking-luxe text-ink-soft mt-1.5">
                  {dict.contactPage.hours}
                </p>
              </div>
              <div className="absolute -top-5 -right-4 card bg-brand-deep text-white shadow-lift overflow-hidden min-w-[100px]">
                {/* gold shimmer strip */}
                <div className="h-1 w-full bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
                <div className="px-5 py-4 text-center relative">
                  {/* decorative dot */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold/50" />
                  <ServiceIcon name="pipe" className="h-5 w-5 text-gold mx-auto mb-2" />
                  <p className="display text-3xl leading-none text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                    10+
                  </p>
                  <div className="h-px w-full bg-white/10 my-2" />
                  <p className="text-[0.58rem] uppercase tracking-luxe text-white/60 leading-[1.6]">
                    {locale === "et" ? (
                      <>aastat<br />kogemust</>
                    ) : locale === "ru" ? (
                      <>лет<br />опыта</>
                    ) : (
                      <>years of<br />experience</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marquee */}
        <div className="relative border-y border-line py-4 overflow-hidden">
          <div className="marquee-track">
            {[...services, ...services].map((s, i) => (
              <span
                key={i}
                className="display text-xl text-ink/35 px-8 whitespace-nowrap flex items-center gap-8"
              >
                {s.title[locale]}
                <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
              </span>
            ))}
          </div>
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
                <ServiceCard service={s} locale={locale} readMore={dict.cta.readMore} />
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
