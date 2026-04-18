import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Development & Corporate Training",
  description:
    "Resolve Advisory & Services helps organisations strengthen capability through corporate training, workshops, and learning-led consulting support.",
};

const offerings = [
  "HRDC-claimable corporate training",
  "Agile mindset and delivery fundamentals",
  "Leadership and high-performance team development",
  "Programme and project management training",
  "Training Needs Analysis",
  "Facilitation and coaching for transformation success",
];

const outcomes = [
  "Stronger confidence in leaders and teams",
  "More consistent application of key skills",
  "Learning experiences linked to business priorities",
];

export default function CapabilityDevelopmentPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white px-6 py-10 shadow-[0_16px_40px_rgba(77,63,47,0.08)] sm:px-8">
        <p className="eyebrow text-[color:var(--text-muted)]">
          Services / Capability Development & Corporate Training
        </p>
        <h1 className="section-title max-w-3xl">
          Build stronger internal capability with focused, business-relevant
          learning.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[color:var(--text-body)]">
          This service line helps organisations improve capability through
          practical learning design, facilitated workshops, and training that
          connects directly to performance, leadership, and change priorities.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Value Proposition</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            Equip teams and leaders with practical knowledge, structured
            development experiences, and learning interventions that feel
            relevant from the start.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Example Outcome</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            A company launching a new operating model supports managers with
            targeted training so the change lands with stronger consistency and
            confidence across teams.
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
              Need training and development support shaped around real business
              priorities?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Reach out with your current need and we can discuss the right
              learning or capability solution.
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
