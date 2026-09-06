import type { Metadata } from "next";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "LifeFarms",
  description:
    "Distributed controlled-environment agriculture as civic infrastructure — not a warehouse of produce.",
};

export default function LifeFarmsPage() {
  return (
    <>
      <PageHero
        kicker="LifeFarms"
        title="Food production as infrastructure."
        lede="Distributed controlled-environment agriculture that can sit beside homes, campuses and communities — shortening the distance between soil, water and table."
      />
      <Prose>
        <p>
          LifeFarms extend the same logic as LifePods and LifeHouses to a civic
          scale: aquaponics, hydroponics, vertical agriculture, water recovery
          and environmental intelligence, designed as modular, repeatable
          systems.
        </p>
      </Prose>
      <PageCta href="/contact?intent=lifefarms" />
    </>
  );
}
