import type { ComponentType, SVGProps } from "react";
import {
  AutomationIcon,
  DashboardIcon,
  PondIcon,
  TelemetryIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ecosystemLayers } from "@/lib/lib/content";
 
const layerIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "physical-farm": PondIcon,
  data: TelemetryIcon,
  platform: DashboardIcon,
  action: AutomationIcon,
};
 
/** Plain-language description of what moves from one layer to the next. */
const transitions = [
  "sends readings",
  "feeds the platform",
  "leads to action",
];
 
function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div aria-hidden="true" className="relative h-16 w-px bg-line-strong">
        <span className="flow-drop" />
        <span className="absolute -bottom-px left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-aqua-300/70" />
      </div>
      <span className="text-[0.62rem] uppercase tracking-[0.22em] text-fog">
        {label}
      </span>
    </div>
  );
}
 
export function ConnectedSystem() {
  return (
    <figure
      className="relative"
      aria-label="Diagram of the GanSystems ecosystem in four layers: the physical farm of pond, pumps, sensors and controllers sends data — water readings, device status and telemetry — to the platform, where the dashboard provides monitoring and analytics, which leads to action through alerts, operational decisions, and supported automated controls."
    >
      {ecosystemLayers.map((layer, index) => {
        const Icon = layerIcons[layer.id];
        return (
          <div key={layer.id}>
            {index > 0 && <Connector label={transitions[index - 1]} />}
 
            <Reveal
              delay={index * 90}
              className="group relative overflow-hidden border border-line bg-ocean-900/40 transition-colors duration-300 hover:border-aqua-300/30"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-aqua-500/50 to-transparent"
              />
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[15rem_1fr] lg:gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-ocean-950 text-aqua-300 transition duration-300 group-hover:border-aqua-300/60 group-hover:bg-aqua-400/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-aqua-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-chalk">
                    {layer.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {layer.summary}
                  </p>
                </div>
 
                <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3">
                  {layer.nodes.map((node, nodeIndex) => (
                    <li
                      key={node.name}
                      className="flex items-start gap-2.5 border border-line bg-ocean-950 p-3.5 transition duration-300 hover:border-aqua-300/40 hover:bg-ocean-800 sm:gap-3 sm:p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="node-blip mt-[0.35rem] h-2 w-2 shrink-0 rounded-full bg-aqua-400"
                        style={{
                          animationDelay: `${(index * 3 + nodeIndex) * 0.4}s`,
                        }}
                      />
                      <span>
                        <span className="block text-sm font-medium text-chalk">
                          {node.name}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-fog">
                          {node.note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        );
      })}
    </figure>
  );
}