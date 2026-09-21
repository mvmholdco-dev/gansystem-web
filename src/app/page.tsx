import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { FounderCard } from "@/components/founder-card";
import { ScreenshotGallery } from "@/components/screenshot-gallery";

const featured = [
  {
    title: "Water-Quality Monitoring",
    description: "Track critical aquaculture conditions, device health, and pond activity from a single live view.",
    icon: "📡",
  },
  {
    title: "Automated Water Control",
    description: "Support draining and refilling actions when predefined water conditions require intervention.",
    icon: "💧",
  },
  {
    title: "Intelligent Analysis",
    description: "Turn telemetry into clearer signals that help farmers respond before conditions become critical.",
    icon: "🪲",
  },
  {
    title: "Live Telemetry",
    description: "Collect sensor updates in real time and turn them into useful operational insight.",
    icon: "📈",
  },
];

const founders = [
  { name: "Onah Chiedozie Maxwell", role: "CEO", bio: "Driving vision, partnerships, and the path from prototype to company.", link: "https://www.linkedin.com/in/maxwell-onah-327335290", image: "/screenshots/maxwell.png" },
  { name: "Okonkwo John Valentine", role: "CTO", bio: "Building the architecture, systems standards, and secure product foundation.", link: "https://www.linkedin.com/in/jvcbyte", image: "/screenshots/valentine.png" },
  { name: "Amaddin Iyobosa Majid", role: "COO", bio: "Leading field deployment, operations, and delivery across the value chain.", link: "https://www.linkedin.com/in/codeandbe", image: "/screenshots/iyobosa.png" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(22,214,107,0.18),_transparent_40%),linear-gradient(135deg,_rgba(15,26,21,0.95),_rgba(10,14,12,0.95))] p-8 sm:p-10 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Smart aquaculture technology for modern operations</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] text-[#F5F5F5] sm:text-5xl lg:text-7xl">
            From field sensors to <span className="bg-gradient-to-r from-[#22C55E] to-[#22D3EE] bg-clip-text text-transparent">clear farm decisions</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9CA3AF]">
            GanSystems helps fish farmers monitor water conditions, understand live telemetry, and support automated control through practical IoT technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/what-we-do" className="rounded-full bg-[#16D66B] px-6 py-3 text-center text-sm font-semibold text-[#07110A] transition hover:bg-[#22C55E]">
              See What We Do
            </Link>
            <Link href="/contact" className="rounded-full border border-[#16D66B]/30 bg-transparent px-6 py-3 text-center text-sm font-semibold text-[#F5F5F5] transition hover:bg-[#16D66B]/10">
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[16px] border border-[#1F2937] bg-[#12171A] p-4 md:grid-cols-3">
          <div className="p-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">Programme Recognition</p>
            <p className="mt-2 text-3xl font-semibold text-[#16D66B]">Top 30</p>
            <p className="mt-1 text-sm text-[#9CA3AF]">Selected from 400+ applicants</p>
          </div>
          <div className="border-t border-[#1F2937] p-4 text-center md:border-l md:border-t-0">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">Live Prototype</p>
            <a href="https://gansystem.vercel.app" className="mt-2 block text-xl font-semibold text-[#16D66B]">Explore GanSystems ↗</a>
          </div>
          <div className="border-t border-[#1F2937] p-4 text-center md:border-l md:border-t-0">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">Co-Founders</p>
            <p className="mt-2 text-3xl font-semibold text-[#16D66B]">3</p>
            <p className="mt-1 text-sm text-[#9CA3AF]">Building practical aquaculture technology</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">The problem</p>
            <h2 className="mt-3 text-3xl font-bold text-[#F5F5F5] sm:text-4xl">Water conditions can change quickly while monitoring and corrective action remain manual.</h2>
            <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">For fish farmers, delayed visibility can affect water quality, operational efficiency, and the health of their stock. GanSystems is designed around this practical problem.</p>
          </div>
          <div className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#16D66B]">The solution</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#F5F5F5]">GanSystems turns water data into timely action.</h3>
            <p className="mt-4 text-lg leading-8 text-[#9CA3AF]">The platform combines connected sensors, embedded hardware, real-time telemetry, and dashboard monitoring to support actions such as autonomous drain and refill control.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Core features</p>
            <h2 className="mt-3 text-3xl font-bold text-[#F5F5F5] sm:text-4xl">Practical tools for field teams and operators.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Credibility</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">Built for Startup Abuja Innovation Challenge 2026</h2>
              <p className="mt-2 text-[#9CA3AF]">GanSystems was also selected among the Top 30 from more than 400 applicants in the NEO programme/challenge.</p>
            </div>
            <a href="https://gansystem.vercel.app" className="inline-flex rounded-full border border-[#16D66B]/30 px-5 py-3 text-sm font-semibold text-[#16D66B] transition hover:bg-[#16D66B]/10">
              View Live Prototype
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Founders</p>
            <h2 className="mt-3 text-3xl font-bold text-[#F5F5F5] sm:text-4xl">The team behind GanSystems.</h2>
          </div>
          <Link href="/team" className="text-sm font-semibold text-[#16D66B]">View full team</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Case study</p>
          <h2 className="mt-3 text-3xl font-bold text-[#F5F5F5] sm:text-4xl">A product story that is ready to be shown to partners and investors.</h2>
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </div>
      </section>
    </main>
  );
}
