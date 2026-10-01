"use client";

import { families } from "@/data/site";
import { Section, SectionHeading, StarDivider } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

function Family({
  title,
  father,
  mother,
}: {
  title: string;
  father: string;
  mother: string;
}) {
  return (
    <article className="text-center">
      <p className="eyebrow">{title}</p>
      <p className="mt-5 font-serif text-[1.7rem] leading-tight text-ink sm:text-3xl">{father}</p>
      <p className="font-script my-2 text-4xl leading-none text-gold-deep" aria-hidden="true">
        &
      </p>
      <span className="sr-only"> and </span>
      <p className="font-serif text-[1.7rem] leading-tight text-ink sm:text-3xl">{mother}</p>
    </article>
  );
}

export function FamilySection() {
  return (
    <Section id="family" labelledBy="family-heading">
      <Reveal>
        <SectionHeading title="With the Blessings of Our Families" id="family-heading" />
      </Reveal>
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        <Reveal>
          <Family title={families.groom.title} father={families.groom.father} mother={families.groom.mother} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="md:hidden">
            <StarDivider className="mb-14" />
          </div>
          <div className="md:border-l md:border-gold/30 md:pl-10">
            <Family title={families.bride.title} father={families.bride.father} mother={families.bride.mother} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
