"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  contactIntents,
  getContactIntent,
  isContactIntent,
  type ContactIntentId,
} from "@/content/contact";

const fieldClass =
  "mt-3 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-base text-ice placeholder:text-ice/30 outline-none transition-colors focus:border-cyan";

export function ContactExperience() {
  const params = useSearchParams();
  const [intent, setIntent] = useState<ContactIntentId>("general");
  const [sent, setSent] = useState(false);
  const active = getContactIntent(intent);

  useEffect(() => {
    const initial = params.get("intent");
    if (isContactIntent(initial)) setIntent(initial);
  }, [params]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={active.image}
        alt={active.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20 mix-blend-overlay" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1600px] items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-36">
        <div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-cyan">
            Contact · {active.label}
          </p>
          <h1 className="editorial-shadow mt-5 max-w-xl font-serif text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Start a conversation.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ice/80">
            Architects, engineers, landowners, municipalities, researchers and
            development partners — tell us what you want to build.
          </p>
          <p className="mt-8 max-w-md border-l border-cyan/50 pl-5 text-base leading-relaxed text-ice/70">
            {active.statement}
          </p>
          <p className="mt-16 font-serif text-2xl text-ice/55 sm:text-3xl">
            What should human infrastructure become?
          </p>
        </div>

        <div className="glass relative overflow-hidden rounded-sm border border-white/12 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" />

          {sent ? (
            <div className="flex min-h-[420px] flex-col justify-center">
              <p className="text-[11px] tracking-[0.28em] uppercase text-cyan">
                Received
              </p>
              <p className="mt-6 font-serif text-4xl text-white">
                We’ll take it from here.
              </p>
              <p className="mt-6 max-w-sm text-ice/70">
                This demonstration form does not transmit yet. When the
                partnership inbox is connected, messages like yours will arrive
                there.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className="text-[11px] tracking-[0.24em] uppercase text-silver">
                Path
              </p>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Partnership path"
              >
                {contactIntents.map((item) => {
                  const selected = item.id === intent;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIntent(item.id)}
                      aria-pressed={selected}
                      className={`rounded-full px-3.5 py-1.5 text-[10px] tracking-[0.16em] uppercase transition ${
                        selected
                          ? "bg-ice text-navy"
                          : "border border-white/20 text-ice/70 hover:border-cyan/50 hover:text-ice"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="intent" value={intent} />

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@organization.com"
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="mt-8 block">
                <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
                  Organization
                </span>
                <input
                  name="organization"
                  autoComplete="organization"
                  placeholder="Studio, city, campus or company"
                  className={fieldClass}
                />
              </label>

              <label className="mt-8 block">
                <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Land, program, timeline — whatever is already true."
                  className={`${fieldClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-ice px-8 py-4 text-[11px] font-medium tracking-[0.22em] uppercase text-navy transition-colors hover:bg-white sm:w-auto"
              >
                Begin the conversation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
