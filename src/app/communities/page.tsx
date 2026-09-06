import type { Metadata } from "next";
import { CommunitiesContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "Regenerative neighborhoods and campuses where homes participate in shared ecological infrastructure.",
};

export default function CommunitiesPage() {
  return <CommunitiesContent />;
}
