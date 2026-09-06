"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const systems = ["Food", "Water", "Shelter", "Energy", "Ecology"] as const;
const CX = 200;
const CY = 200;
const HUB = 56;
const NODE = 152;

function polar(index: number, radius: number) {
  const a = (index / systems.length) * Math.PI * 2 - Math.PI / 2;
  return {
    a,
    x: CX + Math.cos(a) * radius,
    y: CY + Math.sin(a) * radius,
  };
}

export function SystemsDiagram() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduce = context.conditions?.reduce;

          gsap.from(".sys-node", {
            opacity: 0,
            scale: reduce ? 1 : 0.72,
            stagger: 0.1,
            duration: reduce ? 0 : 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: root.current, start: "top 72%" },
          });

          gsap.from(".sys-line", {
            strokeDashoffset: 220,
            duration: reduce ? 0 : 1.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: root.current, start: "top 72%" },
          });

          if (reduce) return;

          gsap.to(".sys-ring", {
            rotation: 360,
            duration: 80,
            ease: "none",
            repeat: -1,
            svgOrigin: "200 200",
          });

          gsap.to(".sys-glow", {
            scale: 1.08,
            opacity: 0.85,
            duration: 2.4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });

          gsap.utils.toArray<SVGCircleElement>(".sys-pulse").forEach((el, i) => {
            const start = polar(i, HUB + 4);
            const end = polar(i, NODE - 28);
            gsap.fromTo(
              el,
              { attr: { cx: start.x, cy: start.y }, opacity: 0 },
              {
                attr: { cx: end.x, cy: end.y },
                opacity: 1,
                duration: 2.2,
                delay: i * 0.35,
                repeat: -1,
                ease: "none",
                yoyo: false,
                repeatDelay: 0.4,
              },
            );
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-navy px-5 py-28 lg:px-10 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-[11px] tracking-[0.28em] uppercase text-crystal">
          Interconnected systems
        </p>
        <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
          What if the places we built gave back more than they consumed?
        </h2>
      </div>

      <div className="relative mx-auto mt-16 aspect-square max-w-[680px]">
        <div className="sys-glow pointer-events-none absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl" />

        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle
            className="sys-ring"
            cx={CX}
            cy={CY}
            r="96"
            fill="none"
            stroke="#7EE0FF"
            strokeOpacity="0.12"
            strokeWidth="0.6"
            strokeDasharray="3 10"
            style={{ transformOrigin: "200px 200px" }}
          />
          {systems.map((label, i) => {
            const from = polar(i, HUB);
            const to = polar(i, NODE - 22);
            return (
              <g key={label}>
                <line
                  className="sys-line"
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#7EE0FF"
                  strokeOpacity="0.55"
                  strokeWidth="1.15"
                  strokeDasharray="220"
                  strokeDashoffset="0"
                />
                <circle
                  className="sys-pulse"
                  r="2.4"
                  fill="#7EE0FF"
                  cx={from.x}
                  cy={from.y}
                />
              </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/brand/logo-mark.png"
            alt="LifeSynthesis mark at the center of food, water, shelter, energy and ecology."
            fill
            sizes="280px"
            className="object-contain drop-shadow-[0_0_40px_rgba(126,224,255,0.35)]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0">
          {systems.map((label, i) => {
            const p = polar(i, NODE);
            const x = (p.x / 400) * 100;
            const y = (p.y / 400) * 100;
            return (
              <div
                key={label}
                className="sys-node absolute flex h-[4.6rem] w-[4.6rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/50 bg-ocean/90 text-[10px] tracking-[0.22em] uppercase text-ice shadow-[0_0_24px_rgba(11,39,68,0.8)] backdrop-blur-sm sm:h-24 sm:w-24 sm:text-[11px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-ice/70">
        Traditional infrastructure treats these systems independently.
        LifeSynthesis designs them to work together.
      </p>
    </section>
  );
}
