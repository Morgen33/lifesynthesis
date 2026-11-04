const contactStatement =
  "A first conversation about what LifeSynthesis could become on your land or in your city.";

export const contactIntents = [
  {
    id: "general",
    label: "General",
    statement: contactStatement,
    image: "/images/closing-nature.jpg",
    imageAlt: "Sunrise over misty mountains, a calm lake and pine forest.",
  },
  {
    id: "lifepod",
    label: "LifePod",
    statement: contactStatement,
    image: "/videos/lifepod-poster.jpg",
    imageAlt: "A LifePod with glass dome and growing beds.",
  },
  {
    id: "lifehouse",
    label: "LifeHouse",
    statement: contactStatement,
    image: "/images/lifehouse-dome.jpg",
    imageAlt: "A LifeHouse: a geodesic glass dome with a timber base and circular deck, lit from within.",
  },
  {
    id: "demonstration",
    label: "Demonstration site",
    statement: contactStatement,
    image: "/images/closing-nature.jpg",
    imageAlt: "Sunrise over misty mountains, a calm lake and pine forest.",
  },
  {
    id: "research",
    label: "Research",
    statement: contactStatement,
    image: "/images/closing-nature.jpg",
    imageAlt: "Sunrise over misty mountains, a calm lake and pine forest.",
  },
  {
    id: "partner",
    label: "Partnership",
    statement: contactStatement,
    image: "/images/closing-nature.jpg",
    imageAlt: "Sunrise over misty mountains, a calm lake and pine forest.",
  },
] as const;

export type ContactIntentId = (typeof contactIntents)[number]["id"];

const contactIntentsById: Record<
  ContactIntentId,
  (typeof contactIntents)[number]
> = Object.fromEntries(contactIntents.map((item) => [item.id, item])) as Record<
  ContactIntentId,
  (typeof contactIntents)[number]
>;

export function isContactIntent(value: string | null): value is ContactIntentId {
  return contactIntents.some((item) => item.id === value);
}

export function getContactIntent(id: ContactIntentId) {
  switch (id) {
    case "general":
    case "lifepod":
    case "lifehouse":
    case "demonstration":
    case "research":
    case "partner":
      return contactIntentsById[id];
    default: {
      const unreachable: never = id;
      throw new Error(`Unhandled contact intent: ${unreachable}`);
    }
  }
}
