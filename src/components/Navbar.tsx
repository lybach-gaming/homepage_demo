"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/lib/content";
import { PillButton } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <nav className="container-page flex items-center justify-between gap-6 py-3 md:py-5">
        <a href="#" aria-label="Slitigenz home" className="shrink-0">
          <Image src="/img/logo.png" alt="Slitigenz" width={134} height={34} priority className="h-7 w-auto md:h-[34px]" />
        </a>

        <ul className="hidden gap-6 text-sm font-semibold text-brand md:flex lg:gap-10 lg:text-[15px]">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="whitespace-nowrap transition hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Wrapper hides it: a `hidden` class on PillButton loses to its own `inline-flex` */}
          <div className="hidden sm:block">
            <PillButton href="#roi">Free consultation</PillButton>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-brand md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-page space-y-1 border-t border-slate-100 pb-4 pt-2 text-sm font-semibold text-brand md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <PillButton href="#roi" onClick={() => setOpen(false)}>
              Free consultation
            </PillButton>
          </li>
        </ul>
      )}
    </header>
  );
}
