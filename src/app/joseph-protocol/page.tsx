import type { Metadata } from "next";
import Link from "next/link";
import GlobalBar from "@/components/global/GlobalBar";

export const metadata: Metadata = {
  title: "The Joseph Protocol — Shina Salako",
  description:
    "A framework for the phases every builder moves through. Name the phase you are in and what it asks of you.",
  openGraph: {
    title: "The Joseph Protocol",
    description:
      "For the builder in a long season — naming the phase you are in and what it asks of you.",
    url: "https://shinasalako.com/joseph-protocol",
  },
};

const phases = [
  {
    name: "The Pit",
    subtitle: "Phase 1",
    desc: "You are in a season of loss, confusion, or betrayal. The work here is not to escape quickly — it is to stay intact.",
  },
  {
    name: "The House",
    subtitle: "Phase 2",
    desc: "You have found stability and are building competence. The work here is faithfulness in the small things.",
  },
  {
    name: "The Prison",
    subtitle: "Phase 3",
    desc: "You did everything right and it still went wrong. The work here is to keep your character while waiting.",
  },
  {
    name: "The Palace",
    subtitle: "Phase 4",
    desc: "You have been elevated. The work here is stewardship — holding authority without losing the lessons of the earlier phases.",
  },
];

export default function JosephProtocolPage() {
  return (
    <main>
      <GlobalBar />

      {/* Hero */}
      <header
        className="py-16 md:py-24"
        style={{ background: "var(--cream)" }}
      >
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div style={{ maxWidth: "780px" }}>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
              For the season you are in
            </p>
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
              style={{ color: "var(--navy)" }}
            >
              The Joseph Protocol
            </h1>
            <p
              className="font-serif italic text-base sm:text-lg md:text-xl mb-8"
              style={{ color: "var(--ink-soft)" }}
            >
              A framework for the phases every builder moves through. Name
              the phase you are in — and what it asks of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#quiz"
                className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                style={{ background: "var(--navy)", color: "#fff" }}
              >
                Find your phase
              </Link>
              <Link
                href="#framework"
                className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
              >
                The framework
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Pull quote */}
      <section
        className="py-12 md:py-16"
        style={{ background: "var(--navy)", borderBottom: "1px solid rgba(235,243,251,0.1)" }}
      >
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p
            className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed"
            style={{ color: "#fff" }}
          >
            &ldquo;Every phase has a name. Every name has a discipline.
            Every discipline has an exit.&rdquo;
          </p>
          <p className="text-sm mt-4" style={{ color: "rgba(235,243,251,0.6)" }}>
            — The Joseph Protocol
          </p>
        </div>
      </section>

      {/* Four phases */}
      <section
        className="py-16 md:py-24"
        style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
        id="framework"
      >
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
            The framework
          </p>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl mb-10"
            style={{ color: "var(--navy)", maxWidth: "680px" }}
          >
            Four phases. Every builder moves through all of them.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {phases.map((phase, i) => (
              <div
                key={phase.name}
                className="rounded-lg p-7"
                style={{ background: "var(--cream)", border: "1px solid var(--line)" }}
              >
                <p
                  className="text-[11px] tracking-widest uppercase font-bold mb-2"
                  style={{ color: "var(--amber)" }}
                >
                  {phase.subtitle}
                </p>
                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: "var(--navy)" }}
                >
                  {phase.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section
        className="py-16 md:py-24"
        style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
        id="quiz"
      >
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
            Start here
          </p>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ color: "var(--navy)" }}
          >
            Find your phase
          </h2>
          <p
            className="font-serif italic text-base md:text-lg leading-relaxed mb-4"
            style={{ color: "var(--ink-soft)" }}
          >
            A short quiz that names the phase you are building through and
            the single next step it calls for — printable as a one-page result.
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Free. No login required. Result available immediately.
          </p>
          <Link
            href="/joseph-protocol#quiz"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            Take the quiz — coming soon
          </Link>
        </div>
      </section>

      {/* Author */}
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
              <h2 className="font-serif text-2xl sm:text-3xl mb-4" style={{ color: "var(--navy)" }}>
                Shina Salako
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: "var(--ink-soft)" }}>
                The Joseph Protocol is the third of three books. It is the
                most personal — written for the builder who is in a long
                season and cannot yet see the exit. Shina Salako has been
                in all four phases. He writes from inside them, not after.
              </p>
              <Link
                href="/entrepreneur-os/about"
                className="text-sm font-semibold"
                style={{ color: "var(--navy)" }}
              >
                Read the full story &#8594;
              </Link>
            </div>

            <div
              className="rounded-lg p-7 md:p-8"
              style={{ background: "var(--navy)" }}
            >
              <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "rgba(235,243,251,0.6)" }}>
                Also by Shina Salako
              </p>
              <div className="space-y-4">
                {[
                  { href: "/entrepreneur-os", label: "The Entrepreneur Operating System", desc: "For the founder who has become the bottleneck." },
                  { href: "/fleet", label: "Telematics & Fleet Management", desc: "For fleet leaders in emerging markets." },
                ].map((book) => (
                  <Link
                    key={book.href}
                    href={book.href}
                    className="block border-0 p-4 rounded-md transition-colors"
                    style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.15)" }}
                  >
                    <p className="text-sm font-semibold mb-1" style={{ color: "#fff" }}>
                      {book.label}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(235,243,251,0.65)" }}>
                      {book.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 md:py-24 text-center"
        style={{ background: "var(--navy)" }}
      >
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl mb-5"
            style={{ color: "#fff", lineHeight: "1.15" }}
          >
            Name the phase. Do the work. Exit well.
          </h2>
          <p
            className="font-serif italic text-base md:text-xl mb-10"
            style={{ color: "var(--cream)" }}
          >
            The quiz is coming. In the meantime — start with one of the
            other two books.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/entrepreneur-os"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--cream)", color: "var(--navy)" }}
            >
              Entrepreneur OS
            </Link>
            <Link
              href="/fleet"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
            >
              Fleet & Telematics
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="pt-12 pb-7 text-sm"
        style={{ background: "#13294b", color: "rgba(255,255,255,0.8)" }}
      >
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="flex flex-wrap justify-between gap-4 pt-5 text-[13px]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <span>© 2026 Shina Salako. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
              <Link href="/entrepreneur-os" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>Entrepreneur OS</Link>
              <Link href="/fleet" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>Fleet & Telematics</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
