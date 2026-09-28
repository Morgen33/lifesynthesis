"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/Reveal";
import { ClosedLoop } from "@/components/home/ClosedLoop";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const disconnected = [
  { n: "01", title: "Food", body: "transported thousands of miles" },
  { n: "02", title: "Water", body: "used once and discarded" },
  { n: "03", title: "Energy", body: "generated elsewhere" },
  { n: "04", title: "Housing", body: "built primarily to shelter" },
  { n: "05", title: "Waste", body: "treated as an endpoint" },
  { n: "06", title: "Land", body: "degraded through development" },
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

      <div className="mx-auto mt-32 grid max-w-[1400px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <h3 className="font-serif text-4xl text-white sm:text-6xl">
            What if every output became an input?
          </h3>
          <p className="mt-6 text-sm tracking-[0.16em] uppercase text-silver">
            Energy and ecological systems connect into the cycle.
          </p>
        </Reveal>
        <ClosedLoop className="mx-auto max-w-[620px] lg:max-w-none" />
      </div>

      <p className="mx-auto mt-16 max-w-lg text-center font-serif text-3xl text-white">
        Nothing exists in isolation.
        <br />
        Nothing needs to become waste.
      </p>
    </section>
  );
}
