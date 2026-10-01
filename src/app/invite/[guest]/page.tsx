import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationExperience } from "@/components/InvitationExperience";
import { getGuest, getGuestSlugs } from "@/lib/guests";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuestSlugs().map((guest) => ({ guest }));
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

type InvitePageProps = {
  params: Promise<{ guest: string }>;
};

export default async function InvitePage({ params }: InvitePageProps) {
  const { guest: slug } = await params;
  const guest = getGuest(slug);

  if (!guest) {
    notFound();
  }

  return (
    <InvitationExperience
      guest={{
        slug: guest.slug,
        name: guest.name,
        message: guest.message,
      }}
    />
  );
}
