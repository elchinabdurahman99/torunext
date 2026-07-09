"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookieBannerProps {
  message: string;
  accept: string;
  decline: string;
  learnMore: string;
  privacyHref: string;
}

export default function CookieBanner({
  message,
  accept,
  decline,
  learnMore,
  privacyHref,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-brand-deep text-white rounded-2xl shadow-[0_-4px_60px_-10px_rgba(12,58,71,0.5)] border border-white/10 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <p className="text-sm text-white/80 flex-1 leading-relaxed">
            {message}{" "}
            <Link
              href={privacyHref}
              className="text-gold-soft underline underline-offset-2 hover:text-white transition-colors"
            >
              {learnMore}
            </Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="inline-flex items-center justify-center font-semibold text-sm rounded-full px-5 py-2.5 border border-white/25 text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 cursor-pointer"
            >
              {decline}
            </button>
            <button
              onClick={handleAccept}
              className="inline-flex items-center justify-center font-semibold text-sm rounded-full px-5 py-2.5 text-white transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, var(--gold-soft), var(--gold))",
              }}
            >
              {accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
