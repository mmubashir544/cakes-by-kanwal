import Link from "next/link";
import type { Metadata } from "next";
import CakeGrid from "@/components/CakeGrid";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CAKES } from "@/lib/data";
import { breadcrumbList, itemList } from "@/lib/seo";

const TITLE = "The Cake Collection";
const DESCRIPTION =
  "Browse our signature custom cake designs, from romantic wedding tiers to minimalist celebration cakes — each one designed and baked to order.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "custom cakes",
    "custom wedding cakes",
    "custom birthday cakes",
    "cake collection",
    "luxury wedding cakes",
    "floral cake design",
  ],
  alternates: { canonical: "/cakes" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cakes",
  },
};

export default function CakesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Cakes", url: "/cakes" },
        ])}
      />
      <JsonLd
        data={itemList(
          "Custom Cake Collection",
          CAKES.map((cake) => ({ name: cake.name, url: `/cakes/${cake.slug}` }))
        )}
      />
      <Reveal className="mx-auto max-w-4xl px-5 pt-20 pb-4 text-center sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">The Cake Collection</h1>
        <p className="mt-4 text-lg text-body-ink/80">
          One-of-a-kind designs, sculpted around your celebration.
        </p>
        <div className="divider-ornament my-8 justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </Reveal>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <CakeGrid cakes={CAKES} />
      </section>

      <Reveal className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="bg-cream-deep px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Don&apos;t see exactly what you&apos;re looking for?
          </h2>
          <p className="mt-3 text-body-ink/80">
            Let us craft a masterpiece uniquely tailored to your vision and
            taste.
          </p>
          <Link
            href="/custom-order"
            className="btn mt-7 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
          >
            Start a Custom Order &rarr;
          </Link>
        </div>
      </Reveal>
    </>
  );
}
