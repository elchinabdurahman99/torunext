"use client";

import { useState, useEffect } from "react";
import { site } from "@/data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`grid place-items-center h-11 w-11 rounded-xl bg-brand-deep text-white shadow-lg transition-all duration-300 hover:bg-brand ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Phone — always visible */}
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="relative grid place-items-center h-14 w-14 rounded-full bg-brand text-white shadow-xl hover:bg-brand-deep transition-colors"
      >
        {/* Online indicator */}
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white" />
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      </a>
    </div>
  );
}
