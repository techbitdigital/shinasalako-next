import type { Metadata } from "next";
import FleetAssessmentForm from "@/components/fleet/FleetAssessmentForm";

export const metadata: Metadata = {
  title: "FOS Maturity Assessment",
  description: "Score your fleet operation against the seven-layer Fleet Operating System. 18 questions, 10 minutes.",
};

export default function AssessmentPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Free diagnostic</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>Fleet Operating System Maturity Assessment</h1>
          <p className="font-serif italic text-base md:text-lg mb-4" style={{ color: "var(--cream)" }}>
            18 questions across the seven FOS layers. Your maturity stage and weakest layer — in 10 minutes.
          </p>
          <p className="text-sm mb-10" style={{ color: "rgba(235,243,251,0.7)" }}>Self-paced · No login · Results sent to your inbox</p>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <FleetAssessmentForm />
        </div>
      </section>
    </main>
  );
}
