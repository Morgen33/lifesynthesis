import { Reveal } from "@/components/motion/Reveal";
import { LoopVideo } from "@/components/home/LoopVideo";

const statements = [
  {
    label: "Our mission",
    body: "Building for Life. Building infrastructure for Humanity. Healthy Food Production. People gain access to livingry that restores balance, promotes health, regenerates our planet, and creates a more abundant future for generations.",
  },
  {
    label: "Our vision",
    body: "The future of humanity and the planet depends on how we work with the essential systems that sustain Life: the environments we live in, the food we grow, the resources we produce, the technologies we innovate that work with nature, and the sustainable communities we build together.",
  },
] as const;

function WaterFlourish({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex max-w-sm items-center gap-3 text-ocean/45 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ocean/35 to-ocean/20" />
      <svg
        viewBox="0 0 72 18"
        className="h-4 w-16 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 9c6-7 12-7 18 0s12 7 18 0 12-7 18 0 12 7 14 2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M8 13c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 10 1"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <circle cx="36" cy="9" r="2.25" fill="currentColor" fillOpacity="0.7" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-ocean/35 to-ocean/20" />
    </div>
  );
}

export function MissionVision() {
  return (
    <section id="mission" className="scroll-mt-24 bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            Who we are
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Impact focused company redesigning the systems that advance Life with
            healthy homes, regenerative agricultural Pods, sustainable
            communities merging patented technologies, sacred geometry and the
            science of living systems.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {statements.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-t border-navy/15 pt-8">
                <p className="text-[11px] tracking-[0.28em] uppercase text-ocean">
                  {s.label}
                </p>
                <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 border-t border-navy/15 pt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div className="flex flex-col justify-center gap-10 py-4 lg:gap-14 lg:py-8">
              <WaterFlourish />
              <div>
                <p className="font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
                  Building with nature
                </p>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/70">
                  Food, water, shelter, energy, and ecology — the essential
                  systems that sustain humanity, designed to work as one.
                </p>
              </div>
              <WaterFlourish />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LoopVideo
              src="/videos/five-systems.mp4"
              poster="/videos/five-systems-poster.jpg"
              label="Food, water, shelter, energy, and ecology working as one regenerative system."
              frameClassName="border border-navy/10 shadow-[0_30px_80px_rgba(11,39,68,0.16)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
