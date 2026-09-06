import type { Metadata } from "next";
import { PageCta, PageHero, Prose } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "What should human infrastructure become? LifeSynthesis designs living systems where architecture, technology and nature support life.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        kicker="Vision"
        title="What should human infrastructure become?"
        lede="Not a slightly greener version of what already exists. A new operating system for human life — where shelter, food, water, energy, technology and ecology work as one."
      />
      <Prose>
        <p>
          Humanity should stop building environments that simply consume
          resources and begin creating environments that produce food, conserve
          water, regenerate ecosystems, strengthen communities, and help life
          thrive.
        </p>
        <p className="mt-8 font-serif text-3xl text-white">
          The future isn’t built. It’s grown.
        </p>
        <p className="mt-8">
          Technology should not replace nature. Technology should help humanity
          work with nature. Infrastructure should not simply reduce harm. It
          should actively support life.
        </p>
      </Prose>
      <PageCta href="/contact" label="Build with us" />
    </>
  );
}
