import { notFound } from "next/navigation";

// Catch-all for unknown paths under a locale so they render the localized 404 (HTTP 404).
export default function CatchAll() {
  notFound();
}
