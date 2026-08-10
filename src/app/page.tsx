import Image from "next/image";
import Link from "next/link";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import { SIGNATURE_OFFERINGS } from "@/lib/data";

const HERO_FEATURES = [
  "Designed Around You",
  "Baked Fresh to Order",
  "Delivered with Care",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blush/35 via-cream to-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blush blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blush-deep/50 blur-3xl"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
          <div className="text-center lg:text-left">
            <Reveal delay={0}>
              <p className="eyebrow justify-center text-primary lg:justify-start">
                Bespoke Cake Artistry
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.4rem]">
                The <span className="text-primary">Centerpiece</span> Your
                Celebration Deserves
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-body-ink/80 lg:mx-0">
                Handcrafted cakes, cupcakes &amp; macarons, designed as edible art
                for weddings, birthdays, and life&apos;s most elegant occasions.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/custom-order"
                  className="btn rounded-sm bg-primary px-7 py-3.5 text-center text-white transition-colors hover:bg-primary-dark"
                >
                  Start Your Custom Order
                </Link>
                <Link
                  href="/cakes"
                  className="btn rounded-sm border border-heading/30 bg-white/70 px-7 py-3.5 text-center text-heading transition-colors hover:bg-white"
                >
                  Explore Our Cakes
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.48}>
              <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border pt-7 lg:justify-start">
                {HERO_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="eyebrow flex items-center gap-2 text-body-ink/60"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl shadow-heading/20">
                <Image
                  src="/images/cake-ethereal-blossom.jpg"
                  alt="A four-tier wedding cake with hand-piped lace texture and hand-formed sugar florals"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 60vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-1.5 shadow-xl ring-1 ring-heading/10 sm:h-28 sm:w-28">
                  <Image
                    src="/images/logo-512.png"
                    alt="Cakes By Kanwal"
                    width={112}
                    height={112}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -inset-5 -z-10 hidden rounded-sm border border-primary/20 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/home-handcrafted.jpg"
                alt="Hand-placing a sugar rose on a tiered wedding cake"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div>
              <h2 className="text-4xl sm:text-5xl">Where Craft Becomes Art</h2>
              <div className="divider-ornament my-5 justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-lg leading-relaxed text-body-ink/85">
                Every creation that leaves our atelier is more than just a
                dessert; it is an edible piece of art designed specifically for
                your celebration. We believe in the romantic interplay of
                delicate flavors, structural elegance, and meticulous detailing.
              </p>
              <p className="mt-5 font-body text-lg italic text-body-ink/70">
                &ldquo;Elevating the traditional craft into a modern sensory
                experience.&rdquo;
              </p>
              <Link
                href="/our-story"
                className="link-underline nav-link mt-6 inline-block text-primary transition-colors hover:text-primary-dark"
              >
                Read Our Story &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro title="Signature Offerings" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {SIGNATURE_OFFERINGS.map((offering, index) => (
              <Reveal key={offering.title} delay={index * 0.12}>
                <div className="card-hover flex flex-col bg-white p-4 text-center shadow-sm">
                  <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2 py-6">
                    <h3 className="text-2xl">{offering.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body-ink/80">
                      {offering.description}
                    </p>
                    <Link
                      href={offering.href}
                      className="link-underline nav-link mt-5 inline-block text-primary transition-colors hover:text-primary-dark"
                    >
                      {offering.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
