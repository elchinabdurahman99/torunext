import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "404 – Lehte ei leitud / Page not found" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell py-24 lg:py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display text-[clamp(2.2rem,5vw,3.6rem)] mt-4">
        Lehte ei leitud · Page not found · Страница не найдена
      </h1>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/et" className="btn btn-primary">Avaleht</Link>
        <Link href="/en" className="btn btn-dark">Home</Link>
        <Link href="/ru" className="btn btn-dark">Главная</Link>
      </div>
    </section>
  );
}
