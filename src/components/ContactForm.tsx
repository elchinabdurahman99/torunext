"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 12 * 1024 * 1024;

export default function ContactForm({ dict }: { dict: Dictionary["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update(field: string, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!values.email.trim()) next.email = dict.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = dict.invalidEmail;
    if (!values.phone.trim()) next.phone = dict.required;
    if (!values.address.trim()) next.address = dict.required;
    if (!values.message.trim()) next.message = dict.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      files.forEach((file) => formData.append("files", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", phone: "", address: "", message: "" });
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  function handleFileSelect(selected: File[]) {
    const withinSize = selected.filter((f) => f.size <= MAX_FILE_SIZE);
    const tooBig = selected.length !== withinSize.length;
    const next = withinSize.slice(0, MAX_FILES);
    setFiles(next);
    setErrors((e) => ({ ...e, files: tooBig ? dict.filesNote : "" }));
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
        {/* Name — no asterisk */}
        <Field
          id="name"
          label={dict.name}
          value={values.name}
          onChange={(v) => update("name", v)}
        />
        {/* Phone — required */}
        <Field
          id="phone"
          label={dict.phone}
          value={values.phone}
          onChange={(v) => update("phone", v)}
          type="tel"
          error={errors.phone}
          required
        />
      </div>
      {/* Email — required */}
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
      {/* Address — required */}
      <div className="mt-5">
        <Field
          id="address"
          label={dict.address}
          value={values.address}
          onChange={(v) => update("address", v)}
          error={errors.address}
          required
        />
      </div>
      {/* Message — required */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          {dict.message} <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          className="field"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-sm text-red-600 mt-1.5">{errors.message}</p>}
      </div>

      {/* File upload — optional */}
      <div className="mt-5">
        <label className="block text-sm font-semibold mb-2">
          <svg viewBox="0 0 24 24" className="inline w-3.5 h-3.5 mr-1.5 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
          {dict.files}
        </label>
        {/* Info box */}
        <div className="flex items-start gap-3 rounded-xl border border-brand-soft bg-brand-soft/40 px-4 py-3 mb-3">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-deep flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="text-sm text-stone-600 leading-relaxed">{dict.filesNote}</p>
        </div>
        {/* File input */}
        <div className="flex items-center gap-3 flex-wrap">
          <label className="cursor-pointer inline-flex items-center gap-2 btn btn-primary">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            {files.length === 0 ? dict.filesBtn : `${files.length} ${dict.filesBtn.toLowerCase()}`}
            <input
              type="file"
              className="hidden"
              multiple
              accept="image/*,video/*,.pdf"
              onChange={(e) => {
                handleFileSelect(Array.from(e.target.files || []));
                e.target.value = "";
              }}
            />
          </label>
        </div>
        {/* Selected file list */}
        {files.length > 0 && (
          <ul className="mt-2 space-y-1">
            {files.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-brand-deep flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="truncate max-w-[200px]">{f.name}</span>
                <span className="text-stone-400 flex-shrink-0">({(f.size / 1024 / 1024).toFixed(1)} MB)</span>
                <button
                  type="button"
                  onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                  className="ml-auto text-stone-400 hover:text-red-600 flex-shrink-0"
                  aria-label="Remove"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
        {errors.files && <p className="text-sm text-red-600 mt-1.5">{errors.files}</p>}
        <p className="text-xs text-stone-400 mt-2">{dict.filesHint}</p>
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
