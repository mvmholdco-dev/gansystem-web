"use client";
 
import { useState } from "react";
import type { FormEvent } from "react";
import { company } from "@/lib/lib/content";
 
const inquiryTypes = [
  "Partnership",
  "Investment",
  "General Inquiry",
  "Careers",
  "Request a Demo",
];
 
const fieldClass =
  "mt-2.5 w-full rounded-sm border border-line bg-white/[0.03] px-4 py-3 text-sm text-chalk placeholder:text-fog/70 transition duration-200 hover:border-line-strong focus:border-aqua-300/60 focus:bg-white/[0.05]";
 
export function ContactForm() {
  const [sent, setSent] = useState(false);
 
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("inquiry") ?? "");
    const message = String(data.get("message") ?? "");
 
    const subject = `${type} — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nInquiry type: ${type}\n\n${message}`;
 
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
 
  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-chalk">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-chalk">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>
 
      <div>
        <label htmlFor="inquiry" className="text-sm text-chalk">
          Inquiry type
        </label>
        <select id="inquiry" name="inquiry" className={fieldClass} defaultValue={inquiryTypes[0]}>
          {inquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-ocean-900">
              {type}
            </option>
          ))}
        </select>
      </div>
 
      <div>
        <label htmlFor="message" className="text-sm text-chalk">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your farm, your timeline, or what you would like to see in a demo."
          className={fieldClass}
        />
      </div>
 
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-sm bg-aqua-400 px-6 text-sm font-medium text-ocean-950 shadow-[0_16px_36px_-20px_rgba(22,214,107,0.9)] transition duration-200 hover:bg-aqua-400"
        >
          Send Inquiry
        </button>
        <p aria-live="polite" className="text-sm text-fog">
          {sent
            ? `Your email client should open a draft to ${company.email}.`
            : `Opens a pre-filled email to ${company.email}.`}
        </p>
      </div>
    </form>
  );
}