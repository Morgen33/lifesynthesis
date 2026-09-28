import type { Metadata } from "next";
import { VisionContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "What should human infrastructure become? LifeSynthesis designs living systems where architecture, technology and nature support life.",
};

export default function VisionPage() {
  return <VisionContent />;
}
