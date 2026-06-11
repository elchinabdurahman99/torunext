"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "./Icons";

export default function TestimonialsSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  function go(delta: number) {
    setIndex((i) => (i + delta + total) % total);
  }

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const current = testimonials[index];

  return (
    <section className="shell py-20 lg:py-28">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <Reveal>
          <span className="eyebrow">{dict.testimonials.eyebrow}</span>
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mt-4 max-w-xl">
            {dict.testimonials.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead max-w-sm">{dict.testimonials.subtitle}</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="relative card bg-paper p-8 sm:p-12 lg:p-16 overflow-hidden">
          <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 h-12 w-12 sm:h-16 sm:w-16 text-brand-soft" />

          <div className="relative flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                filled={i < current.rating}
                className={`h-4 w-4 ${i < current.rating ? "text-gold" : "text-line"}`}
              />
            ))}
          </div>

          <p className="lead text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed">
            {current.text[locale]}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-full bg-brand-deep text-white display text-lg">
              {current.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-ink-soft">{current.location}</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-gold" : "w-1.5 bg-line"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(-1)}
                className="grid place-items-center h-11 w-11 rounded-full border border-line transition-colors hover:border-brand hover:text-brand-deep"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(1)}
                className="grid place-items-center h-11 w-11 rounded-full border border-line transition-colors hover:border-brand hover:text-brand-deep"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
