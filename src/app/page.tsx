import Link from "next/link";
import { Container, CtaLink, SectionHeading } from "@/components/ui";
import { SignalRail } from "@/components/hero-system";
import { BrowserFrame, ProductShowcase } from "@/components/product-showcase";
import { DashboardPreview } from "@/components/dashboard-preview";
import { HowItWorksTimeline } from "@/components/how-it-works-timeline";
import { ConnectedSystem } from "@/components/connected-systems";
import { PrincipleGrid } from "@/components/principle-grid";
import { TeamEditorial } from "@/components/team-editorial";
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
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
                IoT aquaculture platform
              </p>
              <h1 className="mt-6 text-balance font-display text-[2.1rem] leading-[1.06] font-semibold tracking-[-0.02em] text-chalk sm:text-[2.75rem] xl:text-[2.95rem]">
                FROM WATER DATA
                <br />
                <span className="text-aqua-300">TO SMARTER ACTION.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-fog sm:text-[1.075rem]">
                Monitor your farm's water conditions in real time,
                understand what is happening, and respond faster
                with connected aquaculture technology.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaLink href="/contact">
                  Request a Demo
                  <ArrowIcon className="h-4 w-4" />
                </CtaLink>
                <CtaLink href={company.prototypeUrl} variant="secondary">
                  Explore the Platform
                </CtaLink>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-fog">
                <Link
                  href="#product"
                  className="text-chalk underline decoration-aqua-500/50 underline-offset-4 transition hover:text-aqua-300"
                >
                  See the product screens
                </Link>
                <Link
                  href="/technology"
                  className="transition hover:text-aqua-300"
                >
                  How the technology works
                </Link>
              </div>
            </div>
 
            <Reveal variant="scale" as="figure">
              <>
                <DashboardPreview />
                <figcaption className="mt-3 text-[0.75rem] text-fog">
                  GanSystems dashboard — real-time sensor data and automated control.
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
      <section className="border-y border-line bg-gradient-to-b from-ocean-950 to-ocean-900/60">
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
      <section className="bg-gradient-to-b from-ocean-900/60 to-sand-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Water conditions move faster than manual monitoring"
            lead="For fish farmers, delayed visibility can affect water quality, operational efficiency, and the health of their stock. GanSystems is designed around this practical problem."
            aside={
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm text-sand-900 transition hover:text-aqua-600"
              >
                See how the platform responds <ArrowIcon className="h-4 w-4" />
              </Link>
            }
            darkText
          />
 
          <div className="mt-12 grid gap-px overflow-hidden border border-sand-200 bg-sand-200 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Reveal
                  key={problem.title}
                  delay={index * 70}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-sand-50 sm:p-9"
                >
                  <div className="flex items-start gap-4">
                    <span className="icon-pop mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-aqua-400/10 text-aqua-600 ring-1 ring-aqua-500/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-sand-900">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-sand-600">
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
        className="border-y border-sand-200 bg-gradient-to-b from-sand-50 to-sand-100 py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="Inside the product"
            title="The platform, screen by screen"
            lead="Dashboard, telemetry, controllers, and system architecture, captured from the working GanSystems prototype."
            darkText
            aside={
              <a
                href={company.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-sand-900 transition hover:text-aqua-600"
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
      <section id="solutions" className="bg-gradient-to-b from-sand-100 to-sand-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What the platform does"
            lead="Four capabilities that make up GanSystems, and what each one relies on."
            darkText
            aside={
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-sm text-sand-900 transition hover:text-aqua-600"
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
                  className="card-lift group relative h-full overflow-hidden border border-sand-200 bg-white p-8 hover:border-aqua-400/50 hover:bg-sand-50 sm:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-aqua-400/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                  />
                  <span className="icon-pop grid h-12 w-12 place-items-center rounded-sm bg-aqua-400/10 text-aqua-600 ring-1 ring-aqua-500/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-sand-900">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-600 sm:text-base">
                    {solution.summary}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-sand-600">
                    {solution.detail}
                  </p>
                  <p className="mt-6 border-t border-sand-200 pt-5 text-sm text-sand-900">
                    <span className="text-aqua-600">In practice — </span>
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
        className="border-t border-sand-200 bg-gradient-to-b from-sand-50 to-white py-20 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From a single reading to a corrective action"
            lead="Five stages take pond conditions from a sensor in the water to an action back at the pond."
            darkText
            aside={
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm text-sand-900 transition hover:text-aqua-600"
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
        className="relative overflow-hidden border-t border-line bg-gradient-to-b from-white to-ocean-950 py-20 sm:py-28"
      >
        <div aria-hidden="true" className="field-wash absolute inset-0 -z-10" />
        <Container>
          <SectionHeading
            eyebrow="The ecosystem"
            title="One connected system for the modern fish farm."
            lead="Equipment in the water, the data it sends, the platform that reads it, and the action that follows."
            align="center"
            darkText
          />
          <div className="mt-12">
            <ConnectedSystem />
          </div>
        </Container>
      </section>
 
      {/* Why GanSystems */}
      <section
        id="why-gansystems"
        className="border-y border-line bg-ocean-900/50 py-20 sm:py-28"
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
                  <span className="border border-aqua-300/40 bg-aqua-400/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-aqua-300">
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
              className="text-sm text-chalk underline decoration-aqua-500/50 underline-offset-4 transition hover:text-aqua-300"
            >
              Open the live prototype ↗
            </a>
          </Reveal>
        </Container>
      </section>
 
      {/* Founders */}
      <section
        id="founders"
        className="border-y border-sand-200 bg-sand-50 py-12 sm:py-16"
      >
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="Three people building the infrastructure behind GanSystems"
            aside={
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm text-sand-900 transition hover:text-aqua-600"
              >
                View full team <ArrowIcon className="h-4 w-4" />
              </Link>
            }
          />
 
          <div className="mt-12">
            <TeamEditorial />
          </div>
        </Container>
      </section>
 
      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
        <div aria-hidden="true" className="field-wash absolute inset-0 -z-10" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2rem] leading-[1.06] font-semibold tracking-[-0.025em] text-chalk sm:text-[3.25rem]">
              See what GanSystems can do for your farm
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-fog sm:text-[1.075rem]">
              Explore the platform, connected hardware, and monitoring technology behind our smart-aquaculture system.
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
                className="text-chalk underline decoration-aqua-500/50 underline-offset-4 transition hover:text-aqua-300"
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