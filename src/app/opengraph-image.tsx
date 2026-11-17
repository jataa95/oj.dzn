import { ImageResponse } from "next/og";

export const alt = "oj.dzn — Premium websites for brands that want to be taken seriously";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const tiles = ["#EFE1CE", "#333333", "#EFE1CE", "#333333", "#EFE1CE", "#333333", "#EFE1CE", "#333333", "#EFE1CE", "#333333"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#191919", padding: 64, color: "#EFE1CE" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="56" height="56" viewBox="0 0 440 440">
            <circle cx="220" cy="220" r="220" fill="#EFE1CE" />
            <path fill="#333333" d="M265 15 98 243h114l-40 172 166-228H232z" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>oj.dzn</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56, fontSize: 92, lineHeight: 0.95, letterSpacing: -4, fontWeight: 600 }}>
          <span>Stand out.</span>
          <span>Get chosen.</span>
        </div>
        <div style={{ display: "flex", marginTop: "auto", gap: 0 }}>
          {tiles.map((c, i) => (
            <div key={i} style={{ width: 107, height: 107, background: c, borderRadius: i % 3 === 0 ? 999 : i % 3 === 1 ? 0 : "999px 999px 0 0" }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
