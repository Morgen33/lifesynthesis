import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/page-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with LifeSynthesis.",
};

export default function ContactPage() {
  return <ContactContent />;
}
