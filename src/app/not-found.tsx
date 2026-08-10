import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <Reveal>
        <p className="eyebrow text-primary">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">We Couldn&apos;t Find That Page</h1>
        <p className="mt-5 text-lg leading-relaxed text-body-ink/80">
          The page you&apos;re looking for may have been moved or no longer
          exists. Let&apos;s get you back to something sweet.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
          >
            Back to Home
          </Link>
          <Link
            href="/cakes"
            className="btn rounded-sm border border-heading/30 px-7 py-3.5 text-heading transition-colors hover:bg-white"
          >
            Explore Our Cakes
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
