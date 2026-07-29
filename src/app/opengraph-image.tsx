import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = `${siteConfig.name} — ${siteConfig.headline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0a0c10",
          color: "#f1f5f9",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 12% 0%, rgba(232,168,73,0.16), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(232,168,73,0.08), transparent 50%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#e8a849",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              fontFamily: "system-ui, sans-serif",
              color: "#e8a849",
              letterSpacing: "0.04em",
            }}
          >
            {siteConfig.availability}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              width: "72px",
              height: "3px",
              background: "#e8a849",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "34px",
              fontFamily: "system-ui, sans-serif",
              color: "#e8a849",
              fontWeight: 600,
            }}
          >
            {siteConfig.headline}
          </div>
          <div
            style={{
              fontSize: "26px",
              fontFamily: "system-ui, sans-serif",
              color: "#94a3b8",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Learning by building · Open to software engineering internships
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          <div>{siteConfig.tagline}</div>
          <div style={{ color: "#e8a849" }}>Portfolio</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
