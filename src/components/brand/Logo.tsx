import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  stacked?: boolean;
  priority?: boolean;
};

export function Logo({
  compact = false,
  stacked = false,
  priority = false,
}: LogoProps) {

  if (stacked) {
    return (
      <Link
        href="/"
        className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crystal"
        aria-label="LifeSynthesis home"
      >
        <Image
          src="/brand/logo-lockup.png"
          alt="LifeSynthesis"
          width={220}
          height={248}
          className="h-auto w-[148px] sm:w-[196px]"
          priority={priority}
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crystal"
      aria-label="LifeSynthesis home"
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={80}
        height={80}
        className={`shrink-0 object-contain drop-shadow-[0_0_16px_rgba(90,180,222,0.45)] ${compact ? "h-8 w-8" : "h-10 w-10"}`}
        priority={priority}
      />
      <span className="font-sans text-[13px] font-medium tracking-[0.22em] uppercase text-ice">
        LifeSynthesis
      </span>
    </Link>
  );
}
