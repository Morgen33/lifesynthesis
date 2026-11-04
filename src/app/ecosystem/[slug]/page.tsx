import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EcosystemMedia } from "@/components/ecosystem/EcosystemMedia";
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
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
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

  return (
    <>
      <header className="bg-navy px-5 pb-12 pt-36 lg:px-10 lg:pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
            Ecosystem / {item.title}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {item.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ice/65 sm:text-lg">
            {item.summary}
          </p>
        </div>
      </header>

      <div className="px-5 lg:px-10">
        {item.infographic ? (
          <a
            href={item.infographic.src}
            target="_blank"
            rel="noopener"
            className={`group mx-auto block cursor-zoom-in ${
              item.infographic.height > item.infographic.width
                ? "max-w-[720px]"
                : "max-w-[1100px]"
            }`}
          >
            <span className="block overflow-hidden rounded-2xl border border-white/10 transition group-hover:border-cyan/60">
              <Image
                src={item.infographic.src}
                alt={item.infographic.alt}
                width={item.infographic.width}
                height={item.infographic.height}
                priority
                sizes="(min-width: 1100px) 1100px, 100vw"
                className="h-auto w-full"
              />
            </span>
            <span className="mt-3 block text-right text-[10px] tracking-[0.22em] uppercase text-ice/60 group-hover:text-cyan">
              View full size ⤢
            </span>
          </a>
        ) : (
          <div className="relative mx-auto aspect-[16/9] max-w-[1100px] overflow-hidden rounded-2xl border border-white/10">
            <EcosystemMedia
              image={item.image}
              imageAlt={item.imageAlt}
              video={item.video}
              priority
              sizes="(min-width: 1100px) 1100px, 100vw"
            />
          </div>
        )}
      </div>

      <section className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-20">
          <div className="space-y-7">
            {bodyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 56)}
                className="text-lg leading-[1.75] text-ice/80 sm:text-xl sm:leading-[1.7]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="lg:pt-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
                Capabilities
              </p>
              <ul className="mt-6 space-y-0">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-t border-white/10 py-4 text-sm leading-snug text-ice first:border-t-0 first:pt-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1100px] flex-col gap-3 sm:flex-row">
          <Button href={item.contactHref}>Talk to us about {item.title}</Button>
          <Button href="/ecosystem" variant="ghost">
            Back to ecosystem
          </Button>
        </div>
      </section>

      <nav
        aria-label="Ecosystem"
        className="border-t border-white/10 px-5 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1100px] justify-between gap-6 py-10 text-sm">
          <Link href={`/ecosystem/${prev.slug}`} className="group">
            <span className="block text-[11px] tracking-[0.22em] uppercase text-silver">
              ← Previous
            </span>
            <span className="mt-2 block font-serif text-2xl text-ice group-hover:text-cyan">
              {prev.title}
            </span>
          </Link>
          <Link href={`/ecosystem/${next.slug}`} className="group text-right">
            <span className="block text-[11px] tracking-[0.22em] uppercase text-silver">
              Next →
            </span>
            <span className="mt-2 block font-serif text-2xl text-ice group-hover:text-cyan">
              {next.title}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
