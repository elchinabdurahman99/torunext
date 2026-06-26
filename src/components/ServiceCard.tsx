import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Service } from "@/data/services";
import { localizedHref } from "@/lib/paths";
import { ServiceIcon, ArrowUpRight } from "./Icons";

export default function ServiceCard({
  service,
  locale,
  readMore,
  primary = false,
}: {
  service: Service;
  locale: Locale;
  readMore: string;
  primary?: boolean;
}) {
  const href = localizedHref(locale, `/teenused/${service.slug}`);

  if (primary) {
    return (
      <Link
        href={href}
        className="service-card card group relative flex flex-col p-7 lg:p-8 h-full border-2 border-brand-deep/10 hover:border-brand-deep/30 transition-colors"
      >
        <div className="flex items-start justify-between">
          <span className="grid place-items-center h-14 w-14 rounded-2xl bg-brand-deep text-white">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </span>
          <span className="display text-sm text-gold tabular-nums">{service.index}</span>
        </div>
        <h3 className="display text-[1.5rem] mt-7 leading-tight">{service.title[locale]}</h3>
        <p className="lead text-[0.95rem] mt-3 flex-1">{service.short[locale]}</p>
        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
          {readMore}
          <ArrowUpRight className="service-arrow h-4 w-4" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="service-card card group relative flex flex-col p-6 h-full"
    >
      <div className="flex items-start justify-between">
        <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="display text-xs text-gold/70 tabular-nums">{service.index}</span>
      </div>
      <h3 className="display text-[1.25rem] mt-5 leading-tight">{service.title[locale]}</h3>
      <p className="lead text-[0.88rem] mt-2 flex-1 line-clamp-3">{service.short[locale]}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-deep">
        {readMore}
        <ArrowUpRight className="service-arrow h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
