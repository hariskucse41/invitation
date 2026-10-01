import type { Metadata } from "next";
import { InvitationExperience } from "@/components/InvitationExperience";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <InvitationExperience guest={null} />;
}
