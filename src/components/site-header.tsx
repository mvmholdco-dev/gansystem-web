"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { navLinks } from "@/lib/lib/content";
 
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 12);
      });
    };
    setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
 
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
 
  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-line bg-ocean-950/92 shadow-[0_18px_40px_-34px_rgba(7,28,36,0.95)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 transition-all duration-300 sm:px-8 lg:px-10 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <Logo />
 
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 rounded-sm border border-line bg-white/[0.03] p-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-sm px-3.5 py-2 text-sm transition-colors duration-200 ${
                        active
                          ? "bg-white/[0.07] text-chalk"
                          : "text-fog hover:bg-white/[0.04] hover:text-chalk"
                      }`}
                    >
                      {link.label}
                      {active ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3.5 -bottom-px h-px bg-aqua-400"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
 
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="group inline-flex min-h-10 items-center gap-2 rounded-sm bg-aqua-400 px-4 text-sm font-medium text-ocean-950 shadow-[0_14px_30px_-20px_rgba(22,214,107,0.9)] transition duration-200 hover:bg-aqua-400"
            >
              Request a Demo
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
 
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-white/[0.04] text-chalk transition hover:border-line-strong hover:bg-white/[0.07] lg:hidden"
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
 
        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="menu-in border-t border-line bg-ocean-950/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block border-b border-line/70 py-3.5 text-base text-chalk transition-colors hover:text-aqua-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 block rounded-sm bg-aqua-400 px-4 py-3.5 text-center text-sm font-medium text-ocean-950"
            >
              Request a Demo
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}