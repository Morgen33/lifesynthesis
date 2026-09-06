"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const lines = [
  "Build less waste.",
  "Grow more food.",
  "Reuse more water.",
  "Restore more land.",
  "Create more resilience.",
] as const;

export function Philosophy() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".phil-line").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-[#071a33] px-5 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-5xl">
        {lines.map((line) => (
          <p
            key={line}
            className="phil-line py-6 font-serif text-4xl text-white sm:text-6xl lg:text-7xl"
          >
            {line}
          </p>
        ))}
        <p className="phil-line mt-16 font-serif text-3xl text-cyan sm:text-5xl">
          Regenerate more than we consume.
        </p>
      </div>
    </section>
  );
}
