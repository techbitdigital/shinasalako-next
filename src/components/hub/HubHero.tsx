import Link from "next/link";

export default function HubHero() {
  return (
    <header className="py-16 md:py-24" style={{ background: "var(--navy)", color: "#fff" }}>
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
          Author · Operator · Builder
        </p>
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight mb-5"
          style={{ color: "#fff", maxWidth: "880px" }}
        >
          Three books. Three operating systems. One way of seeing the work.
        </h1>
        <p
          className="font-serif italic text-base sm:text-lg md:text-xl mb-8"
          style={{ color: "var(--cream)", maxWidth: "760px" }}
        >
          Practitioner playbooks for founders, for fleet leaders, and for the
          season you are building through — each with a free diagnostic that
          tells you where you actually stand.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="#books"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--cream)", color: "var(--navy)" }}
          >
            Explore the books
          </Link>
          <Link
            href="#work"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
            style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
          >
            Work with Shina
          </Link>
        </div>
      </div>
    </header>
  );
}
