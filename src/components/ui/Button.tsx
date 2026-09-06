import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-ice text-navy hover:bg-white border border-ice",
    ghost:
      "bg-transparent text-ice border border-white/25 hover:border-cyan/70 hover:bg-white/5",
    light:
      "bg-navy text-ice hover:bg-ocean border border-navy",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
