import type { Metadata } from "next";
import { Container, CtaLink } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { FoundersEditorial } from "@/components/founders-editorial";
import { ArrowIcon } from "@/components/icons";
 
export const metadata: Metadata = {
  title: "Team | GanSystems Limited",
  description:
    "The team behind GanSystems, covering business leadership, engineering and IoT infrastructure, operations, and marketing.",
};
 
export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The team behind GanSystems"
        lead="The company is being built by a small team with strong overlap across product, engineering, and field operations."
      />
 
      <section className="py-20 sm:py-28">
        <Container>
          <FoundersEditorial variant="detailed" />
 
          <div className="mt-16 flex flex-col items-start justify-between gap-8 border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="font-display text-[1.5rem] leading-snug font-semibold tracking-[-0.02em] text-chalk sm:text-[1.75rem]">
                Want to talk to the team?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
                Partnerships, pilots, and investment conversations go straight
                to the founders.
              </p>
            </div>
            <CtaLink href="/contact">
              Request a Demo
              <ArrowIcon className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}