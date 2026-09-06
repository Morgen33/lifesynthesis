"use client";

import { useState } from "react";
import Link from "next/link";

const nodes = [
  {
    id: "lifepod",
    href: "/lifepod",
    index: "01",
    title: "LifePod",
    body: "Personal regenerative food-production system.",
  },
  {
    id: "lifehouse",
    href: "/lifehouse",
    index: "02",
    title: "LifeHouse",
    body: "Regenerative human habitat.",
  },
  {
    id: "lifefarms",
    href: "/lifefarms",
    index: "03",
    title: "LifeFarms",
    body: "Distributed controlled-environment agriculture.",
  },
  {
    id: "communities",
    href: "/communities",
    index: "04",
    title: "LifeCommunities",
    body: "Connected regenerative neighborhoods.",
  },
  {
    id: "campuses",
    href: "/communities#campuses",
    index: "05",
    title: "Regenerative Campuses",
    body: "Integrated infrastructure for corporations, institutions and communities.",
  },
] as const;

export function Ecosystem() {
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("lifepod");
  const current = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36"
    >
      <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
        The LifeSynthesis ecosystem
      </p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl sm:text-6xl">
        Architecture, biology and infrastructure as one operating system.
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-navy/65">
        Each program is its own page. Start with the layer that matches the work
        you want to build.
      </p>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <ol className="divide-y divide-navy/10 border-y border-navy/10">
          {nodes.map((node) => {
            const selected = active === node.id;
            return (
              <li key={node.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(node.id)}
                  onFocus={() => setActive(node.id)}
                  onClick={() => setActive(node.id)}
                  className={`flex w-full items-baseline gap-6 py-5 text-left transition ${
                    selected ? "text-navy" : "text-navy/45 hover:text-navy/80"
                  }`}
                  aria-pressed={selected}
                >
                  <span className="w-8 text-[11px] tracking-[0.2em] uppercase">
                    {node.index}
                  </span>
                  <span className="font-serif text-3xl sm:text-5xl">
                    {node.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_30px_80px_rgba(11,39,68,0.08)] lg:p-10">
          <p className="text-[11px] tracking-[0.22em] uppercase text-ocean">
            {current.index} / {current.title}
          </p>
          <p className="mt-5 font-serif text-3xl leading-tight text-navy">
            {current.body}
          </p>
          <Link
            href={current.href}
            className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-[11px] tracking-[0.2em] uppercase text-ice transition hover:bg-ocean"
          >
            Open {current.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
