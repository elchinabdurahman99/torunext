import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/lib/paths";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowUpRight, Phone } from "./Icons";

export default function CtaBand({
  locale,
  title,
  body,
  primaryLabel,
}: {
  locale: Locale;
  title: string;
  body: string;
  primaryLabel: string;
}) {
  return (
    <section className="shell py-12 lg:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-brand-deep text-white grain px-8 py-12 lg:px-16 lg:py-16">
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight">{title}</h2>
              <p className="text-white/75 mt-4 leading-relaxed">{body}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href={localizedHref(locale, "/kontakt")} className="btn btn-gold">
                {primaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost !text-white !border-white/30 hover:!bg-white/10">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
