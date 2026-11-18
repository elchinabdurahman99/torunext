import type { Locale } from "@/i18n/config";
import Reveal from "./Reveal";

const NOTE: Record<Locale, string> = {
  et: "Kvaliteet ja vastutus on tagatud riiklike tegevuslubadega (MTR)",
  en: "Quality and responsibility are guaranteed by state activity licences (MTR)",
  ru: "Качество и ответственность гарантированы государственными лицензиями на деятельность (MTR)",
};

export default function MtrCard({ locale }: { locale: Locale }) {
  return (
    <section className="shell pt-10 lg:pt-14">
      <Reveal>
        <div className="flex items-center sm:justify-center gap-3 sm:gap-4 rounded-[22px] border border-line bg-paper shadow-soft px-5 py-4 sm:px-8 sm:py-5">
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
          <p className="text-[0.95rem] sm:text-base font-medium leading-snug text-ink">{NOTE[locale]}</p>
        </div>
      </Reveal>
    </section>
  );
}
