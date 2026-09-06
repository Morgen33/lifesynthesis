import type { Metadata } from "next";
import { PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Intellectual Property",
  description: "LifeSynthesis intellectual property notice.",
};

export default function IpPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Intellectual property"
        lede="LifeSynthesis, LifePod, LifeHouse, LifeFarms, and associated system names are used to identify the company’s architecture, technology and habitat programs."
      />
      <Prose>
        <p>
          Drawings, diagrams, software interfaces and photographic assets on
          this site are protected. Contact us for licensing or collaboration
          before reuse.
        </p>
      </Prose>
    </>
  );
}
