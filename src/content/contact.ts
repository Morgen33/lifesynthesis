export const contactIntents = [
  {
    id: "general",
    label: "General",
    statement: "A first conversation about what LifeSynthesis could become on your land, campus or city.",
    image: "/images/sunrise.png",
    imageAlt: "Sunrise over regenerative glass habitats and wetlands.",
  },
  {
    id: "lifepod",
    label: "LifePod",
    statement: "A compact ecological environment — food, water and climate in a modular structure.",
    image: "/images/lifepod.png",
    imageAlt: "LifePod crystalline greenhouse habitat.",
  },
  {
    id: "lifehouse",
    label: "LifeHouse",
    statement: "A home designed as an integrated life-support system, not only as shelter.",
    image: "/images/lifehouse.png",
    imageAlt: "LifeHouse with living plant canopy at twilight.",
  },
  {
    id: "demonstration",
    label: "Demonstration site",
    statement: "A place people can walk into — LifePods, LifeHouses and living systems in person.",
    image: "/images/community-aerial.png",
    imageAlt: "Aerial regenerative neighborhood connected by water and gardens.",
  },
  {
    id: "campus",
    label: "Regenerative campus",
    statement: "Infrastructure for institutions where advanced technology and living systems operate together.",
    image: "/images/campus.png",
    imageAlt: "Regenerative technology campus integrated with forest and water.",
  },
  {
    id: "research",
    label: "Research",
    statement: "Collaboration on closed ecological systems, sensing, and measurement before claims.",
    image: "/images/solaroof.png",
    imageAlt: "Transparent building envelope with plant canopy and water recovery.",
  },
  {
    id: "partner",
    label: "Partnership",
    statement: "Architects, engineers, developers and operators building the next system with us.",
    image: "/images/hero-community.png",
    imageAlt: "Regenerative community of glass habitats at dusk.",
  },
] as const;

export type ContactIntentId = (typeof contactIntents)[number]["id"];

export function isContactIntent(value: string | null): value is ContactIntentId {
  return contactIntents.some((item) => item.id === value);
}

export function getContactIntent(id: ContactIntentId) {
  const found = contactIntents.find((item) => item.id === id);
  if (!found) {
    const unreachable: never = id;
    throw new Error(`Unhandled contact intent: ${unreachable}`);
  }
  return found;
}
