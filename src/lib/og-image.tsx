import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const shareImage = {
  alt: "Asif and Esha. 12 October 2026. Reception Program.",
  size: { width: 1200, height: 630 },
  contentType: "image/png",
};

async function loadSerifFont(): Promise<ArrayBuffer | null> {
  try {
    const file = await readFile(join(process.cwd(), "src/assets/CormorantGaramond-SemiBold.ttf"));
    const copy = new Uint8Array(file.byteLength);
    copy.set(file);
    return copy.buffer;
  } catch {
    return null;
  }
}

export async function createShareImage() {
  const font = await loadSerifFont();
  const fontFamily = font ? "Cormorant Garamond" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F4EFE6",
          color: "#2A231C",
          padding: "42px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #A6844E",
            fontFamily,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 7,
              color: "#5C4524",
              textTransform: "uppercase",
            }}
          >
            A new chapter begins
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 92,
              letterSpacing: 2,
              lineHeight: 1,
            }}
          >
            ASIF & ESHA
          </div>
          <div
            style={{
              display: "flex",
              width: 140,
              height: 1,
              background: "#A6844E",
              marginTop: 32,
              marginBottom: 32,
            }}
          />
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 6 }}>12 OCTOBER 2026</div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 32, color: "#5C4524" }}>
            Reception Program
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 22, color: "#5E5044", letterSpacing: 2 }}>
            Boalia, Kalaroa, Satkhira
          </div>
        </div>
      </div>
    ),
    {
      ...shareImage.size,
      fonts: font
        ? [
            {
              name: "Cormorant Garamond",
              data: font,
              style: "normal",
              weight: 600,
            },
          ]
        : undefined,
    },
  );
}
