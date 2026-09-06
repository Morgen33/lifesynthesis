"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/Reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const disconnected = [
  { title: "Food", body: "transported thousands of miles" },
  { title: "Water", body: "used once and discarded" },
  { title: "Energy", body: "generated elsewhere" },
  { title: "Housing", body: "built primarily to shelter" },
  { title: "Waste", body: "treated as an endpoint" },
  { title: "Land", body: "degraded through development" },
] as const;

const cycle = [
  "Rain",
  "Water",
  "Plants",
  "Food",
  "People",
  "Organic Material",
  "Nutrients",
  "Plants",
] as const;

export function Problem() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cycle-node", {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.6,
        scrollTrigger: { trigger: ".cycle-wrap", start: "top 75%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-[#040d1a] px-5 py-28 lg:px-10 lg:py-40">
      <Reveal>
        <h2 className="mx-auto max-w-5xl text-center font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          We built a world of disconnected systems.
        </h2>
      </Reveal>

      <div className="mx-auto mt-20 grid max-w-6xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {disconnected.map((item) => (
          <article key={item.title} className="bg-[#061428] p-8">
            <p className="text-[11px] tracking-[0.28em] uppercase text-cyan">
              {item.title}
            </p>
            <p className="mt-4 text-xl text-ice/75">{item.body}</p>
          </article>
        ))}
      </div>

      <Reveal className="mx-auto mt-32 max-w-4xl text-center">
        <h3 className="font-serif text-4xl text-white sm:text-6xl">
          What if every output became an input?
        </h3>
      </Reveal>

      <div className="cycle-wrap mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {cycle.map((step, i) => (
          <div key={`${step}-${i}`} className="cycle-node flex items-center gap-3">
            <span className="rounded-full border border-cyan/35 px-4 py-2 text-[11px] tracking-[0.18em] uppercase">
              {step}
            </span>
            {i < cycle.length - 1 ? (
              <span className="text-cyan/50" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm tracking-[0.16em] uppercase text-silver">
        Energy and ecological systems connect into the cycle.
      </p>

      <p className="mx-auto mt-20 max-w-lg text-center font-serif text-3xl text-white">
        Nothing exists in isolation.
        <br />
        Nothing needs to become waste.
      </p>
    </section>
  );
}
