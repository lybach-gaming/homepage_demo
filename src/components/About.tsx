import Image from "next/image";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-brand text-white">
      <div className="container-page grid gap-8 pt-12 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pt-20 lg:gap-16">
        <h2 className="text-[28px] font-semibold leading-tight sm:text-4xl md:col-span-2 lg:text-5xl">{about.title}</h2>

        <div>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mb-4 max-w-xl text-sm font-medium leading-relaxed lg:text-justify lg:text-base">
              {p}
            </p>
          ))}

          <div className="mt-6 grid max-w-lg grid-cols-2">
            <ul className="border-l-[3px] border-white pl-4 text-sm font-semibold lg:text-base">
              {about.countries.map((c) => (
                <li key={c} className="py-3 lg:py-4">
                  {c}
                </li>
              ))}
            </ul>
            <dl className="self-start border-r-[3px] border-white pr-2">
              {about.stats.map((s) => (
                <div key={s.label} className="mb-6 last:mb-2">
                  <dt className="text-3xl font-semibold leading-none lg:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs font-semibold lg:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Image
            src="/img/globe.jpg"
            alt="Map of Slitigenz client locations"
            width={650}
            height={260}
            className="mt-2 w-full max-w-[420px]"
          />
        </div>

        <Image
          src="/img/about.jpg"
          alt="Slitigenz engineering team"
          width={840}
          height={784}
          className="mx-auto w-full max-w-[560px] self-end md:max-w-none"
        />
      </div>
    </section>
  );
}
