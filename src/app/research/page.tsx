import type { Metadata } from "next";
import { ResearchContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Closed ecological life-support, environmental sensing, and measurement frameworks for regenerative infrastructure.",
};

export default function ResearchPage() {
  return <ResearchContent />;
}
