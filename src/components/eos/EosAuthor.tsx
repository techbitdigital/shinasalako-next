import Link from "next/link";

export default function EosAuthor() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
              The author
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)" }}>
              Shina Salako
            </h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed mb-5" style={{ color: "var(--ink-soft)" }}>
              <p>
                Started his first business in 2009 with ₦30,000 gifted by a
                neighbour — money originally intended for rent, redirected with
                the neighbour&apos;s blessing into a business. Built and sold
                across SMS, fleet management, and consulting over the next
                eighteen years. Postgraduate studies at Liverpool (2014) and
                Lagos Business School (2019). Joined the Maxwell Leadership
                team in 2022.
              </p>
              <p>
                The Entrepreneur Operating System is what he wishes someone
                had handed him in 2009.
              </p>
            </div>
            <Link
              href="/entrepreneur-os/about"
              className="text-sm font-semibold"
              style={{ color: "var(--navy)" }}
            >
              Read the full story →
            </Link>
          </div>

          <div
            className="rounded-lg p-7 md:p-8"
            style={{ background: "var(--cream)" }}
          >
            <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--amber)" }}>
              In one sentence
            </p>
            <p
              className="font-serif italic text-xl md:text-2xl leading-relaxed"
              style={{ color: "var(--navy)", margin: 0 }}
            >
              &ldquo;I write for the founder I was in 2009, the one who
              thought hustle was strategy.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
