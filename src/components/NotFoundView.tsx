import Link from "next/link";
import { CoupleNames, StarDivider } from "@/components/DecorativeElements";

export function NotFoundView() {
  return (
    <main className="center-scroll px-5">
      <div className="mx-auto w-full max-w-xl text-center">
        <p className="eyebrow">Asif & Esha</p>
        <StarDivider className="my-6" />
        <h1 className="text-4xl text-ink sm:text-6xl">Invitation not found</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown sm:text-lg">
          This link does not match an invitation we have prepared. Please check it with Asif, or open the celebration
          invitation.
        </p>
        <div className="mt-8 flex justify-center">
          <Link className="btn btn-solid" href="/">
            Open the invitation
          </Link>
        </div>
        <CoupleNames className="mt-14 scale-90" />
      </div>
    </main>
  );
}
