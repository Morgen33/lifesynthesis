export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-[#040d1a] px-5 py-32 lg:px-10 lg:py-48">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-serif text-5xl leading-[0.95] text-white sm:text-7xl">
          The future isn’t built.
          <br />
          It’s grown.
        </p>
        <div className="mt-20 space-y-10 text-2xl leading-snug text-ice/80 sm:text-4xl">
          <p>Technology should not replace nature.</p>
          <p>Technology should help humanity work with nature.</p>
          <p>Infrastructure should not simply reduce harm.</p>
          <p>It should actively support life.</p>
        </div>
        <p className="mt-24 font-serif text-3xl text-cyan sm:text-5xl">
          We are not simply designing new buildings.
          <br />
          We are designing a better habitat for human life.
        </p>
      </div>
    </section>
  );
}
