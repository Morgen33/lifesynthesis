import type { Metadata } from "next";
import { PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "LifeSynthesis privacy notice.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy"
        lede="This site collects only what you choose to send through contact forms. Analytics, if added later, will be disclosed here."
      />
      <Prose>
        <p>
          Do not include secrets in messages. We do not sell personal
          information.
        </p>
      </Prose>
    </>
  );
}
