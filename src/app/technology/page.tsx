import type { Metadata } from "next";
import { TechnologySection } from "@/components/home/TechnologySection";
import { SolaRoofSection } from "@/components/home/SolaRoofSection";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "CELSS, Liquid Solar, BubbleTech, CCEE, aquaponics, water recovery, hypar architecture and modular construction.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        kicker="Technology"
        title="Engineering inspired by life."
        lede="Closed ecological systems, dynamic envelopes and geometry-driven structure — instruments for habitats that produce more than they consume."
      />
      <TechnologySection />
      <div id="solaroof">
        <SolaRoofSection />
      </div>
    </>
  );
}
