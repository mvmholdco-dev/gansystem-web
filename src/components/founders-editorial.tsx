import Image from "next/image";
import type { TeamMember } from "@/lib/lib/content";
import { team } from "@/lib/lib/content";
import { LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
 
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
 
function Portrait({
  member,
  sizes,
  className,
}: {
  member: TeamMember;
  sizes: string;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-ocean-800 ${className}`}>
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          fill
          sizes={sizes}
          className="object-cover object-[50%_18%] grayscale-[35%] transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-ocean-900"
        >
          <span className="font-display text-4xl font-semibold tracking-tight text-line-strong">
            {initials(member.name)}
          </span>
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/5 to-transparent"
      />
      <span className="absolute bottom-4 left-4 bg-ocean-950/75 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.2em] text-aqua-400 uppercase ring-1 ring-aqua-500/25">
        {member.shortRole}
      </span>
    </div>
  );
}
 
function LinkedInButton({ member }: { member: TeamMember }) {
  if (!member.linkedin) return null;
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center gap-2 border border-line-strong px-4 py-2 text-sm text-chalk transition duration-300 hover:border-aqua-500/50 hover:bg-aqua-500/10 hover:text-aqua-400"
    >
      <LinkedInIcon className="h-4 w-4" />
      LinkedIn
      <span aria-hidden="true">↗</span>
      <span className="sr-only">profile of {member.name}</span>
    </a>
  );
}
 
export function FoundersEditorial({
  variant = "compact",
}: {
  variant?: "compact" | "detailed";
}) {
  const [lead, ...rest] = team;
  const roleLine = (member: TeamMember) =>
    variant === "detailed" || !member.coFounder
      ? member.role
      : `Co-Founder & ${member.shortRole}`;
 
  return (
    <div className="space-y-4">
      <Reveal>
        <article className="group grid items-stretch gap-0 border border-line bg-white/[0.02] transition duration-300 hover:border-aqua-500/35 lg:grid-cols-12">
          <Portrait
            member={lead}
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="aspect-[4/3] lg:col-span-4 lg:aspect-auto lg:min-h-[30rem]"
          />
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-8">
            <span className="font-mono text-xs tracking-[0.2em] text-fog uppercase">
              01
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">
              {lead.name}
            </h3>
            <p className="mt-2 text-sm text-aqua-400">{roleLine(lead)}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-fog">
              {lead.responsibility}
            </p>
            <div className="mt-8">
              <LinkedInButton member={lead} />
            </div>
          </div>
        </article>
      </Reveal>
 
      <div className="grid gap-4 md:grid-cols-3">
        {rest.map((member, index) => (
          <Reveal key={member.name} delay={(index + 1) * 90} className="h-full">
            <article className="card-lift group flex h-full flex-col overflow-hidden border border-line bg-white/[0.02] hover:border-aqua-500/35">
              <Portrait
                member={member}
                sizes="(max-width: 768px) 100vw, 32vw"
                className="aspect-square sm:aspect-[5/4]"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="font-mono text-xs tracking-[0.2em] text-fog uppercase">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-chalk">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-aqua-400">
                  {roleLine(member)}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                  {member.responsibility}
                </p>
                {member.linkedin ? (
                  <div className="mt-8">
                    <LinkedInButton member={member} />
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}