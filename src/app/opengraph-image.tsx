import { ImageResponse } from "next/og";

export const alt = "Curious Office — Seed-Stage Investing in AI-First Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#ededed",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Curious Office
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 28,
            color: "#a1a1a1",
            marginTop: 24,
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          <span>Seed-stage investing in AI-first companies.</span>
          <span>Building and investing since 2007.</span>
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#8f8f8f",
            marginTop: 48,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
          }}
        >
          curiousoffice.com
        </div>
      </div>
    ),
    { ...size }
  );
}
