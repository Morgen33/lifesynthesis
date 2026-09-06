import type { Metadata } from "next";
import { LifeFarmsContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "LifeFarms",
  description:
    "Distributed controlled-environment agriculture as civic infrastructure — not a warehouse of produce.",
};

export default function LifeFarmsPage() {
  return <LifeFarmsContent />;
}
