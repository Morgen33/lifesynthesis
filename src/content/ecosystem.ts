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
    image: "/images/lifehouse-dome.png",
    imageAlt: "A LifeHouse: a geodesic glass dome with a timber base and circular deck, lit from within.",
    infographic: {
      src: "/images/lifehouse-core-principle.jpg",
      alt: "LifeHouse, the core principle: everything essential within its footprint, from water harvesting and food production to interior climate and independent infrastructure. Below, the existential choice: legacy construction, built to extract, versus the open-source LifeHouse, built to regenerate.",
      width: 682,
      height: 1024,
    },
    contactHref: "/contact?intent=lifehouse",
  },
  {
    slug: "lifefarms",
    title: "LifeFarms",
    summary: "Local food production at community scale.",
    headline: "Food production as infrastructure.",
    body: "Controlled-environment farms that sit beside homes and cities, shortening the distance between soil, water and table.",
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
    image: "/images/cannapod-canopy.jpg",
    imageAlt: "The CannaPod: a glass dome with an arched entrance, filled with rows of cannabis plants.",
    infographic: {
      src: "/images/cannapod-canopy-infographic.jpg",
      alt: "CannaPods: building the next generation of controlled-environment cannabis and hemp agriculture, with controlled climate, precision irrigation, monitoring, tissue-culture feedstock, traceability and resource efficiency.",
      width: 1024,
      height: 610,
    },
    contactHref: "/contact",
  },
];

/** Flip to true to make ecosystem cards and footer links open their detail pages. */
export const ecosystemPagesLive = false;

export function getEcosystemItem(slug: string) {
  return ecosystem.find((item) => item.slug === slug);
}
