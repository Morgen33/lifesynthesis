import type { Metadata } from "next";
import Image from "next/image";

const affirmations = [
  "You are seen.",
  "You are valued.",
  "You are needed.",
  "And you are never alone.",
] as const;

const pledges = [
  "Honor their service.",
  "Support their health.",
  "Restore their hope.",
] as const;

export const metadata: Metadata = {
  title: "Veterans",
  description:
    "LifeSynthesis stands with Veterans: healthcare, housing, belonging, and a commitment that does not end when service does.",
};

export default function VeteransPage() {
  return (
    <section className="bg-ice px-5 pb-28 pt-36 text-navy lg:px-10 lg:pb-36 lg:pt-44">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(11,39,68,0.18)]">
            <Image
              src="/images/veterans.jpg"
              alt="Support our Veterans. The LifeSynthesis flower over an American flag and a saluting soldier. Thank you for your service."
              width={687}
              height={1024}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-ocean/70">
            Thank you for your service
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[0.95] sm:text-6xl">
            Our commitment can not.
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-navy/75">
            <p>
              Veterans deserve access to the very best healthcare including
              physical healthcare, mental healthcare, rehabilitation, housing and
              the support they need to rebuild their lives.
            </p>
            <p>
              We must remember that some wounds cannot be seen. The battles may
              continue long after the uniform comes off.
            </p>
            <p>
              No Veteran should ever feel forgotten, abandoned, or alone. Support
              means creating communities where Veterans know they still have
              purpose, belonging, and a future.
            </p>
            <p>
              Because these aren&rsquo;t simply statistics. These are our
              brothers. Our sisters. Our parents. Our children. Our neighbors.
              Our friends.
            </p>
            <p className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              They stood for us when we needed them. Now we must stand for them.
            </p>
            <p>Let us build a culture where every Veteran knows:</p>
          </div>

          <ul className="mt-8 space-y-2 border-l-2 border-ocean/40 pl-6">
            {affirmations.map((line) => (
              <li key={line} className="font-serif text-3xl text-ocean sm:text-4xl">
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-lg leading-relaxed text-navy/75">
            Our heroes protected our future. Now it is our turn to protect
            theirs.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {pledges.map((line) => (
              <li
                key={line}
                className="border-t border-navy/20 pt-4 text-[12px] tracking-[0.18em] uppercase text-navy"
              >
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-12 font-serif text-2xl leading-snug text-navy sm:text-3xl">
            Let&rsquo;s never stop showing up for Veterans who showed up for all
            of us.
          </p>
        </div>
      </div>
    </section>
  );
}
