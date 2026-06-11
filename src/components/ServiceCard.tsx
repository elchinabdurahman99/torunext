import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Service } from "@/data/services";
import { localizedHref } from "@/lib/paths";
import { ServiceIcon, ArrowUpRight } from "./Icons";

export default function ServiceCard({
  service,
  locale,
  readMore,
}: {
  service: Service;
  locale: Locale;
  readMore: string;
}) {
  const href = localizedHref(locale, `/teenused/${service.slug}`);
  return (
    <Link
      href={href}
      className="service-card card group relative flex flex-col p-7 lg:p-8 h-full"
    >
      <div className="flex items-start justify-between">
        <span className="grid place-items-center h-14 w-14 rounded-2xl bg-brand-soft text-brand-deep">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
        <span className="display text-sm text-gold tabular-nums">{service.index}</span>
      </div>

      <h3 className="display text-[1.5rem] mt-7 leading-tight">
        {service.title[locale]}
      </h3>
      <p className="lead text-[0.95rem] mt-3 flex-1">{service.short[locale]}</p>

      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
        {readMore}
        <ArrowUpRight className="service-arrow h-4 w-4" />
      </span>
    </Link>
  );
}
