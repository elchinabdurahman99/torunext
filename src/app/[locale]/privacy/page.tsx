import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.privacyPage.metaTitle,
    description: dict.privacyPage.metaDesc,
    robots: { index: false, follow: false },
  };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const page = dict.privacyPage;

  return (
    <>
      <PageHeader eyebrow="" title={page.title} lead="" />

      <section className="bg-ivory">
        <div className="shell py-16 lg:py-20 max-w-3xl">
          {page.sections.map((section, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="mb-10">
                <h2 className="display text-xl text-brand-deep mb-3">{section.heading}</h2>
                <div className="lead text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              </div>
              {i < page.sections.length - 1 && (
                <div className="rule mb-10 max-w-[60px]" />
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
