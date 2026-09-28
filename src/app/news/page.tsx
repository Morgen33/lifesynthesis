import type { Metadata } from "next";
import { NewsContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "News",
  description: "Updates from LifeSynthesis.",
};

export default function NewsPage() {
  return <NewsContent />;
}
