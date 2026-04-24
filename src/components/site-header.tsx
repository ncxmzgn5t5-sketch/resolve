import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  {
    href: "/services/strategy-transformation",
    label: "Strategy & Transformation",
  },
  {
    href: "/services/capability-development-corporate-training",
    label: "Capability Development & Corporate Training",
  },
  {
    href: "/services/productisation-commercial-growth",
    label: "Productisation & Commercial Growth",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[color:var(--surface-overlay)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Link href="/" className="flex max-w-sm items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden bg-transparent">
            <Image
              src="/resolve-mark.png"
              alt="Resolve Advisory & Services logo"
              fill
              className="object-contain"
              sizes="64px"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              Resolve Advisory & Services
            </p>
            <p className="mt-2 font-serif text-2xl leading-none tracking-tight text-[color:var(--text-strong)]">
              Insight. Structure. Results.
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[color:var(--text-body)] transition hover:border-[var(--border-strong)] hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-strong)]"
          >
            Home
          </Link>

          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[color:var(--text-body)] transition hover:border-[var(--border-strong)] hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-strong)]"
            >
              Services
            </Link>

            <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-[320px] rounded-[1.5rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.96)] p-3 shadow-[0_20px_50px_rgba(40,34,56,0.12)] backdrop-blur">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-[1rem] px-4 py-3 text-sm font-semibold text-[color:var(--text-body)] transition hover:bg-[rgba(95,88,114,0.1)] hover:text-[color:var(--text-strong)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/leaders"
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[color:var(--text-body)] transition hover:border-[var(--border-strong)] hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-strong)]"
          >
            Leaders
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[color:var(--text-body)] transition hover:border-[var(--border-strong)] hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-strong)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
