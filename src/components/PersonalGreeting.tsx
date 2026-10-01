"use client";

import { generalInvitation } from "@/data/site";
import type { Guest } from "@/types/guest";
import { Section, StarDivider } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

type PersonalGreetingProps = {
  guest: Pick<Guest, "name" | "message"> | null;
};

export function PersonalGreeting({ guest }: PersonalGreetingProps) {
  const name = guest?.name ?? generalInvitation.salutation;
  const message = guest?.message ?? generalInvitation.message;

  return (
    <Section id="greeting" labelledBy="greeting-heading" className="pt-6 md:pt-10">
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-script text-4xl text-gold-deep sm:text-5xl">With love</p>
          <h2 id="greeting-heading" className="mt-4 text-[2.1rem] text-ink sm:text-5xl">
            Dear {name},
          </h2>
          <StarDivider className="my-7" />
          <p className="text-lg leading-relaxed text-brown sm:text-xl">{message}</p>
        </div>
      </Reveal>
    </Section>
  );
}
