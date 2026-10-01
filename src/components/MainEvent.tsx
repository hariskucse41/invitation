"use client";

import { CalendarDays, Clock, MapPin } from "lucide-react";
import { celebration, mainEvent, venue } from "@/data/site";
import { Arch } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function MainEvent() {
  return (
    <section id="gathering" aria-labelledby="main-event-title" className="px-5 py-16 sm:px-6 md:py-24">
      <Reveal>
        <div className="panel mx-auto max-w-2xl overflow-hidden">
          <div className="panel-inner text-center">
            <div className="ornament-drift text-gold">
              <Arch />
            </div>
            <p className="eyebrow mt-2">The main celebration</p>
            <h2 id="main-event-title" className="mt-4 text-balance text-[2.15rem] text-ink sm:text-5xl">
              {mainEvent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown sm:text-lg">{mainEvent.description}</p>

            <dl className="mx-auto mt-10 max-w-sm space-y-7">
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="flex flex-col items-center gap-1">
                  <CalendarDays className="h-5 w-5 text-gold-deep" aria-hidden="true" />
                  <span className="font-serif text-2xl text-ink">{celebration.day}</span>
                  <time className="font-serif text-[1.35rem] text-ink" dateTime={celebration.iso}>
                    {celebration.date}
                  </time>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Time</dt>
                <dd className="flex flex-col items-center gap-1">
                  <Clock className="h-5 w-5 text-gold-deep" aria-hidden="true" />
                  <time className="font-serif text-2xl text-ink" dateTime={celebration.dateTime}>
                    {celebration.time}
                  </time>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Place</dt>
                <dd className="flex flex-col items-center gap-1">
                  <MapPin className="h-5 w-5 text-gold-deep" aria-hidden="true" />
                  <span className="font-serif text-2xl text-ink">{venue.name}</span>
                  <span className="text-sm tracking-[0.08em] text-muted">{venue.locality}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
