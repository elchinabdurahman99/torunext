"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update(field: string, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = dict.required;
    if (!values.email.trim()) next.email = dict.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = dict.invalidEmail;
    if (!values.message.trim()) next.message = dict.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", phone: "", message: "" });
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={dict.name}
          value={values.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          required
        />
        <Field
          id="phone"
          label={dict.phone}
          value={values.phone}
          onChange={(v) => update("phone", v)}
          type="tel"
        />
      </div>
      <div className="mt-5">
        <Field
          id="email"
          label={dict.email}
          value={values.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          type="email"
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          {dict.message} <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          className="field"
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

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-sm text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}
