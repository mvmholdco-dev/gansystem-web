import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";
 
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="field-wash field-drift absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 -z-10 opacity-50"
      />
      <Container className="py-14 sm:py-18 lg:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-[2.1rem] leading-[1.06] font-semibold tracking-[-0.025em] text-chalk sm:text-[2.85rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-[1rem] leading-[1.75] text-fog sm:text-[1.075rem]">
            {lead}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}