import type { Metadata } from "next";
import EosDiagnosticForm from "@/components/eos/EosDiagnosticForm";

export const metadata: Metadata = {
  title: "The 12-Minute Founder Diagnostic",
  description: "Twelve questions. Five operating systems. One clear answer about where your business is silently leaking.",
};

export default function EosDiagnosticPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Free diagnostic</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>The 12-Minute Founder Diagnostic</h1>
          <p className="font-serif italic text-base md:text-lg mb-3" style={{ color: "var(--cream)" }}>
            Twelve questions. Five operating systems. One clear answer about where your business is silently leaking.
          </p>
          <p className="text-sm" style={{ color: "rgba(235,243,251,0.7)" }}>Free · No credit card · Result in your inbox immediately</p>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <EosDiagnosticForm />
        </div>
      </section>
    </main>
  );
}
