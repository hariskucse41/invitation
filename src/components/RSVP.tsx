"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { couple, rsvp } from "@/data/site";
import type { Guest } from "@/types/guest";
import { Section, StarDivider } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";
import { formatLocalPhone, generateWhatsAppUrl, internationalPhone } from "@/lib/whatsapp";

type RsvpStatus = "accepted" | "declined";

type RSVPProps = {
  guest: Pick<Guest, "slug" | "name"> | null;
};

export function RSVP({ guest }: RSVPProps) {
  const storageKey = `asif-esha-rsvp:${guest?.slug ?? "general"}`;
  const [status, setStatus] = useState<RsvpStatus | null>(null);
  const guestName = guest?.name ?? null;
  const acceptUrl = generateWhatsAppUrl(guestName, "accept");
  const declineUrl = generateWhatsAppUrl(guestName, "decline");
  const phone = internationalPhone(rsvp.phoneLocal);
  const phoneLabel = formatLocalPhone(rsvp.phoneLocal);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "accepted" || saved === "declined") {
        setStatus(saved);
      }
    } catch {
      // Ignore storage failures. The reply links still work.
    }
  }, [storageKey]);

  function remember(next: RsvpStatus) {
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // WhatsApp still opens if this browser blocks storage.
    }
    setStatus(next);
  }

  const thanksName = guest?.name;

  return (
    <Section id="rsvp" labelledBy="rsvp-heading">
      <Reveal>
        <header className="mb-8 text-center">
          <p className="eyebrow">A note on WhatsApp</p>
          <h2 id="rsvp-heading" className="mt-4 text-[2.05rem] text-ink sm:text-5xl">
            Will you join us?
          </h2>
          <StarDivider className="mt-6" />
        </header>

        <div className="mx-auto max-w-xl text-center">
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">We can&apos;t wait to celebrate with you.</p>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown sm:text-lg">
            There is no form to fill. Your reply opens WhatsApp with a message ready to send to {couple.groom.shortName}.
          </p>

          <div aria-live="polite" className="mt-8">
            {status === "accepted" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="panel mx-auto max-w-md"
              >
                <div className="panel-inner">
                  <p className="font-serif text-3xl text-ink sm:text-4xl">
                    Thank you{thanksName ? `, ${thanksName}` : ""} ❤️
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-brown">
                    Your presence will make our celebration even more special.
                  </p>
                </div>
              </motion.div>
            ) : null}

            {status === "declined" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-2xl text-ink">Thank you for telling us.</p>
                <p className="mt-2 text-brown">You will be missed, and your wishes mean a great deal to us.</p>
              </motion.div>
            ) : null}
          </div>

          <div className="mx-auto mt-8 flex max-w-sm flex-col items-center gap-3">
            <a
              className="btn btn-solid"
              href={acceptUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Yes, I'll be there. Opens WhatsApp with a message to ${couple.groom.shortName}.`}
              onClick={() => remember("accepted")}
            >
              Yes, I&apos;ll be there ❤️
            </a>
            <a
              className="btn btn-ghost"
              href={declineUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sorry, I can't make it. Opens WhatsApp with a message to ${couple.groom.shortName}.`}
              onClick={() => remember("declined")}
            >
              Sorry, I can&apos;t make it
            </a>
          </div>

          <p className="mt-8 text-sm text-muted">
            You may also call {couple.groom.fullName} at{" "}
            <a className="btn-text" href={`tel:+${phone}`}>
              {phoneLabel}
            </a>
          </p>
          <p className="mt-6 font-serif text-xl italic text-ink">Your presence is the greatest gift.</p>
        </div>
      </Reveal>
    </Section>
  );
}
