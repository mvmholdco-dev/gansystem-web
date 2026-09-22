import Image from "next/image";
import type { Founder } from "@/lib/content";
import { LinkedInIcon } from "./icons";
 
export function FounderCard({
  founder,
  variant = "compact",
}: {
  founder: Founder;
  variant?: "compact" | "detailed";
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-white/[0.02] transition duration-300 hover:border-leaf-500/35 hover:bg-white/[0.04]">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-850">
        <Image
          src={founder.photo}
          alt={`Portrait of ${founder.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent"
        />
        <span className="absolute bottom-3 left-4 rounded-sm bg-ink-950/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-leaf-400 ring-1 ring-leaf-500/25">
          {founder.shortRole}
        </span>
      </div>
 
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-chalk">
          {founder.name}
        </h3>
        <p className="mt-1 text-sm text-leaf-400">
          {variant === "detailed" ? founder.role : `Co-Founder & ${founder.shortRole}`}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
          {founder.responsibility}
        </p>
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-chalk transition hover:text-leaf-400"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
          <span aria-hidden="true">↗</span>
          <span className="sr-only">profile of {founder.name}</span>
        </a>
      </div>
    </article>
  );
}