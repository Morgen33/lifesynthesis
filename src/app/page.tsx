import { Hero } from "@/components/home/Hero";
import { SystemsDiagram } from "@/components/home/SystemsDiagram";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { LifePodSection } from "@/components/home/LifePodSection";
import { LifeHouseSection } from "@/components/home/LifeHouseSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { SolaRoofSection } from "@/components/home/SolaRoofSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { CampusSection } from "@/components/home/CampusSection";
import { AIDashboard } from "@/components/home/AIDashboard";
import { MetricsSection } from "@/components/home/MetricsSection";
import { Philosophy } from "@/components/home/Philosophy";
import { KnowYourFarmer } from "@/components/home/KnowYourFarmer";
import { PartnershipsSection } from "@/components/home/PartnershipsSection";
import { DemoSites } from "@/components/home/DemoSites";
import { Manifesto } from "@/components/home/Manifesto";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <SystemsDiagram />
      <Problem />
      <Ecosystem />
      <LifePodSection />
      <LifeHouseSection />
      <TechnologySection />
      <SolaRoofSection />
      <CommunitySection />
      <CampusSection />
      <AIDashboard />
      <MetricsSection />
      <Philosophy />
      <KnowYourFarmer />
      <PartnershipsSection />
      <DemoSites />
      <Manifesto />
      <FinalCta />
    </>
  );
}
