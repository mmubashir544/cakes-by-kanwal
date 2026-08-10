import Link from "next/link";
import { FOOTER_LINKS, NAV_LINKS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep">
      <Reveal className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16" distance={16}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-heading transition-opacity hover:opacity-80"
            >
              Cakes By Kanwal
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-body-ink/75">
              A bespoke cake atelier crafting custom cakes, cupcakes, and
              macarons for weddings, birthdays, and life&apos;s most
              meaningful celebrations.
            </p>
            <div className="divider-ornament mt-6 justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="eyebrow mb-4 text-body-ink/60">Explore</p>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-body-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4 text-body-ink/60">Studio</p>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-body-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-xs">
            <p className="eyebrow mb-4 text-body-ink/60">Start Something Sweet</p>
            <p className="text-sm leading-relaxed text-body-ink/75">
              Have an event in mind? Let&apos;s design a centerpiece worthy of
              the occasion.
            </p>
            <Link
              href="/custom-order"
              className="btn mt-5 inline-block rounded-sm bg-primary px-5 py-2.5 text-white transition-colors hover:bg-primary-dark"
            >
              Start Your Custom Order
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-body-ink/60">
            &copy; {new Date().getFullYear()} Cakes By Kanwal. Handcrafted with
            intention and artistry.
          </p>
          <a
            href="#top"
            className="link-underline nav-link text-body-ink/60 transition-colors hover:text-primary"
          >
            Back to Top &uarr;
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
