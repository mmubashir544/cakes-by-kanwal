import Image from "next/image";
import Link from "next/link";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import { SIGNATURE_OFFERINGS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center">
          <Reveal delay={0} duration={0.6} distance={16}>
            <div className="mb-8 rotate-[-2deg] rounded-lg bg-white p-3 shadow-xl">
              <Image
                src="/images/logo-512.png"
                alt="Cakes By Kanwal"
                width={128}
                height={128}
                className="h-28 w-28 sm:h-32 sm:w-32"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              The Centerpiece Your Celebration Deserves
            </h1>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-5 text-lg text-body-ink/80">
              Handcrafted cakes, cupcakes &amp; macarons, designed as edible art
              for weddings, birthdays, and life&apos;s most elegant occasions.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/custom-order"
                className="btn rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
              >
                Start Your Custom Order
              </Link>
              <Link
                href="/cakes"
                className="btn rounded-sm border border-heading/30 bg-white/70 px-7 py-3.5 text-heading transition-colors hover:bg-white"
              >
                Explore Our Cakes
              </Link>
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
