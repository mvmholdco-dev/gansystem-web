export default function TechnologyPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Technology</p>
          <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">A simple three-layer system built for field conditions.</h1>
          <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">GanSystems follows a clear flow: sensors and controllers in the fish farm, cloud processing in the middle, and a dashboard for farmers and operators.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <article className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">1. IoT Device Layer</h2>
              <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">ESP32-based field controllers gather water-quality data and manage local actions such as draining and refilling water when conditions require intervention.</p>
            </article>
            <article className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">2. Cloud Platform Layer</h2>
              <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">Data is synced and processed through a cloud platform that handles connectivity, real-time telemetry, intelligent analysis, and automation logic.</p>
            </article>
            <article className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">3. Dashboard Layer</h2>
              <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">The dashboard turns this data into useful views for monitoring, remote control, and reporting without adding unnecessary complexity.</p>
            </article>
          </div>

          <div className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
            <div className="flex h-full min-h-[320px] items-center justify-center rounded-[12px] border border-dashed border-[#16D66B]/30 bg-gradient-to-br from-[#0F1A15] to-[#12171A] text-center text-[#9CA3AF]">
              <img src="/screenshots/system-architecture.png" alt="GanSystems three-layer system architecture" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
