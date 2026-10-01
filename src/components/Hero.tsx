"use client";

import { celebration, couple, mainEvent, venue } from "@/data/site";
import { CoupleNames, StarDivider } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pb-8 pt-16 sm:px-6 sm:pt-24 md:pt-28">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">You are invited</p>
          <StarDivider className="mt-5" />
          <CoupleNames as="h1" id="couple-heading" tabIndex={-1} className="mt-8" />
          <p className="mt-8 font-serif text-xl tracking-[0.18em] text-ink sm:text-2xl">
            <time dateTime={celebration.iso}>{celebration.mark}</time>
          </p>
          <p className="mt-3 font-serif text-2xl text-ink sm:text-3xl">{mainEvent.title}</p>
          <p className="mt-3 text-sm tracking-[0.16em] text-gold-deep uppercase">{venue.address}</p>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-brown sm:text-lg">
            Join us for our Reception Program as we welcome {couple.bride.shortName} home and celebrate with the people
            we love.
          </p>
          <div className="mt-14 flex flex-col items-center gap-3 text-gold-deep" aria-hidden="true">
            <span className="eyebrow">Scroll</span>
            <span className="h-10 w-px bg-gold/50" />
          </div>
        </div>
      </Reveal>
    </header>
  );
}
