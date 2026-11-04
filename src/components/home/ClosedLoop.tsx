import { Reveal } from "@/components/motion/Reveal";
import { LoopVideo } from "@/components/home/LoopVideo";

export function ClosedLoop() {
  return (
    <section className="bg-navy px-5 py-28 text-ice lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal>
          <LoopVideo
            src="/videos/closed-loop.mp4"
            poster="/videos/closed-loop-poster.jpg"
            label="Closed loop: nothing wasted. Rain, water, plants, food, people, organics, nutrients."
            frameClassName="border border-white/10"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
            Closed loop
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            Nothing Wasted.
            <br />
            Everything Regenerated.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ice/75">
            At the heart of a regenerative living system is one fundamental
            principle: Nature wastes nothing. Everything has a purpose, and every
            output becomes an opportunity to create new Life.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ice/75">
            The Closed Ecological Life Support System is designed around the
            interconnected cycles of nature, where rain, water, plants, food,
            people, organic matter, and nutrients work together in a continuous
            cycle of renewal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
