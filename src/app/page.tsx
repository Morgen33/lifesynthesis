import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { MissionVision } from "@/components/home/MissionVision";
import { Ecosystem } from "@/components/home/Ecosystem";
import { ClosedLoop } from "@/components/home/ClosedLoop";
import { Veterans } from "@/components/home/Veterans";
import { ContactExperience } from "@/components/contact/ContactExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Ecosystem />
      <ClosedLoop />
      <Veterans />
      <Suspense fallback={null}>
        <ContactExperience embedded priority={false} />
      </Suspense>
    </>
  );
}
