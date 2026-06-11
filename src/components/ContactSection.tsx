import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { Phone, Mail, Pin } from "./Icons";

export default function ContactSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="kontakt" className="shell py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <Reveal>
          <span className="eyebrow">{dict.contactSection.eyebrow}</span>
          <h2 className="display text-[clamp(2rem,4vw,3rem)] mt-4">
            {dict.contactSection.title}
          </h2>
          <p className="lead text-lg mt-5 max-w-md">{dict.contactSection.subtitle}</p>

          <div className="mt-10 space-y-5">
            <a href={site.phoneHref} className="flex items-center gap-4 group">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-soft text-brand-deep">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-luxe text-ink-soft">
                  {dict.cta.call}
                </span>
                <span className="display text-xl group-hover:text-brand transition-colors">
                  {site.phone}
                </span>
              </span>
            </a>
            <a href={site.emailHref} className="flex items-center gap-4 group">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-soft text-brand-deep">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-luxe text-ink-soft">Email</span>
                <span className="display text-xl group-hover:text-brand transition-colors">
                  {site.email}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-soft text-brand-deep">
                <Pin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-luxe text-ink-soft">
                  {site.legalName} · {site.regCode}
                </span>
                <span className="display text-xl">{site.addressShort}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm dict={dict.form} />
        </Reveal>
      </div>
    </section>
  );
}
