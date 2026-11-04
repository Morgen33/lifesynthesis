import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { MissionVision } from "@/components/home/MissionVision";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Veterans } from "@/components/home/Veterans";
import { ClosingVideos } from "@/components/home/ClosingVideos";
import { ContactExperience } from "@/components/contact/ContactExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Ecosystem />
      <Veterans />
      <ClosingVideos />
      <Suspense fallback={null}>
        <ContactExperience embedded priority={false} />
      </Suspense>
    </>
  );
}
