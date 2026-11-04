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
    summary: "Regenerative agricultural Pod.",
    headline:
      "A LifePod doesn’t simply grow food; it creates the conditions for life to flourish.",
    body: "A LifePod is a self-sustaining, closed ecological life support system designed to bring the science of life into harmony with innovative technology where food can be grown abundantly, year-round, regardless of external climate or geographic conditions.\n\nBy harnessing the intelligence of nature and the interconnectedness of the five kingdoms of life: Animals, Plants, Fungi, Protists (algae), and Monera (bacteria and other prokaryotic microorganisms), the LifePod creates a living ecosystem in which every element serves a purpose and contributes to the health of the whole.\n\nIntegrating advanced aquaponics, water conservation and recycling, and the thermal storage flywheel that captures, stores, and redistributes heat to stabilize internal temperatures, the LifePod works with natural biological processes to minimize resource consumption while maximizing productivity.\n\nWater, nutrients, energy, air, and organic matter are continuously cycled to create regenerative relationships between plants, fish, beneficial microorganisms, and their surrounding environment.\n\nDesigned to operate independently of seasonal extremes, the LifePod offers a new paradigm for localized food production, resource resilience, and ecological abundance. It is more than a growing structure, the LifePod is a living, regenerative building that demonstrates how understanding the science of life and working with nature can help humanity create a healthier, more sustainable, and food-secure future.",
    features: [
      "Growing canopy",
      "Aquaponics",
      "Vertical farming",
      "Water recovery",
      "Thermal storage",
      "Environmental controls",
    ],
    image: "/images/lifepod.jpg",
    imageAlt:
      "A LifePod: a glass dome with vertical growing beds, workbench, and entry module on a dark base.",
    video: "/videos/lifepod.mp4",
    contactHref: "/contact?intent=lifepod",
  },
  {
    slug: "lifehouse",
    title: "LifeHouse",
    summary: "Healthy home, grows food.",
    headline:
      "A Healthy Home. A Regenerative Ecosystem. The Future of Healthy Livingry.",
    body: "The LifeHouse is more than a shelter. It is a living, breathing ecosystem designed to nurture human health, grow food, conserve resources, and work in harmony with the wisdom of nature.\n\nLifeHouse represents a new vision for how humanity can live by bringing together healthy building science, regenerative agriculture, biological systems, innovative technology, and nature-inspired design into one integrated living environment.\n\nDesigned around sacred geometry and the science of Life, the LifeHouse transforms the traditional concept of a home from a consumer into a producer.\n\nImagine a home where food grows throughout the year, where living plant canopies bring nature into the architecture, where water becomes an integral part of the environmental system, and where the building itself is intelligently designed to capture, store, and reuse water and energy.\n\nA healthy home actively sustains life.",
    features: [
      "Food production",
      "Water cycling",
      "Renewable energy",
      "Living plant canopy",
      "Natural climate systems",
      "Modular architecture",
    ],
    image: "/images/lifehouse-dome.jpg",
    imageAlt: "A LifeHouse: a geodesic glass dome with a timber base and circular deck, lit from within.",
    contactHref: "/contact?intent=lifehouse",
  },
  {
    slug: "lifefarms",
    title: "LifeFarms",
    summary: "Local food production at community scale.",
    headline:
      "The LifeFarm is more than a place to grow food; it is a living engine of regeneration, abundance, and opportunity.",
    body: "The LifeFarm is a larger regenerative agricultural ecosystem designed to work in harmony with nature, harnessing the science of life and innovative technologies to grow healthy food, restore soil, conserve water, and regenerate the environment.\n\nBy integrating regenerative farming practices, controlled-environment agriculture, aquaponics, living soil systems, beneficial microorganisms, renewable energy, and intelligent resource management, the LifeFarm creates productive food production for a community.\n\nIt goes beyond traditional farming by transforming agriculture into a continuous cycle of renewal, where nutrients are recycled, biological diversity is encouraged, water is conserved, and natural resources are transformed into lasting value.\n\nThrough the integration of the Liquid Solar Engine, hemp cultivation, food production year round, and advanced growing technologies, the LifeFarm demonstrates how we can produce nutritious food, strengthen local food security, create economic opportunities, and restore the natural systems that sustain us.\n\nThe LifeFarm is more than a place to grow food; it is a living engine of regeneration, abundance, and opportunity, cultivating a healthier planet and a more sustainable future for generations to come.",
    features: [
      "Aquaponics",
      "Hydroponics",
      "Vertical agriculture",
      "Water recovery",
      "Environmental monitoring",
      "Modular, repeatable systems",
    ],
    image: "/images/lifefarm-vault.jpg",
    imageAlt: "The LifeFarm: a vaulted glass greenhouse with a metallic arched frame on a solid base.",
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
    summary: "CannaPods specialize in growing cannabis and hemp agriculture.",
    headline: "Engineering the Future of Cannabis & Hemp Cultivation",
    body: "CannaPods are designed to redefine how high-value cannabis and hemp are cultivated by bringing agriculture into a new era of precision-controlled, data-driven growing environments. They combine the science of plant biology, advanced environmental technology, innovative growing strategies, and intelligent resource management to create highly optimized conditions for year-round cultivation, despite the climate conditions on the outside.\n\nThe opportunity is not just growing cannabis and hemp. It’s understanding, controlling, and optimizing every stage of the growing process to achieve greater consistency, quality, efficiency, and predictability.\n\nTraditional cultivation often depends on environmental conditions that are difficult to control. Weather fluctuations, temperature, humidity, pests, disease pressure, inconsistent genetics, water availability, and variations between growing cycles can all influence plant health, quality, and production outcomes. CannaPods are designed to change that equation.\n\nBy integrating regenerative growing principles, living soil systems, water conservation, energy efficiency, and biological innovation, CannaPods can become an integral part of the broader LifeSynthesis ecosystem, connecting botanical agriculture with LifeFarms, renewable energy, circular resource management, and emerging plant-based industries.\n\nCannaPods represent the convergence of nature, science, and technology, creating a new generation of closed-environment agriculture designed to cultivate quality, unlock potential, and grow an abundance of cannabis and hemp.",
    features: [
      "Controlled climate and humidity",
      "Precision irrigation and nutrients",
      "Environmental and biological monitoring",
      "Tissue-culture-derived feedstock",
      "Batch-level traceability",
      "Water and resource efficiency",
    ],
    image: "/images/cannapod-dome.jpg",
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
export const ecosystemPagesLive = true;

export function getEcosystemItem(slug: string) {
  return ecosystem.find((item) => item.slug === slug);
}
