import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/lib/paths";

export default function Logo({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localizedHref(locale, "/")}
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Torupro"
    >
      <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-brand-deep text-white overflow-hidden">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M6 4h6a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="6" cy="4" r="1.6" fill="var(--gold-soft)" />
          <circle cx="20" cy="16" r="1.6" fill="var(--gold-soft)" />
        </svg>
      </span>
      <span className="display text-[1.35rem] tracking-tight leading-none">
        Toru<span className="text-brand">pro</span>
      </span>
    </Link>
  );
}
