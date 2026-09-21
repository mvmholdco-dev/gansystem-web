import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-[#F5F5F5] sm:text-5xl">Let’s talk about pilots, partnerships, and product conversations.</h1>
            <p className="mt-6 text-lg leading-8 text-[#9CA3AF]">Whether you are exploring a partnership, an investment conversation, or a general inquiry, we would be glad to hear from you.</p>
            <div className="mt-8 rounded-[16px] border border-[#1F2937] bg-[#12171A] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#16D66B]">Email</p>
              <a href="mailto:mvmholdco@gmail.com" className="mt-3 inline-flex text-lg text-[#F5F5F5]">mvmholdco@gmail.com</a>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">Founders</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#9CA3AF]">
                <a href="https://www.linkedin.com/in/maxwell-onah-327335290" className="transition hover:text-[#16D66B]">Maxwell</a>
                <a href="https://www.linkedin.com/in/jvcbyte" className="transition hover:text-[#16D66B]">Valentine</a>
                <a href="https://www.linkedin.com/in/codeandbe" className="transition hover:text-[#16D66B]">Majid</a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
