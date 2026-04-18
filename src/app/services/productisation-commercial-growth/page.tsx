import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productisation & Commercial Growth",
  description:
    "Resolve Advisory & Services helps businesses refine offers, sharpen value propositions, and support commercial growth.",
};

const offerings = [
  "Product ideation and validation",
  "Market opportunity analysis",
  "Concept design and business case",
  "Prototyping and customer validation",
  "Merchandising strategy and ecosystem design",
  "Design-to-production go-to-market support",
  "B2B and B2C commercial modelling",
  "Partnership governance, rollout execution, and vendor sourcing",
];

const outcomes = [
  "Clearer service offers that are easier to sell",
  "Stronger commercial messaging and positioning",
  "Focused growth initiatives linked to real opportunities",
];

export default function ProductisationCommercialGrowthPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white px-6 py-10 shadow-[0_16px_40px_rgba(77,63,47,0.08)] sm:px-8">
        <p className="eyebrow text-[color:var(--text-muted)]">
          Services / Productisation & Commercial Growth
        </p>
        <h1 className="section-title max-w-3xl">
          Shape stronger offers and build a clearer path to commercial growth.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[color:var(--text-body)]">
          This service line is designed for businesses that need stronger offer
          definition, sharper commercial clarity, and better alignment between
          what they deliver and how they grow.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Value Proposition</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            Help businesses translate expertise into offers that are easier to
            explain, more consistent to deliver, and better positioned for
            growth.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Example Outcome</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            A service-led business moves from bespoke selling toward a clearer
            proposition structure that improves confidence in client
            conversations and supports revenue growth.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Key Offerings</h2>
          <div className="mt-5 grid gap-4">
            {offerings.map((offering) => (
              <div
                key={offering}
                className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(255,255,255,0.72)] px-4 py-4 text-base leading-7 text-[color:var(--text-body)]"
              >
                {offering}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">What This Can Deliver</h2>
          <div className="mt-5 grid gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(255,255,255,0.72)] px-4 py-4 text-base leading-7 text-[color:var(--text-body)]"
              >
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-[color:var(--surface-dark)] px-6 py-10 text-stone-50 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="section-title !text-white">
              Want to turn expertise into clearer offers and stronger growth?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Start with a short conversation about your current offer, market
              position, or commercial challenge.
            </p>
          </div>
          <div>
            <Link href="/contact" className="btn-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
