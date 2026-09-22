import type { ComponentType, SVGProps } from "react";
import {
  AnalysisIcon,
  GaugeIcon,
  HandIcon,
  PondIcon,
  TelemetryIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { principles } from "@/lib/lib/content";
 
const principleIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "practical-technology": HandIcon,
  "real-time-visibility": GaugeIcon,
  "connected-infrastructure": TelemetryIcon,
  "actionable-data": AnalysisIcon,
  "built-for-local-conditions": PondIcon,
};
 
/** The first two principles run wide; the remaining three share the row below. */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];
 
export function PrincipleGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {principles.map((principle, index) => {
        const Icon = principleIcons[principle.id];
        return (
          <Reveal
            as="li"
            key={principle.id}
            delay={index * 70}
            className={`group relative flex flex-col overflow-hidden border border-line bg-ocean-950 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-aqua-300/40 hover:bg-ocean-900/70 ${spans[index]}`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-aqua-500 to-ocean-900 transition-transform duration-500 group-hover:scale-x-100"
            />
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-ocean-900 text-aqua-300 transition duration-300 group-hover:border-aqua-300/60 group-hover:bg-aqua-400/10">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs text-fog transition-colors duration-300 group-hover:text-aqua-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[1.0625rem] font-semibold tracking-tight text-chalk">
              {principle.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fog transition-colors duration-300 group-hover:text-chalk">
              {principle.body}
            </p>
          </Reveal>
        );
      })}
    </ul>
  );
}