import Image from "next/image";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="container-page">
        <h2 className="headline">
          Trusted by <b>Businesses and Technology Team</b>
        </h2>
        <p className="mt-5 text-[15px] italic lg:text-lg">Real projects. Real partnerships. Real experiences.</p>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8 lg:mt-16">
          {testimonials.map((t, i) => (
            // Card sits in normal flow and overlaps the photo via a negative margin, so it scales with the column
            <figure key={t.image} className="mx-auto flex w-full max-w-[540px] items-start md:mx-0">
              <div className="relative z-10 -mr-12 mt-24 w-[56%] max-w-[300px] shrink-0 rounded-[14px] border border-neutral-200 bg-white px-4.5 pb-5 pt-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] lg:mt-32">
                <span className="inline-block bg-cta px-1.5 py-1 text-xs text-white sm:text-sm">Client Testimonial</span>
                <span className="absolute right-6 -top-1 font-serif text-5xl font-bold text-brand sm:right-10" aria-hidden>
                  “
                </span>
                <div
                  className="mt-2 max-w-44 border-t border-neutral-500 pt-0.5 text-lg tracking-wide text-[#F5B301]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <blockquote className="mt-3.5 min-h-14 text-xs leading-snug sm:text-[13px]">{t.quote}</blockquote>
              </div>
              <Image
                src={t.image}
                alt="Client"
                width={i === 0 ? 129 : 194}
                height={i === 0 ? 368 : 342}
                className="h-[300px] w-auto shrink-0 lg:h-[400px]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
