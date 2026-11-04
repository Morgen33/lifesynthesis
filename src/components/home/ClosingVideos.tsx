"use client";

import { useEffect, useRef } from "react";

const videos = [
  {
    src: "/videos/closed-loop.mp4",
    poster: "/videos/closed-loop-poster.jpg",
    label: "Closed loop: nothing wasted. Rain, water, plants, food, people, organics, nutrients.",
  },
  {
    src: "/videos/five-systems.mp4",
    poster: "/videos/five-systems-poster.jpg",
    label: "Food, water, shelter, energy, and ecology working as one regenerative system.",
  },
] as const;

function LoopVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
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
    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-navy">
      <video
        ref={ref}
        className="block h-full w-full object-contain"
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export function ClosingVideos() {
  return (
    <section className="bg-navy px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {videos.map((video) => (
            <LoopVideo key={video.src} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
