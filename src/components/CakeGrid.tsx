"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import FilterPills from "@/components/FilterPills";
import { CAKE_CATEGORIES, type Cake } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CakeGrid({ cakes }: { cakes: Cake[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return cakes;
    return cakes.filter((cake) => cake.category === active);
  }, [cakes, active]);

  return (
    <div>
      <FilterPills categories={CAKE_CATEGORIES} active={active} onChange={setActive} />

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mt-16 border border-border bg-white px-6 py-16 text-center"
          >
            <p className="text-lg text-body-ink/80">
              No designs in this category just yet &mdash; but that&apos;s exactly
              what a custom order is for.
            </p>
            <Link
              href="/custom-order"
              className="btn mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              Start a Custom Order
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key={active}
            layout
            className="mt-12 grid gap-8 sm:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((cake, index) => (
                <motion.article
                  key={cake.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
                  className="card-hover border border-border bg-white"
                >
                  <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl">{cake.name}</h3>
                      <span className="shrink-0 rounded-full bg-blush px-3 py-1 text-xs text-primary-dark">
                        {cake.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-body-ink/80">
                      {cake.description}
                    </p>
                    <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm">
                      <Link
                        href={`/cakes/${cake.slug}`}
                        className="link-underline font-medium text-primary transition-colors hover:text-primary-dark"
                      >
                        View Details
                      </Link>
                      {cake.allowsCustomVersion && (
                        <Link
                          href={`/custom-order?design=${encodeURIComponent(cake.name)}`}
                          className="link-underline text-body-ink transition-colors hover:text-primary"
                        >
                          Request Custom Version
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
