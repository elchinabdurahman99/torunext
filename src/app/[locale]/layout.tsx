import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "et") as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDesc,
    metadataBase: new URL("https://torupro.ee"),
    alternates: {
      languages: { et: "/et", en: "/en", ru: "/ru" },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDesc,
      siteName: site.name,
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header
          locale={locale}
          nav={dict.nav}
          phone={site.phone}
          phoneHref={site.phoneHref}
          ctaLabel={dict.cta.contact}
        />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
