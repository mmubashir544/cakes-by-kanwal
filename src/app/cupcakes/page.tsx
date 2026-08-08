import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CUPCAKE_FLAVORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cupcakes | Cakes By Kanwal",
  description:
    "Petite indulgences with the same refined flavors and elegant finishes as our larger creations, perfect for elegant gatherings.",
};

export default function CupcakesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pt-20 pb-4 text-center sm:px-8">
        <h1 className="text-5xl sm:text-6xl">Cupcakes</h1>
        <p className="mt-4 text-lg text-body-ink/80">
          Petite indulgences, without compromise.
        </p>
        <div className="divider-ornament my-8 justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/card-cupcakes.jpg"
              alt="Assorted signature cupcakes with berries and gold leaf"
              fill
              className="object-cover"
            />
          </div>
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
        </div>
      </section>

      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl">The Flavor Menu</h2>
            <div className="divider-ornament my-5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="text-lg text-body-ink/80">
              A starting point for your box &mdash; every flavor can be
              adapted to your palette and color story.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {CUPCAKE_FLAVORS.map((flavor) => (
              <div key={flavor.name} className="border border-border bg-white p-7">
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
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
      </section>
    </>
  );
}
