import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import { MACARON_COLLECTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Macaron Artistry | Cakes By Kanwal",
  description:
    "Delicate French macarons crafted with intention, colored by nature, filled with romance. Explore our signature macaron collections.",
};

export default function MacaronsPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/macarons-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 py-20 text-center">
          <Reveal delay={0}>
            <p className="eyebrow text-primary">The Macaron Atelier</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl">Edible Jewels</h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-lg text-body-ink/80">
              Crafted with intention, colored by nature, filled with romance.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <Link
              href="/custom-order?type=macarons"
              className="btn mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
            >
              Create a Macaron Collection
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div>
              <h2 className="text-4xl sm:text-5xl">The Art of the Shell</h2>
              <p className="mt-6 text-lg leading-relaxed text-body-ink/85">
                Every macaron begins as a delicate balance of finely ground
                almonds, pure sugar, and expertly whipped meringue. Our process
                is unhurried, respecting the subtle alchemy required to achieve
                the signature &lsquo;pied&rsquo; (foot) and a shell that is
                ethereally crisp on the outside, yet yields to a soft, chewy
                center.
              </p>
              <p className="mt-4 text-body-ink/70">
                We eschew artificial colors, opting instead for natural powders
                and infusions to achieve our soft, romantic hues.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative">
              <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/macaron-shell.jpg"
                  alt="Piping macaron shells onto a baking sheet"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Reveal delay={0.35} distance={16}>
                <div className="absolute -bottom-6 left-0 w-48 bg-cream p-5 shadow-lg sm:w-56 md:-left-8">
                  <p className="text-primary">&#10084;</p>
                  <h3 className="mt-1 text-xl">Pure Ingredients</h3>
                  <p className="mt-1 text-sm text-body-ink/75">
                    Sourced globally, crafted locally with uncompromising
                    standards.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              title="Signature Collections"
              subtitle="Curated palettes of flavor and color."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {MACARON_COLLECTIONS.map((collection, index) => (
              <Reveal key={collection.slug} delay={index * 0.12}>
                <article className="card-hover bg-white">
                  <div className="img-zoom relative aspect-square w-full overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl">{collection.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {collection.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blush px-3 py-1 text-xs text-primary-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-body-ink/80">
                      {collection.description}
                    </p>
                    <Link
                      href={`/custom-order?design=${encodeURIComponent(collection.name)}&type=macarons`}
                      className="link-underline nav-link mt-5 inline-block text-primary transition-colors hover:text-primary-dark"
                    >
                      Request This Collection
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
