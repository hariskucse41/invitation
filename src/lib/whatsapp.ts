import { couple, rsvp } from "@/data/site";

export type RsvpResponse = "accept" | "decline";

/**
 * Converts a local Bangladesh mobile number to international digits for wa.me.
 * 01753584194 → 8801753584194
 */
export function internationalPhone(local: string): string {
  const digits = local.replace(/\D/g, "");

  if (digits.startsWith("880")) return digits;
  if (digits.startsWith("0")) return `88${digits}`;
  return `880${digits}`;
}

export function formatLocalPhone(local: string): string {
  const digits = local.replace(/\D/g, "");
  const localDigits = digits.startsWith("880") ? `0${digits.slice(3)}` : digits;

  if (localDigits.length === 11) {
    return `${localDigits.slice(0, 5)} ${localDigits.slice(5)}`;
  }

  return local.trim();
}

export function buildRsvpMessage(guestName: string | null, responseType: RsvpResponse): string {
  const name = guestName?.trim() || null;
  const groom = couple.groom.shortName;
  const bride = couple.bride.shortName;

  if (responseType === "accept") {
    return [
      `Assalamu Alaikum ${groom},`,
      name ? `Thank you for the invitation, ${name}.` : "Thank you for the invitation.",
      `InshaAllah, I will be there on ${rsvp.datePhrase}.`,
      `Looking forward to celebrating with you and ${bride}. ❤️`,
    ].join("\n");
  }

  return [
    `Assalamu Alaikum ${groom},`,
    name ? `Thank you for inviting me, ${name}.` : "Thank you for inviting me.",
    "Unfortunately, I won't be able to attend the celebration.",
    `My best wishes to you and ${bride}. ❤️`,
  ].join("\n");
}

export function generateWhatsAppUrl(guestName: string | null, responseType: RsvpResponse): string {
  const phone = internationalPhone(rsvp.phoneLocal);
  const text = buildRsvpMessage(guestName, responseType);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
