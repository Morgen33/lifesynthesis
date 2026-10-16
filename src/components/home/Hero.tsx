"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SystemVideo } from "@/components/home/SystemVideo";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(90,180,222,0.28),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(11,39,68,0.95),transparent_60%),linear-gradient(160deg,#0b2744_0%,#061428_55%,#040d1a_100%)]" />
      <Image
        src="/brand/logo-mark.png"
        alt=""
        aria-hidden
        width={640}
        height={640}
        priority
        className="pointer-events-none absolute -left-[12vw] top-1/2 w-[min(95vw,900px)] -translate-y-1/2 opacity-[0.07]"
      />
      <div className="absolute inset-0 grid-overlay opacity-20 mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy" />

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
            <SystemVideo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
