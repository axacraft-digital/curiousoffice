import {
  siteConfig,
  focusAreas,
  ventures,
  acquisitions,
  investments,
  contact,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-24 sm:py-32 md:py-40">
      {/* Header */}
      <header className="mb-24 sm:mb-32">
        <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-4 font-serif text-lg sm:text-xl italic text-muted">
          {siteConfig.tagline}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Part builder, part investor. We work alongside founders from the
          earliest stages — providing capital, strategic guidance, and decades
          of experience building digital products. Founded and operated by{" "}
          <a
            href="https://www.kellysmith.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:decoration-foreground text-foreground"
          >
            Kelly Smith
          </a>
          . Based in Boise, Idaho.
        </p>
      </header>

      {/* Focus */}
      <section className="mb-24 sm:mb-32">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-widest text-muted">
          Current Focus
        </h2>
        <ul className="space-y-2">
          {focusAreas.map((area) => (
            <li key={area} className="text-base">
              {area}
            </li>
          ))}
        </ul>
      </section>

      {/* Ventures */}
      <section className="mb-24 sm:mb-32">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-widest text-muted">
          Current Ventures
        </h2>
        <div className="space-y-6">
          {ventures.map((venture) => (
            <div key={venture.name}>
              <p className="text-base font-medium">{venture.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio — Acquisitions */}
      <section className="mb-16 sm:mb-20">
        <h2 className="mb-6 font-serif text-lg sm:text-xl tracking-tight">
          Acquisitions
        </h2>
        <div className="divide-y divide-border">
          {acquisitions.map((company) => (
            <div
              key={company.name}
              className="flex items-baseline justify-between gap-4 py-2.5"
            >
              <span className="text-sm">{company.name}</span>
              <span className="text-sm text-muted">
                {company.acquirer}
                {company.year && `, ${company.year}`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio — Investments */}
      <section className="mb-24 sm:mb-32">
        <h2 className="mb-6 font-serif text-lg sm:text-xl tracking-tight">
          Investments
        </h2>
        <div className="divide-y divide-border">
          {investments.map((company) => (
            <div
              key={company.name}
              className="flex items-baseline justify-between gap-4 py-2.5"
            >
              <span className="text-sm">{company.name}</span>
              {company.note && (
                <span className="text-sm text-muted">{company.note}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mb-24 sm:mb-32">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-widest text-muted">
          Approach
        </h2>
        <p className="text-base leading-relaxed text-muted">
          We work alongside founders daily, not from the sidelines. Strategic
          guidance, network access, recruiting support, board membership — the
          work that matters after the check clears. Three decades of building
          digital products, applied where it counts.
        </p>
      </section>

      {/* Connect */}
      <section className="mb-24 sm:mb-32">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-widest text-muted">
          Connect
        </h2>
        <div className="space-y-2 text-base">
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {contact.email}
            </a>
          </p>
          {contact.links.map((link) => (
            <p key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {link.label}
                <span className="ml-1 text-muted">&#8599;</span>
              </a>
            </p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-muted">
        <p>&copy; 2026 Curious Office</p>
      </footer>
    </main>
  );
}
