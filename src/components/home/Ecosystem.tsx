"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  {
    id: "lifepod",
    href: "/lifepod",
    title: "LifePod",
    angle: -90,
    body: "Personal regenerative food-production system.",
  },
  {
    id: "lifehouse",
    href: "/lifehouse",
    title: "LifeHouse",
    angle: -18,
    body: "Regenerative human habitat.",
  },
  {
    id: "lifefarms",
    href: "/lifefarms",
    title: "LifeFarms",
    angle: 54,
    body: "Distributed controlled-environment agriculture.",
  },
  {
    id: "communities",
    href: "/communities",
    title: "LifeCommunities",
    angle: 126,
    body: "Connected regenerative neighborhoods.",
  },
  {
    id: "campuses",
    href: "/communities#campuses",
    title: "Regenerative Campuses",
    angle: 198,
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
      <p className="text-center text-[11px] tracking-[0.28em] uppercase text-ocean/70">
        The LifeSynthesis ecosystem
      </p>
      <h2 className="mx-auto mt-4 max-w-4xl text-center font-serif text-4xl sm:text-6xl">
        Architecture, biology and infrastructure as one operating system.
      </h2>

      <div className="relative mx-auto mt-16 h-[420px] max-w-[640px] sm:h-[520px]">
        <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-navy/15 bg-white shadow-[0_0_80px_rgba(94,180,222,0.25)]">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={72}
            height={72}
            className="h-16 w-16 object-contain"
          />
        </div>
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 38;
          const y = 50 + Math.sin(rad) * 38;
          const selected = active === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActive(node.id)}
              className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-3 text-[10px] tracking-[0.16em] uppercase transition ${
                selected
                  ? "border-navy bg-navy text-ice"
                  : "border-navy/20 bg-white/80 text-navy hover:border-navy/50"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-pressed={selected}
            >
              {node.title}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-lg leading-relaxed text-navy/75">{current.body}</p>
          <Link
            href={current.href}
            className="mt-6 inline-flex text-[11px] tracking-[0.22em] uppercase text-ocean"
          >
            Open {current.title} →
          </Link>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
