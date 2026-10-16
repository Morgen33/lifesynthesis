import { Hero } from "@/components/home/Hero";
import { MissionVision } from "@/components/home/MissionVision";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Veterans } from "@/components/home/Veterans";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Ecosystem />
      <Veterans />
      <FinalCta />
    </>
  );
}
