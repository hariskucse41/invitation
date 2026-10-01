/**
 * Edit this file to change names, dates, the venue, both families, and the RSVP number.
 * The guest list lives in src/data/guests.ts.
 */

export const couple = {
  groom: {
    fullName: "Asif Mehedi Haris",
    shortName: "Asif",
  },
  bride: {
    fullName: "Israt Jahan Esha",
    shortName: "Esha",
  },
} as const;

export const celebration = {
  iso: "2026-10-12",
  dateTime: "2026-10-12T13:00:00+06:00",
  date: "12 October 2026",
  dateShort: "12 October",
  mark: "12 • 10 • 2026",
  day: "Monday",
  time: "1:00 PM",
} as const;

export const venue = {
  name: "Boalia",
  locality: "Kalaroa, Satkhira",
  address: "Boalia, Kalaroa, Satkhira",
  mapsQuery: "Boalia, Kalaroa, Satkhira",
} as const;

export const events = [
  {
    id: "holud",
    iso: "2026-10-11",
    date: "11 October 2026",
    dateShort: "11 October",
    day: "Sunday",
    time: null,
    title: "Holud",
    summary: "Colors, laughter and family.",
    description: "A joyful day of colors, laughter and family.",
    featured: false,
  },
  {
    id: "reception",
    iso: "2026-10-12",
    date: "12 October 2026",
    dateShort: "12 October",
    day: "Monday",
    time: "1:00 PM",
    title: "Reception Program",
    summary: "Bringing Esha home and celebrating together.",
    description:
      "Our Reception Program, as we bring Esha home and celebrate this beautiful new chapter with our family and loved ones.",
    featured: true,
  },
  {
    id: "luncheon",
    iso: "2026-10-13",
    date: "13–14 October 2026",
    dateShort: "13–14 October",
    day: null,
    time: null,
    title: "Family Program",
    summary: "Sharing food, stories and blessings with our loved ones.",
    description: "A warm family gathering at our home with relatives.",
    featured: false,
  },
] as const;

export const mainEvent = events[1];

export const storySteps = [
  ...events.map((event) => ({
    date: event.dateShort,
    title: event.title,
    featured: event.featured,
  })),
];

export const chapters = [
  "One beautiful chapter.",
  "One shared journey.",
  "One new beginning.",
] as const;

export const families = {
  groom: {
    title: "Groom's Family",
    father: "MD. Monirul Islam",
    mother: "Sonavan Begum",
  },
  bride: {
    title: "Bride's Family",
    father: "Afzal Hossen Habil",
    mother: "Madhobi Sultana",
  },
} as const;

export const rsvp = {
  /** Local BD number. 017… is converted to 880… for WhatsApp. */
  phoneLocal: "01753584194",
  datePhrase: "12 October",
} as const;

export const generalInvitation = {
  salutation: "Family and Friends",
  message:
    "Your presence and blessings will make our celebration even more special.",
} as const;

/**
 * Optional portrait. Leave enabled false until you add a photo at public/images/couple.jpg.
 * The invitation is designed to stand beautifully without a photograph.
 */
export const couplePhoto: {
  enabled: boolean;
  src: string;
  alt: string;
} = {
  enabled: false,
  src: "/images/couple.jpg",
  alt: "Asif and Esha",
};
