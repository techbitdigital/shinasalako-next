import type { Metadata } from "next";
import FleetContactForm from "@/components/fleet/FleetContactForm";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description: "Get in touch with Shina Salako for speaking, consulting, training, or general enquiries.",
};

export default function FleetContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Get in touch</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Contact & Enquiries</h1>
          <p className="font-serif italic text-base md:text-lg mb-10" style={{ color: "var(--ink-soft)" }}>
            For speaking engagements, consulting enquiries, training programmes, or general questions — fill in the form and we will respond within one business day.
          </p>
          <FleetContactForm />
        </div>
      </section>
    </main>
  );
}
