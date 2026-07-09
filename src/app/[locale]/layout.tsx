import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localizedHref } from "@/lib/paths";
import "../globals.css";

const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"), { ssr: false });
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), { ssr: false });

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
    title: { default: dict.meta.homeTitle, template: `%s — Torupro` },
    description: dict.meta.homeDesc,
    metadataBase: new URL("https://torupro.ee"),
    alternates: {
      canonical: `https://torupro.ee/${locale}`,
      languages: {
        et: "https://torupro.ee/et",
        en: "https://torupro.ee/en",
        ru: "https://torupro.ee/ru",
        "x-default": "https://torupro.ee/et",
      },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDesc,
      siteName: site.name,
      type: "website",
      locale: locale === "et" ? "et_EE" : locale === "en" ? "en_US" : "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDesc,
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
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
        <FloatingButtons />
        <CookieBanner
          message={dict.cookies.message}
          accept={dict.cookies.accept}
          decline={dict.cookies.decline}
          learnMore={dict.cookies.learnMore}
          privacyHref={localizedHref(locale, "/privacy")}
        />
      </body>
    </html>
  );
}
