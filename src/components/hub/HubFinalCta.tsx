import Link from "next/link";

export default function HubFinalCta() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ background: "var(--navy)" }}>
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-5 mx-auto"
          style={{ color: "#fff", maxWidth: "720px", lineHeight: "1.15" }}
        >
          Not sure where to start? Take a diagnostic.
        </h2>
        <p
          className="font-serif italic text-base md:text-xl mb-8 mx-auto"
          style={{ color: "var(--cream)", maxWidth: "660px" }}
        >
          Twelve minutes can save you twelve months. Find out which system is
          leaking before you decide what to read.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/entrepreneur-os/diagnostic"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--cream)", color: "var(--navy)" }}
          >
            Founder diagnostic
          </Link>
          <Link
            href="/fleet/assessment"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
            style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
          >
            Fleet assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
