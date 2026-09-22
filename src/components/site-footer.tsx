import Link from "next/link";
import { Container } from "@/components/ui";
import { Logo } from "@/components/logo";
import { company, founders } from "@/lib/lib/content";
 
const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Water-Quality Monitoring", href: "/what-we-do#water-quality-monitoring" },
      { label: "Automated Water Control", href: "/what-we-do#automated-water-control" },
      { label: "Intelligent Analysis", href: "/what-we-do#intelligent-analysis" },
      { label: "Live Telemetry", href: "/what-we-do#live-telemetry" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "How It Works", href: "/technology" },
      { label: "Product Showcase", href: "/#product" },
      { label: "Live Prototype", href: company.prototypeUrl },
    ],
  },
];
 
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ocean-900">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-fog">
              {company.tagline}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block text-sm text-chalk underline-offset-4 transition hover:text-aqua-400 hover:underline"
            >
              {company.email}
            </a>
          </div>
 
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-chalk">
                  {column.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-sm text-fog transition duration-200 hover:translate-x-0.5 hover:text-aqua-400"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-block text-sm text-fog transition duration-200 hover:translate-x-0.5 hover:text-aqua-400"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
 
        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fog">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {founders.map((founder) => (
              <li key={founder.name}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-fog transition hover:text-aqua-400"
                >
                  {founder.shortRole} on LinkedIn
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}