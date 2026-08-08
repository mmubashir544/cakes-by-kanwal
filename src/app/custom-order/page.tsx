import Image from "next/image";
import { Suspense } from "react";
import type { Metadata } from "next";
import CustomOrderForm from "@/components/CustomOrderForm";
import Reveal from "@/components/Reveal";

const TITLE = "Start Your Custom Order";
const DESCRIPTION =
  "An atelier dedicated to the craft of fine baking. Begin your custom cake, cupcake, or macaron consultation and bring your vision to life.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "order custom cake",
    "custom cake inquiry",
    "cake consultation",
    "custom cake quote",
  ],
  alternates: { canonical: "/custom-order" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/custom-order",
  },
};

export default function CustomOrderPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/custom-order-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 py-20 text-center">
          <Reveal delay={0}>
            <p className="eyebrow text-primary">Bespoke Confectionery Artistry</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Your vision,{" "}
              <span className="text-primary">beautifully brought to life.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 text-lg text-body-ink/80">
              An atelier dedicated to the craft of fine baking. We don&apos;t just
              make cakes; we sculpt memories with intention, romance, and
              unparalleled attention to detail for your most cherished moments.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <a
              href="#form"
              className="btn mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
            >
              Begin Your Consultation
            </a>
          </Reveal>
        </div>
      </section>

      <section id="form" className="bg-cream-deep py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl sm:text-5xl">Start Your Custom Order</h2>
            <p className="mt-4 text-lg text-body-ink/80">
              Please provide the details of your event and vision. We will
              review your inquiry and follow up to schedule a personal
              consultation.
            </p>
          </Reveal>

          <div className="mt-14">
            <Suspense fallback={null}>
              <CustomOrderForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
