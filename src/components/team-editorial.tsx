import { team } from "@/lib/lib/content";
import { Reveal } from "@/components/reveal";

export function TeamEditorial() {
  return (
    <div className="space-y-4">
      <Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={member.name} className="text-center">
              <div className="mb-3 inline-block h-24 w-24 overflow-hidden rounded-full border-2 border-line bg-ocean-800">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-[50%_18%] grayscale-[35%]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-ocean-900">
                    <span className="font-display text-xl font-semibold tracking-tight text-line-strong">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-chalk">
                {member.coFounder ? member.name.split(" ").slice(-1)[0] : member.name.split(" ")[0]}
              </h3>
              <p className="mt-1 text-sm text-aqua-300">{member.shortRole}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
