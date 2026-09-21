import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0A0E0C]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5F5F5]">
          Gansystem Limited
        </Link>
        <nav className="hidden gap-6 text-sm text-[#9CA3AF] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#16D66B]">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-[#16D66B]/40 bg-[#16D66B]/10 px-4 py-2 text-sm font-medium text-[#16D66B] transition hover:bg-[#16D66B]/20"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
