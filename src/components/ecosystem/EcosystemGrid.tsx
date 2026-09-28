import Image from "next/image";
import Link from "next/link";
import { ecosystem } from "@/content/ecosystem";

export function EcosystemGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ecosystem.map((item, i) => (
        <li key={item.slug}>
          <Link
            href={`/ecosystem/${item.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-cyan/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] tracking-[0.22em] uppercase text-crystal">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-ice/70">{item.summary}</p>
              <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-cyan">
                Learn more →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
