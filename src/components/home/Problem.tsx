"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/Reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const disconnected = [
  { n: "01", title: "Food", body: "transported thousands of miles" },
  { n: "02", title: "Water", body: "used once and discarded" },
  { n: "03", title: "Energy", body: "generated elsewhere" },
  { n: "04", title: "Housing", body: "built primarily to shelter" },
  { n: "05", title: "Waste", body: "treated as an endpoint" },
  { n: "06", title: "Land", body: "degraded through development" },
] as const;

const cycle = [
  "Rain",
  "Water",
  "Plants",
  "Food",
  "People",
  "Organics",
  "Nutrients",
] as const;

export function Problem() {
  const root = useRef<HTMLElement>(null);
  const [hot, setHot] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".break-card", {
          y: 36,
          rotateX: 8,
          stagger: 0.08,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ".break-grid", start: "top 85%" },
        });

        gsap.from(".cycle-chip", {
          scale: 0.92,
          stagger: 0.07,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cycle-ring", start: "top 85%" },
        });

        gsap.to(".cycle-flow", {
          strokeDashoffset: -420,
          duration: 8,
          ease: "none",
          repeat: -1,
        });

        gsap.to(".cycle-token", {
          rotation: 360,
          duration: 8,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[#040d1a] px-5 py-28 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(90,180,222,0.12),transparent_42%)]" />

      <Reveal>
        <h2 className="mx-auto max-w-5xl text-center font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          We built a world of disconnected systems.
        </h2>
      </Reveal>

      <div className="break-grid mx-auto mt-20 grid max-w-6xl gap-3 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3">
        {disconnected.map((item, i) => {
          const dim = hot !== null && hot !== i;
          return (
            <article
              key={item.title}
              className={`break-card group relative overflow-hidden rounded-2xl border border-white/10 bg-ocean/70 p-8 transition duration-500 ${
                dim ? "opacity-40" : "opacity-100"
              }`}
              onMouseEnter={() => setHot(i)}
              onMouseLeave={() => setHot(null)}
            >
              <div className="pointer-events-none absolute -right-6 -top-10 font-serif text-7xl text-white/5 transition duration-500 group-hover:text-cyan/10">
                {item.n}
              </div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="text-[11px] tracking-[0.28em] uppercase text-cyan">
                {item.title}
              </p>
              <p className="mt-5 max-w-[16ch] font-serif text-2xl leading-tight text-ice sm:text-3xl">
                {item.body}
              </p>
              <div className="mt-8 h-px w-12 bg-white/15 transition group-hover:w-20 group-hover:bg-cyan/70" />
            </article>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-32 max-w-4xl text-center">
        <h3 className="font-serif text-4xl text-white sm:text-6xl">
          What if every output became an input?
        </h3>
      </Reveal>

      <div className="cycle-ring relative mx-auto mt-8 aspect-square max-w-[560px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle
            cx="200"
            cy="200"
            r="132"
            fill="none"
            stroke="rgba(126,224,255,0.12)"
            strokeWidth="1"
          />
          <circle
            className="cycle-flow"
            cx="200"
            cy="200"
            r="132"
            fill="none"
            stroke="#7EE0FF"
            strokeWidth="1.4"
            strokeDasharray="48 372"
            strokeLinecap="round"
          />
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-36 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[10px] tracking-[0.28em] uppercase text-crystal">
            Closed loop
          </p>
          <p className="mt-2 font-serif text-2xl text-white">Nothing wasted</p>
        </div>

        <div className="cycle-token pointer-events-none absolute inset-0">
          <span className="absolute left-1/2 top-[7.5%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_18px_rgba(126,224,255,0.95)]" />
        </div>

        <div className="absolute inset-0">
          {cycle.map((step, i) => {
            const a = (i / cycle.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(a) * 38;
            const y = 50 + Math.sin(a) * 38;
            return (
              <span
                key={step}
                className="cycle-chip absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-cyan/40 bg-[#061428]/90 px-3 py-2 text-[10px] tracking-[0.16em] uppercase text-ice shadow-[0_0_24px_rgba(6,20,40,0.8)] backdrop-blur-md sm:px-4 sm:text-[11px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {step}
              </span>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-center text-sm tracking-[0.16em] uppercase text-silver">
        Energy and ecological systems connect into the cycle.
      </p>

      <p className="mx-auto mt-16 max-w-lg text-center font-serif text-3xl text-white">
        Nothing exists in isolation.
        <br />
        Nothing needs to become waste.
      </p>
    </section>
  );
}
