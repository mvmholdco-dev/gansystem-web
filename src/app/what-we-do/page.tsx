import { FeatureCard } from "@/components/feature-card";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

const features = [
  {
    title: "Water-Quality Monitoring",
    description: "Provide a single view of water conditions, asset health, and pond activity so operators can stay informed without constant manual reporting.",
    icon: "📡",
  },
  {
    title: "Automated Water Control",
    description: "Support draining and refilling routines based on connected data so fish farmers can respond faster to changing water conditions.",
    icon: "💧",
  },
  {
    title: "Intelligent Analysis",
    description: "Turn live telemetry into clearer signals that help teams understand conditions and decide when intervention is needed.",
    icon: "🪲",
  },
  {
    title: "Dashboard Analytics",
    description: "Visualize telemetry trends and performance indicators in a way that supports decisions, reviews, and reporting.",
    icon: "📊",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">What we do</p>
          <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">A practical platform for monitoring and managing aquaculture operations.</h1>
          <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">GanSystems combines live water-quality data with clear operational controls so fish farmers can act with more confidence.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-12 rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Supporting visuals</p>
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </div>
      </section>
    </main>
  );
}
