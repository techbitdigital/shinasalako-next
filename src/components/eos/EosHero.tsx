import Link from "next/link";

export default function EosHero() {
  return (
    <header
      className="py-16 md:py-24"
      style={{ background: "var(--navy)", color: "#fff" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div style={{ maxWidth: "780px" }}>
          <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
            Building businesses that outlive you
          </p>
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
            style={{ color: "#fff" }}
          >
            Your business runs on five operating systems. One of them is leaking.
          </h1>
          <p className="font-serif italic text-base sm:text-lg md:text-xl mb-8" style={{ color: "var(--cream)" }}>
            Find out which one in twelve minutes. Then build the 90-day plan to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/entrepreneur-os/diagnostic"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--amber)", color: "#fff" }}
            >
              Take the Founder Diagnostic →
            </Link>
            <Link
              href="/entrepreneur-os/book"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
            >
              Read the book
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
