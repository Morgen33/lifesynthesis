import Image from "next/image";
import { Button } from "@/components/ui/Button";

const flow = [
  "Sunlight",
  "Liquid Solar layer",
  "Controlled radiation",
  "Plant canopy",
  "Transpiration",
  "Condensation",
  "Recovered water",
  "Thermal storage",
] as const;

export function SolaRoofSection() {
  return (
    <section className="bg-navy px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="max-w-4xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl">
          Turn the building envelope into a climate system.
        </h2>

        <div className="mt-14 overflow-hidden rounded-sm">
          <Image
            src="/images/solaroof.png"
            alt="Cutaway of a transparent building envelope with liquid thermal layers, plant canopy and condensation recovery."
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
        </div>

        <ol className="mt-12 flex snap-x gap-3 overflow-x-auto pb-4 md:flex-wrap md:overflow-visible">
          {flow.map((step, i) => (
            <li
              key={step}
              className="flex shrink-0 snap-start items-center gap-3"
            >
              <span className="rounded-full border border-cyan/35 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ice">
                {step}
              </span>
              {i < flow.length - 1 ? (
                <span className="text-cyan/50" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button href="/technology#solaroof">Explore the science</Button>
        </div>
      </div>
    </section>
  );
}
