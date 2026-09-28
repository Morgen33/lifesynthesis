"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
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
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-community.png"
        alt="A regenerative community of glass habitats, gardens, wetlands and water systems set against mountains."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/45 to-navy" />
      <div className="absolute inset-0 grid-overlay opacity-30 mix-blend-overlay" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1600px] items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-8 lg:px-10 lg:pb-16 lg:pt-24">
        <div className="flex flex-col justify-end lg:pb-8">
          <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-ice/70">
            Regenerative infrastructure for a resilient civilization.
          </p>
          <h1 className="editorial-shadow max-w-5xl font-serif text-[14vw] leading-[0.86] tracking-tight text-white sm:text-[9vw] lg:text-[6.6rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              The future
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              isn’t built.
            </motion.span>
            <motion.span
              className="block text-cyan"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              It’s grown.
            </motion.span>
          </h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-ice/80 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            LifeSynthesis designs homes, farms and communities that grow food,
            recycle water and generate energy. Places that give back more than
            they take.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button href="/ecosystem">Explore the ecosystem</Button>
            <Button href="#mission" variant="ghost">
              Our mission
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[560px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-cyan/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <video
                ref={video}
                className="block aspect-[1080/718] h-auto w-full"
                poster="/videos/lifesynthesis-system-poster.jpg"
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                aria-label="LifeSynthesis: not just survival, regeneration. LifePods, LifeHouses, LifeFarms and CannaPods working as one regenerative life-support system."
              >
                <source src="/videos/lifesynthesis-system.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
