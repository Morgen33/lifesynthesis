import { Button } from "@/components/ui/Button";

const sites = [
  { name: "Pacific Demonstration", status: "Planned", x: 18, y: 42 },
  { name: "Mountain Research", status: "In design", x: 32, y: 38 },
  { name: "Desert Resilience", status: "Future", x: 28, y: 52 },
  { name: "Atlantic Campus", status: "Future", x: 72, y: 40 },
] as const;

export function DemoSites() {
  return (
    <section className="bg-navy px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="max-w-4xl font-serif text-4xl text-white sm:text-6xl">
          Don’t just read about the future.
          <br />
          Walk into it.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ice/70">
          Demonstration locations allow people to experience LifePods, LifeHouses
          and regenerative systems in person.
        </p>

        <div className="relative mt-14 aspect-[16/8] overflow-hidden border border-white/10 bg-ocean/40">
          <div className="absolute inset-0 grid-overlay opacity-40" />
          <svg viewBox="0 0 200 90" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path
              d="M18 48 C 40 20, 70 22, 92 40 S 140 70, 182 42"
              fill="none"
              stroke="#7EE0FF"
              strokeOpacity="0.25"
            />
          </svg>
          {sites.map((site) => (
            <div
              key={site.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${site.x}%`, top: `${site.y}%` }}
            >
              <span className="block h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_#7EE0FF]" />
              <p className="mt-2 hidden whitespace-nowrap text-[10px] tracking-[0.16em] uppercase text-ice sm:block">
                {site.name} · {site.status}
              </p>
            </div>
          ))}
          <p className="absolute bottom-4 left-4 text-[11px] tracking-[0.2em] uppercase text-silver">
            Interactive map placeholder — future locations
          </p>
        </div>

        <ul className="mt-8 space-y-2 sm:hidden">
          {sites.map((s) => (
            <li key={s.name} className="text-sm text-ice/80">
              {s.name} — {s.status}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href="/contact?intent=demonstration">
            Become a demonstration site
          </Button>
        </div>
      </div>
    </section>
  );
}
