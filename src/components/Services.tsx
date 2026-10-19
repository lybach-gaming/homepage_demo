import Image from "next/image";
import { services } from "@/lib/content";
import { RichText } from "./ui";

export function Services() {
  const { title } = services;
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[linear-gradient(115deg,transparent_55%,rgba(150,180,255,0.12)_60%,transparent_70%)]"
    >
      <div className="container-page pt-12 lg:pt-20">
        <header className="text-center">
          <h2 className="headline">
            {title.light}
            <b>{title.bold1}</b>
            <br />
            <b>{title.bold2}</b>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium lg:text-base">{services.subtitle}</p>
        </header>

        {services.items.map((s, i) => (
          <article key={s.title} className="grid items-center gap-6 py-8 md:grid-cols-2 md:gap-12 md:py-12 lg:gap-20">
            <Image src={s.image} alt={s.title} width={900} height={760} className="mx-auto h-auto w-full max-w-[560px]" />
            <div>
              <h3 className="mb-4 text-xl font-semibold lg:text-2xl xl:text-[28px]">
                {i + 1}. {s.title}
              </h3>
              <p className="max-w-md text-[15px] italic leading-relaxed lg:text-justify lg:text-lg">
                <RichText text={s.body} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
