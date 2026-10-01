"use client";

import { StarDivider } from "@/components/DecorativeElements";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="center-scroll px-5">
      <div className="mx-auto w-full max-w-xl text-center">
        <p className="eyebrow">Asif & Esha</p>
        <StarDivider className="my-6" />
        <h1 className="text-4xl text-ink sm:text-5xl">Something interrupted the page</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown">
          Please try opening the invitation once more.
        </p>
        <div className="mt-8 flex justify-center">
          <button type="button" className="btn btn-solid" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
