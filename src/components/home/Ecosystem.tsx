import { EcosystemGrid } from "@/components/ecosystem/EcosystemGrid";
import { Button } from "@/components/ui/Button";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-navy px-5 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-crystal">
              The ecosystem
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.95] text-white sm:text-6xl">
              From a single pod to a whole campus.
            </h2>
          </div>
          <Button href="/ecosystem" variant="ghost">
            View the ecosystem
          </Button>
        </div>
        <div className="mt-14">
          <EcosystemGrid />
        </div>
      </div>
    </section>
  );
}
