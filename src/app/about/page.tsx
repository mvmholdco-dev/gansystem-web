import type { Metadata } from "next";
import { Container, CtaLink, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";
import { PrincipleGrid } from "@/components/principle-grid";
import { awards, company } from "@/lib/lib/content";
 
export const metadata: Metadata = {
  title: "About | GanSystems Limited",
  description:
    "GanSystems Limited was founded around a practical problem in fish farming: water conditions change quickly while monitoring and corrective action stay manual.",
};
 
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A company rooted in practical farm problems"
        lead="GanSystems was founded by Maxwell, Valentine, and Majid around a shared goal: to make aquaculture more intelligent, reliable, and accessible through practical technology."
      />
 
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
            <div className="max-w-2xl space-y-6 text-[1rem] leading-[1.8] text-fog">
              <p>
                The team identified a recurring challenge in fish farming:
                critical water conditions can change quickly, while monitoring
                and corrective action are often manual, delayed, or dependent on
                constant human supervision.
              </p>
              <p>
                GanSystems combines connected sensors, ESP32-based
                infrastructure, real-time telemetry, intelligent analysis, and
                dashboard monitoring to support actions such as draining and
                refilling water when predefined conditions require intervention.
              </p>
              <p>
                We are refining the company story and product positioning while
                preparing for demos, partnerships, and future pilots.
              </p>
            </div>
 
            <div className="grid gap-px self-start overflow-hidden border border-line bg-line">
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Mission
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  To make aquaculture more observable, responsive, and efficient
                  through accessible technology.
                </p>
              </div>
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Vision
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  To help fish farmers in Africa make better decisions with
                  dependable digital tools.
                </p>
              </div>
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Recognition
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fog">
                  {awards.map((award) => (
                    <li key={award.programme}>
                      {award.placement} — {award.programme}.
                      {award.note ? ` ${award.note}.` : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="border-y border-line bg-ink-900/50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="The problem in Nigerian aquaculture, and how we approach it"
            lead="Water-quality changes can affect fish health and farm performance, yet monitoring and corrective action are often manual or delayed. GanSystems is built to give farmers clearer visibility and more dependable control."
          />
          <div className="mt-14">
            <PrincipleGrid />
          </div>
        </Container>
      </section>
 
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="font-display text-[1.5rem] leading-snug font-semibold tracking-[-0.02em] text-chalk sm:text-[1.75rem]">
                Next step
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
                We are preparing for demos, partnerships, and future pilots.
                Reach the founders directly at {company.email}.
              </p>
            </div>
            <CtaLink href="/contact">
              Get in touch
              <ArrowIcon className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}