import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CUPCAKE_FLAVORS } from "@/lib/data";
import Reveal from "@/components/Reveal";

const TITLE = "Custom Cupcakes";
const DESCRIPTION =
  "Custom cupcakes with the same refined flavors and elegant finishes as our larger cake creations, perfect for weddings, birthdays, and elegant gatherings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "custom cupcakes",
    "gourmet cupcakes",
    "wedding cupcakes",
    "birthday cupcakes",
    "cupcake flavors",
  ],
  alternates: { canonical: "/cupcakes" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cupcakes",
  },
};

export default function CupcakesPage() {
  return (
    <>
      <Reveal className="mx-auto max-w-4xl px-5 pt-20 pb-4 text-center sm:px-8">
        <h1 className="text-5xl sm:text-6xl">Cupcakes</h1>
        <p className="mt-4 text-lg text-body-ink/80">
          Petite indulgences, without compromise.
        </p>
        <div className="divider-ornament my-8 justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </Reveal>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/card-cupcakes.jpg"
                alt="Assorted signature cupcakes with berries and gold leaf"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div>
              <h2 className="text-4xl sm:text-5xl">Petite, Perfect, Personal</h2>
              <div className="divider-ornament my-5 justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-lg leading-relaxed text-body-ink/85">
                Our cupcakes carry the same artistry as our tiered cakes &mdash;
                scaled down to a single, perfect bite. Finished by hand with
                silky buttercream, fresh berries, and delicate gold leaf, they
                are equally at home on a dessert table or boxed individually as
                favors.
              </p>
              <p className="mt-4 text-body-ink/70">
                Available in classic, seasonal, and fully custom flavor
                pairings &mdash; mixed boxes welcome.
              </p>
              <Link
                href="/custom-order?type=cupcakes"
                className="btn mt-7 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
              >
                Create Your Cupcake Order
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl">The Flavor Menu</h2>
            <div className="divider-ornament my-5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="text-lg text-body-ink/80">
              A starting point for your box &mdash; every flavor can be
              adapted to your palette and color story.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {CUPCAKE_FLAVORS.map((flavor, index) => (
              <Reveal key={flavor.name} delay={(index % 2) * 0.1}>
                <div className="card-hover border border-border bg-white p-7">
                  <h3 className="text-2xl">{flavor.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {flavor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blush px-3 py-1 text-xs text-primary-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-body-ink/80">
                    {flavor.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="bg-cream-deep px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl">Ordering for an event?</h2>
          <p className="mt-3 text-body-ink/80">
            Let&apos;s design a cupcake spread that matches your celebration
            from top to tier.
          </p>
          <Link
            href="/custom-order?type=cupcakes"
            className="btn mt-7 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
          >
            Start a Custom Order &rarr;
          </Link>
        </div>
      </Reveal>
    </>
  );
}
