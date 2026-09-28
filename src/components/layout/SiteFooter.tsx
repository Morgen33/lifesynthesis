import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ecosystem } from "@/content/ecosystem";
import { footerNav, legalNav } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 lg:grid-cols-[1.2fr_2fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ice/60">
            Regenerating the systems that sustain life.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          <nav aria-label="Footer">
            <p className="mb-4 text-[11px] tracking-[0.22em] uppercase text-silver">
              Explore
            </p>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ice/70 transition-colors hover:text-ice"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Ecosystem">
            <p className="mb-4 text-[11px] tracking-[0.22em] uppercase text-silver">
              Ecosystem
            </p>
            <ul className="space-y-2">
              {ecosystem.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/ecosystem/${item.slug}`}
                    className="text-sm text-ice/70 transition-colors hover:text-ice"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-4 text-[11px] tracking-[0.22em] uppercase text-silver">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-ice/70">
              <li>
                <a href="https://www.linkedin.com" className="hover:text-ice">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com" className="hover:text-ice">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="hover:text-ice">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 border-t border-white/10 px-5 py-6 text-xs text-ice/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© LifeSynthesis. All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ice">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
