import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactExperience } from "@/components/contact/ContactExperience";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with LifeSynthesis.",
};

function ContactFallback() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-navy text-[11px] tracking-[0.28em] uppercase text-silver">
      Preparing conversation…
    </section>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactExperience />
    </Suspense>
  );
}
