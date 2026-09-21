"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const inquiryType = String(formData.get("inquiryType") ?? "General Inquiry");
    const message = String(formData.get("message") ?? "");
    const subject = `${inquiryType} from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nInquiry type: ${inquiryType}\n\n${message}`;

    window.location.href = `mailto:mvmholdco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[12px] border border-[#1F2937] bg-[#12171A] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[#9CA3AF]">
          <span className="mb-2 block">Name</span>
          <input name="name" autoComplete="name" className="w-full rounded-lg border border-[#1F2937] bg-[#0A0E0C] px-3 py-2 text-[#F5F5F5] outline-none ring-0" required />
        </label>
        <label className="text-sm text-[#9CA3AF]">
          <span className="mb-2 block">Email</span>
          <input name="email" type="email" autoComplete="email" className="w-full rounded-lg border border-[#1F2937] bg-[#0A0E0C] px-3 py-2 text-[#F5F5F5] outline-none ring-0" required />
        </label>
      </div>
      <label className="text-sm text-[#9CA3AF]">
        <span className="mb-2 block">Inquiry Type</span>
        <select name="inquiryType" className="w-full rounded-lg border border-[#1F2937] bg-[#0A0E0C] px-3 py-2 text-[#F5F5F5] outline-none ring-0">
          <option>Partnership</option>
          <option>Investment</option>
          <option>General Inquiry</option>
          <option>Careers</option>
        </select>
      </label>
      <label className="text-sm text-[#9CA3AF]">
        <span className="mb-2 block">Message</span>
        <textarea name="message" rows={5} className="w-full rounded-lg border border-[#1F2937] bg-[#0A0E0C] px-3 py-2 text-[#F5F5F5] outline-none ring-0" required />
      </label>
      <button type="submit" className="rounded-full bg-[#16D66B] px-5 py-3 text-sm font-semibold text-[#07110A] transition hover:bg-[#22C55E]">
        Send Inquiry
      </button>
      {submitted ? <p className="text-sm text-[#22D3EE]">Your email app should open with the inquiry ready to send.</p> : null}
    </form>
  );
}
