"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Star } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ReviewForm({ dict, locale }: { dict: Dictionary["reviewForm"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", message: "" });
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update(field: "name" | "message", value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = dict.required;
    if (!values.message.trim()) next.message = dict.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, rating, locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", message: "" });
      setRating(5);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-10 text-center" role="status">
        <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-brand-soft text-brand-deep">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="lead mt-5 max-w-sm mx-auto">{dict.success}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-7 mx-auto"
        >
          {dict.send}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-7 lg:p-9" noValidate>
      <div>
        <label className="block text-sm font-semibold mb-2">{dict.rating}</label>
        <div
          className="flex items-center gap-1.5"
          onMouseLeave={() => setHovered(0)}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            const value = i + 1;
            const filled = value <= (hovered || rating);
            return (
              <button
                key={value}
                type="button"
                aria-label={`${value}`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHovered(value)}
                className="p-0.5"
              >
                <Star
                  filled={filled}
                  className={`h-7 w-7 transition-colors ${filled ? "text-gold" : "text-line"}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="review-name" className="block text-sm font-semibold mb-2">
          {dict.name} <span className="text-gold">*</span>
        </label>
        <input
          id="review-name"
          type="text"
          className="field"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1.5">{errors.name}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="review-message" className="block text-sm font-semibold mb-2">
          {dict.message} <span className="text-gold">*</span>
        </label>
        <textarea
          id="review-message"
          className="field"
          placeholder={dict.placeholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-sm text-red-600 mt-1.5">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 mt-4">{dict.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-7 w-full justify-center disabled:opacity-60"
      >
        {status === "sending" ? dict.sending : dict.send}
      </button>
    </form>
  );
}
