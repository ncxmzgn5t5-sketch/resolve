import Link from "next/link";
import type { Metadata } from "next";

const serviceCards = [
  {
    title: "Strategy & Transformation",
    summary:
      "Turning strategic intent into operational reality with measurable performance uplift.",
    href: "/services/strategy-transformation",
    points: ["Strategy advisory", "Governance", "Change leadership"],
  },
  {
    title: "Capability Development & Corporate Training",
    summary:
      "Building the capabilities your organisation needs to outperform tomorrow.",
    href: "/services/capability-development-corporate-training",
    points: ["HRDC-claimable training", "Leadership development", "TNA support"],
  },
  {
    title: "Productisation & Commercial Growth",
    summary:
      "Transforming profitable ideas into scalable commercial engines.",
    href: "/services/productisation-commercial-growth",
    points: ["Product ideation", "Commercial modelling", "Partner enablement"],
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the consultancy services offered by Resolve Advisory & Services across strategy, capability development, and commercial growth.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <p className="eyebrow text-[color:var(--text-muted)]">Services</p>
          <h1 className="section-title mt-5 max-w-2xl">
            Insight, structure, results in action.
          </h1>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {serviceCards.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7 shadow-[0_16px_40px_rgba(40,34,56,0.08)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              Service Line
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--text-strong)]">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
              {service.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.points.map((point) => (
                <span
                  key={point}
                  className="rounded-full bg-[rgba(95,88,114,0.12)] px-3 py-2 text-sm text-[color:var(--brand-primary-strong)]"
                >
                  {point}
                </span>
              ))}
            </div>
            <Link
              href={service.href}
              className="btn-primary mt-auto self-start px-5 py-3 text-sm"
              style={{ marginTop: "2.5rem" }}
            >
              View Service Details
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[color:var(--surface-dark)] px-6 py-10 text-stone-50 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-stone-400">Engagements</p>
            <h2 className="section-title mt-4 !text-white">
              Support can be tailored to short advisory sprints or broader
              delivery programmes.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              The approach is intentionally flexible so the right level of support
              can be shaped around business priorities, leadership capacity, and
              pace of change.
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
