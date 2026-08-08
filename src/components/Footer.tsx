import Link from "next/link";
import { FOOTER_LINKS, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-2xl font-semibold text-heading">
              Cakes By Kanwal
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-body-ink/80">
              &copy; {new Date().getFullYear()} Cakes By Kanwal. Handcrafted with
              intention and artistry.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="eyebrow mb-3 text-body-ink/60">Explore</p>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3 text-body-ink/60">Studio</p>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
