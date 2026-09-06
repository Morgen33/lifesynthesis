import type { Metadata } from "next";
import { PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "LifeSynthesis website terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms"
        lede="This website is an introduction to the LifeSynthesis vision. It is not an offer to sell real estate, securities, or guaranteed agricultural yields."
      />
      <Prose>
        <p>
          Renderings and interface metrics are conceptual. Performance figures
          are illustrative unless separately contracted.
        </p>
      </Prose>
    </>
  );
}
