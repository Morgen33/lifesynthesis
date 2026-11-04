import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EcosystemMedia } from "@/components/ecosystem/EcosystemMedia";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ecosystem, getEcosystemItem } from "@/content/ecosystem";

export const dynamicParams = false;

export function generateStaticParams() {
  return ecosystem.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ecosystem/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getEcosystemItem(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

function paragraphs(text: string) {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default async function EcosystemItemPage({
  params,
}: PageProps<"/ecosystem/[slug]">) {
  const { slug } = await params;
  const item = getEcosystemItem(slug);
  if (!item) notFound();

  const index = ecosystem.findIndex((e) => e.slug === item.slug);
  const prev = ecosystem[(index - 1 + ecosystem.length) % ecosystem.length];
  const next = ecosystem[(index + 1) % ecosystem.length];
  const bodyParagraphs = paragraphs(item.body);
  const lead = bodyParagraphs[0] ?? "";
  const maybeClosing =
    bodyParagraphs.length > 1 ? bodyParagraphs[bodyParagraphs.length - 1] : null;
  const closing =
    maybeClosing && maybeClosing.length <= 180 ? maybeClosing : null;
  const middle = closing
    ? bodyParagraphs.slice(1, -1)
    : bodyParagraphs.slice(1);

  return (
    <>
      {/* Immersive product stage */}
      <section className="relative min-h-[88svh] overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <EcosystemMedia
            image={item.image}
            imageAlt={item.imageAlt}
            video={item.video}
            priority
            sizes="100vw"
            className={item.video ? "object-cover" : "object-contain object-center"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-36 lg:px-10 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
              Ecosystem / {String(index + 1).padStart(2, "0")} {item.title}
            </p>
            <h1 className="editorial-shadow mt-5 max-w-4xl font-serif text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              {item.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ice/75 sm:text-lg">
              {item.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="max-w-3xl font-serif text-2xl leading-snug text-ice sm:text-3xl lg:text-[2.15rem] lg:leading-[1.35]">
              {lead}
            </p>
          </Reveal>

          {middle.length > 0 ? (
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-2 lg:gap-16">
              {middle.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 48)} delay={i * 0.08}>
                  <p className="text-base leading-[1.8] text-ice/70 sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : null}

          {closing && closing !== lead ? (
            <Reveal delay={0.12}>
              <blockquote className="mt-20 border-l-2 border-cyan/60 pl-6 sm:pl-8">
                <p className="max-w-3xl font-serif text-2xl leading-snug text-cyan sm:text-3xl lg:text-4xl">
                  {closing}
                </p>
              </blockquote>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-white/10 bg-ocean/40 px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
              Capabilities
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              What {item.title} brings together
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {item.features.map((feature, i) => (
              <li
                key={feature}
                className="bg-navy px-6 py-8 sm:px-8 sm:py-10"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-crystal/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif text-xl text-ice sm:text-2xl">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Infographic / deeper look */}
      {item.infographic ? (
        <section className="bg-navy px-5 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
                Deeper look
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
                How the system comes together
              </h2>
            </Reveal>
            <a
              href={item.infographic.src}
              target="_blank"
              rel="noopener"
              className={`group mt-12 block cursor-zoom-in ${
                item.infographic.height > item.infographic.width
                  ? "mx-auto max-w-[680px]"
                  : "w-full"
              }`}
            >
              <span className="block overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] transition group-hover:border-cyan/50">
                <Image
                  src={item.infographic.src}
                  alt={item.infographic.alt}
                  width={item.infographic.width}
                  height={item.infographic.height}
                  sizes="(min-width: 1100px) 1100px, 100vw"
                  className="h-auto w-full"
                />
              </span>
              <span className="mt-4 block text-right text-[10px] tracking-[0.22em] uppercase text-ice/55 transition group-hover:text-cyan">
                View full size ⤢
              </span>
            </a>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="relative overflow-hidden px-5 py-28 lg:px-10 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(90,180,222,0.22),transparent_55%),linear-gradient(160deg,#0b2744_0%,#061428_60%,#040d1a_100%)]" />
        <div className="absolute inset-0 grid-overlay opacity-15 mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-ice/60">
              Build with {item.title}
            </p>
            <h2 className="editorial-shadow mt-5 max-w-3xl font-serif text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Ready to bring this system to life?
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={item.contactHref}>
                Talk to us about {item.title}
              </Button>
              <Button href="/ecosystem" variant="ghost">
                Back to ecosystem
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Ecosystem"
        className="border-t border-white/10 px-5 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1100px] justify-between gap-6 py-12 text-sm">
          <Link href={`/ecosystem/${prev.slug}`} className="group max-w-[45%]">
            <span className="block text-[11px] tracking-[0.22em] uppercase text-silver">
              ← Previous
            </span>
            <span className="mt-2 block font-serif text-2xl text-ice transition group-hover:text-cyan sm:text-3xl">
              {prev.title}
            </span>
            <span className="mt-2 hidden text-sm text-ice/50 sm:block">
              {prev.summary}
            </span>
          </Link>
          <Link
            href={`/ecosystem/${next.slug}`}
            className="group max-w-[45%] text-right"
          >
            <span className="block text-[11px] tracking-[0.22em] uppercase text-silver">
              Next →
            </span>
            <span className="mt-2 block font-serif text-2xl text-ice transition group-hover:text-cyan sm:text-3xl">
              {next.title}
            </span>
            <span className="mt-2 hidden text-sm text-ice/50 sm:block">
              {next.summary}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
