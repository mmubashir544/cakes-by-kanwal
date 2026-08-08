"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import FilterPills from "@/components/FilterPills";
import { GALLERY_CATEGORIES, type GalleryImage } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const filtered = useMemo(() => {
    if (active === "All") return images;
    return images.filter((image) => image.category === active);
  }, [images, active]);

  const current = selected !== null ? filtered[selected] : null;

  function showRelative(delta: number) {
    if (selected === null) return;
    setDirection(delta);
    const next = (selected + delta + filtered.length) % filtered.length;
    setSelected(next);
  }

  return (
    <div>
      <FilterPills
        categories={GALLERY_CATEGORIES}
        active={active}
        onChange={(category) => {
          setActive(category);
          setSelected(null);
        }}
      />

      <motion.div
        layout
        className="mt-12 grid grid-cols-2 gap-4 [grid-auto-rows:180px] sm:grid-cols-3 sm:[grid-auto-rows:220px] lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((image, index) => (
            <motion.button
              key={image.src + index}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: index * 0.03, ease: EASE }}
              type="button"
              onClick={() => setSelected(index)}
              className={`img-zoom group relative overflow-hidden bg-cream-deep ${
                index % 5 === 0 ? "row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-heading/90 p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-3 top-3 p-3 text-3xl text-white/80 transition-colors hover:text-white sm:right-5 sm:top-5"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/70 transition-colors hover:text-white sm:left-6"
              onClick={(event) => {
                event.stopPropagation();
                showRelative(-1);
              }}
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/70 transition-colors hover:text-white sm:right-6"
              onClick={(event) => {
                event.stopPropagation();
                showRelative(1);
              }}
            >
              &#8250;
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.src}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -48 : 48 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    priority
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
