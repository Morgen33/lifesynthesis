import Image from "next/image";
import { Suspense } from "react";
import { AIDashboard } from "@/components/home/AIDashboard";
import { CampusSection } from "@/components/home/CampusSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { PartnershipsSection } from "@/components/home/PartnershipsSection";
import { SolaRoofSection } from "@/components/home/SolaRoofSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { ContactExperience } from "@/components/contact/ContactExperience";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

type PageViewProps = {
  embedded?: boolean;
};

function heroProps(embedded: boolean) {
  return {
    heading: embedded ? ("h2" as const) : ("h1" as const),
    embedded,
  };
}

export function VisionContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="Vision"
        title="What should human infrastructure become?"
        lede="Not a slightly greener version of what already exists. A new operating system for human life — where shelter, food, water, energy, technology and ecology work as one."
        {...heroProps(embedded)}
      />
      <Prose>
        <p>
          Humanity should stop building environments that simply consume
          resources and begin creating environments that produce food, conserve
          water, regenerate ecosystems, strengthen communities, and help life
          thrive.
        </p>
        <p className="mt-8 font-serif text-3xl text-white">
          The future isn’t built. It’s grown.
        </p>
        <p className="mt-8">
          Technology should not replace nature. Technology should help humanity
          work with nature. Infrastructure should not simply reduce harm. It
          should actively support life.
        </p>
      </Prose>
      <PageCta href="/contact" label="Build with us" />
    </>
  );
}

export function LifePodContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="LifePod"
        title="A little space to make the world a better place."
        lede="A compact controlled ecological environment integrating food production, water management and climate regulation in a modular structure."
        {...heroProps(embedded)}
      />
      <div className="px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px] overflow-hidden">
          <Image
            src="/images/lifepod.png"
            alt="LifePod crystalline greenhouse habitat."
            width={1600}
            height={1200}
            className="h-auto w-full"
            priority={!embedded}
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

export function LifeHouseContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="LifeHouse"
        title="What if your home helped sustain your life?"
        lede="A home should do more than protect life. It should help life thrive."
        {...heroProps(embedded)}
      />
      <div className="px-5 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Image
            src="/images/lifehouse.png"
            alt="LifeHouse regenerative residence."
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority={!embedded}
          />
        </div>
      </div>
      <Prose>
        <p>
          Food production, water cycling, natural climate systems, biomass,
          renewable energy, modular architecture, living plant canopy, dynamic
          shading, thermal storage and ecological integration — designed as a
          single habitat, not a stack of add-ons.
        </p>
      </Prose>
      <PageCta href="/contact?intent=lifehouse" label="Explore LifeHouse" />
    </>
  );
}

export function LifeFarmsContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="LifeFarms"
        title="Food production as infrastructure."
        lede="Distributed controlled-environment agriculture that can sit beside homes, campuses and communities — shortening the distance between soil, water and table."
        {...heroProps(embedded)}
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

export function TechnologyContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="Technology"
        title="Engineering inspired by life."
        lede="Closed ecological systems, dynamic envelopes and geometry-driven structure — instruments for habitats that produce more than they consume."
        {...heroProps(embedded)}
      />
      <TechnologySection />
      <div id="solaroof">
        <SolaRoofSection />
      </div>
    </>
  );
}

export function CommunitiesContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="Communities"
        title="Homes as participants, not islands."
        lede="Shared food, water, energy, knowledge and resilience — connected through gardens, wetlands, pathways and ecological corridors."
        {...heroProps(embedded)}
      />
      <CommunitySection />
      <CampusSection />
    </>
  );
}

export function PartnershipsContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="Partnerships"
        title="Build the next system with us."
        lede="From a single LifePod to a regenerative campus — partnership is how this infrastructure actually gets constructed."
        {...heroProps(embedded)}
      />
      <PartnershipsSection />
    </>
  );
}

export function ResearchContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="Research"
        title="When AI learns to listen to nature."
        lede="LifeSynthesis treats sensing, modeling and living systems as one research program — predictive, not merely reactive."
        {...heroProps(embedded)}
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

export function AboutContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="About"
        title="The synthesis of life and infrastructure."
        lede="LifeSynthesis is a regenerative infrastructure and human-habitat company. It is not a wellness brand, a nonprofit aesthetic, or a slightly greener housing product."
        {...heroProps(embedded)}
      />
      <Prose>
        <p>
          The work integrates regenerative architecture, food production, water
          cycling, closed ecological life-support, climate-resilient structures,
          controlled-environment agriculture, aquaponics, renewable energy,
          circular resource systems, ecological restoration, community
          infrastructure, AI environmental monitoring, modular construction,
          SolaRoof / Liquid Solar technologies, LifePods, LifeHouses, LifeFarms,
          regenerative communities and large-scale campuses.
        </p>
        <p className="mt-8 font-serif text-3xl text-white">
          Living systems where architecture, technology and nature work together
          to support human life.
        </p>
      </Prose>
      <PageCta />
    </>
  );
}

export function NewsContent({ embedded = false }: PageViewProps) {
  return (
    <>
      <PageHero
        kicker="News"
        title="Field notes."
        lede="Demonstration sites, research collaborations and development partnerships will be published here as they become real."
        {...heroProps(embedded)}
      />
      <Prose>
        <p>No public dispatches yet.</p>
      </Prose>
    </>
  );
}

function ContactFallback() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-navy text-[11px] tracking-[0.28em] uppercase text-silver">
      Preparing conversation…
    </section>
  );
}

export function ContactContent({ embedded = false }: PageViewProps) {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactExperience priority={!embedded} />
    </Suspense>
  );
}
