import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4EFE6",
          color: "#2A231C",
          fontSize: 54,
          letterSpacing: 1,
          border: "10px solid #A6844E",
        }}
      >
        A♥E
      </div>
    ),
    { ...size },
  );
}
