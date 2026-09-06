import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function Logo({ compact = false, inverted = false }: LogoProps) {
  const stroke = inverted ? "#061428" : "#E8F4FB";
  const glow = inverted ? "#0B2744" : "#7EE0FF";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crystal"
      aria-label="LifeSynthesis home"
    >
      <svg
        width={compact ? 28 : 36}
        height={compact ? 28 : 36}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="30" stroke={stroke} strokeOpacity="0.28" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI) / 3;
          const x = 32 + Math.cos(a) * 11;
          const y = 32 + Math.sin(a) * 11;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="11"
              stroke={stroke}
              strokeWidth="1.1"
              fill="none"
            />
          );
        })}
        <circle cx="32" cy="32" r="4.5" fill={glow} fillOpacity="0.85" />
        <circle cx="32" cy="32" r="11" stroke={glow} strokeOpacity="0.55" />
      </svg>
      <span
        className={`font-sans text-[13px] font-medium tracking-[0.22em] uppercase ${
          inverted ? "text-navy" : "text-ice"
        }`}
      >
        LifeSynthesis
      </span>
    </Link>
  );
}
