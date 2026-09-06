"use client";

import { useEffect, useState } from "react";

const metrics = [
  { label: "Water Quality", value: 94, unit: "index" },
  { label: "Plant Health", value: 88, unit: "index" },
  { label: "Energy Demand", value: 41, unit: "% load" },
  { label: "Soil Carbon", value: 2.4, unit: "%", decimals: 1 },
  { label: "Greenhouse Production", value: 76, unit: "% yield" },
  { label: "Biodiversity", value: 63, unit: "index" },
  { label: "Weather", value: 18, unit: "°C" },
  { label: "Water Recovery", value: 81, unit: "%" },
  { label: "Thermal Storage", value: 67, unit: "%" },
] as const;

export function AIDashboard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[#040d1a] px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="max-w-4xl font-serif text-4xl text-white sm:text-6xl">
          When AI learns to listen to nature.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ice/70">
          Sensors and models can help environmental infrastructure move from
          reactive management toward predictive management. Values shown are
          illustrative interface states — not performance claims.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => {
            const drift = ((tick + i) % 5) * 0.4;
            const display =
              "decimals" in m
                ? (m.value + drift / 10).toFixed(1)
                : Math.round(m.value + drift);
            return (
              <article key={m.label} className="bg-[#061428] p-6">
                <p className="text-[11px] tracking-[0.2em] uppercase text-silver">
                  {m.label}
                </p>
                <p className="mt-4 font-mono text-4xl text-cyan">
                  {display}
                  <span className="ml-2 text-sm text-ice/50">{m.unit}</span>
                </p>
                <div className="mt-4 h-px w-full bg-white/10">
                  <div
                    className="h-px bg-cyan"
                    style={{ width: `${40 + ((tick + i) % 50)}%` }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
