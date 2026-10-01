"use client";

import { MapPin } from "lucide-react";
import { events, venue } from "@/data/site";
import { Section, SectionHeading } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

export function Venue() {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.mapsQuery)}`;
  const luncheon = events.find((event) => event.id === "luncheon");

  return (
    <Section id="venue" labelledBy="venue-heading">
      <Reveal>
        <SectionHeading eyebrow="Where we will gather" title={venue.name} id="venue-heading" />
        <div className="mx-auto max-w-lg text-center">
          <MapPin className="mx-auto h-6 w-6 text-gold-deep" aria-hidden="true" />
          <p className="mt-4 font-serif text-2xl text-ink sm:text-3xl">{venue.address}</p>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown sm:text-lg">
            The Reception Program will be held at home in {venue.name}.
            {luncheon ? ` The Family Program on ${luncheon.date} will be here as well, with relatives.` : null}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              className="btn btn-solid"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${venue.address} in Google Maps`}
            >
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
