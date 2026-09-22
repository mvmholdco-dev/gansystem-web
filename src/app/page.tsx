import Link from "next/link";
import { Container, CtaLink, SectionHeading } from "@/components/ui";
import { SignalRail } from "@/components/hero-system";
import { BrowserFrame, ProductShowcase } from "@/components/product-showcase";
import { HowItWorksTimeline } from "@/components/how-it-works-timeline";
import { ConnectedSystem } from "@/components/connected-systems";
import { PrincipleGrid } from "@/components/principle-grid";
import { FoundersEditorial } from "@/components/founders-editorial";
import { Reveal } from "@/components/reveal";
import {
  AnalysisIcon,
  ArrowIcon,
  ClockIcon,
  DropIcon,
  GaugeIcon,
  HandIcon,
  PondIcon,
  TelemetryIcon,
} from "@/components/icons";
import {
  company,
  platformSpecs,
  problems,
  awards,
  productShots,
  solutions,
} from "@/lib/lib/content";
 
const problemIcons = [ClockIcon, HandIcon, DropIcon, GaugeIcon];
const solutionIcons = [PondIcon, DropIcon, AnalysisIcon, TelemetryIcon];
 
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="field-wash field-drift absolute inset-0 -z-10"
        />
        <div
          aria-hidden="true"
          className="grid-lines absolute inset-0 -z-10 opacity-60"
        />
        <Container className="pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2.5 border border-line bg-white/[0.04] px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-fog">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
                IoT aquaculture platform
              </p>
              <h1 className="mt-6 text-balance font-display text-[2.1rem] leading-[1.06] font-semibold tracking-[-0.02em] text-chalk sm:text-[2.75rem] xl:text-[2.95rem]">
                Water-quality monitoring and{" "}
                <span className="text-leaf-400">automated water control</span>{" "}
                for fish farms
              </h1>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-fog sm:text-[1.075rem]">
                Sensors in the pond report water conditions continuously, the
                dashboard shows them as they arrive, and connected field
                controllers can drain or refill when conditions call for it —
                without waiting for someone to check the water by hand.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaLink href="/contact">
                  Request a Demo
                  <ArrowIcon className="h-4 w-4" />
                </CtaLink>
                <CtaLink href={company.prototypeUrl} variant="secondary">
                  Open the live prototype ↗
                </CtaLink>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-fog">
                <Link
                  href="#product"
                  className="text-chalk underline decoration-leaf-500/50 underline-offset-4 transition hover:text-leaf-400"
                >
                  See the product screens
                </Link>
                <Link
                  href="/technology"
                  className="transition hover:text-leaf-400"
                >
                  How the technology works
                </Link>
              </div>
            </div>
 
            <Reveal variant="scale" as="figure">
              <>
                <BrowserFrame
                  src={productShots[0].src}
                  alt="GanSystems dashboard showing the Control Hub overview with controller, alert, and water-average tiles"
                  width={productShots[0].width}
                  height={productShots[0].height}
                  priority
                />
                <figcaption className="mt-3 text-[0.75rem] text-fog">
                  GanSystems dashboard — Control Hub overview, shown in a demo
                  account.
                </figcaption>
              </>
            </Reveal>
          </div>
 
          <Reveal className="mt-12" delay={120}>
            <SignalRail />
          </Reveal>
        </Container>
      </section>
 
      {/* Platform specification strip */}
      <section className="border-y border-line bg-ink-900/60">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {platformSpecs.map((spec, index) => (
              <Reveal
                key={spec.label}
                variant="fade"
                delay={index * 60}
                className={`py-7 lg:px-8 ${index === 0 ? "lg:pl-0" : ""} ${
                  index === platformSpecs.length - 1 ? "lg:pr-0" : ""
                }`}
              >
                <dt className="text-[0.68rem] uppercase tracking-[0.24em] text-fog">
                  {spec.label}
                </dt>
                <dd className="mt-2 text-[0.95rem] font-medium leading-relaxed text-chalk">
                  {spec.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>
 
      {/* Problem */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Water conditions move faster than manual monitoring"
            lead="For fish farmers, delayed visibility can affect water quality, operational efficiency, and the health of their stock. GanSystems is designed around this practical problem."
            aside={
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
              >
                See how the platform responds <ArrowIcon className="h-4 w-4" />
              </Link>
            }
          />
 
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Reveal
                  key={problem.title}
                  delay={index * 70}
                  className="group bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900/70 sm:p-9"
                >
                  <div className="flex items-start gap-4">
                    <span className="icon-pop mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-white/[0.04] text-fog ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-chalk">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-fog">
                        {problem.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
 
      {/* Product showcase */}
      <section
        id="product"
        className="border-y border-line bg-ink-900/50 py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="Inside the product"
            title="The platform, screen by screen"
            lead="Dashboard, telemetry, controllers, and system architecture, captured from the working GanSystems prototype."
            aside={
              <a
                href={company.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
              >
                Open the live prototype ↗
              </a>
            }
          />
          <div className="mt-12">
            <ProductShowcase />
          </div>
        </Container>
      </section>
 
      {/* Core solutions */}
      <section id="solutions" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What the platform does"
            lead="Four capabilities that make up GanSystems, and what each one relies on."
            aside={
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
              >
                All solutions in detail <ArrowIcon className="h-4 w-4" />
              </Link>
            }
          />
 
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Reveal
                  key={solution.id}
                  delay={index * 70}
                  className="card-lift group relative h-full overflow-hidden border border-line bg-white/[0.02] p-8 hover:border-leaf-500/35 hover:bg-white/[0.04] sm:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-leaf-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                  />
                  <span className="icon-pop grid h-12 w-12 place-items-center rounded-sm bg-leaf-500/10 text-leaf-400 ring-1 ring-leaf-500/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-chalk">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">
                    {solution.summary}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-fog">
                    {solution.detail}
                  </p>
                  <p className="mt-6 border-t border-line pt-5 text-sm text-chalk">
                    <span className="text-leaf-400">In practice — </span>
                    {solution.benefit}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
 
      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-line py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From a single reading to a corrective action"
            lead="Five stages take pond conditions from a sensor in the water to an action back at the pond."
            aside={
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
              >
                How the technology works <ArrowIcon className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-12">
            <HowItWorksTimeline />
          </div>
        </Container>
      </section>
 
      {/* Connected system */}
      <section
        id="connected-system"
        className="relative overflow-hidden border-t border-line py-20 sm:py-28"
      >
        <div aria-hidden="true" className="field-wash absolute inset-0 -z-10" />
        <Container>
          <SectionHeading
            eyebrow="The ecosystem"
            title="One connected system for the modern fish farm."
            lead="Equipment in the water, the data it sends, the platform that reads it, and the action that follows."
            align="center"
          />
          <div className="mt-12">
            <ConnectedSystem />
          </div>
        </Container>
      </section>
 
      {/* Why GanSystems */}
      <section
        id="why-gansystems"
        className="border-y border-line bg-ink-900/50 py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="Why GanSystems"
            title="Built around how fish farms actually run"
            lead="Five principles behind the hardware, the telemetry, and the dashboard."
          />
          <div className="mt-10">
            <PrincipleGrid />
          </div>
        </Container>
      </section>
 
      {/* Recognition */}
      <section className="border-b border-line py-10">
        <Container>
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              {awards.map((award) => (
                <li
                  key={award.programme}
                  className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-fog"
                >
                  <span className="border border-leaf-500/40 bg-leaf-500/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-leaf-400">
                    {award.placement}
                  </span>
                  <span className="text-chalk">{award.programme}</span>
                  {award.note ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{award.note}</span>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
            <a
              href={company.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-chalk underline decoration-leaf-500/50 underline-offset-4 transition hover:text-leaf-400"
            >
              Open the live prototype ↗
            </a>
          </Reveal>
        </Container>
      </section>
 
      {/* Founders */}
      <section
        id="founders"
        className="border-y border-line bg-ink-900/50 py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="The team behind GanSystems"
            lead="GanSystems Limited is built by three co-founders and a marketing lead, covering business leadership, engineering and IoT infrastructure, operations, and marketing — with the hardware, the platform, and the field work owned in-house."
            aside={
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
              >
                View full team <ArrowIcon className="h-4 w-4" />
              </Link>
            }
          />
 
          <div className="mt-12">
            <FoundersEditorial />
          </div>
        </Container>
      </section>
 
      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
        <div aria-hidden="true" className="field-wash absolute inset-0 -z-10" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2rem] leading-[1.06] font-semibold tracking-[-0.025em] text-chalk sm:text-[3.25rem]">
              See GanSystems running on a pond
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-fog sm:text-[1.075rem]">
              Walk through the dashboard, the controllers, and the automation
              with the founders, or open the prototype and look around first.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink href="/contact">
                Request a Demo
                <ArrowIcon className="h-4 w-4" />
              </CtaLink>
              <CtaLink href={company.prototypeUrl} variant="secondary">
                Open the live prototype ↗
              </CtaLink>
            </div>
            <p className="mt-6 text-sm text-fog">
              Or email the founders directly at{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-chalk underline decoration-leaf-500/50 underline-offset-4 transition hover:text-leaf-400"
              >
                {company.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}