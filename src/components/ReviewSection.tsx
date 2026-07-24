import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import Reveal from "./Reveal";
import ReviewForm from "./ReviewForm";

export default function ReviewSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="shell py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <Reveal>
          <span className="eyebrow">{dict.reviewSection.eyebrow}</span>
          <h2 className="display text-[clamp(2rem,4vw,3rem)] mt-4">
            {dict.reviewSection.title}
          </h2>
          <p className="lead text-lg mt-5 max-w-md">{dict.reviewSection.subtitle}</p>
        </Reveal>

        <Reveal delay={120}>
          <ReviewForm dict={dict.reviewForm} locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
