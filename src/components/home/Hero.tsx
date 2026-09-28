"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ClosedLoop } from "@/components/home/ClosedLoop";

export function Hero() {
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
            LifeSynthesis is redesigning the systems that sustain human life —
            bringing housing, food, water, energy, technology and ecology together
            into regenerative infrastructure.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button href="#ecosystem">Explore LifeSynthesis</Button>
            <Button href="/vision" variant="ghost">
              Watch the vision
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[560px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClosedLoop priority />
        </motion.div>
      </div>
    </section>
  );
}
