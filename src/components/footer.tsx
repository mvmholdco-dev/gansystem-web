import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0E0C]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-[#9CA3AF] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-[#F5F5F5]">Gansystems Limited</p>
          <p className="mt-2 max-w-xl">Building practical smart-aquaculture technology for Nigeria and beyond.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="transition hover:text-[#16D66B]">About</Link>
          <Link href="/team" className="transition hover:text-[#16D66B]">Team</Link>
          <Link href="/contact" className="transition hover:text-[#16D66B]">Contact</Link>
          <a href="mailto:mvmholdco@gmail.com" className="transition hover:text-[#16D66B]">
            mvmholdco@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
