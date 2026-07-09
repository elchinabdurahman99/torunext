"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/lib/paths";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { Phone } from "./Icons";

type NavStrings = {
  home: string;
  about: string;
  services: string;
  pricing: string;
  blog: string;
  contact: string;
};

export default function Header({
  locale,
  nav,
  phone,
  phoneHref,
  ctaLabel,
}: {
  locale: Locale;
  nav: NavStrings;
  phone: string;
  phoneHref: string;
  ctaLabel: string;
}) {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: localizedHref(locale, "/meist"), label: nav.about },
    { href: localizedHref(locale, "/teenused"), label: nav.services },
    { href: localizedHref(locale, "/hinnakiri"), label: nav.pricing },
    { href: localizedHref(locale, "/blogi"), label: nav.blog },
    { href: localizedHref(locale, "/kontakt"), label: nav.contact },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== localizedHref(locale, "/") && pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-500 ${
        scrolled ? "header-blur shadow-[0_10px_30px_-24px_rgba(17,36,48,0.5)]" : "bg-ivory/0"
      }`}
    >
      <div className="shell flex items-center justify-between h-[72px]">
        <Logo locale={locale} />

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-[0.95rem]"
              data-active={isActive(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
          <LanguageSwitcher current={locale} />
          <Link
            href={localizedHref(locale, "/kontakt")}
            className="btn btn-primary hidden sm:inline-flex !py-2.5 !px-5 text-sm"
          >
            {ctaLabel}
          </Link>

          {/* Burger */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-line"
          >
            <span className="relative block w-5 h-3.5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/20"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <nav className="relative bg-paper border-t border-line shadow-soft">
          <div className="shell py-6 flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="display text-2xl py-3 border-b border-line/70"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href={phoneHref} className="btn btn-ghost justify-center">
                <Phone className="h-4 w-4" /> {phone}
              </a>
              <Link
                href={localizedHref(locale, "/kontakt")}
                className="btn btn-primary justify-center"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
