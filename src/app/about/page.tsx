import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">About us</p>
            <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">A company rooted in practical farm problems.</h1>
            <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">GanSystems was founded by Maxwell, Valentine, and Majid around a shared goal: to make aquaculture more intelligent, reliable, and accessible through practical technology.</p>
            <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">The team identified a recurring challenge in fish farming: critical water conditions can change quickly, while monitoring and corrective action are often manual, delayed, or dependent on constant human supervision.</p>
          </div>
          <div className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#16D66B]">Mission</p>
            <p className="mt-3 text-xl leading-8 text-[#F5F5F5]">To make aquaculture more observable, responsive, and efficient through accessible technology.</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Vision</p>
            <p className="mt-3 text-xl leading-8 text-[#F5F5F5]">To help fish farmers in Africa make better decisions with dependable digital tools.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
            <h2 className="text-2xl font-semibold text-[#F5F5F5]">The problem in Nigerian aquaculture</h2>
            <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">Water-quality changes can affect fish health and farm performance, yet monitoring and corrective action are often manual or delayed. GanSystems is built to give farmers clearer visibility and more dependable control.</p>
          </article>
          <article className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
            <h2 className="text-2xl font-semibold text-[#F5F5F5]">What we are building</h2>
            <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">GanSystems combines connected sensors, ESP32-based infrastructure, real-time telemetry, intelligent analysis, and dashboard monitoring to support actions such as draining and refilling water when predefined conditions require intervention.</p>
          </article>
        </div>

        <div className="mt-10 rounded-[16px] border border-[#1F2937] bg-[radial-gradient(circle_at_top_left,_rgba(22,214,107,0.18),_transparent_32%)] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Next step</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-[#9CA3AF]">We are refining the company story and product positioning while preparing for demos, partnerships, and future pilots.</p>
            <Link href="/contact" className="inline-flex rounded-full bg-[#16D66B] px-5 py-3 text-sm font-semibold text-[#07110A] transition hover:bg-[#22C55E]">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
