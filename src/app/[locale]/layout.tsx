import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localizedHref } from "@/lib/paths";
import { SITE_URL, OG_LOCALE, siteGraph, jsonLd } from "@/lib/seo";
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
    metadataBase: new URL(SITE_URL),
    // No "%s | Brand" template: every page sets its own keyword-based title.
    title: dict.meta.homeTitle,
    description: dict.meta.homeDesc,
    applicationName: site.name,
    formatDetection: { telephone: false },
    openGraph: {
      siteName: site.name,
      type: "website",
      locale: OG_LOCALE[locale],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c3a47",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(siteGraph(locale)) }}
        />
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
