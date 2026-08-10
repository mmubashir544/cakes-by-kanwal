import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/seo";

const TITLE = "Our Story";
const DESCRIPTION =
  "Meet Kanwal and discover the philosophy behind the atelier — uncompromising quality, bespoke cake artistry, and an unforgettable experience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cake designer story",
    "bespoke cake artist",
    "about Cakes By Kanwal",
    "custom cake philosophy",
  ],
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/our-story",
  },
};

export default function OurStoryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story" },
        ])}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div>
              <h1 className="text-4xl sm:text-5xl">
                Handcrafted with intention and artistry.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body-ink/85">
                We believe that every celebration deserves a centerpiece as
                unique and memorable as the moment itself. Our atelier
                approaches confectionery as a high art form.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/story-handcrafted.jpg"
                alt="Detailing a hand-painted floral wedding cake"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal direction="left">
              <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/story-portrait.jpg"
                  alt="Kanwal in her atelier kitchen"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div>
                <h2 className="text-4xl sm:text-5xl">Meet Kanwal</h2>
                <p className="mt-5 font-body text-lg italic text-primary-dark">
                  &ldquo;Baking is my canvas; flavor is my medium.&rdquo;
                </p>
                <p className="mt-5 text-lg leading-relaxed text-body-ink/85">
                  What began as a quiet passion for sculptural design and fine
                  patisserie has blossomed into an atelier dedicated to the
                  pursuit of culinary beauty.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-body-ink/85">
                  Kanwal trained in classical pastry techniques but quickly
                  found her signature style in merging architectural precision
                  with romantic, organic elements. Each creation is
                  meticulously designed, ensuring that the visual impact is
                  matched only by the depth of flavor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl">Our Philosophy</h2>
            <div className="divider-ornament my-5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-6">
              <Reveal>
                <div
                  id="sustainability"
                  className="img-zoom relative aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/images/story-quality.jpg"
                    alt="Fine baking ingredients: vanilla, raspberries, butter"
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/85 via-heading/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl text-white">
                      Uncompromising Quality
                    </h3>
                    <p className="mt-1 max-w-xs text-sm text-white/85">
                      Sourcing only the finest ingredients&mdash;from Madagascar
                      vanilla to single-origin chocolates&mdash;to ensure every
                      bite resonates with profound flavor.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="img-zoom relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/story-artistry.jpg"
                    alt="Hand-painted floral detail on a wedding cake"
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/85 via-heading/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl text-white">Bespoke Artistry</h3>
                    <p className="mt-1 max-w-xs text-sm text-white/85">
                      No two creations are alike. We sculpt, paint, and texture
                      every tier to reflect an editorial aesthetic that is both
                      modern and timeless.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.15}>
              <div id="process" className="flex flex-col justify-center">
                <h3 className="text-3xl">The Experience</h3>
                <div className="divider-ornament my-5 justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <p className="text-lg leading-relaxed text-body-ink/85">
                  From the initial tasting to the final, breathtaking reveal,
                  our process is designed to be as seamless and joyful as the
                  celebration itself. We collaborate intimately with our
                  clients to weave their unique narratives into our designs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="bg-blush py-20 text-center">
        <h2 className="text-4xl sm:text-5xl">Discover Our Work</h2>
        <Link
          href="/gallery"
          className="btn mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
        >
          Explore the Gallery
        </Link>
      </Reveal>
    </>
  );
}
