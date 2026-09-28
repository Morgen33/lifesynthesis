import type { Metadata } from "next";
import { LifeHouseContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "LifeHouse",
  description:
    "LifeHouse expands architecture beyond shelter into an integrated ecological life-support system.",
};

export default function LifeHousePage() {
  return <LifeHouseContent />;
}
