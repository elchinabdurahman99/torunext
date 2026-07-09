import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Torupro — Sanitaartehnilised tööd Tallinnas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c3a47",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(198,163,106,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#c6a36a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#0c3a47",
              fontWeight: "bold",
            }}
          >
            T
          </div>
          <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 600 }}>
            Torupro
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          Sanitaartehnilised tööd Tallinnas
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#c6a36a",
            fontSize: 28,
            fontWeight: 400,
          }}
        >
          Kiire · Usaldusväärne · 24/7
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            color: "rgba(255,255,255,0.5)",
            fontSize: 22,
          }}
        >
          torupro.ee
        </div>
      </div>
    ),
    { ...size }
  );
}
