import { fleetInsideParts } from "@/lib/data/fleet";

export default function WhatsInside() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
      id="inside"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
          What is inside
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8"
          style={{ color: "var(--navy)", maxWidth: "780px" }}
        >
          Approximately 270 pages. Three parts. 27 chapters. Nineteen
          practitioner appendices.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <p
              className="font-serif italic text-base md:text-lg leading-relaxed mb-5"
              style={{ color: "var(--ink-soft)" }}
            >
              A practical playbook built across fifteen years of telematics and
              logistics operations — written from the seat of the embedded
              service provider whose teams sit inside the cargo-owner's premises
              and produce the daily reports that let leadership manage their
              transporters with independent visibility.
            </p>
            <p
              className="font-serif italic text-base md:text-lg leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              The book is grounded in real engagements — including the
              twelve-year Guinness Nigeria fleet management programme — and
              built to be read cover-to-cover by new leaders or referenced
              chapter-by-chapter by working practitioners.
            </p>
          </div>

          <ul className="divide-y" style={{ borderColor: "rgba(31,58,95,0.12)" }}>
            {fleetInsideParts.map((part) => (
              <li key={part.num} className="py-4 grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-4 items-baseline">
                <span
                  className="text-xs tracking-widest uppercase font-bold"
                  style={{ color: "var(--amber)" }}
                >
                  {part.num}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                  {part.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
