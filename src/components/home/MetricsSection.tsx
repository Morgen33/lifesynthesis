"use client";

import { useState } from "react";

const categories = [
  {
    id: "water",
    title: "Water",
    items: [
      "Capture volume vs. demand",
      "Recovery and reuse ratio",
      "Quality indices across loops",
    ],
  },
  {
    id: "food",
    title: "Food",
    items: [
      "Yield by crop family",
      "Nutrient density tracking",
      "Distance from harvest to table",
    ],
  },
  {
    id: "carbon",
    title: "Carbon",
    items: [
      "Embodied vs. operational carbon",
      "Soil carbon change",
      "Biomass sequestered on site",
    ],
  },
  {
    id: "biodiversity",
    title: "Biodiversity",
    items: [
      "Habitat area restored",
      "Species observation counts",
      "Corridor connectivity",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    items: [
      "On-site generation mix",
      "Thermal storage state",
      "Demand flexibility",
    ],
  },
  {
    id: "wellbeing",
    title: "Human well-being",
    items: [
      "Access to fresh food",
      "Thermal comfort hours",
      "Time in living landscapes",
    ],
  },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function MetricsSection() {
  const [id, setId] = useState<CategoryId>("water");
  const active = categories.find((c) => c.id === id) ?? categories[0];

  return (
    <section className="bg-navy px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="font-serif text-4xl text-white sm:text-6xl">
          What we build should be measurable.
        </h2>
        <p className="mt-6 max-w-2xl text-ice/70">
          Example measurement categories — not unsupported performance
          guarantees.
        </p>

        <div className="mt-12 flex snap-x gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setId(c.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-[11px] tracking-[0.18em] uppercase ${
                c.id === id
                  ? "bg-ice text-navy"
                  : "border border-white/20 text-ice/70"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <ul className="mt-10 space-y-4">
          {active.items.map((item, i) => (
            <li
              key={item}
              className="flex items-end justify-between border-b border-white/10 pb-4"
            >
              <span className="text-lg text-ice/85">{item}</span>
              <span className="font-mono text-cyan">{String(i + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
