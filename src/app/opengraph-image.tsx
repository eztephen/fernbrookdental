import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared on LinkedIn, Messenger or Slack.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "100%", height: "100%", padding: "72px 80px", background: "#F6F2F1" }}>
        <div style={{ fontSize: 26, color: "#A87C4F", letterSpacing: 5, marginBottom: 26 }}>{SITE.tagline.toUpperCase()}</div>
        <div style={{ fontSize: 88, fontWeight: 700, color: "#43263F", letterSpacing: -2, lineHeight: 1.05 }}>{SITE.name}</div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#6D5F6A", maxWidth: 900 }}>Forty-minute appointments, fees published up front, and a team used to nervous patients.</div>
      </div>
    ),
    size,
  );
}
