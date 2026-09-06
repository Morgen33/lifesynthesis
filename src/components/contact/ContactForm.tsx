"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const intents = [
  { id: "general", label: "General" },
  { id: "lifepod", label: "LifePod" },
  { id: "lifehouse", label: "LifeHouse" },
  { id: "demonstration", label: "Demonstration site" },
  { id: "campus", label: "Regenerative campus" },
  { id: "research", label: "Research" },
  { id: "partner", label: "Partnership" },
] as const;

type IntentId = (typeof intents)[number]["id"];

function isIntent(value: string | null): value is IntentId {
  return intents.some((i) => i.id === value);
}

export function ContactForm() {
  const params = useSearchParams();
  const [intent, setIntent] = useState<IntentId>("general");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const initial = params.get("intent");
    if (isIntent(initial)) setIntent(initial);
  }, [params]);

  return (
    <form
      className="mx-auto max-w-[720px] space-y-6 px-5 pb-28 lg:px-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block">
        <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
          Name
        </span>
        <input
          required
          name="name"
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-ice outline-none focus:border-cyan"
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
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-ice outline-none focus:border-cyan"
        />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
          Path
        </span>
        <select
          name="intent"
          value={intent}
          onChange={(e) => {
            const next = e.target.value;
            if (isIntent(next)) setIntent(next);
          }}
          className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 text-ice outline-none focus:border-cyan"
        >
          {intents.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.2em] uppercase text-silver">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-ice outline-none focus:border-cyan"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-ice px-6 py-3 text-[11px] tracking-[0.22em] uppercase text-navy"
      >
        Send
      </button>
      {sent ? (
        <p role="status" className="text-sm text-cyan">
          Thank you. This demonstration form does not transmit yet — we will
          connect it to the partnership inbox.
        </p>
      ) : null}
    </form>
  );
}
