import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const shared = [
  "Shared Food",
  "Shared Water",
  "Shared Energy",
  "Shared Knowledge",
  "Shared Resilience",
] as const;

export function CommunitySection() {
  return (
    <section className="bg-[#040d1a] px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h2 className="max-w-5xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            One home can change a life.
            <br />
            A network can change a community.
          </h2>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-sm">
          <Image
            src="/images/community-aerial.png"
            alt="Aerial view of LifeHouses and LifePods connected by water, gardens, wetlands and pathways."
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
        </div>

        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-ice/75">
          LifeSynthesis envisions communities where homes do not operate as
          isolated machines, but as participants in shared ecological
          infrastructure.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {shared.map((item) => (
            <li
              key={item}
              className="border-t border-cyan/30 pt-4 text-[12px] tracking-[0.18em] uppercase text-ice"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
