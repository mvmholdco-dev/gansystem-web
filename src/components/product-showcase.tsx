"use client";
 
import Image from "next/image";
import { useRef, useState } from "react";
import { company, productShots } from "@/lib/lib/content";
 
export function BrowserFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  fixedRatio = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  /** Keeps the frame a constant height across screenshots of different shapes. */
  fixedRatio?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-line-strong bg-ocean-900 shadow-[0_40px_80px_-40px_rgba(0,0,0,1)] ring-1 ring-white/[0.06]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 hidden truncate rounded-sm bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] text-fog sm:block">
          gansystem.app
        </span>
      </div>
      <div
        className={
          fixedRatio
            ? "flex aspect-[16/9] items-center justify-center bg-ocean-950/70 p-2 sm:p-3"
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1000px"
          className={fixedRatio ? "max-h-full w-auto object-contain" : "h-auto w-full"}
        />
      </div>
    </div>
  );
}
 
export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = productShots[active];
 
  const select = (index: number) => {
    const next = (index + productShots.length) % productShots.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };
 
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(productShots.length - 1);
    }
  };
 
  return (
    <div className="overflow-hidden border border-line bg-ocean-900/40">
      <div className="grid lg:grid-cols-[19rem_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label="GanSystems product screens"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="grid grid-cols-2 border-b border-line sm:grid-cols-4 lg:block lg:border-b-0 lg:border-r"
        >
          {productShots.map((shot, index) => {
            const selected = index === active;
            return (
              <button
                key={shot.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                type="button"
                id={`tab-${shot.id}`}
                aria-selected={selected}
                aria-controls="product-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`group relative flex w-full items-start gap-3 border-line px-5 py-5 text-left transition-colors duration-200 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-r sm:[&:not(:last-child)]:border-b-0 lg:border-b lg:border-r-0 ${
                  selected
                    ? "bg-white/[0.05]"
                    : "hover:bg-white/[0.025]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-300 ${
                    selected
                      ? "scale-y-100 bg-aqua-500"
                      : "scale-y-0 bg-transparent"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 font-mono text-[0.7rem] transition-colors ${
                    selected ? "text-aqua-400" : "text-fog/70"
                  }`}
                >
                  0{index + 1}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-display text-[0.95rem] font-semibold transition-colors ${
                      selected ? "text-chalk" : "text-fog group-hover:text-chalk"
                    }`}
                  >
                    {shot.label}
                  </span>
                  <span className="mt-1 hidden text-xs leading-relaxed text-fog lg:block">
                    {shot.kicker}
                  </span>
                </span>
              </button>
            );
          })}
 
          <div className="hidden px-5 py-6 text-xs leading-relaxed text-fog lg:block">
            Screens are captured from the working prototype at{" "}
            <a
              href={company.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-chalk underline decoration-aqua-500/50 underline-offset-4 transition hover:text-aqua-400"
            >
              gansystem.vercel.app
            </a>
            .
          </div>
        </div>
 
        <div
          role="tabpanel"
          id="product-panel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="p-5 sm:p-8 lg:p-10"
        >
          <div key={current.id}>
            <div className="panel-enter">
              <BrowserFrame
                src={current.src}
                alt={`${current.label} screen of the GanSystems platform`}
                width={current.width}
                height={current.height}
                fixedRatio
              />
            </div>
 
            <div
              className="panel-enter mt-8 grid gap-8 md:grid-cols-[1fr_1fr]"
              style={{ animationDelay: "90ms" }}
            >
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-fog">
                  {current.kicker}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-chalk sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">
                  {current.caption}
                </p>
              </div>
 
              <div className="border-t border-line pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-fog">
                  What this screen shows
                </p>
                <ul className="mt-3 space-y-2.5">
                  {current.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-fog">
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-aqua-500"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}