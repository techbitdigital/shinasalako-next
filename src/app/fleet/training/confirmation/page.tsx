import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Training Confirmed", description: "Your training programme booking is confirmed.",
  path: "/fleet/training/confirmation",
});

export default function TrainingConfirmationPage() {
  return (
    <main>
      <section className="py-16 md:py-24 text-center" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "580px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif text-4xl mb-4" style={{ color: "var(--navy)" }}>You are confirmed.</p>
          <p className="font-serif italic text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            A confirmation email is on its way. We will follow up within one business day with programme details and next steps.
          </p>
          <Link href="/fleet" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0" style={{ background: "var(--navy)", color: "#fff" }}>
            Back to Fleet & Telematics
          </Link>
        </div>
      </section>
    </main>
  );
}
