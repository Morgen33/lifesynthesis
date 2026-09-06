import type { Metadata } from "next";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "LifeSynthesis synthesizes life, architecture, technology, biology, nature and infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="The synthesis of life and infrastructure."
        lede="LifeSynthesis is a regenerative infrastructure and human-habitat company. It is not a wellness brand, a nonprofit aesthetic, or a slightly greener housing product."
      />
      <Prose>
        <p>
          The work integrates regenerative architecture, food production, water
          cycling, closed ecological life-support, climate-resilient structures,
          controlled-environment agriculture, aquaponics, renewable energy,
          circular resource systems, ecological restoration, community
          infrastructure, AI environmental monitoring, modular construction,
          SolaRoof / Liquid Solar technologies, LifePods, LifeHouses, LifeFarms,
          regenerative communities and large-scale campuses.
        </p>
        <p className="mt-8 font-serif text-3xl text-white">
          Living systems where architecture, technology and nature work together
          to support human life.
        </p>
      </Prose>
      <PageCta />
    </>
  );
}
