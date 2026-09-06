import type { Metadata } from "next";
import { AIDashboard } from "@/components/home/AIDashboard";
import { MetricsSection } from "@/components/home/MetricsSection";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Closed ecological life-support, environmental sensing, and measurement frameworks for regenerative infrastructure.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        kicker="Research"
        title="When AI learns to listen to nature."
        lede="LifeSynthesis treats sensing, modeling and living systems as one research program — predictive, not merely reactive."
      />
      <Prose>
        <p>
          Collaboration is open to universities, laboratories and independent
          researchers working on CELSS, water recovery, controlled environments
          and ecological restoration. Measurement categories are designed
          before claims.
        </p>
      </Prose>
      <AIDashboard />
      <MetricsSection />
      <PageCta href="/contact?intent=research" label="Research collaboration" />
    </>
  );
}
