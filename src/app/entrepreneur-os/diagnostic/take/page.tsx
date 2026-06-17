import type { Metadata } from "next";
import EosDiagnosticForm from "@/components/eos/EosDiagnosticForm";

export const metadata: Metadata = {
  title: "Take the Founder Diagnostic",
  description: "Twelve questions. Five operating systems. One clear answer.",
};

export default function DiagnosticTakePage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <EosDiagnosticForm />
        </div>
      </section>
    </main>
  );
}
