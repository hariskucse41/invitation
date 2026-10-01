import { guests } from "@/data/guests";
import type { Guest } from "@/types/guest";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function assertGuestList(list: Guest[]) {
  const seen = new Set<string>();

  for (const guest of list) {
    if (!slugPattern.test(guest.slug)) {
      throw new Error(
        `Invalid guest slug "${guest.slug}" in src/data/guests.ts. Use lowercase letters, numbers, and hyphens.`,
      );
    }

    if (seen.has(guest.slug)) {
      throw new Error(
        `Duplicate guest slug "${guest.slug}" in src/data/guests.ts. Each slug must be unique.`,
      );
    }

    seen.add(guest.slug);
  }
}

assertGuestList(guests);

export function getGuest(slug: string): Guest | undefined {
  return guests.find((guest) => guest.slug === slug);
}

export function getGuestSlugs(): string[] {
  return guests.map((guest) => guest.slug);
}
