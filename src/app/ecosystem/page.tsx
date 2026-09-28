import type { Metadata } from "next";
import { EcosystemGrid } from "@/components/ecosystem/EcosystemGrid";
import { PageCta, PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "LifePod, LifeHouse, Life Palace, LifeFarms, LifeCommunities and Regenerative Campuses: the LifeSynthesis ecosystem.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        kicker="Ecosystem"
        title="From a single pod to a whole campus."
        lede="Every LifeSynthesis system grows food, cycles water and supports life. Pick the scale that fits what you want to build."
      />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 lg:px-10">
        <EcosystemGrid />
      </div>
      <PageCta />
    </>
  );
}
