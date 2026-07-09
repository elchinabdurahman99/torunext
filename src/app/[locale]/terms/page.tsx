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
    title: dict.termsPage.metaTitle,
    description: dict.termsPage.metaDesc,
    robots: { index: false, follow: false },
  };
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  const page = dict.termsPage;

  return (
    <>
      <PageHeader eyebrow="" title={page.title} lead={page.subtitle} />

      <section className="bg-ivory">
        <div className="shell py-16 lg:py-20 max-w-3xl">
          <ol className="space-y-0">
            {page.items.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <li className="flex gap-5 py-6 border-b border-line last:border-none">
                  <span className="eyebrow !text-gold shrink-0 mt-0.5 w-6 text-right">
                    {i + 1}.
                  </span>
                  <p className="lead text-sm leading-relaxed">{item}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
