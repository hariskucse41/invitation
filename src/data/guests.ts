import type { Guest } from "@/types/guest";

/**
 * Personal invitation list.
 *
 * Add a guest by copying one of the objects below.
 * Then redeploy (or restart `npm run dev`) so the page is generated.
 *
 *   slug         →  /invite/slug
 *   name         →  "Dear {name}" and the WhatsApp reply
 *   relationship →  your private note. It is not shown on the page.
 *   message      →  the line they read on their invitation
 *
 * Slug rules: lowercase letters, numbers, and hyphens. Unique. No spaces.
 *
 * Examples once the site is live:
 *   https://YOUR-DOMAIN.com/invite/uncle-monir
 *   https://YOUR-DOMAIN.com/invite/mama-afzal
 *   https://YOUR-DOMAIN.com/invite/rahim
 *
 * Tone lives in the message:
 *   Elders and family friends  →  warm, respectful
 *   Friends and cousins        →  you may be more casual
 */

export const guests: Guest[] = [
  {
    slug: "emam-hossain-mimi-islam",
    name: "Emam Hossain & Mimi Islam",
    relationship: "Vai & Vabi",
    message:
      "Your presence and blessings will make our celebration even more special. We are so excited to have you with us. We can't wait to see you there.",
  },
  {
    slug: "maria-marjan-zahid-hasan-ussas",
    name: "Maria Marjan & Zahid Hasan Ussas",
    relationship: "Sister & Brother-in-law",
    message:
      "We would be truly happy to celebrate this beautiful occasion with you. We are so excited to have you with us. We can't wait to see you there.",
  },
  {
    slug: "rahim",
    name: "Rahim",
    relationship: "Friend",
    message: "Bro, no excuses this time! Come celebrate with us!",
  },

  // Cousin
  // {
  //   slug: "cousin-tania",
  //   name: "Tania",
  //   relationship: "Cousin",
  //   message: "Come celebrate with us. The day will be brighter with you there.",
  // },

  // Colleague
  // {
  //   slug: "colleague-nabil",
  //   name: "Nabil",
  //   relationship: "Colleague",
  //   message:
  //     "It would mean a lot to have you with us as we celebrate this new chapter.",
  // },

  // Parents' friend
  // {
  //   slug: "uncle-karim",
  //   name: "Uncle Karim",
  //   relationship: "Family Friend",
  //   message: "Your blessings and presence would honor our family celebration.",
  // },
];
