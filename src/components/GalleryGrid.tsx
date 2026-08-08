"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import FilterPills from "@/components/FilterPills";
import { GALLERY_CATEGORIES, type GalleryImage } from "@/lib/data";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return images;
    return images.filter((image) => image.category === active);
  }, [images, active]);

  const current = selected !== null ? filtered[selected] : null;

  function showRelative(delta: number) {
    if (selected === null) return;
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

      <div className="mt-12 grid grid-cols-2 gap-4 [grid-auto-rows:180px] sm:grid-cols-3 sm:[grid-auto-rows:220px] lg:grid-cols-4">
        {filtered.map((image, index) => (
          <button
            key={image.src + index}
            type="button"
            onClick={() => setSelected(index)}
            className={`group relative overflow-hidden bg-cream-deep ${
              index % 5 === 0 ? "row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-heading/90 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-3xl text-white/80 transition-colors hover:text-white"
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

          <div
            className="relative h-[70vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
