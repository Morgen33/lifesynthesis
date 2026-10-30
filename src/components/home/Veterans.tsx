import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function Veterans() {
  return (
    <section id="veterans" className="bg-ice px-5 py-28 text-navy lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(11,39,68,0.18)]">
            <Image
              src="/images/veterans.jpg"
              alt="Support our Veterans. The LifeSynthesis flower over an American flag and a saluting soldier. Thank you for your service."
              width={687}
              height={1024}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
              Thank you for your service
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[0.95] sm:text-6xl">
              LifeSynthesis supports Veterans.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-navy/75">
            <p>
              Our Veterans gave something to this country that can never be
              repaid. Our responsibility to our heroes does not end when they
              come home.
            </p>
            <p className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Service may end. Our commitment can not.
            </p>
          </div>

          <div className="mt-10">
            <Button href="/veterans" variant="light">
              Our commitment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
