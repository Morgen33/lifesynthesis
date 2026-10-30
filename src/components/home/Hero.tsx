import Image from "next/image";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/closing-nature.jpg"
        alt="Sunrise over misty mountains, a calm lake and pine forest."
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/50" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 py-32 text-center">
        <Logo stacked priority />
        <h1 className="mt-12 font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          What if the building itself
          <br />
          became part of the solution?
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ice/80">
          A future where shelter, food, water, energy, technology and ecology
          work together is possible.
        </p>
        <p className="editorial-shadow mt-8 font-serif text-4xl text-cyan sm:text-5xl lg:text-6xl">
          Say YES to Life
        </p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Build with us</Button>
          <Button href="/contact?intent=partner" variant="ghost">
            Partner with LifeSynthesis
          </Button>
        </div>
      </div>
    </section>
  );
}
