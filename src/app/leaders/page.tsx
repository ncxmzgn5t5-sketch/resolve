import type { Metadata } from "next";
import { leaders } from "@/content/leaders";

export const metadata: Metadata = {
  title: "Leaders",
  description:
    "Meet the leadership team behind Resolve Advisory & Services.",
};

export default function LeadersPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">Leaders</p>
          <h1 className="section-title mt-5 max-w-2xl">
            The people behind Resolve.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--text-body)]">
          Resolve is led by partners with deep experience across strategy,
          transformation, operating models, capability development, and business
          optimisation.
        </p>
      </section>

      <section className="mt-12 grid gap-8">
        {leaders.map((leader) => (
          <article
            key={leader.name}
            className="grid gap-8 rounded-[2rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7 shadow-[0_16px_40px_rgba(40,34,56,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="eyebrow">{leader.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-[color:var(--text-strong)]">
                {leader.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-[color:var(--brand-primary)]">
                {leader.title}
              </p>
              <div className="mt-5 grid gap-4">
                {leader.fullBio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-base leading-7 text-[color:var(--text-body)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.72)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                  Specialisations
                </p>
                <div className="mt-4 grid gap-3">
                  {leader.specialisations.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl bg-[rgba(95,88,114,0.1)] px-4 py-3 text-sm leading-6 text-[color:var(--text-body)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.72)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                  Industries
                </p>
                <div className="mt-4 grid gap-3">
                  {leader.industries.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl bg-[rgba(95,88,114,0.1)] px-4 py-3 text-sm leading-6 text-[color:var(--text-body)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
