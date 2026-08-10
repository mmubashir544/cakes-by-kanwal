import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CAKES } from "@/lib/data";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, breadcrumbList } from "@/lib/seo";

export function generateStaticParams() {
  return CAKES.map((cake) => ({ slug: cake.slug }));
}

async function getCake(slug: string) {
  return CAKES.find((cake) => cake.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cake = await getCake(slug);
  if (!cake) return {};

  const title = `${cake.name} Custom Cake`;

  return {
    title,
    description: cake.description,
    keywords: [
      cake.name,
      `${cake.category} cake design`,
      `custom ${cake.category.toLowerCase()} cake`,
      cake.flavor,
      "custom cake design",
    ],
    alternates: { canonical: `/cakes/${cake.slug}` },
    openGraph: {
      title,
      description: cake.description,
      url: `/cakes/${cake.slug}`,
      images: [{ url: cake.image }],
    },
  };
}

export default async function CakeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cake = await getCake(slug);
  if (!cake) notFound();

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: cake.name,
          description: cake.longDescription,
          image: `${SITE_URL}${cake.image}`,
          category: cake.category,
          brand: {
            "@type": "Brand",
            name: SITE_NAME,
          },
          url: `${SITE_URL}/cakes/${cake.slug}`,
        }}
      />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Cakes", url: "/cakes" },
          { name: cake.name, url: `/cakes/${cake.slug}` },
        ])}
      />

      <Reveal distance={12} duration={0.5}>
        <Link
          href="/cakes"
          className="link-underline nav-link text-primary transition-colors hover:text-primary-dark"
        >
          &larr; Back to the Collection
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
        <Reveal direction="left">
          <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={cake.image}
              alt={cake.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div>
            <span className="inline-block rounded-full bg-blush px-3 py-1 text-xs text-primary-dark">
              {cake.category}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl">{cake.name}</h1>
            <p className="mt-2 text-sm eyebrow text-body-ink/60">{cake.flavor}</p>

            <p className="mt-6 text-lg leading-relaxed text-body-ink/85">
              {cake.longDescription}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {cake.allowsCustomVersion ? (
                <Link
                  href={`/custom-order?design=${encodeURIComponent(cake.name)}`}
                  className="btn rounded-sm bg-primary px-7 py-3.5 text-center text-white transition-colors hover:bg-primary-dark"
                >
                  Request This Design
                </Link>
              ) : (
                <Link
                  href="/custom-order"
                  className="btn rounded-sm bg-primary px-7 py-3.5 text-center text-white transition-colors hover:bg-primary-dark"
                >
                  Start a Custom Order
                </Link>
              )}
              <Link
                href="/cakes"
                className="btn rounded-sm border border-heading/30 px-7 py-3.5 text-center text-heading transition-colors hover:bg-white"
              >
                View More Designs
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
