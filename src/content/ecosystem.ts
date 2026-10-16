export type EcosystemItem = {
  slug: string;
  title: string;
  summary: string;
  headline: string;
  body: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
  video?: string;
  infographic?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  contactHref: string;
};

export const ecosystem: readonly EcosystemItem[] = [
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
    image: "/videos/lifepod-poster.jpg",
    imageAlt: "A LifePod assembling: frame, growing beds and glass dome.",
    video: "/videos/lifepod.mp4",
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
    infographic: {
      src: "/images/lifehouse-infographic.jpg",
      alt: "LifeHouse, the core principle: everything essential within its footprint. Water harvesting and purification, hydrologic food production, and active climate management independent from the external grid.",
      width: 1024,
      height: 554,
    },
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
    image: "/images/lifefarm.jpg",
    imageAlt: "The LifeFarm: a tall arched glass greenhouse on a stone base.",
    infographic: {
      src: "/images/lifefarm-infographic.jpg",
      alt: "The LifeSynthesis LifeFarm is the answer to food security: carbon-negative vertical farming, closed agricultural environment, 80% lower energy costs, multiple harvests a year, and farm to table in 10 miles or less.",
      width: 1024,
      height: 537,
    },
    contactHref: "/contact",
  },
  {
    slug: "cannapod",
    title: "CannaPod",
    summary: "Controlled-environment cannabis and hemp cultivation.",
    headline: "The next generation of cannabis and hemp agriculture.",
    body: "The future of cannabis agriculture isn't about growing more plants. It's about growing better plants, with greater consistency, intelligence, traceability and control.",
    features: [
      "Controlled climate and humidity",
      "Precision irrigation and nutrients",
      "Environmental and biological monitoring",
      "Tissue-culture-derived feedstock",
      "Batch-level traceability",
      "Water and resource efficiency",
    ],
    image: "/images/cannapod.jpg",
    imageAlt: "The CannaPod: a glass dome with an arched entrance in a pine forest.",
    infographic: {
      src: "/images/cannapod-infographic.jpg",
      alt: "CannaPods: building the next generation of controlled-environment cannabis and hemp agriculture, with controlled climate, precision irrigation, monitoring, tissue-culture feedstock, traceability and resource efficiency.",
      width: 1024,
      height: 585,
    },
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
];

export function getEcosystemItem(slug: string) {
  return ecosystem.find((item) => item.slug === slug);
}
