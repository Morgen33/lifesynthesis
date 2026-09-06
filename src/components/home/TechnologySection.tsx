"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  {
    id: "celss",
    title: "CELSS",
    subtitle: "Closed Ecological Life Support Systems",
    body: "Integrated living loops that recycle air, water, nutrients and biomass so a habitat can support life with far less external throughput.",
  },
  {
    id: "liquid-solar",
    title: "Liquid Solar",
    subtitle: "Dynamic thermal management",
    body: "Liquid-based envelope layers modulate radiation, heat storage and light quality across the building skin.",
  },
  {
    id: "bubbletech",
    title: "BubbleTech",
    subtitle: "Deployable insulation",
    body: "Liquid-foam systems for insulation and solar management that can be deployed, adjusted and recovered as conditions change.",
  },
  {
    id: "ccee",
    title: "CCEE",
    subtitle: "Closed Controlled Ecological Environment",
    body: "Precision environments where climate, moisture, light and biology are designed as a single instrument.",
  },
  {
    id: "aquaponics",
    title: "Aquaponics",
    subtitle: "Aquatic and plant ecosystems",
    body: "Fish, microbes and plants share a nutrient loop, converting feed into food with circulating water as the connective tissue.",
  },
  {
    id: "vertical",
    title: "Vertical Agriculture",
    subtitle: "High-density food production",
    body: "Stacked growing planes that bring calories and nutrition closer to the people who eat them.",
  },
  {
    id: "water",
    title: "Water Recovery",
    subtitle: "Capture, treatment, reuse",
    body: "Rain, condensate and greywater are treated as inventory — captured, cleaned and recirculated rather than discarded.",
  },
  {
    id: "hypar",
    title: "Hypar Architecture",
    subtitle: "Geometry-driven efficiency",
    body: "Hyperbolic surfaces that achieve structural strength and spatial grace with less material.",
  },
  {
    id: "modular",
    title: "Modular Construction",
    subtitle: "Repeatable deployment",
    body: "Systems designed to be manufactured, transported and assembled as a scalable kit of parts.",
  },
] as const;

type ModuleId = (typeof modules)[number]["id"];

export function TechnologySection() {
  const [open, setOpen] = useState<ModuleId>("celss");
  const active = modules.find((m) => m.id === open) ?? modules[0];

  return (
    <section className="bg-[#040d1a] px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
          Technology
        </p>
        <h2 className="mt-4 font-serif text-4xl text-white sm:text-6xl">
          Engineering inspired by life.
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {modules.map((mod) => {
              const selected = mod.id === open;
              return (
                <li key={mod.id}>
                  <button
                    type="button"
                    onClick={() => setOpen(mod.id)}
                    className={`flex w-full items-baseline justify-between gap-4 py-4 text-left ${
                      selected ? "text-cyan" : "text-ice/70 hover:text-ice"
                    }`}
                    aria-expanded={selected}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] uppercase">
                      {mod.title}
                    </span>
                    <span className="hidden text-sm sm:block">{mod.subtitle}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden border border-cyan/20 bg-ocean/40 p-8 lg:p-12"
            >
              <svg
                viewBox="0 0 320 180"
                className="mb-8 h-32 w-full text-cyan/50"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="304" height="164" fill="none" stroke="currentColor" />
                <circle cx="80" cy="90" r="36" fill="none" stroke="currentColor" />
                <circle cx="160" cy="90" r="36" fill="none" stroke="currentColor" />
                <circle cx="240" cy="90" r="36" fill="none" stroke="currentColor" />
                <path d="M80 90h160" stroke="currentColor" />
              </svg>
              <h3 className="font-serif text-3xl text-white">{active.title}</h3>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-cyan">
                {active.subtitle}
              </p>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ice/75">
                {active.body}
              </p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
