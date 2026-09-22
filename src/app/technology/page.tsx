import type { Metadata } from "next";
import { Container, CtaLink, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { EcosystemVisual } from "@/components/ecosystem-visual";
import { BrowserFrame } from "@/components/product-showcase";
import { HowItWorksTimeline } from "@/components/how-it-works-timeline";
import { Reveal } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";
import { company, productShots, technologyLayers } from "@/lib/lib/content";
 
export const metadata: Metadata = {
  title: "Technology | Gansystem Limited",
  description:
    "A three-layer system: ESP32 field controllers, a cloud platform for telemetry and automation logic, and a dashboard for monitoring and remote control.",
};
 
const architecture = productShots.find(
  (shot) => shot.id === "system-architecture",
);
 
export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A simple three-layer system built for field conditions"
        lead="GanSystems follows a clear flow: sensors and controllers in the fish farm, cloud processing in the middle, and a dashboard for farmers and operators."
      />
 
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <ol className="grid gap-px overflow-hidden border border-line bg-line">
              {technologyLayers.map((layer, index) => (
                <Reveal
                  as="li"
                  key={layer.title}
                  delay={index * 70}
                  className="group bg-ocean-950 p-7 transition-colors duration-300 hover:bg-ocean-900/70 sm:p-9"
                >
                  <span className="font-mono text-xs text-fog transition-colors duration-200 group-hover:text-aqua-300">
                    {layer.index}
                  </span>
                  <h2 className="mt-3 font-display text-[1.0625rem] font-semibold tracking-tight text-chalk">
                    {layer.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {layer.body}
                  </p>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <EcosystemVisual />
            </Reveal>
          </div>
        </Container>
      </section>
 
      <section
        id="how-it-works"
        className="border-y border-line bg-ocean-900/50 py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From a single reading to a corrective action"
          />
          <div className="mt-14">
            <HowItWorksTimeline />
          </div>
        </Container>
      </section>
 
      {architecture ? (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="System architecture"
              title="How devices, cloud, and dashboard connect"
              lead={architecture.caption}
            />
            <Reveal variant="scale" className="mt-14">
              <BrowserFrame
                src={architecture.src}
                alt="GanSystems system architecture diagram"
                width={architecture.width}
                height={architecture.height}
              />
            </Reveal>
          </Container>
        </section>
      ) : null}
 
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-12">
            <h2 className="max-w-xl font-display text-[1.5rem] leading-snug font-semibold tracking-[-0.02em] text-chalk sm:text-[1.75rem]">
              Want a walkthrough of the stack?
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