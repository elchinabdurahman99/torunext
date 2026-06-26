"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

const IMAGES = [
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1400&auto=format&fit=crop",
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIdx((i) => (i + 1) % IMAGES.length);

  return (
    <div className="relative w-full rounded-[28px] overflow-hidden aspect-[4/3] shadow-lift">
      <img
        key={idx}
        src={IMAGES[idx]}
        alt=""
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-soft grid place-items-center text-ink hover:scale-110 transition-transform"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-soft grid place-items-center text-ink hover:scale-110 transition-transform"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
