"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
                className={`link-underline nav-link transition-colors hover:text-primary ${
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
          className="font-display text-xl font-semibold text-heading transition-opacity hover:opacity-80 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
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
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              className="h-px w-6 bg-heading"
              animate={open ? { y: 3.5, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="h-px w-6 bg-heading"
              animate={open ? { y: -3.5, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-cream lg:hidden"
          >
            <nav className="flex flex-col px-5 py-5">
              {NAV_LINKS.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link block py-3 ${active ? "text-primary" : "text-heading"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: NAV_LINKS.length * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/custom-order"
                  className="btn mt-2 inline-block rounded-sm bg-primary px-5 py-3 text-center text-white"
                >
                  Start Your Custom Order
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
