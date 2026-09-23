import { team } from "@/lib/lib/content";
import { Reveal } from "@/components/reveal";

export function TeamEditorial() {
  return (
    <div className="space-y-4">
      <Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={member.name} className="text-center">
              <div className="mb-3 inline-block h-32 w-32 overflow-hidden rounded-full border-2 border-sand-300 bg-sand-100 transition-transform duration-300 hover:scale-110 hover:border-aqua-400/50">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-[50%_18%] transition-all duration-300"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-sand-200">
                    <span className="font-display text-xl font-semibold tracking-tight text-sand-600">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-sand-900">
                {member.coFounder ? member.name.split(" ").slice(-1)[0] : member.name.split(" ")[0]}
              </h3>
              <p className="mt-1 text-sm text-aqua-600">{member.shortRole}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
