"use client";

import Image from "next/image";
import { useState } from "react";
import { roi } from "@/lib/content";
import { PillButton } from "./ui";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function RoiCalculator() {
  const [industry, setIndustry] = useState<string>();
  const [team, setTeam] = useState<string>();
  const [result, setResult] = useState<{ hours: number; cost: number } | null>(null);
  const [error, setError] = useState(false);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const ind = roi.industries.find((i) => i.id === industry);
    const size = roi.teamSizes.find((t) => t.id === team);
    if (!ind || !size) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);
    // Rough estimate: share of repetitive work that can be automated across the team, per year.
    const hours = Math.round(size.people * roi.hoursPerWeek * ind.automatable * 48);
    setResult({ hours, cost: hours * roi.hourlyCostUsd });
  }

  return (
    <section id="roi" className="relative isolate scroll-mt-20 overflow-hidden">
      <span className="bubble -left-8 -top-28 size-56" />
      <span className="bubble -right-28 top-[400px] size-60" />

      <div className="container-page grid items-center gap-8 py-12 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-20">
        <Image src="/img/ai.jpg" alt="AI is the future" width={890} height={700} className="mx-auto w-full max-w-[560px]" />

        <form onSubmit={calculate} noValidate>
          <h2 className="headline">
            How Much Could <b>AI</b>
            <br />
            <b>Save Your Business?</b>
          </h2>
          <p className="mb-5 mt-5 text-sm font-semibold lg:text-base">
            Explore your potential savings with AI-powered automation.
          </p>

          <RadioGroup
            legend="1. Select your industry"
            name="industry"
            options={roi.industries}
            value={industry}
            onChange={setIndustry}
          />
          <RadioGroup
            legend="2. How many employees handle these tasks?"
            name="team"
            options={roi.teamSizes}
            value={team}
            onChange={setTeam}
          />

          <PillButton type="submit" variant="cta" className="mt-5 cursor-pointer">
            Calculate My AI ROI
          </PillButton>

          <div aria-live="polite" className="mt-4 min-h-6 max-w-sm">
            {error && <p className="text-sm text-cta">Please choose an industry and a team size.</p>}
            {result && (
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">Estimated yearly savings</p>
                <p className="mt-1 text-3xl font-semibold text-brand">{usd.format(result.cost)}</p>
                <p className="text-sm text-neutral-600">≈ {result.hours.toLocaleString("en-US")} working hours freed up</p>
                <p className="mt-2 text-[11px] text-neutral-500">Indicative estimate only. Book a free consultation for a tailored assessment.</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { id: string; label: string }[];
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mb-5">
      <legend className="mb-3.5 text-sm lg:text-base">{legend}</legend>
      <div className="grid max-w-sm grid-cols-2 gap-x-8 gap-y-3.5">
        {options.map((o) => (
          <label key={o.id} className="flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="radio"
              name={name}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
              className="size-4 accent-brand"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
