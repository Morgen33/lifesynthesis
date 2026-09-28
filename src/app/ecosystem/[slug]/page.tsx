import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
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

export default async function EcosystemItemPage({
  params,
}: PageProps<"/ecosystem/[slug]">) {
  const { slug } = await params;
  const item = getEcosystemItem(slug);
  if (!item) notFound();

  const index = ecosystem.findIndex((e) => e.slug === item.slug);
  const prev = ecosystem[(index - 1 + ecosystem.length) % ecosystem.length];
  const next = ecosystem[(index + 1) % ecosystem.length];

  return (
    <>
      <PageHero
        kicker={`Ecosystem / ${item.title}`}
        title={item.headline}
        lede={item.body}
      />

      <div className="px-5 lg:px-10">
        <div className="relative mx-auto aspect-[16/9] max-w-[1100px] overflow-hidden rounded-sm">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 py-20 lg:px-10">
        {item.features.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {item.features.map((feature) => (
              <li
                key={feature}
                className="border-t border-cyan/30 pt-4 text-[12px] tracking-[0.18em] uppercase text-ice"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Button href={item.contactHref}>Talk to us about {item.title}</Button>
          <Button href="/ecosystem" variant="ghost">
            Back to ecosystem
          </Button>
        </div>
      </div>

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
