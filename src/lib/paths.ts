import type { Locale } from "@/i18n/config";

/** Build a locale-prefixed path, e.g. localizedHref("et", "/teenused") -> "/et/teenused" */
export function localizedHref(locale: Locale, path: string = "/"): string {
  if (path === "/" || path === "") return `/${locale}`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
