import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="container-page grid items-end gap-8 md:min-h-[480px] md:grid-cols-[1fr_1.1fr] md:gap-6 md:pr-0 lg:min-h-[600px] lg:gap-10">
      <div className="self-center pt-8 md:py-16 lg:py-24">
        <h1 className="text-[34px] font-normal leading-[1.1] sm:text-5xl md:text-[42px] lg:text-[56px] xl:text-6xl">
          Your Partner <b className="font-semibold text-brand">for</b>
          <br />
          <b className="font-semibold text-brand">&nbsp;Software &amp; AI</b>
          <br />
          <b className="font-semibold text-brand">Transformation</b>
        </h1>

        <div className="mt-5 max-w-md space-y-3 text-sm font-medium leading-relaxed text-neutral-600 lg:text-justify lg:mt-7 lg:max-w-lg lg:text-base">
          <p>{hero.intro}</p>
          <p>{hero.body}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 lg:mt-10">
          <a
            href={hero.primary.href}
            className="grid h-11 min-w-[140px] place-items-center rounded-full bg-brand-muted px-6 text-sm font-semibold text-white shadow-[4px_6px_8px_rgba(0,0,0,0.25)] transition hover:brightness-110 lg:h-12 lg:text-[15px]"
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="grid h-11 min-w-[140px] place-items-center rounded-full border-2 border-brand px-6 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white lg:h-12 lg:text-[15px]"
          >
            {hero.secondary.label}
          </a>
        </div>
      </div>

      <Image
        src="/img/hero.jpg"
        alt="Slitigenz team reading the company profile"
        width={1108}
        height={966}
        priority
        className="mx-auto w-full max-w-[560px] md:max-w-none"
      />
    </section>
  );
}
