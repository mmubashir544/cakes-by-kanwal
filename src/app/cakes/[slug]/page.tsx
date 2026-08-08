import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CAKES } from "@/lib/data";

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
  return {
    title: `${cake.name} | Cakes By Kanwal`,
    description: cake.description,
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
      <Link
        href="/cakes"
        className="nav-link text-primary transition-colors hover:text-primary-dark"
      >
        &larr; Back to the Collection
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={cake.image}
            alt={cake.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

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
      </div>
    </section>
  );
}
