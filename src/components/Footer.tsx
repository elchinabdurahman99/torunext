import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/lib/paths";
import { site } from "@/data/site";
import Logo from "./Logo";
import { Phone, Mail, Pin } from "./Icons";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: localizedHref(locale, "/meist"), label: dict.nav.about },
    { href: localizedHref(locale, "/teenused"), label: dict.nav.services },
    { href: localizedHref(locale, "/hinnakiri"), label: dict.nav.pricing },
    { href: localizedHref(locale, "/kontakt"), label: dict.nav.contact },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-deep text-white">
      <div className="grain" />
      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="[&_span.text-brand]:text-gold-soft [&_span.bg-brand-deep]:bg-white/10 text-white">
              <Logo locale={locale} className="[&_span:last-child]:text-white" />
            </div>
            <p className="display text-2xl mt-6 max-w-xs leading-snug">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="eyebrow !text-gold-soft mb-5">{dict.footer.company}</h3>
            <ul className="space-y-1.5 text-sm text-white/75 leading-relaxed">
              <li className="text-white font-medium">{site.legalName}</li>
              <li>Reg. {site.regCode}</li>
              <li>{site.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-gold-soft mb-5">{dict.footer.links}</h3>
            <ul className="space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-gold-soft transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-gold-soft mb-5">{dict.footer.contacts}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-white hover:text-gold-soft transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold-soft" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2.5 text-white hover:text-gold-soft transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold-soft" /> {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-white/75">
                <Pin className="h-4 w-4 mt-0.5 text-gold-soft shrink-0" />
                {site.addressShort}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p className="tracking-luxe uppercase">{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
