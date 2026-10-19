import Image from "next/image";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="relative isolate scroll-mt-20 overflow-hidden py-14 lg:py-20">
      <span className="bubble -right-16 -top-8 size-52" />
      <span className="bubble -left-24 bottom-0 size-40" />

      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="headline">
            Technology Solutions
            <br />
            That <b>Deliver Real Results</b>
          </h2>
          <a
            href="#"
            className="shrink-0 rounded-sm bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
          >
            Explore All Projects
          </a>
        </div>

        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed lg:text-justify lg:text-lg">
          From software products to <span className="text-brand">infrastructure modernization</span> and{" "}
          <span className="text-brand">intelligent automation,</span> our projects are built around real business
          challenges.
        </p>

        <div className="mx-auto mt-10 grid max-w-md items-start gap-12 px-6 md:mt-14 md:max-w-none md:grid-cols-3 md:gap-6 md:px-4 lg:gap-10 lg:px-10">
          {projects.map((p) => (
            <a
              key={p.tag}
              href="#"
              className={`group relative block ${p.featured ? "rounded-b-[22px] bg-brand pb-24 md:-mt-8 md:pb-32 lg:pb-40" : ""}`}
            >
              <div className="relative">
                <Image
                  src={p.image}
                  alt={p.tag}
                  width={526}
                  height={p.featured ? 320 : 272}
                  className="w-full rounded-[3px] transition group-hover:brightness-110"
                />
                <span
                  className={`tag-ribbon absolute -bottom-3.5 bg-cta py-2 pl-2.5 pr-10 text-[10px] font-semibold text-white lg:text-xs ${
                    p.featured ? "-left-4" : "-left-6"
                  }`}
                >
                  {p.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
