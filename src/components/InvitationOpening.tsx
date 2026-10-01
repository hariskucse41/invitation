"use client";

import type { Guest } from "@/types/guest";
import { celebration, mainEvent } from "@/data/site";
import { Arch, CornerOrnament, CoupleNames, StarDivider } from "@/components/DecorativeElements";

type InvitationOpeningProps = {
  guest: Pick<Guest, "name" | "message"> | null;
  onOpen: () => void;
};

export function InvitationOpening({ guest, onOpen }: InvitationOpeningProps) {
  return (
    <div className="center-scroll">
        <div className="relative mx-auto w-full max-w-3xl bg-paper text-gold">
        <CornerOrnament className="absolute left-0 top-0 h-14 w-14 sm:h-20 sm:w-20" />
        <CornerOrnament className="absolute right-0 top-0 h-14 w-14 rotate-90 sm:h-20 sm:w-20" />
        <CornerOrnament className="absolute bottom-0 right-0 h-14 w-14 rotate-180 sm:h-20 sm:w-20" />
        <CornerOrnament className="absolute bottom-0 left-0 h-14 w-14 -rotate-90 sm:h-20 sm:w-20" />

        <div className="pointer-events-none absolute inset-3 border border-gold/35 sm:inset-4" />
        <div className="pointer-events-none absolute inset-5 border border-gold/20 sm:inset-6" />

        <div className="relative px-6 pb-20 pt-16 text-center sm:px-16 sm:py-20">
          <p className="bismillah text-ink" lang="ar" dir="rtl">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="sr-only">In the name of God, the Most Gracious, the Most Merciful.</p>

          <StarDivider className="my-6" />

          <p className="eyebrow">A new chapter begins</p>

          <div className="ornament-drift mt-6">
            <Arch />
          </div>

          <CoupleNames as="h1" id="opening-heading" className="mt-2" />

          <p className="mt-6 font-serif text-lg tracking-[0.22em] text-ink sm:text-2xl">{celebration.mark}</p>
          <p className="mt-3 font-serif text-xl text-ink sm:text-2xl">{mainEvent.title}</p>
          <p className="mt-2 font-serif text-lg italic text-muted">You are warmly invited</p>

          {guest ? (
            <div className="mx-auto mt-8 max-w-sm">
              <p className="text-balance font-serif text-[1.65rem] leading-tight text-ink sm:text-3xl">Dear {guest.name},</p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-brown">{guest.message}</p>
            </div>
          ) : null}

          <div className="mt-10 flex justify-center">
            <button type="button" className="btn btn-solid" onClick={onOpen}>
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
