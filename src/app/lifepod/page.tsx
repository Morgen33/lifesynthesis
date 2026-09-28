import type { Metadata } from "next";
import { LifePodContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "LifePod",
  description:
    "The LifePod is a compact regenerative food-production system that turns households from consumers into producers.",
};

export default function LifePodPage() {
  return <LifePodContent />;
}
