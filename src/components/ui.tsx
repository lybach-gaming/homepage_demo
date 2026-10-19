import type { ComponentProps, ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  variant?: "brand" | "cta";
  className?: string;
} & (({ href: string } & ComponentProps<"a">) | ({ href?: undefined } & ComponentProps<"button">));

/** Rounded button with the circular arrow from the design. Renders <a> when href is given. */
export function PillButton({ children, variant = "brand", className = "", ...rest }: PillProps) {
  const color = variant === "cta" ? "bg-cta text-[13px] font-semibold lg:text-sm" : "bg-brand text-sm";
  const arrow = variant === "cta" ? "text-cta" : "text-brand";
  const cls = `inline-flex items-center gap-3 whitespace-nowrap rounded-full py-1.5 pl-5 pr-1.5 text-white transition hover:brightness-110 ${color} ${className}`;
  const inner = (
    <>
      {children}
      <span className={`grid size-7 place-items-center rounded-full bg-white font-bold ${arrow}`} aria-hidden>
        →
      </span>
    </>
  );
  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as ComponentProps<"a">)}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {inner}
    </button>
  );
}

/** Renders **bold** markers from content strings. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <b key={i} className="font-semibold">
            {part.slice(2, -2)}
          </b>
        ) : (
          part
        ),
      )}
    </>
  );
}
