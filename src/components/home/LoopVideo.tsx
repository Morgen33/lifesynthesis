"use client";

import { useEffect, useRef } from "react";

export function LoopVideo({
  src,
  poster,
  label,
  className = "",
  frameClassName = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  frameClassName?: string;
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
    <div
      className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-navy ${frameClassName}`}
    >
      <video
        ref={ref}
        className={`block h-full w-full object-contain ${className}`}
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
