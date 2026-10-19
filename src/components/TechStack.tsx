import Image from "next/image";
import { stacks } from "@/lib/content";

export function TechStack() {
  return (
    <section aria-labelledby="stack-title">
      <h2 id="stack-title" className="sr-only">
        Core Stacks Powering Your Scale
      </h2>
      {/* Heading text is baked into this banner in the Canva export; min height + center crop keeps it legible on phones */}
      <Image src="/img/stacks.jpg" alt="" width={2048} height={388} className="h-auto min-h-36 w-full object-cover" />
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-6 pb-12 pt-8 md:justify-between md:px-16 lg:px-24 lg:pb-16">
        {stacks.map((s) => (
          <Image key={s.name} src={s.src} alt={s.name} width={120} height={44} className="h-9 w-auto object-contain sm:h-11 lg:h-14" />
        ))}
      </div>
    </section>
  );
}
