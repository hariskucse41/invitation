"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Guest } from "@/types/guest";
import { InvitationOpening } from "@/components/InvitationOpening";
import { Hero } from "@/components/Hero";
import { PersonalGreeting } from "@/components/PersonalGreeting";
import { Story } from "@/components/Story";
import { EventTimeline } from "@/components/EventTimeline";
import { MainEvent } from "@/components/MainEvent";
import { Venue } from "@/components/Venue";
import { FamilySection } from "@/components/FamilySection";
import { RSVP } from "@/components/RSVP";
import { Closing } from "@/components/Closing";

export type PublicGuest = Pick<Guest, "slug" | "name" | "message">;

type InvitationExperienceProps = {
  guest: PublicGuest | null;
};

export function InvitationExperience({ guest }: InvitationExperienceProps) {
  const [opened, setOpened] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setLocked(!opened);
  }, [opened]);

  useEffect(() => {
    if (!locked) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpened(true);
        setLocked(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [locked]);

  function openInvitation() {
    setOpened(true);
    setLocked(false);
    window.setTimeout(() => {
      document.getElementById("couple-heading")?.focus({ preventScroll: true });
    }, 80);
  }

  return (
    <>
      <main
        id="invitation"
        aria-hidden={locked}
        {...(locked ? { inert: true } : {})}
        className={locked ? "h-dvh overflow-hidden outline-none" : "outline-none"}
      >
        <Hero />
        <PersonalGreeting guest={guest} />
        <Story />
        <EventTimeline />
        <MainEvent />
        <Venue />
        <FamilySection />
        <RSVP guest={guest} />
        <Closing />
      </main>

      <AnimatePresence>
        {!opened ? (
          <motion.div
            key="opening"
            role="dialog"
            aria-modal="true"
            aria-labelledby="opening-heading"
            className="opening-overlay fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <InvitationOpening guest={guest} onOpen={openInvitation} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
