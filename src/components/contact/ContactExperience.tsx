"use client";

import { useState } from "react";
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

export function ContactExperience({
  priority = true,
  embedded = false,
}: {
  priority?: boolean;
  embedded?: boolean;
}) {
  const urlIntent = useSearchParams().get("intent");
  const [intent, setIntent] = useState<ContactIntentId>(
    isContactIntent(urlIntent) ? urlIntent : "general",
  );
  const [syncedUrlIntent, setSyncedUrlIntent] = useState(urlIntent);
  if (urlIntent !== syncedUrlIntent) {
    setSyncedUrlIntent(urlIntent);
    if (isContactIntent(urlIntent)) setIntent(urlIntent);
  }
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const active = getContactIntent(intent);
  const Heading = embedded ? "h2" : "h1";

  return (
    <section
      id={embedded ? "contact" : undefined}
      className={`relative scroll-mt-24 overflow-hidden ${
        embedded ? "min-h-[90svh]" : "min-h-[100svh]"
      }`}
    >
      <Image
        src={active.image}
        alt={active.imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20 mix-blend-overlay" />

      <div
        className={`relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 ${
          embedded
            ? "min-h-[90svh] py-24 lg:py-32"
            : "min-h-[100svh] pt-32 lg:pt-36"
        }`}
      >
        <div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-cyan">
            Contact · {active.label}
          </p>
          <Heading className="editorial-shadow mt-5 max-w-xl font-serif text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Start a conversation.
          </Heading>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ice/80">
            Tell us what you want to build.
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
                Thank you. Your message is on its way to the LifeSynthesis team.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                setSubmitting(true);
                const form = e.currentTarget;
                const data = new FormData(form);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: data.get("name"),
                      email: data.get("email"),
                      organization: data.get("organization"),
                      message: data.get("message"),
                      intent,
                    }),
                  });
                  const payload = (await res.json().catch(() => ({}))) as {
                    error?: string;
                  };
                  if (!res.ok) {
                    setError(
                      payload.error ??
                        "Could not send your message. Please try again.",
                    );
                    return;
                  }
                  setSent(true);
                } catch {
                  setError("Could not send your message. Please try again.");
                } finally {
                  setSubmitting(false);
                }
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
                  placeholder="Studio, city or company"
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

              {error ? (
                <p className="mt-8 text-sm text-red-300" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-ice px-8 py-4 text-[11px] font-medium tracking-[0.22em] uppercase text-navy transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending…" : "Begin the conversation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
