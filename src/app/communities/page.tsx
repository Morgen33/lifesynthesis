import type { Metadata } from "next";
import { CampusSection } from "@/components/home/CampusSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "Regenerative neighborhoods and campuses where homes participate in shared ecological infrastructure.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        kicker="Communities"
        title="Homes as participants, not islands."
        lede="Shared food, water, energy, knowledge and resilience — connected through gardens, wetlands, pathways and ecological corridors."
      />
      <CommunitySection />
      <CampusSection />
    </>
  );
}
