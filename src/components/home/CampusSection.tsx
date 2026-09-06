import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const campus = [
  "employee housing",
  "LifeFarms",
  "closed-loop water systems",
  "regenerative landscapes",
  "biodiversity monitoring",
  "renewable energy",
  "AI environmental operations",
  "ecological restoration",
  "research environments",
] as const;

export function CampusSection() {
  return (
    <section id="campuses" className="bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            Regenerative AI campus
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Artificial intelligence.
            <br />
            Natural intelligence.
          </h2>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-sm">
          <Image
            src="/images/campus.png"
            alt="Large regenerative technology campus integrated with forests, greenhouses, wetlands and water systems."
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
        </div>

        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-navy/70">
          LifeSynthesis envisions large-scale regenerative campuses where advanced
          technology and living systems operate together.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {campus.map((item) => (
            <li key={item} className="border-l border-navy/20 pl-4 text-sm uppercase tracking-[0.08em]">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-3xl font-serif text-3xl sm:text-5xl">
          The infrastructure supporting the world’s most advanced technologies
          should be equally advanced.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/communities#campuses" variant="light">
            Explore regenerative campuses
          </Button>
          <Button href="/partnerships" variant="ghost" className="!text-navy !border-navy/25 hover:!bg-navy/5">
            Become a development partner
          </Button>
        </div>
      </div>
    </section>
  );
}
