"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const hotspots = [
  { id: "canopy", label: "Growing canopy", x: 52, y: 18 },
  { id: "aqua", label: "Aquaponics", x: 38, y: 48 },
  { id: "vertical", label: "Vertical farming", x: 62, y: 42 },
  { id: "water", label: "Water recovery", x: 30, y: 68 },
  { id: "thermal", label: "Thermal storage", x: 70, y: 70 },
  { id: "bubble", label: "BubbleTech envelope", x: 48, y: 32 },
  { id: "liquid", label: "Liquid Solar system", x: 74, y: 28 },
  { id: "controls", label: "Environmental controls", x: 22, y: 40 },
  { id: "plants", label: "Plant production", x: 58, y: 58 },
  { id: "aquatic", label: "Aquatic systems", x: 44, y: 76 },
] as const;

const pillars = [
  { title: "Food", body: "Grow fresh food locally." },
  { title: "Water", body: "Capture, cycle and recover water." },
  { title: "Climate", body: "Create controlled growing conditions." },
  { title: "Resilience", body: "Reduce dependence on fragile supply chains." },
  { title: "Education", body: "Turn food production into a living classroom." },
] as const;

export function LifePodSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="lifepod" className="bg-navy px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">LifePod</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          A little space to make the world a better place.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ice/70">
          The LifePod transforms households from consumers into producers.
        </p>

        <div className="relative mt-14 overflow-hidden rounded-sm">
          <Image
            src="/images/lifepod.png"
            alt="Egg-shaped LifePod greenhouse with a crystalline envelope in a forest-edge garden."
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 hidden md:block">
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan bg-navy/70"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onMouseEnter={() => setActive(spot.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(spot.id)}
                onBlur={() => setActive(null)}
                aria-label={spot.label}
              >
                <span className="sr-only">{spot.label}</span>
              </button>
            ))}
            {active ? (
              <p className="absolute bottom-6 left-6 rounded-full bg-navy/80 px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-ice">
                {hotspots.find((h) => h.id === active)?.label}
              </p>
            ) : null}
          </div>
        </div>

        <ul className="mt-8 grid gap-3 md:hidden">
          {hotspots.map((spot) => (
            <li
              key={spot.id}
              className="border-b border-white/10 py-3 text-sm tracking-[0.12em] uppercase text-ice/80"
            >
              {spot.label}
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-ice/75">
          The LifePod is envisioned as a compact controlled ecological environment
          capable of integrating food production, water management and climate
          regulation within a modular structure.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <div key={p.title}>
              <p className="text-[11px] tracking-[0.24em] uppercase text-cyan">
                {p.title}
              </p>
              <p className="mt-3 text-ice/75">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/lifepod">Discover LifePod</Button>
        </div>
      </div>
    </section>
  );
}
