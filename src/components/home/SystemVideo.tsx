"use client";

import { useEffect, useRef } from "react";

const SRC = "/videos/lifesynthesis-system.mp4";
const POSTER = "/videos/lifesynthesis-system-poster.jpg";
const LABEL =
  "LifeSynthesis: not just survival, regeneration. LifePods, LifeHouses, LifeFarms and CannaPods working as one regenerative life-support system.";

export function SystemVideo() {
  const inline = useRef<HTMLVideoElement>(null);
  const large = useRef<HTMLVideoElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = inline.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      return;
    }
    void el.play().catch(() => {
      /* autoplay can be blocked; poster remains */
    });
  }, []);

  const open = () => {
    dialog.current?.showModal();
    const el = large.current;
    if (!el) return;
    el.currentTime = inline.current?.currentTime ?? 0;
    void el.play().catch(() => {});
  };

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        aria-label="Open the LifeSynthesis system video full screen"
      >
        <span className="block overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.5)] transition group-hover:border-cyan/60">
          <video
            ref={inline}
            className="block aspect-[1080/718] h-auto w-full"
            poster={POSTER}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-label={LABEL}
          >
            <source src={SRC} type="video/mp4" />
          </video>
        </span>
        <span className="mt-4 block text-right text-[10px] tracking-[0.22em] uppercase text-ice/60 transition group-hover:text-cyan">
          View full size ⤢
        </span>
      </button>

      <dialog
        ref={dialog}
        onClose={() => large.current?.pause()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[min(96vw,calc(82svh*1080/718),1600px)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-navy/90 backdrop:backdrop-blur-sm"
        aria-label="LifeSynthesis system video"
      >
        <div className="relative">
          <video
            ref={large}
            className="block aspect-[1080/718] h-auto w-full rounded-xl bg-white"
            poster={POSTER}
            muted
            loop
            playsInline
            preload="none"
            aria-label={LABEL}
          >
            <source src={SRC} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={close}
            className="absolute -top-12 right-0 rounded-full border border-white/30 bg-navy/85 px-4 py-2 text-[11px] tracking-[0.22em] uppercase text-ice hover:border-cyan/70"
          >
            Close ✕
          </button>
        </div>
      </dialog>
    </>
  );
}
