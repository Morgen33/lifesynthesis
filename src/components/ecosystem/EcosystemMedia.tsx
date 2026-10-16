"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type EcosystemMediaProps = {
  image: string;
  imageAlt: string;
  video?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function EcosystemMedia({
  image,
  imageAlt,
  video,
  sizes,
  priority = false,
  className = "",
}: EcosystemMediaProps) {
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

  if (!video) {
    return (
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      poster={image}
      muted
      loop
      playsInline
      autoPlay
      preload={priority ? "auto" : "metadata"}
      aria-label={imageAlt}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
