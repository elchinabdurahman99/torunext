import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ArrowUpRight } from "./Icons";

const MTR_URL = "https://mtr.ttja.ee/majandustegevusteade?m=98";

/** Home page: the company's MTR activity licences, right under the hero. */
export default function MtrCard({ locale }: { locale: Locale }) {
  const { licences } = getDictionary(locale);

  const verifyLink = (className: string) => (
    <a
      href={MTR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`items-center gap-1.5 text-sm font-semibold text-brand-deep hover:text-brand transition-colors ${className}`}
    >
      {licences.verify}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );

  return (
    <section aria-labelledby="mtr-litsentsid" className="border-y border-line bg-ivory">
      <div className="shell grid gap-5 py-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 lg:py-14">
        <div>
          <h2 id="mtr-litsentsid" className="flex items-center gap-3 display text-[1.45rem] lg:text-[1.8rem]">
            <span className="grid place-items-center h-9 w-9 shrink-0 rounded-xl bg-brand-deep text-gold-soft">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7 3v5c0 4.5-2.9 8.3-7 10-4.1-1.7-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            {licences.title}
          </h2>
          <p className="lead mt-3 max-w-[46ch] text-[0.95rem] lg:text-base">{licences.note}</p>
          {verifyLink("mt-4 hidden lg:inline-flex")}
        </div>

        <dl className="grid gap-2.5 sm:grid-cols-3 sm:gap-4">
          {licences.items.map((item) => (
            <div
              key={item.number}
              className="flex items-center justify-between gap-3 rounded-[14px] border border-line bg-paper px-4 py-3 sm:flex-col sm:items-start sm:justify-between sm:rounded-[22px] sm:p-5 sm:shadow-soft"
            >
              <dt className="text-sm font-medium leading-snug text-ink">{item.label}</dt>
              <dd className="shrink-0 rounded-lg bg-brand-deep px-2.5 py-1 text-sm font-semibold tracking-wide text-gold-soft tabular-nums sm:text-[0.95rem]">
                {item.number}
              </dd>
            </div>
          ))}
        </dl>

        {verifyLink("inline-flex lg:hidden")}
      </div>
    </section>
  );
}
