import { ImageResponse } from "next/og";

export const alt = "OJ.DZN — Premium websites for brands that want to be taken seriously";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const tiles = ["#adc0a8", "#f38b69", "#bcd9ef", "#f2c38a", "#1e1e1e", "#ecf9a8", "#f38b69", "#adc0a8", "#bcd9ef", "#f2c38a"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#d9f461", padding: 64, color: "#1e1e1e" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="56" height="56" viewBox="0 0 440 440">
            <circle cx="220" cy="220" r="220" fill="#1e1e1e" />
            <path fill="#efe1ce" d="M265 15 98 243h114l-40 172 166-228H232z" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>OJ.DZN</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56, fontSize: 92, lineHeight: 0.95, letterSpacing: -4, fontWeight: 600 }}>
          <span>Websites that</span>
          <span>look premium.</span>
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
