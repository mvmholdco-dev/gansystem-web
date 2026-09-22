import type { ComponentType } from "react";
import {
  AnalysisIcon,
  AutomationIcon,
  DashboardIcon,
  PondIcon,
  SensorIcon,
  TelemetryIcon,
} from "./icons";
 
type Stage = {
  label: string;
  detail: string;
  tag: string;
  icon: ComponentType<{ className?: string }>;
};
 
const physical: Stage[] = [
  {
    label: "Pond / farm",
    detail: "Where water conditions actually change",
    tag: "Site",
    icon: PondIcon,
  },
  {
    label: "Sensors",
    detail: "Water quality and level readings in the pond",
    tag: "Hardware",
    icon: SensorIcon,
  },
  {
    label: "Live telemetry",
    detail: "ESP32 controllers stream readings off the farm",
    tag: "Connectivity",
    icon: TelemetryIcon,
  },
];
 
const digital: Stage[] = [
  {
    label: "GanSystems dashboard",
    detail: "One view of current pond conditions",
    tag: "Software",
    icon: DashboardIcon,
  },
  {
    label: "Intelligent decision",
    detail: "Readings evaluated against defined conditions",
    tag: "Logic",
    icon: AnalysisIcon,
  },
  {
    label: "Automated water control",
    detail: "Drain and refill actions sent back to the pond",
    tag: "Actuation",
    icon: AutomationIcon,
  },
];
 
/** Compact horizontal version of the signal path, used beneath the hero. */
export function SignalRail() {
  const stages = [...physical, ...digital];
  return (
    <figure
      className="relative border border-line bg-ocean-950/60 px-5 py-6 sm:px-7"
      role="group"
      aria-label="The GanSystems signal path: pond and farm conditions are read by sensors, streamed as live telemetry by ESP32 controllers, shown on the GanSystems dashboard, evaluated against defined conditions, and returned to the pond as automated drain and refill control."
    >
      <figcaption className="text-[0.62rem] uppercase tracking-[0.2em] text-fog">
        Signal path — pond to software, and back
      </figcaption>
 
      <div className="relative mt-5">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-ocean-800/50 via-aqua-500/50 to-aqua-500/25 lg:block"
        />
        <span aria-hidden="true" className="flow-packet hidden lg:block" style={{ top: "18px" }} />
 
        <ol className="relative grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li key={stage.label} className="flex items-start gap-3 lg:block">
                <span
                  aria-hidden="true"
                  className="signal-node flex h-11 w-11 shrink-0 items-center justify-center border border-line-strong bg-ocean-950 text-aqua-400"
                  style={{ animationDelay: `${index * 0.55}s` }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 lg:mt-3">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-fog">
                    {stage.tag}
                  </p>
                  <p className="mt-1 font-display text-[0.9rem] font-semibold text-chalk">
                    {stage.label}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-fog">
                    {stage.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}