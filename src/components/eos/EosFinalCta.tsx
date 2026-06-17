import Link from "next/link";

export default function EosFinalCta() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--navy)" }}
    >
      <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-5"
          style={{ color: "#fff", lineHeight: "1.15" }}
        >
          Twelve minutes can save you twelve months.
        </h2>
        <p
          className="font-serif italic text-base md:text-xl mb-10"
          style={{ color: "var(--cream)" }}
        >
          Most founders patch the wrong system. The diagnostic shows you
          which one is actually leaking.
        </p>
        <Link
          href="/entrepreneur-os/diagnostic"
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
          style={{ background: "var(--amber)", color: "#fff" }}
        >
          Take the diagnostic →
        </Link>
      </div>
    </section>
  );
}
