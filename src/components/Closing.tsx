"use client";

import { celebration } from "@/data/site";
import { CoupleNames, StarDivider } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function Closing() {
  return (
    <footer className="page-end px-5 pt-16 sm:px-6 md:pt-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <StarDivider />
          <h2 className="mx-auto mt-8 max-w-sm text-[2.35rem] leading-[1.12] text-ink sm:max-w-xl sm:text-6xl">
            Your presence is our greatest gift
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-brown sm:text-lg">
            We would be honored to celebrate this beautiful chapter with you.
          </p>
          <p className="mt-10 font-script text-4xl text-gold-deep sm:text-5xl">With love,</p>
          <CoupleNames variant="short" className="mt-4" />
          <p className="mt-8 font-serif text-lg tracking-[0.22em] text-ink">
            <time dateTime={celebration.iso}>{celebration.mark}</time>
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
