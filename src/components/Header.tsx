"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-heading"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="font-display text-xl font-semibold text-heading lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          Cakes By Kanwal
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/custom-order"
            className="btn hidden rounded-sm bg-primary px-5 py-2.5 text-white transition-colors hover:bg-primary-dark sm:inline-block"
          >
            Start Your Custom Order
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-heading transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-heading transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-cream px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active ? "text-primary" : "text-heading"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/custom-order"
              className="btn mt-2 inline-block rounded-sm bg-primary px-5 py-3 text-center text-white"
            >
              Start Your Custom Order
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
