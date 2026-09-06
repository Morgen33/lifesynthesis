"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { primaryNav } from "@/content/nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`relative fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Logo compact={scrolled} />

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.18em] uppercase text-ice/70 transition-colors hover:text-ice"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/partnerships"
            className="text-[11px] tracking-[0.18em] uppercase text-ice/80 hover:text-ice"
          >
            Partner with us
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-ice px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-navy transition-colors hover:bg-white"
          >
            Build the future
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-4 bg-ice transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-ice transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-ice transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="glass absolute inset-x-0 top-full z-50 min-h-[calc(100svh-4rem)] border-t border-white/10 px-6 py-8 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg tracking-[0.12em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-ice px-5 py-3 text-center text-[11px] tracking-[0.2em] uppercase text-navy"
              onClick={() => setOpen(false)}
            >
              Build the future
            </Link>
            <Link
              href="/partnerships"
              className="rounded-full border border-white/25 px-5 py-3 text-center text-[11px] tracking-[0.2em] uppercase"
              onClick={() => setOpen(false)}
            >
              Partner with us
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
