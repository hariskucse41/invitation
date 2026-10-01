"use client";

import { events } from "@/data/site";
import { Section, SectionHeading } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function EventTimeline() {
  return (
    <Section id="celebration" labelledBy="celebration-heading">
      <Reveal>
        <SectionHeading eyebrow="The days we hope to share" title="The Celebration" id="celebration-heading" />
      </Reveal>

      <ol className="mx-auto max-w-xl">
        {events.map((event, index) => {
          const last = index === events.length - 1;
          return (
            <li key={event.id}>
              <Reveal delay={index * 0.08}>
                <div className="grid grid-cols-[1.25rem_1fr] gap-5 sm:gap-7">
                  <div className="flex flex-col items-center">
                    <span
                      className={`mt-2 block rounded-full border ${
                        event.featured
                          ? "h-4 w-4 border-gold-deep bg-gold"
                          : "h-3 w-3 border-gold bg-ivory"
                      }`}
                    />
                    {last ? null : <span className="mt-2 w-px flex-1 bg-gold/35" />}
                  </div>
                  <article className={last ? "" : "pb-12"}>
                    <p className="eyebrow">
                      <time dateTime={event.iso}>{event.date}</time>
                      {event.day ? <span className="text-muted"> · {event.day}</span> : null}
                    </p>
                    <h3 className="mt-2 text-[1.85rem] text-ink sm:text-4xl">{event.title}</h3>
                    {event.time ? <p className="mt-2 text-sm tracking-[0.16em] text-gold-deep">{event.time}</p> : null}
                    <p className="mt-3 max-w-md text-base leading-relaxed text-brown sm:text-lg">{event.summary}</p>
                  </article>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
