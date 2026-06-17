import Link from "next/link";

export default function FirstLookPromo() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
      id="firstlook-promo"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
              The First Look
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4"
              style={{ color: "var(--navy)" }}
            >
              Read the opening of the book before you buy.
            </h2>
            <p
              className="font-serif italic text-base md:text-lg leading-relaxed mb-4"
              style={{ color: "var(--ink-soft)" }}
            >
              A free PDF — the foreword, the introduction, the full first
              chapter, the first 1,000 words of the Guinness Nigeria case
              study, and the maturity-model framework. Roughly 40 pages.
              Enough to know whether the rest of the book is for you.
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              No marketing emails. Your address joins a quarterly practitioner
              note from the author — one substantive piece per quarter, nothing
              more. Unsubscribe in one click.
            </p>
          </div>

          <div
            className="bg-white rounded-lg p-7 md:p-8"
            style={{ border: "1px solid var(--line)", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
          >
            <h3 className="font-serif text-xl md:text-2xl mb-2" style={{ color: "var(--navy)" }}>
              Send me the First Look
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
              Free PDF · 40 pages · delivered to your inbox in under a minute.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Foreword + introduction + the operating credo.",
                "Chapter 1 in full — Fleet Management & Telematics Foundations.",
                "Opening of the Guinness Nigeria case study (first 1,000 words).",
                "The maturity-model framework as a one-page diagnostic.",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed pl-5 relative"
                  style={{ color: "var(--ink-soft)", borderBottom: "1px solid var(--line)", paddingBottom: "8px" }}
                >
                  <span
                    className="absolute left-0 top-2.5 w-3 h-0.5 inline-block"
                    style={{ background: "var(--navy)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/fleet/firstlook"
              className="block text-center rounded-md font-bold py-3.5 text-sm border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Get the First Look — free
            </Link>
            <p className="text-xs text-center mt-3" style={{ color: "var(--muted)" }}>
              Corporate email preferred · one-click unsubscribe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
