import Image from "next/image";

export function KnowYourFarmer() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/know-farmer.png"
        alt="Dawn light inside a crystalline greenhouse with a farmer holding seedlings."
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/55" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-5 py-32 text-center">
        <p className="font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
          Know your farmer.
          <br />
          Know your food.
        </p>
        <p className="mt-16 font-serif text-3xl text-ice sm:text-5xl">
          Protect the seed.
          <br />
          Protect our food.
        </p>
        <p className="mt-16 font-serif text-4xl text-cyan sm:text-6xl">
          Freedom starts with food.
        </p>
      </div>
    </section>
  );
}
