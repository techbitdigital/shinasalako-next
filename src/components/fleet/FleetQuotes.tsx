import { fleetQuotes } from "@/lib/data/fleet";

export default function FleetQuotes() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--navy)", borderBottom: "1px solid rgba(235,243,251,0.1)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
          From the book
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-10"
          style={{ color: "#fff", maxWidth: "780px" }}
        >
          Three sentences that frame the work.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetQuotes.map((q) => (
            <blockquote
              key={q.source}
              className="m-0 p-7"
              style={{
                background: "rgba(235,243,251,0.06)",
                borderLeft: "3px solid var(--cream)",
              }}
            >
              <p
                className="font-serif italic text-base md:text-lg leading-relaxed mb-4"
                style={{ color: "#fff" }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <span
                className="text-xs tracking-widest uppercase font-semibold"
                style={{ color: "var(--cream)" }}
              >
                {q.source}
              </span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
