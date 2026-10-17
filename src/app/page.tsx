import {
  siteConfig,
  focusAreas,
  ventures,
  acquisitions,
  investments,
  contact,
} from "@/lib/data";
import { LocalTime } from "./local-time";

const link =
  "underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground";

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <h2 className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-subtle">
      <span className="tabular-nums">{index}</span>
      <span>{children}</span>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </h2>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="ml-1 inline-block text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
    >
      &#8599;
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-24 sm:py-32 md:py-40">
      {/* Header */}
      <header className="mb-24 sm:mb-32">
        <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-4 font-serif text-lg sm:text-xl italic text-muted text-balance">
          {siteConfig.tagline}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          We believe the best seed stage investor partners are builders
          themselves. We work alongside founders from the earliest stages —
          providing capital, strategic guidance, and decades of experience
          building digital products. Founded and operated by{" "}
          <a
            href="https://www.kellysmith.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${link} text-foreground`}
          >
            Kelly Smith
          </a>
          . Based in Boise, Idaho.
        </p>
      </header>

      {/* Focus */}
      <section className="mb-24 sm:mb-32">
        <SectionLabel index="01">Current Focus</SectionLabel>
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
        <SectionLabel index="02">Current Ventures</SectionLabel>
        <div className="space-y-6">
          {ventures.map((venture) => (
            <div key={venture.name}>
              {venture.url ? (
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-base font-medium underline decoration-line underline-offset-4 transition-colors group-hover:decoration-foreground">
                    {venture.name}
                  </span>
                  <Arrow />
                  <span className="mt-1 block text-sm leading-relaxed text-muted transition-colors group-hover:text-foreground">
                    {venture.description}
                  </span>
                </a>
              ) : (
                <>
                  <p className="text-base font-medium">{venture.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {venture.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-24 sm:mb-32">
        <SectionLabel index="03">Portfolio</SectionLabel>

        <h3 className="mb-4 font-serif text-lg sm:text-xl tracking-tight">
          Acquisitions
        </h3>
        <div className="mb-16 divide-y divide-border sm:mb-20">
          {acquisitions.map((company) => (
            <div
              key={company.name}
              className="flex items-baseline justify-between gap-4 py-2.5"
            >
              <span className="text-sm">{company.name}</span>
              <span className="font-serif text-[15px] italic text-muted">
                {company.acquirer}
                {company.year && (
                  <span className="not-italic font-sans text-sm tabular-nums text-subtle">
                    {" "}
                    {company.year}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        <h3 className="mb-4 font-serif text-lg sm:text-xl tracking-tight">
          Investments
        </h3>
        <div className="divide-y divide-border">
          {investments.map((company) => (
            <div
              key={company.name}
              className="flex items-baseline justify-between gap-4 py-2.5"
            >
              <span className="text-sm">{company.name}</span>
              {company.note && (
                <span className="text-right text-sm text-muted">
                  {company.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mb-24 sm:mb-32">
        <SectionLabel index="04">Approach</SectionLabel>
        <p className="text-base leading-relaxed text-muted">
          Everything works better when you put builders next to builders. We
          don&apos;t make slide decks or tell founders how to run their company.
          If we can&apos;t improve the design, the code, or the product
          directly, we stay out of the way.{" "}
          <span className="font-serif text-[17px] italic text-foreground">
            The best epiphanies happen in the weeds — in the repo, in the
            prototype, in the actual work.
          </span>
        </p>
      </section>

      {/* Connect */}
      <section className="mb-24 sm:mb-32">
        <SectionLabel index="05">Connect</SectionLabel>
        <div className="space-y-2 text-base">
          <p>
            <a href={`mailto:${contact.email}`} className={link}>
              {contact.email}
            </a>
          </p>
          {contact.links.map((item) => (
            <p key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${link}`}
              >
                {item.label}
                <Arrow />
              </a>
            </p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-xs text-subtle">
        <p>
          &copy; 2026 Curious Office<span aria-hidden> · </span>Boise, Idaho
          <LocalTime />
        </p>
      </footer>
    </main>
  );
}
