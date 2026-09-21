import Link from "next/link";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

export default function CaseStudyPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Case study / demo</p>
          <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">A product story built for investors, partners, and judges.</h1>
          <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">GanSystems is a working prototype for water-quality monitoring, live telemetry, and automated drain/refill control in fish-farming environments.</p>
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5]">View the live product demo</h2>
            <p className="mt-2 text-[#9CA3AF]">Explore the live GanSystems prototype and see the product direction in action.</p>
          </div>
          <Link href="https://gansystem.vercel.app" className="inline-flex rounded-full bg-[#16D66B] px-5 py-3 text-sm font-semibold text-[#07110A] transition hover:bg-[#22C55E]">
            View Live Prototype
          </Link>
        </div>
        <div className="mt-10 rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Product gallery</p>
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </div>
      </section>
    </main>
  );
}
