"use client";

import { useEffect, useRef } from "react";

const SRC = "/videos/five-systems.mp4";
const POSTER = "/videos/five-systems-poster.jpg";
const LABEL =
  "Food, water, shelter, energy, and ecology working as one regenerative system.";

export function ClosingVideos() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      return;
    }
    void el.play().catch(() => {
      /* autoplay can be blocked; poster remains */
    });
  }, []);

  return (
    <section className="bg-navy px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto flex max-w-[900px] justify-center">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-navy">
          <video
            ref={ref}
            className="block aspect-square h-auto w-full object-contain"
            poster={POSTER}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={LABEL}
          >
            <source src={SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
