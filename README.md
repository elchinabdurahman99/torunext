# Torupro — premium plumbing website

A redesigned, multilingual, multi-page website for **Torupro (BaMu Ehitus OÜ)** — plumbing & sanitary services in Tallinn and Harju County, Estonia.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**. Light, luxury theme only — no dark mode.

## Features

- **3 languages** — Estonian (`et`, default), English (`en`), Russian (`ru`), via the `/[locale]/…` route segment, middleware locale detection and a language switcher.
- **Multi-page** — Home, About (`/meist`), Services (`/teenused`), 9 service detail pages (`/teenused/[slug]`), Pricing (`/hinnakiri`), Contact (`/kontakt`).
- **All original functionality preserved** — full service catalogue, complete price table + notes, company details, working contact form, phone/email links.
- **Contact form** — client-side validation + a `/api/contact` route handler (ready to connect to a real email provider).
- Refined design system: Fraunces + Hanken Grotesk type, scroll-reveal animations, sticky blurred header, responsive layout, accessible (respects `prefers-reduced-motion`).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to your detected locale (e.g. `/et`).

Production build:

```bash
npm run build
npm start
```

> **Note:** the build downloads the Fraunces & Hanken Grotesk fonts from Google Fonts at build time (via `next/font`). Make sure the build machine has internet access to `fonts.googleapis.com`. (A locked-down/offline environment is the only thing that will block the build — the code itself is valid.)

## Connecting the contact form to real email

`src/app/api/contact/route.ts` currently validates the submission and logs it. To actually send mail, plug in a provider (e.g. [Resend](https://resend.com)):

1. `npm install resend`
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment the example block in `route.ts` and set the destination to `info@torupro.ee`.

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx            # root layout (html/body, fonts, header/footer)
      page.tsx              # Home
      meist/page.tsx        # About
      teenused/page.tsx     # Services list
      teenused/[slug]/      # Service detail (9 services)
      hinnakiri/page.tsx    # Pricing
      kontakt/page.tsx      # Contact
    api/contact/route.ts    # Contact form endpoint
    globals.css             # Design system
  components/               # Header, Footer, ServiceCard, ContactForm, …
  data/                     # site info, services, pricing
  i18n/                     # locale config + dictionaries (et/en/ru)
  lib/                      # helpers
  middleware.ts             # locale routing
```

## Company

Torupro / BaMu Ehitus OÜ · Reg. 16986440 · Pae tn 20, Tallinn 11414 · info@torupro.ee · +372 56 058 888
