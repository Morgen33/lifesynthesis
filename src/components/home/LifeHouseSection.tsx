import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const ecosystem = [
  "food production",
  "water cycling",
  "natural climate systems",
  "biomass",
  "renewable energy",
  "modular architecture",
  "living plant canopy",
  "dynamic shading",
  "thermal storage",
  "ecological integration",
] as const;

export function LifeHouseSection() {
  return (
    <section className="bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            LifeHouse
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            What if your home helped sustain your life?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-navy/70">
            LifeHouse expands architecture beyond shelter and transforms the home
            into an integrated ecological life-support system.
          </p>
        </Reveal>

        <div className="relative mt-14 overflow-hidden rounded-sm">
          <Image
            src="/images/lifehouse.png"
            alt="Premium LifeHouse with a living plant canopy, glass envelope and mountain landscape."
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ecosystem.map((item) => (
            <li
              key={item}
              className="border-t border-navy/15 pt-4 text-sm tracking-[0.08em] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        <Reveal className="mt-20">
          <p className="font-serif text-4xl sm:text-6xl">
            A home should do more than protect life.
          </p>
          <p className="mt-4 font-serif text-4xl text-ocean sm:text-6xl">
            It should help life thrive.
          </p>
          <div className="mt-10">
            <Button href="/lifehouse" variant="light">
              Explore LifeHouse
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
