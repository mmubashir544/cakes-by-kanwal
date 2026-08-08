import type { MetadataRoute } from "next";
import { CAKES } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/cakes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/cupcakes`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/macarons`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/our-story`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/custom-order`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cakeRoutes: MetadataRoute.Sitemap = CAKES.map((cake) => ({
    url: `${SITE_URL}/cakes/${cake.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cakeRoutes];
}
