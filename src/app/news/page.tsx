import type { Metadata } from "next";
import { PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "News",
  description: "Updates from LifeSynthesis.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        kicker="News"
        title="Field notes."
        lede="Demonstration sites, research collaborations and development partnerships will be published here as they become real."
      />
      <Prose>
        <p>No public dispatches yet.</p>
      </Prose>
    </>
  );
}
