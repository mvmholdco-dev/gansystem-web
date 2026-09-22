import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { LinkedInIcon } from "@/components/icons";
import { company, founders } from "@/lib/lib/content";
 
export const metadata: Metadata = {
  title: "Contact | Gansystem Limited",
  description:
    "Talk to the GanSystems founders about demos, pilots, partnerships, and investment conversations.",
};
 
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about pilots, partnerships, and product conversations"
        lead="Whether you are exploring a partnership, an investment conversation, or a general inquiry, we would be glad to hear from you."
      />
 
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="border border-line bg-white/[0.02] p-7 sm:p-10">
              <h2 className="font-display text-xl font-semibold tracking-tight text-chalk">
                Request a demo
              </h2>
              <p className="mt-2 text-sm text-fog">
                Tell us a little about your farm or your interest and we will
                get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
 
            <div className="grid gap-px self-start overflow-hidden border border-line bg-line">
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Email
                </h2>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 block text-base text-chalk underline-offset-4 transition hover:text-leaf-400 hover:underline"
                >
                  {company.email}
                </a>
              </div>
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Founders
                </h2>
                <ul className="mt-4 space-y-3">
                  {founders.map((founder) => (
                    <li key={founder.name}>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-fog transition hover:text-leaf-400"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                        {founder.name} — {founder.shortRole}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink-950 p-7">
                <h2 className="text-[0.68rem] uppercase tracking-[0.24em] text-leaf-400">
                  Prototype
                </h2>
                <a
                  href={company.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm text-chalk transition hover:text-leaf-400"
                >
                  View the live GanSystems prototype ↗
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}