import type { Metadata } from "next";
import { PartnershipsSection } from "@/components/home/PartnershipsSection";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Architects, engineers, developers, municipalities, universities and technology partners building the next system with LifeSynthesis.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        kicker="Partnerships"
        title="Build the next system with us."
        lede="From a single LifePod to a regenerative campus — partnership is how this infrastructure actually gets constructed."
      />
      <PartnershipsSection />
    </>
  );
}
