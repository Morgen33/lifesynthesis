import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-48 text-center">
      <p className="font-serif text-6xl text-white">404</p>
      <p className="mt-6 text-ice/70">This path does not exist yet.</p>
      <Link href="/" className="mt-10 inline-block text-[11px] tracking-[0.22em] uppercase text-cyan">
        Return home
      </Link>
    </div>
  );
}
