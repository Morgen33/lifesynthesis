import type { Metadata } from "next";
import { TechnologyContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "CELSS, Liquid Solar, BubbleTech, CCEE, aquaponics, water recovery, hypar architecture and modular construction.",
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
