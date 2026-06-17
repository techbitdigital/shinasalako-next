import type { Metadata } from "next";
import FleetScopingForm from "@/components/fleet/FleetScopingForm";

export const metadata: Metadata = {
  title: "Book a Scoping Call",
  description: "Book a free 30-minute scoping call to discuss the right training programme for your team.",
};

export default function ScopingCallPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Free 30-minute call</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Book a Scoping Call</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            Tell us about your team and we will recommend the right programme. No commitment required.
          </p>
          <FleetScopingForm />
        </div>
      </section>
    </main>
  );
}
