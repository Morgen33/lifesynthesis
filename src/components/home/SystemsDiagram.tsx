"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const systems = ["Food", "Water", "Shelter", "Energy", "Ecology"] as const;

export function SystemsDiagram() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".sys-node", {
        opacity: 0,
        scale: 0.86,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
      gsap.from(".sys-line", {
        strokeDashoffset: 240,
        duration: 1.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-navy px-5 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-[11px] tracking-[0.28em] uppercase text-crystal">
          Interconnected systems
        </p>
        <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
          What if the places we built gave back more than they consumed?
        </h2>
      </div>

      <div className="relative mx-auto mt-20 aspect-square max-w-[560px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          {systems.map((_, i) => {
            const a = (i / systems.length) * Math.PI * 2 - Math.PI / 2;
            const x = 200 + Math.cos(a) * 140;
            const y = 200 + Math.sin(a) * 140;
            return (
              <line
                key={i}
                className="sys-line"
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#7EE0FF"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="240"
                strokeDashoffset="0"
              />
            );
          })}
          <circle cx="200" cy="200" r="54" fill="#0B2744" stroke="#7EE0FF" strokeOpacity="0.6" />
        </svg>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
          </div>
          {systems.map((label, i) => {
            const a = (i / systems.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(a) * 42;
            const y = 50 + Math.sin(a) * 42;
            return (
              <div
                key={label}
                className="sys-node absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/40 bg-ocean/80 text-[10px] tracking-[0.2em] uppercase"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-xl text-center text-lg leading-relaxed text-ice/70">
        Traditional infrastructure treats these systems independently.
        LifeSynthesis designs them to work together.
      </p>
    </section>
  );
}
