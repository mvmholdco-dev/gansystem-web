import { FounderCard } from "@/components/founder-card";

const founders = [
  { name: "Onah Chiedozie Maxwell", role: "Co-Founder & Chief Executive Officer", bio: "Business leadership, strategy, partnerships, and overall company direction.", link: "https://www.linkedin.com/in/maxwell-onah-327335290", image: "/screenshots/maxwell.png" },
  { name: "Okonkwo John Valentine", role: "Co-Founder & Chief Technology Officer", bio: "Hardware, engineering, IoT infrastructure, system architecture, and technical development.", link: "https://www.linkedin.com/in/jvcbyte", image: "/screenshots/valentine.png" },
  { name: "Amaddin Iyobosa Majid", role: "Co-Founder & Chief Operating Officer", bio: "Software systems, product development, automation, operations, and business execution.", link: "https://www.linkedin.com/in/codeandbe", image: "/screenshots/iyobosa.png" },
];

export default function TeamPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Our team</p>
          <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">The founders behind GanSystems.</h1>
          <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">The company is being built by a small team with strong overlap across product, engineering, and field operations.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </section>
    </main>
  );
}
