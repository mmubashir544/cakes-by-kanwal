// TODO: Replace with your real production domain once deployed.
// This value feeds metadataBase, canonical URLs, sitemap.xml, and JSON-LD —
// update it here once and it propagates everywhere.
export const SITE_URL = "https://www.cakesbykanwal.com";

export const SITE_NAME = "Cakes By Kanwal";

export const SITE_DESCRIPTION =
  "Handcrafted custom cakes, cupcakes, and macarons for weddings, birthdays, and life's most meaningful celebrations. Bespoke confectionery artistry by Cakes By Kanwal.";

// Core, non-geographic keyword targets. If Cakes By Kanwal serves a specific
// city or region, add city-modified variants (e.g. "custom cakes in [city]")
// here and in each page's metadata — local-intent keywords are typically the
// highest-value ones for a bakery business.
export const DEFAULT_KEYWORDS = [
  "custom cakes",
  "custom wedding cakes",
  "custom birthday cakes",
  "bespoke cake designer",
  "custom cupcakes",
  "french macarons",
  "custom macarons",
  "wedding cake designer",
  "cake artist",
  "dessert table",
  "Cakes By Kanwal",
];

type BreadcrumbItem = { name: string; url: string };

// Produces schema.org BreadcrumbList JSON-LD so search engines can render
// breadcrumb trails in results. `url` should be a site-relative path (e.g. "/cakes").
export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

type ListItem = { name: string; url: string };

// Produces schema.org ItemList JSON-LD for a catalog/collection page so
// search engines can understand and surface its individual entries.
export function itemList(name: string, items: ListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}
