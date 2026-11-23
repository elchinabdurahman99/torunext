import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Torupro – torutööd ja ummistuste likvideerimine Tallinnas",
    short_name: "Torupro",
    description:
      "Avariilised torutööd, ummistuste likvideerimine, survepesu, fekaalivedu ja kaamerauuring Tallinnas ja Harjumaal 24/7.",
    start_url: "/et",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c3a47",
    lang: "et",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
