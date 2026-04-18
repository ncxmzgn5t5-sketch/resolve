import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Resolve Advisory & Services to discuss strategy, capability development, or commercial growth support.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-[color:var(--text-muted)]">Contact</p>
          <h1 className="section-title mt-5 max-w-xl">
            Share your enquiry and we will follow up with the next step.
          </h1>
        
        
        </div>

        <section className="rounded-[2rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-6 shadow-[0_16px_40px_rgba(40,34,56,0.08)] sm:p-8">
          <ContactForm />
        </section>
      </section>
    </main>
  );
}
