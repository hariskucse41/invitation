import { createShareImage, shareImage } from "@/lib/og-image";

export const alt = shareImage.alt;
export const size = shareImage.size;
export const contentType = shareImage.contentType;

export default function OpenGraphImage() {
  return createShareImage();
}
