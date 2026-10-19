import Image from "next/image";
import { comparison } from "@/lib/content";

export function Comparison() {
  const last = comparison.rows.length - 1;
  return (
    <section className="overflow-hidden bg-brand text-white">
      <div className="container-page pb-12 pt-12 lg:pb-20 lg:pt-16">
        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-10">
          <h2 className="text-[28px] font-normal leading-[1.15] sm:text-4xl lg:text-5xl">
            A Technology Partner <b className="font-bold">Built</b>
            <br />
            <b className="font-bold">for Long-Term Delivery</b>
          </h2>
          <p className="max-w-md text-sm leading-relaxed lg:text-justify lg:text-base">{comparison.intro}</p>
        </div>

        {/* Scrolls sideways only on very narrow phones instead of crushing the columns */}
        <div className="-mx-5 mt-8 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:mt-12">
          <table className="mx-auto w-full min-w-[330px] max-w-4xl border-separate border-spacing-0 text-[11px] sm:text-sm lg:text-[15px]">
            <thead>
              <tr>
                <th className="w-[25%] rounded-tl-[18px] bg-brand-soft p-2 text-sm font-medium sm:text-[15px] lg:text-lg">Feature</th>
                <th className="w-[42%] rounded-t-xl bg-white p-3 lg:p-4">
                  <Image src="/img/stork.png" alt="" width={145} height={93} className="mx-auto w-20 sm:w-28 lg:w-[145px]" />
                  <Image src="/img/logo.png" alt="Slitigenz" width={110} height={28} className="mx-auto mt-1.5 w-20 sm:w-24 lg:w-[110px]" />
                </th>
                <th className="rounded-tr-[18px] bg-brand-soft p-2 text-sm font-medium sm:text-[15px] lg:text-lg">Traditional Agencies</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r, i) => (
                <tr key={r.feature}>
                  <td
                    className={`border-t-2 border-[#b8c4ea] bg-brand-soft p-2 text-center sm:p-3 lg:p-4 ${i === last ? "rounded-bl-[18px]" : ""}`}
                  >
                    {r.feature}
                  </td>
                  <td
                    className={`border-t-2 p-2 pl-3 font-medium sm:p-3 sm:pl-4 lg:p-4 lg:pl-5 ${
                      r.highlight ? "border-accent bg-accent text-white" : "border-white bg-white text-brand"
                    } ${i === last ? "rounded-b-xl" : ""}`}
                  >
                    {r.us}
                  </td>
                  <td
                    className={`border-t-2 border-[#b8c4ea] bg-brand-soft p-2 sm:p-3 lg:p-4 ${i === last ? "rounded-br-[18px]" : ""}`}
                  >
                    {r.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
