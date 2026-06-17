import type { Metadata } from "next";
import FleetAuditForm from "@/components/fleet/FleetAuditForm";

export const metadata: Metadata = {
  title: "15-Minute Reporting Audit",
  description: "A quick audit of your fleet reporting practice — find the gaps in 15 minutes.",
};

export default function AuditPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Free audit</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>15-Minute Reporting Audit</h1>
          <p className="font-serif italic text-base md:text-lg mb-10" style={{ color: "var(--ink-soft)" }}>
            A quick diagnostic of your fleet reporting practice. Find the gaps and get a prioritised fix list.
          </p>
          <FleetAuditForm />
        </div>
      </section>
    </main>
  );
}
