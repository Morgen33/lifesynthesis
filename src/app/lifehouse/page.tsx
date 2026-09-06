import type { Metadata } from "next";
import Image from "next/image";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "LifeHouse",
  description:
    "LifeHouse expands architecture beyond shelter into an integrated ecological life-support system.",
};

export default function LifeHousePage() {
  return (
    <>
      <PageHero
        kicker="LifeHouse"
        title="What if your home helped sustain your life?"
        lede="A home should do more than protect life. It should help life thrive."
      />
      <div className="px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Image
            src="/images/lifehouse.png"
            alt="LifeHouse regenerative residence."
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
      <Prose>
        <p>
          Food production, water cycling, natural climate systems, biomass,
          renewable energy, modular architecture, living plant canopy, dynamic
          shading, thermal storage and ecological integration — designed as a
          single habitat, not a stack of add-ons.
        </p>
      </Prose>
      <PageCta href="/contact?intent=lifehouse" label="Explore LifeHouse" />
    </>
  );
}
