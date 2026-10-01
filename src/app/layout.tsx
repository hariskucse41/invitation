import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { celebration, couple, venue } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const siteUrl = getSiteUrl();

const description =
  "Join Asif and Esha for their Reception Program on 12 October 2026, and the Family Program with loved ones in Boalia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    absolute: "Asif & Esha — A New Chapter Begins",
  },
  description,
  applicationName: "Asif & Esha",
  openGraph: {
    title: "Asif & Esha",
    description: "12 October 2026 · Reception Program",
    type: "website",
    locale: "en_US",
    siteName: "Asif & Esha",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif & Esha",
    description: "12 October 2026 · Reception Program",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efe6",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Reception Program — Asif & Esha",
  description,
  startDate: celebration.dateTime,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: venue.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: venue.address,
      addressLocality: "Kalaroa",
      addressRegion: "Satkhira",
      addressCountry: "BD",
    },
  },
  organizer: {
    "@type": "Person",
    name: couple.groom.fullName,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${script.variable} ${arabic.variable}`}
    >
      <body>
        <noscript>
          <style>{`
            .opening-overlay { display: none !important; }
            #invitation { height: auto !important; overflow: visible !important; }
            .reveal { opacity: 1 !important; transform: none !important; }
          `}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
