type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Pin({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Star({ className, filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-2.9-5.4 2.9 1.2-6L3.3 9.3l6.1-.7Z" />
    </svg>
  );
}

export function Quote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M9.5 6C6.5 7.4 5 9.6 5 12.6V18h5.5v-5.5H7.7c.1-1.7 1.1-3 2.8-3.8L9.5 6Zm9 0c-3 1.4-4.5 3.6-4.5 6.6V18H19.5v-5.5h-2.8c.1-1.7 1.1-3 2.8-3.8L18.5 6Z" />
    </svg>
  );
}

export function ChevronLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

const serviceIcons: Record<string, JSX.Element> = {
  pipe: (
    <>
      <path d="M4 9h7a3 3 0 0 1 3 3v8" />
      <path d="M14 4v4M11 4h6" />
      <path d="M4 6v6" />
    </>
  ),
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />,
  drain: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 0 0 3-3V8" />
    </>
  ),
  weld: (
    <>
      <path d="M3 12h6l2-3 2 6 2-3h6" />
      <path d="M3 18h18M3 6h18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="13" height="11" rx="2" />
      <path d="m16 10 5-2v8l-5-2" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
      <path d="M6 12V6a2 2 0 0 1 2-2h1M7 19l-1 2M18 19l1 2" />
    </>
  ),
  wash: (
    <>
      <path d="M7 4h6l1 5H6l1-5Z" />
      <path d="M10 9v3M8 14c0 3 4 3 4 6M14 14c0 2-2 3-2 6" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden>
      {serviceIcons[name] ?? serviceIcons.pipe}
    </svg>
  );
}
