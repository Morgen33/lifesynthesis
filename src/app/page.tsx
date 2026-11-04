import { Hero } from "@/components/home/Hero";
import { MissionVision } from "@/components/home/MissionVision";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Veterans } from "@/components/home/Veterans";
import { ClosingVideos } from "@/components/home/ClosingVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Ecosystem />
      <Veterans />
      <ClosingVideos />
    </>
  );
}
