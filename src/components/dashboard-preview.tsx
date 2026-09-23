import { GaugeIcon, DropIcon, AnalysisIcon, AutomationIcon } from "./icons";

export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-sm border border-line-strong bg-ocean-900 shadow-[0_40px_80px_-40px_rgba(0,0,0,1)] ring-1 ring-white/[0.06]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 hidden truncate rounded-sm bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] text-fog sm:block">
          gansystems.app
        </span>
      </div>
      <div className="bg-ocean-950/70 p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-chalk">GanSystems Dashboard</h3>
          <span className="text-xs text-fog">Live</span>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-line bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-fog">
              <GaugeIcon className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider">Temperature</span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-chalk">27.4°C</p>
          </div>
          
          <div className="rounded-sm border border-line bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-fog">
              <DropIcon className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider">pH Level</span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-chalk">7.1</p>
          </div>
          
          <div className="rounded-sm border border-line bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-fog">
              <AnalysisIcon className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider">Water Level</span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-chalk">82%</p>
          </div>
          
          <div className="rounded-sm border border-line bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 text-fog">
              <AutomationIcon className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider">Pump Status</span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-aqua-300">ON</p>
          </div>
        </div>
      </div>
    </div>
  );
}
