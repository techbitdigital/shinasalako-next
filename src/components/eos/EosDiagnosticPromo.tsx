import Link from "next/link";

export default function EosDiagnosticPromo() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
          Start here
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)" }}>
          The 12-Minute Founder Diagnostic
        </h2>
        <p className="font-serif italic text-base md:text-lg leading-relaxed mb-3" style={{ color: "var(--ink-soft)" }}>
          Twelve questions. Five operating systems. One clear answer about
          where your business is silently leaking.
        </p>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Free. No credit card. Your result lands in your inbox immediately.
        </p>
        <Link
          href="/entrepreneur-os/diagnostic"
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
          style={{ background: "var(--amber)", color: "#fff" }}
        >
          Start the diagnostic →
        </Link>
      </div>
    </section>
  );
}
