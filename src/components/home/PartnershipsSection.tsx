import { Button } from "@/components/ui/Button";

const audience = [
  "architects",
  "engineers",
  "scientists",
  "developers",
  "landowners",
  "municipalities",
  "universities",
  "investors",
  "corporations",
  "regenerative agriculture experts",
  "environmental engineers",
  "construction partners",
  "technology companies",
  "demonstration sites",
] as const;

const paths = [
  "Build a LifePod",
  "Build a LifeHouse",
  "Develop a Community",
  "Create a Demonstration Site",
  "Develop a Regenerative Campus",
  "Technology Partnership",
  "Research Collaboration",
  "Become a Sales / Development Partner",
] as const;

export function PartnershipsSection() {
  return (
    <section className="bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="max-w-4xl font-serif text-4xl sm:text-6xl">
          Build the next system with us.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-navy/70">
          LifeSynthesis welcomes the people who actually construct civilization —
          not as a slogan, as a working network.
        </p>

        <ul className="mt-12 flex flex-wrap gap-2">
          {audience.map((item) => (
            <li
              key={item}
              className="rounded-full border border-navy/15 px-4 py-2 text-[11px] tracking-[0.14em] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2">
          {paths.map((path, i) => (
            <li
              key={path}
              className="flex items-baseline justify-between border-b border-navy/15 pb-4"
            >
              <span className="text-lg">{path}</span>
              <span className="font-mono text-xs text-ocean/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button href="/contact" variant="light">
            Start a conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
