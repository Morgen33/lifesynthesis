import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  heading?: "h1" | "h2";
  embedded?: boolean;
};

export function PageHero({
  kicker,
  title,
  lede,
  heading = "h1",
  embedded = false,
}: PageHeroProps) {
  const Heading = heading;
  return (
    <header
      className={`bg-navy px-5 pb-16 lg:px-10 lg:pb-24 ${
        embedded ? "pt-24 lg:pt-32" : "pt-36 lg:pt-44"
      }`}
    >
      <div className="mx-auto max-w-[1100px]">
        {kicker ? (
          <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
            {kicker}
          </p>
        ) : null}
        <Heading className="mt-4 font-serif text-5xl leading-[0.95] text-white sm:text-7xl">
          {title}
        </Heading>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ice/75">{lede}</p>
      </div>
    </header>
  );
}

export function PageSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10">
      {children}
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-20 text-lg leading-relaxed text-ice/80 lg:px-10">
      {children}
    </div>
  );
}

export function PageCta({ href = "/contact", label = "Start a conversation" }: { href?: string; label?: string }) {
  return (
    <div className="px-5 pb-28 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Button href={href}>{label}</Button>
      </div>
    </div>
  );
}

export const defaultOg: Pick<Metadata, "openGraph"> = {
  openGraph: { images: ["/images/hero-community.png"] },
};
