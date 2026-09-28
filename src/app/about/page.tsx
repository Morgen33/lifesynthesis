import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "LifeSynthesis synthesizes life, architecture, technology, biology, nature and infrastructure.",
};

export default function AboutPage() {
  return <AboutContent />;
}
