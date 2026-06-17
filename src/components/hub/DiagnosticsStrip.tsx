import Link from "next/link";
import { hubDiagnostics } from "@/lib/data/hub";

export default function DiagnosticsStrip() {
  return (
    <section
      id="diagnostics"
      className="py-16 md:py-24"
      style={{ background: "var(--navy)", borderBottom: "1px solid rgba(235,243,251,.1)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>
          Start free
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "#fff", maxWidth: "780px" }}>
          Three diagnostics. Each one tells you where you actually stand.
        </h2>
        <p className="font-serif italic text-base md:text-xl mb-8 md:mb-10" style={{ color: "rgba(235,243,251,0.92)", maxWidth: "820px" }}>
          Every book comes with a free, self-paced diagnostic. No login, no
          sales call — just an honest read on where you are before you decide what to read.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubDiagnostics.map((diag) => (
            <div
              key={diag.href}
              className="rounded-lg p-6"
              style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.18)" }}
            >
              <h3 className="font-serif text-lg leading-snug mb-3" style={{ color: "#fff" }}>
                {diag.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(235,243,251,0.9)" }}>
                {diag.description}
              </p>
              <Link
                href={diag.href}
                className="text-sm font-semibold border-0 border-b-2 pb-0.5"
                style={{ color: "var(--cream)", borderBottomColor: "var(--cream)" }}
              >
                Start →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
