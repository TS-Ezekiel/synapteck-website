import { ImageResponse } from "next/og";

export const alt = "Synapteck Technologies | Connecting Vision. Engineering Reality.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(130deg,#080D17,#0B1220 55%,#07101D)",
          color: "#F4F7FB",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#42D6FF" }}>
          SYNAPTECK TECHNOLOGIES
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 36, fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>
          <div style={{ display: "flex" }}>Connecting vision.</div>
          <div style={{ display: "flex", color: "#42D6FF" }}>Engineering reality.</div>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 28, color: "#9EADC2" }}>
          Software · Systems · Innovation
        </div>
      </div>
    ),
    size,
  );
}
