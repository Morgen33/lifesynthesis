export type EcosystemItem = {
  slug: string;
  title: string;
  summary: string;
  headline: string;
  body: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
  contactHref: string;
};

export const ecosystem = [
  {
    slug: "lifepod",
    title: "LifePod",
    summary: "Personal regenerative food-production system.",
    headline: "A little space to make the world a better place.",
    body: "A compact controlled ecological environment that brings food production, water management and climate regulation together in one modular structure.",
    features: [
      "Growing canopy",
      "Aquaponics",
      "Vertical farming",
      "Water recovery",
      "Thermal storage",
      "Environmental controls",
    ],
    image: "/images/lifepod.png",
    imageAlt: "LifePod crystalline greenhouse habitat.",
    contactHref: "/contact?intent=lifepod",
  },
  {
    slug: "lifehouse",
    title: "LifeHouse",
    summary: "A home that helps sustain the life inside it.",
    headline: "What if your home helped sustain your life?",
    body: "LifeHouse turns the home into an integrated life-support system: food, water, energy and climate designed as one habitat, not a stack of add-ons.",
    features: [
      "Food production",
      "Water cycling",
      "Renewable energy",
      "Living plant canopy",
      "Natural climate systems",
      "Modular architecture",
    ],
    image: "/images/lifehouse.png",
    imageAlt: "LifeHouse regenerative residence with a living plant canopy.",
    contactHref: "/contact?intent=lifehouse",
  },
  {
    slug: "lifepalace",
    title: "Life Palace",
    summary: "Details coming soon.",
    headline: "Life Palace",
    body: "More information about Life Palace is on the way. Get in touch to hear about it first.",
    features: [],
    image: "/images/sunrise.png",
    imageAlt: "Sunrise over regenerative glass habitats and wetlands.",
    contactHref: "/contact",
  },
  {
    slug: "lifefarms",
    title: "LifeFarms",
    summary: "Local food production at community scale.",
    headline: "Food production as infrastructure.",
    body: "Controlled-environment farms that sit beside homes, campuses and communities, shortening the distance between soil, water and table.",
    features: [
      "Aquaponics",
      "Hydroponics",
      "Vertical agriculture",
      "Water recovery",
      "Environmental monitoring",
      "Modular, repeatable systems",
    ],
    image: "/images/know-farmer.png",
    imageAlt: "Dawn light inside a crystalline greenhouse with a farmer holding seedlings.",
    contactHref: "/contact",
  },
  {
    slug: "communities",
    title: "LifeCommunities",
    summary: "Neighborhoods that share food, water and energy.",
    headline: "One home can change a life. A network can change a community.",
    body: "Homes that work together instead of alone, connected through shared gardens, wetlands, pathways and ecological corridors.",
    features: [
      "Shared food",
      "Shared water",
      "Shared energy",
      "Shared knowledge",
      "Shared resilience",
    ],
    image: "/images/community-aerial.png",
    imageAlt: "Aerial view of LifeHouses and LifePods connected by water, gardens and pathways.",
    contactHref: "/contact?intent=demonstration",
  },
  {
    slug: "campuses",
    title: "Regenerative Campuses",
    summary: "Living infrastructure for companies and institutions.",
    headline: "Artificial intelligence. Natural intelligence.",
    body: "Large-scale campuses where advanced technology and living systems operate together, from employee housing to closed-loop water.",
    features: [
      "Employee housing",
      "LifeFarms",
      "Closed-loop water systems",
      "Renewable energy",
      "Ecological restoration",
      "Research environments",
    ],
    image: "/images/campus.png",
    imageAlt: "Regenerative technology campus integrated with forest and water.",
    contactHref: "/contact?intent=campus",
  },
] as const satisfies readonly EcosystemItem[];

export function getEcosystemItem(slug: string) {
  return ecosystem.find((item) => item.slug === slug);
}
