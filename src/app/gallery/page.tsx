import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { GALLERY_IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Cakes By Kanwal",
  description:
    "A look inside the atelier &mdash; cakes, cupcakes, macarons, and the craft behind them.",
};

export default function GalleryPage() {
  return (
    <>
      <Reveal className="mx-auto max-w-4xl px-5 pt-20 pb-4 text-center sm:px-8">
        <h1 className="text-5xl sm:text-6xl">Gallery</h1>
        <p className="mt-4 text-lg text-body-ink/80">
          A look inside the atelier &mdash; our creations, and the craft
          behind them.
        </p>
        <div className="divider-ornament my-8 justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </Reveal>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <GalleryGrid images={GALLERY_IMAGES} />
      </section>
    </>
  );
}
