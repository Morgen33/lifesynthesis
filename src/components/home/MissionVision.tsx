import { Reveal } from "@/components/motion/Reveal";

const statements = [
  {
    label: "Our mission",
    body: "Redesign the systems that sustain human life, bringing housing, food, water, energy, technology and ecology together into regenerative infrastructure.",
  },
  {
    label: "Our vision",
    body: "A world where the places we live produce food, conserve water, restore ecosystems and strengthen communities, with technology helping people work with nature.",
  },
] as const;

export function MissionVision() {
  return (
    <section id="mission" className="scroll-mt-24 bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            Who we are
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] sm:text-6xl">
            A regenerative infrastructure and human-habitat company.
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
      </div>
    </section>
  );
}
