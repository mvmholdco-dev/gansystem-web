import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Reveal } from "./reveal";
 
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
 
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-leaf-400">
      <span aria-hidden="true" className="h-px w-5 bg-leaf-500/60" />
      {children}
    </p>
  );
}
 
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Rendered opposite the title on wide screens, turning the block into a two-column header. */
  aside?: ReactNode;
}) {
  const heading = (
    <h2 className="mt-5 font-display text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.02em] text-chalk sm:text-[2.5rem]">
      {title}
    </h2>
  );
 
  if (aside) {
    return (
      <Reveal className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {heading}
        </div>
        <div className="lg:pb-1">
          {lead ? (
            <p className="text-[0.975rem] leading-[1.75] text-fog sm:text-[1.0625rem]">
              {lead}
            </p>
          ) : null}
          <div className={lead ? "mt-5" : undefined}>{aside}</div>
        </div>
      </Reveal>
    );
  }
 
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {heading}
      {lead ? (
        <p className="mt-5 text-[0.975rem] leading-[1.75] text-fog sm:text-[1.0625rem]">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
 
type ButtonVariant = "primary" | "secondary" | "ghost";
 
const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-leaf-500 text-ink-950 shadow-[0_16px_36px_-20px_rgba(22,214,107,0.9)] hover:bg-leaf-400 hover:shadow-[0_18px_40px_-18px_rgba(22,214,107,0.85)]",
  secondary:
    "border border-line-strong bg-white/[0.03] text-chalk hover:border-leaf-500/45 hover:bg-white/[0.06]",
  ghost: "text-chalk hover:text-leaf-400",
};
 
export function CtaLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 text-sm font-medium tracking-[0.01em] transition duration-200 ease-out [&>svg]:transition-transform [&>svg]:duration-200 hover:[&>svg]:translate-x-0.5 motion-reduce:hover:[&>svg]:translate-x-0 ${buttonStyles[variant]} ${className}`;
 
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
 
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
 
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-line bg-white/[0.02] ${className}`}
    >
      {children}
    </div>
  );
}
 
export function Hairline() {
  return <div aria-hidden="true" className="hairline h-px w-full" />;
}