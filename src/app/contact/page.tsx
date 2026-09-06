import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with LifeSynthesis.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start a conversation."
        lede="Architects, engineers, landowners, municipalities, researchers and development partners — tell us what you want to build."
      />
      <Suspense fallback={<p className="px-5 pb-28 text-ice/60">Loading form…</p>}>
        <ContactForm />
      </Suspense>
    </>
  );
}
