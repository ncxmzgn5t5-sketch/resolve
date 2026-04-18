import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[rgba(255,255,255,0.62)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-4">
          <div className="relative h-11 w-11 overflow-hidden bg-transparent">
            <Image
              src="/resolve-mark.png"
              alt="Resolve Advisory & Services logo"
              fill
              className="object-contain p-1"
              sizes="44px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              Resolve Advisory & Services
            </p>
            <p className="mt-1 text-sm text-[color:var(--text-body)]">
              Insight. Structure. Results.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-semibold text-[color:var(--text-body)]">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/leaders">Leaders</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
