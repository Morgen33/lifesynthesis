import type { Metadata } from "next";
import Image from "next/image";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "LifePod",
  description:
    "The LifePod is a compact regenerative food-production system that turns households from consumers into producers.",
};

export default function LifePodPage() {
  return (
    <>
      <PageHero
        kicker="LifePod"
        title="A little space to make the world a better place."
        lede="A compact controlled ecological environment integrating food production, water management and climate regulation in a modular structure."
      />
      <div className="px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px] overflow-hidden">
          <Image
            src="/images/lifepod.png"
            alt="LifePod crystalline greenhouse habitat."
            width={1600}
            height={1200}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
      <Prose>
        <p>
          The LifePod is envisioned as personal regenerative infrastructure:
          growing canopy, aquaponics, vertical farming, water recovery, thermal
          storage, BubbleTech envelope, Liquid Solar, and environmental
          controls — in one deployable volume.
        </p>
      </Prose>
      <PageCta href="/contact?intent=lifepod" label="Discover LifePod" />
    </>
  );
}
