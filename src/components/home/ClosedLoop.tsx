import { Reveal } from "@/components/motion/Reveal";
import { LoopVideo } from "@/components/home/LoopVideo";

export function ClosedLoop() {
  return (
    <section className="bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal>
          <LoopVideo
            src="/videos/closed-loop.mp4"
            poster="/videos/closed-loop-poster.jpg"
            label="Closed loop: nothing wasted. Rain, water, plants, food, people, organics, nutrients."
            frameClassName="border border-navy/10 shadow-[0_30px_80px_rgba(11,39,68,0.16)]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            Closed loop
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
            Nothing wasted.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/75">
            Rain becomes water. Water nourishes plants. Plants become food. Food
            sustains people. People return organics. Organics become nutrients —
            and the cycle begins again.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/75">
            Every LifeSynthesis system is designed as a living loop: resources
            circulate, abundance renews, and waste becomes the next beginning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
