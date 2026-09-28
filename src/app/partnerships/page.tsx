import type { Metadata } from "next";
import { PartnershipsContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Architects, engineers, developers, municipalities, universities and technology partners building the next system with LifeSynthesis.",
};

export default function PartnershipsPage() {
  return <PartnershipsContent />;
}
