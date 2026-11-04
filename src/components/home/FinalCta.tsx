import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(90,180,222,0.28),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(11,39,68,0.95),transparent_60%),linear-gradient(160deg,#0b2744_0%,#061428_55%,#040d1a_100%)]" />
      <Image
        src="/brand/logo-mark.png"
        alt=""
        aria-hidden
        width={640}
        height={640}
        className="pointer-events-none absolute -left-[12vw] top-1/2 w-[min(95vw,900px)] -translate-y-1/2 opacity-[0.07]"
      />
      <div className="absolute inset-0 grid-overlay opacity-20 mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy" />

      <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1400px] flex-col items-start justify-center px-5 py-24 lg:px-10">
        <p className="mb-6 text-[11px] tracking-[0.32em] uppercase text-ice/70">
          Regenerative infrastructure for a resilient civilization.
        </p>
        <h2 className="editorial-shadow max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Say YES to Life
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ice/80 sm:text-lg">
          LifeSynthesis designs homes, farms and communities that grow food,
          recycle water and generate energy. Places that give back more than
          they take.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/ecosystem">Explore the ecosystem</Button>
          <Button href="#mission" variant="ghost">
            Our mission
          </Button>
        </div>
      </div>
    </section>
  );
}
