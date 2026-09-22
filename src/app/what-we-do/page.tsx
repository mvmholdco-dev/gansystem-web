import type { Metadata } from "next";
import { Container, CtaLink, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Reveal } from "@/components/reveal";
import {
  AnalysisIcon,
  ArrowIcon,
  DropIcon,
  PondIcon,
  TelemetryIcon,
} from "@/components/icons";
import { company, solutions } from "@/lib/lib/content";
 
export const metadata: Metadata = {
  title: "Solutions | Gansystem Limited",
  description:
    "Water-quality monitoring, automated water control, intelligent analysis, and live telemetry for aquaculture operations.",
};
 
const icons = [PondIcon, DropIcon, AnalysisIcon, TelemetryIcon];
 
export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="A practical platform for monitoring and managing aquaculture operations"
        lead="GanSystems combines live water-quality data with clear operational controls so fish farmers can act with more confidence."
      />
 
      <section className="border-y border-line bg-ocean-900/50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Inside the product"
            title="Screens from the working prototype"
            lead="Dashboard, telemetry, controllers, and system architecture, before the capability detail below."
          />
          <div className="mt-14">
            <ProductShowcase />
          </div>
        </Container>
      </section>
 
      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-4">
            {solutions.map((solution, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  key={solution.id}
                  delay={index * 60}
                  className="scroll-mt-28"
                >
                  <article
                    id={solution.id}
                    className="card-lift group grid gap-8 border border-line bg-white/[0.02] p-8 hover:border-aqua-300/30 sm:p-12 lg:grid-cols-[auto_1fr_20rem] lg:items-start"
                  >
                    <span className="icon-pop grid h-14 w-14 place-items-center rounded-sm bg-aqua-400/10 text-aqua-300 ring-1 ring-aqua-500/25">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold tracking-[-0.015em] text-chalk sm:text-[1.6rem]">
                        {solution.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog sm:text-base">
                        {solution.summary}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
                        {solution.detail}
                      </p>
                    </div>
                    <p className="border-t border-line pt-5 text-sm text-chalk lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-aqua-300">
                        In practice
                      </span>
                      <span className="mt-2 block">{solution.benefit}</span>
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
  
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-12">
            <h2 className="max-w-xl font-display text-[1.5rem] leading-snug font-semibold tracking-[-0.02em] text-chalk sm:text-[1.75rem]">
              See how GanSystems would fit your farm.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/contact">
                Request a Demo
                <ArrowIcon className="h-4 w-4" />
              </CtaLink>
              <CtaLink href={company.prototypeUrl} variant="secondary">
                Open the live prototype ↗
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}