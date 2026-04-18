import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy & Transformation",
  description:
    "Resolve Advisory & Services supports strategy development and transformation execution with practical, outcome-led consulting.",
};

const offerings = [
  "Business strategy and transformation advisory",
  "Value chain and process optimisation",
  "Target Operating Model development and refinement",
  "Go-to-market strategic planning",
  "PMO and transformation office setup",
  "Executive steering and reporting frameworks",
  "Leadership alignment and enablement",
  "Strategic communications and change management frameworks",
];

const outcomes = [
  "Sharper strategic focus across leadership teams",
  "Governance structures that support execution",
  "Clearer transformation priorities and measurable performance uplift",
];

export default function StrategyTransformationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white px-6 py-10 shadow-[0_16px_40px_rgba(77,63,47,0.08)] sm:px-8">
        <p className="eyebrow text-[color:var(--text-muted)]">Services / Strategy & Transformation</p>
        <h1 className="section-title max-w-3xl">
          Support for businesses navigating change, growth, or strategic reset.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[color:var(--text-body)]">
          This service line helps leaders move from broad ambition into clearer
          business priorities, aligned decision-making, and practical execution
          plans. The emphasis is on making strategy useful, not just well
          written.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Value Proposition</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            Help leadership teams create clarity around where to focus, how to
            sequence change, and what needs to happen for strategy to become
            operational reality.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--text-strong)]">Example Outcome</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
            A growing business with competing priorities gains a focused roadmap,
            clearer accountability, and a more confident leadership narrative for
            change.
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
              Looking for strategy support that is practical and grounded?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Share what you are working through and we can discuss how support
              might be shaped around your situation.
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
