import Link from "next/link";
import { EcosystemMedia } from "@/components/ecosystem/EcosystemMedia";
import { ecosystem, ecosystemPagesLive } from "@/content/ecosystem";

const cardClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]";

export function EcosystemGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {ecosystem.map((item, i) => {
        const content = (
          <>
            <div className="relative aspect-[16/10] overflow-hidden">
              <EcosystemMedia
                image={item.image}
                imageAlt={item.imageAlt}
                video={item.video}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={
                  ecosystemPagesLive
                    ? "transition-transform duration-700 group-hover:scale-105"
                    : undefined
                }
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] tracking-[0.22em] uppercase text-crystal">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-ice/70">{item.summary}</p>
              {ecosystemPagesLive && (
                <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-cyan">
                  Learn more →
                </span>
              )}
            </div>
          </>
        );

        return (
          <li key={item.slug}>
            {ecosystemPagesLive ? (
              <Link
                href={`/ecosystem/${item.slug}`}
                className={`${cardClass} transition-colors hover:border-cyan/50`}
              >
                {content}
              </Link>
            ) : (
              <div className={cardClass}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
