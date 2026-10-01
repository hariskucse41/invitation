"use client";

import Image from "next/image";
import { celebration, chapters, couplePhoto, storySteps } from "@/data/site";
import { Section, SectionHeading } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function Story() {
  return (
    <Section id="story" labelledBy="story-heading">
      <Reveal>
        <SectionHeading eyebrow="The days we will share" title="Our Story" id="story-heading" />
      </Reveal>

      {couplePhoto.enabled ? (
        <Reveal className="mb-14">
          <figure className="mx-auto max-w-sm">
            <div className="panel">
              <div className="panel-inner p-3 sm:p-4">
                <Image
                  src={couplePhoto.src}
                  alt={couplePhoto.alt}
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </figure>
        </Reveal>
      ) : null}

      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">
            <time dateTime={celebration.iso}>{celebration.mark}</time>
          </p>
          <p className="mt-4 font-serif text-[1.85rem] leading-snug text-ink sm:text-4xl">
            We gather with our families and loved ones to celebrate this beautiful new chapter together.
          </p>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-sm">
        <ol className="text-left">
          {storySteps.map((step, index) => {
            const last = index === storySteps.length - 1;
            return (
              <li key={step.title} className="grid grid-cols-[1.25rem_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1.5 block rounded-full border border-gold ${
                      step.featured ? "h-3.5 w-3.5 bg-gold" : "h-2.5 w-2.5 bg-ivory"
                    }`}
                  />
                  {last ? null : <span className="mt-1 w-px flex-1 bg-gold/40" />}
                </div>
                <div className={last ? "" : "pb-7"}>
                  <p className="eyebrow">{step.date}</p>
                  <p className="font-serif text-2xl text-ink">{step.title}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-md text-center">
        <div className="space-y-3">
          {chapters.map((line) => (
            <p key={line} className="font-serif text-[1.65rem] italic leading-snug text-ink sm:text-3xl">
              {line}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
