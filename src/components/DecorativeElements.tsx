import type { ReactNode } from "react";
import { couple } from "@/data/site";

export function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <path d="M4 76 V22 C4 12 12 4 22 4 H76" stroke="currentColor" strokeWidth="0.8" />
      <path d="M12 76 V28 C12 18 18 12 28 12 H76" stroke="currentColor" strokeWidth="0.45" opacity="0.75" />
      <path d="M22 4 C28 16 22 24 8 28" stroke="currentColor" strokeWidth="0.6" />
      <path d="M32 16 C40 24 36 34 26 40" stroke="currentColor" strokeWidth="0.55" />
      <path d="M16 32 C24 40 34 36 40 26" stroke="currentColor" strokeWidth="0.55" />
      <path d="M27 27 C34 28 38 33 37 40" stroke="currentColor" strokeWidth="0.45" />
      <circle cx="22" cy="4" r="1.25" fill="currentColor" />
      <circle cx="4" cy="22" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gold/45 sm:w-20" />
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5">
        <path fill="currentColor" d="M12 0 L14.2 9.2 L24 12 L14.2 14.8 L12 24 L9.8 14.8 L0 12 L9.8 9.2 Z" />
      </svg>
      <span className="h-px w-12 bg-gold/45 sm:w-20" />
    </div>
  );
}

export function Arch({ className = "mx-auto mb-2 h-14 w-36 text-gold sm:h-16 sm:w-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} fill="none" aria-hidden="true">
      <path d="M8 88 V46 C8 20 40 6 100 6 C160 6 192 20 192 46 V88" stroke="currentColor" strokeWidth="1" />
      <path
        d="M20 88 V48 C20 28 48 16 100 16 C152 16 180 28 180 48 V88"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.65"
      />
    </svg>
  );
}

type CoupleNamesProps = {
  as?: "h1" | "h2" | "p";
  id?: string;
  className?: string;
  tabIndex?: number;
  variant?: "full" | "short";
};

export function CoupleNames({ as = "p", id, className = "", tabIndex, variant = "full" }: CoupleNamesProps) {
  const Tag = as;
  const groom = variant === "short" ? couple.groom.shortName : couple.groom.fullName;
  const bride = variant === "short" ? couple.bride.shortName : couple.bride.fullName;
  const nameClass = variant === "short" ? "couple-name-short" : "couple-name";

  return (
    <Tag id={id} tabIndex={tabIndex} className={`text-center text-ink outline-none ${className}`}>
      <span className={`${nameClass} block`}>{groom}</span>
      <span
        className="font-script my-1 block text-[2.55rem] leading-none text-gold-deep sm:my-2 sm:text-6xl"
        aria-hidden="true"
      >
        &
      </span>
      <span className="sr-only"> and </span>
      <span className={`${nameClass} block`}>{bride}</span>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow?: string;
  title: string;
  id: string;
}) {
  return (
    <header className="mb-10 text-center md:mb-14">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 id={id} className="text-balance text-[1.9rem] text-ink sm:text-5xl">
        {title}
      </h2>
      <StarDivider className="mt-6" />
    </header>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`px-5 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}
