import { Hero } from "@/components/home/Hero";
import { SystemsDiagram } from "@/components/home/SystemsDiagram";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Philosophy } from "@/components/home/Philosophy";
import { KnowYourFarmer } from "@/components/home/KnowYourFarmer";
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
      <Philosophy />
      <KnowYourFarmer />
      <DemoSites />
      <Manifesto />
      <FinalCta />
    </>
  );
}
