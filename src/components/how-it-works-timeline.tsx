import type { ComponentType, SVGProps } from "react";
import {
  AnalysisIcon,
  AutomationIcon,
  DashboardIcon,
  SensorIcon,
  TelemetryIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { howItWorks } from "@/lib/lib/content";
 
const stageIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  sense: SensorIcon,
  connect: TelemetryIcon,
  monitor: DashboardIcon,
  analyze: AnalysisIcon,
  act: AutomationIcon,
};
 
export function HowItWorksTimeline() {
  return (
    <div className="relative">
      {/* Desktop rail with a packet of telemetry running left to right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[1.65rem] right-[calc(20%-1.65rem)] top-[1.625rem] hidden lg:block"
      >
        <div className="relative h-px bg-line-strong">
          <span className="flow-packet" />
        </div>
      </div>
 
      <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
        {howItWorks.map((stage, index) => {
          const Icon = stageIcons[stage.id];
          const isLast = index === howItWorks.length - 1;
          return (
            <Reveal
              as="li"
              key={stage.id}
              delay={index * 90}
              className="group relative flex gap-5 lg:flex-col lg:gap-0"
            >
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.65rem] top-14 h-[calc(100%-1rem)] w-px bg-line-strong lg:hidden"
                />
              )}
 
              <span className="relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center border border-line-strong bg-ocean-950 text-aqua-300 transition duration-300 group-hover:border-aqua-300/60 group-hover:bg-aqua-400/10">
                <Icon className="h-6 w-6" />
              </span>
 
              <div className="relative flex-1 overflow-hidden border border-line bg-ocean-900/40 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-aqua-300/40 group-hover:bg-ocean-900/70 lg:mt-6 lg:flex-none lg:grow">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-aqua-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="text-xs text-fog">
                    —
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-chalk">
                    {stage.title}
                  </h3>
                </div>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-fog">
                  {stage.layer}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-fog transition-colors duration-300 group-hover:text-chalk">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}