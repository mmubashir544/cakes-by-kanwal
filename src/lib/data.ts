export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Cakes", href: "/cakes" },
  { label: "Cupcakes", href: "/cupcakes" },
  { label: "Macarons", href: "/macarons" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Portfolio", href: "/gallery" },
  { label: "Process", href: "/our-story#process" },
  { label: "Sustainability", href: "/our-story#sustainability" },
  { label: "Privacy", href: "/privacy" },
  { label: "Inquiry", href: "/custom-order" },
];

export type Cake = {
  slug: string;
  name: string;
  category: "Birthday" | "Wedding" | "Floral" | "Minimal" | "Luxury";
  description: string;
  longDescription: string;
  flavor: string;
  image: string;
  allowsCustomVersion: boolean;
};

export const CAKE_CATEGORIES = [
  "All",
  "Birthday",
  "Wedding",
  "Floral",
  "Minimal",
  "Luxury",
] as const;

export const CAKES: Cake[] = [
  {
    slug: "the-ethereal-blossom",
    name: "The Ethereal Blossom",
    category: "Wedding",
    description:
      "Signature vanilla bean sponge with raspberry compote and Swiss meringue buttercream.",
    longDescription:
      "A four-tier silhouette finished in a delicate lace-piped buttercream and dressed with hand-formed sugar florals in blush and ivory. Beneath the romantic exterior sits our signature vanilla bean sponge, layered with bright raspberry compote and finished with a Swiss meringue buttercream that is silky rather than sweet — designed to be as beautiful sliced as it is whole.",
    flavor: "Vanilla bean & raspberry compote",
    image: "/images/cake-ethereal-blossom.jpg",
    allowsCustomVersion: true,
  },
  {
    slug: "modern-muse",
    name: "Modern Muse",
    category: "Minimal",
    description: "Dark chocolate mud cake infused with espresso.",
    longDescription:
      "Clean, single-tier lines in soft blush fondant, offset by a single hand-painted sugar orchid. Modern Muse is built for clients who want a quiet, architectural statement piece — rich dark chocolate mud cake infused with espresso, a favorite for intimate celebrations and modern editorial-style events.",
    flavor: "Dark chocolate & espresso",
    image: "/images/cake-modern-muse.jpg",
    allowsCustomVersion: false,
  },
  {
    slug: "gilded-romance",
    name: "Gilded Romance",
    category: "Luxury",
    description: "Champagne infused layers with strawberry preserve.",
    longDescription:
      "Our most opulent design: four tiers of hand-piped gold damask detailing set against warm ivory fondant, finished with cascading garden roses in deep burgundy and gold-dusted foliage. Inside, champagne-infused sponge is layered with a bright strawberry preserve — a showstopper for black-tie weddings and milestone celebrations.",
    flavor: "Champagne & strawberry preserve",
    image: "/images/cake-gilded-romance.jpg",
    allowsCustomVersion: true,
  },
  {
    slug: "wildflower-meadow",
    name: "Wildflower Meadow",
    category: "Floral",
    description: "Lemon and elderflower sponge with zesty curd.",
    longDescription:
      "A textured buttercream finish scattered with pressed pansies, garden roses, and trailing greenery for a just-picked-from-the-meadow feel. Bright lemon and elderflower sponge is layered with a zesty curd, making this as fresh to taste as it is to look at — a favorite for garden birthdays and spring celebrations.",
    flavor: "Lemon & elderflower curd",
    image: "/images/cake-wildflower-meadow.jpg",
    allowsCustomVersion: true,
  },
];

export type MacaronCollection = {
  slug: string;
  name: string;
  tags: string[];
  description: string;
  image: string;
};

export const MACARON_COLLECTIONS: MacaronCollection[] = [
  {
    slug: "the-garden-romance",
    name: "The Garden Romance",
    tags: ["Rose Petal", "Lavender Earl Grey"],
    description:
      "Floral infusions paired with delicate white chocolate ganache.",
    image: "/images/macaron-garden-romance.jpg",
  },
  {
    slug: "atelier-classics",
    name: "Atelier Classics",
    tags: ["Tahitian Vanilla", "Valrhona Dark"],
    description:
      "Timeless flavors executed with absolute precision and premium ingredients.",
    image: "/images/macaron-atelier-classics.jpg",
  },
  {
    slug: "citrus-and-grove",
    name: "Citrus & Grove",
    tags: ["Sicilian Lemon", "Pistachio Praline"],
    description:
      "Bright, vibrant notes balanced with rich, nutty undertones.",
    image: "/images/macaron-citrus-grove.jpg",
  },
];

