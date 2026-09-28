"use client";

import { useEffect, useRef } from "react";

type ClosedLoopProps = {
  className?: string;
  priority?: boolean;
};

export function ClosedLoop({ className = "", priority = false }: ClosedLoopProps) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      el.pause();
      return;
    }

    void el.play().catch(() => {
      /* autoplay can be blocked; poster remains */
    });
  }, []);

  return (
    <div className={`relative aspect-[592/496] w-full ${className}`}>
      <video
        ref={video}
        className="h-full w-full object-contain mix-blend-screen"
        poster="/videos/closed-loop-poster.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload={priority ? "auto" : "metadata"}
        aria-label="Closed loop: rain, water, plants, food, people, organics, and nutrients. Nothing wasted."
      >
        <source src="/videos/closed-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
