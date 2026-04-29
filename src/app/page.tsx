import Image from "next/image";
import Link from "next/link";
import { leaders } from "@/content/leaders";

const serviceHighlights = [
  {
    title: "Strategy & Transformation",
    description:
      "Turn strategic intent into operational reality through advisory, governance, and change leadership support.",
    href: "/services/strategy-transformation",
  },
  {
    title: "Capability Development & Corporate Training",
    description:
      "Strengthen leadership and workforce capability through HRDC-claimable training, facilitation, and targeted development.",
    href: "/services/capability-development-corporate-training",
  },
  {
    title: "Productisation & Commercial Growth",
    description:
      "Convert strategic opportunities into market-ready offers with stronger commercial structure and go-to-market support.",
    href: "/services/productisation-commercial-growth",
  },
];

const credibilityPoints = [
  "Structured advisory expertise with practical transformation support",
  "Focus on systems, people, and behaviours that sustain results",
  "Service lines designed around execution, capability, and growth",
];

const pillars = [
  {
    eyebrow: "01",
    title: "Strategy Into Capability",
    description:
      "We bridge the gap between ideas and outcomes by developing scalable frameworks that empower teams to perform at their best.",
  },
  {
    eyebrow: "02",
    title: "People Who Can Lead Change",
    description:
      "We strengthen leadership and workforce capabilities so organisations can evolve confidently in a rapidly changing environment.",
  },
  {
    eyebrow: "03",
    title: "Growth With Staying Power",
    description:
      "We convert strategic opportunities into market-ready solutions that deliver meaningful impact for businesses, people, and communities.",
  },
];

export default function Home() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92)_0%,rgba(245,243,247,0.92)_34%,rgba(236,232,240,0.92)_100%)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">
              Strategic Consulting and Training
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-6xl">
              Ambition into execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-body)]">
              Resolve Advisory & Services is a strategic consulting and training
              firm focused on helping leaders design clear strategies, build the
              capabilities needed to deliver them, and innovate solutions that
              drive measurable performance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border-soft)] shadow-[0_24px_60px_rgba(40,34,56,0.16)]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(33,28,41,0.2),rgba(95,88,114,0.45))]" />
            <Image
              src="/hero-consulting.png"
              alt="Consulting team in a strategy workshop"
              width={3715}
              height={2477}
              className="h-full min-h-[420px] w-full object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,20,31,0.12),rgba(24,20,31,0.64))]" />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 rounded-[1.8rem] border border-white/12 bg-[rgba(23,21,28,0.6)] p-6 text-stone-50 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-accent)]">
                Why Clients Engage
              </p>
              {credibilityPoints.map((point) => (
                <p key={point} className="text-base leading-7 text-stone-100/92">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[color:var(--surface-dark)] px-6 py-8 text-stone-50 shadow-[0_24px_60px_rgba(40,34,56,0.18)] sm:grid-cols-3 sm:px-8">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
                {pillar.eyebrow}
              </p>
              <p className="mt-2 text-xl font-semibold text-stone-50">{pillar.title}</p>
              <p className="mt-3 text-base leading-7 text-stone-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Services</p>
          <h2 className="section-title max-w-2xl">Three service lines.</h2>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--text-body)]">
            Resolve supports leaders across strategy and transformation,
            capability development and corporate training, and productisation
            with commercial growth support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7 shadow-[0_16px_40px_rgba(40,34,56,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                Business Line
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--text-strong)]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
                {service.description}
              </p>
              <Link href={service.href} className="mt-6 inline-flex text-sm font-semibold text-[color:var(--brand-primary-strong)]">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[rgba(255,255,255,0.58)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="section-title max-w-xl">How Resolve works.</h2>
            <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-[var(--border-soft)] shadow-[0_20px_45px_rgba(40,34,56,0.08)]">
              <Image
                src="/approach-blocks.png"
                alt="Hand placing a block to complete a structure"
                width={1462}
                height={906}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(95,88,114,0.12),rgba(95,88,114,0.26))]" />
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                01 Discover
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--text-body)]">
                Understand the business context, current priorities, and where
                support is most valuable.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                02 Shape
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--text-body)]">
                Translate complexity into a focused workplan, meaningful
                decisions, and clear delivery priorities.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                03 Deliver
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--text-body)]">
                Translate strategy into systems, people, and behaviours that
                sustain long-term results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div>
          <p className="eyebrow">Leaders</p>
          <h2 className="section-title mt-4 max-w-xl">Experienced, hands-on leadership.</h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {leaders.map((member) => (
            <article
              key={member.name}
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[color:var(--surface-card)] p-7 shadow-[0_16px_40px_rgba(40,34,56,0.08)]"
            >
              <p className="eyebrow">Leadership</p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--text-strong)]">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-primary)]">
                {member.title}
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-body)]">
                {member.summary}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/leaders" className="btn-secondary">
            See More
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] bg-[color:var(--surface-dark)] px-6 py-10 text-stone-50 shadow-[0_24px_60px_rgba(40,34,56,0.18)] sm:px-8 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-stone-400">Contact</p>
            <h2 className="section-title max-w-2xl !text-white">
              Start the conversation.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              Share a short summary of your needs and we will follow up on the
              most relevant next step for your organisation.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link href="/contact" className="btn-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