export type CupcakeFlavor = {
  name: string;
  tags: string[];
  description: string;
};

export const CUPCAKE_FLAVORS: CupcakeFlavor[] = [
  {
    name: "Classic Vanilla Bean",
    tags: ["Vanilla", "Swiss Buttercream"],
    description:
      "Madagascar vanilla bean sponge finished with a light Swiss meringue buttercream.",
  },
  {
    name: "Raspberry Rose",
    tags: ["Raspberry", "Rose", "Gold Leaf"],
    description:
      "Raspberry-swirled sponge finished with rose buttercream and a touch of gold leaf.",
  },
  {
    name: "Salted Caramel",
    tags: ["Brown Butter", "Sea Salt"],
    description:
      "Brown butter sponge with a salted caramel buttercream and a delicate caramel drizzle.",
  },
  {
    name: "Berries & Cream",
    tags: ["Mixed Berry", "Chantilly"],
    description:
      "Vanilla sponge topped with Chantilly cream, blueberries, and red currants.",
  },
];

export type SignatureOffering = {
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
};

export const SIGNATURE_OFFERINGS: SignatureOffering[] = [
  {
    title: "Custom Cakes",
    description:
      "Tailored masterpieces designed to be the centerpiece of your event. From intricate floral cascades to modern architectural lines.",
    image: "/images/card-custom-cakes.jpg",
    href: "/cakes",
    cta: "Discover Cakes",
  },
  {
    title: "Cupcakes",
    description:
      "Petite indulgences offering the same refined flavors and elegant finishes as our larger creations, perfect for elegant gatherings.",
    image: "/images/card-cupcakes.jpg",
    href: "/cupcakes",
    cta: "View Cupcakes",
  },
  {
    title: "Macaron Artistry",
    description:
      "Delicate French macarons crafted with precision. A symphony of texture and flavor, available in our signature artisanal collections.",
    image: "/images/card-macarons.jpg",
    href: "/macarons",
    cta: "Explore Macarons",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Cakes" | "Cupcakes" | "Macarons" | "Atelier";
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/cake-ethereal-blossom.jpg", alt: "The Ethereal Blossom wedding cake", category: "Cakes" },
  { src: "/images/cake-gilded-romance.jpg", alt: "Gilded Romance luxury wedding cake", category: "Cakes" },
  { src: "/images/cake-wildflower-meadow.jpg", alt: "Wildflower Meadow birthday cake", category: "Cakes" },
  { src: "/images/cake-modern-muse.jpg", alt: "Modern Muse minimal cake", category: "Cakes" },
  { src: "/images/card-custom-cakes.jpg", alt: "Custom floral wedding cake", category: "Cakes" },
  { src: "/images/card-cupcakes.jpg", alt: "Assorted signature cupcakes", category: "Cupcakes" },
  { src: "/images/macaron-garden-romance.jpg", alt: "The Garden Romance macaron collection", category: "Macarons" },
  { src: "/images/macaron-atelier-classics.jpg", alt: "Atelier Classics macaron collection", category: "Macarons" },
  { src: "/images/macaron-citrus-grove.jpg", alt: "Citrus & Grove macaron collection", category: "Macarons" },
  { src: "/images/card-macarons.jpg", alt: "Macaron tower centerpiece", category: "Macarons" },
  { src: "/images/macaron-shell.jpg", alt: "Piping macaron shells in the atelier", category: "Atelier" },
  { src: "/images/home-handcrafted.jpg", alt: "Hand-placing a sugar rose on a wedding cake", category: "Atelier" },
  { src: "/images/story-handcrafted.jpg", alt: "Detailing a floral wedding cake", category: "Atelier" },
  { src: "/images/story-portrait.jpg", alt: "Kanwal in the atelier kitchen", category: "Atelier" },
  { src: "/images/story-quality.jpg", alt: "Fine baking ingredients laid out", category: "Atelier" },
  { src: "/images/story-artistry.jpg", alt: "Hand-painted floral cake detail", category: "Atelier" },
];

export const GALLERY_CATEGORIES = ["All", "Cakes", "Cupcakes", "Macarons", "Atelier"] as const;
