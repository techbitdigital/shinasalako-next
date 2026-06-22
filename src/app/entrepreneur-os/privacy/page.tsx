import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for the Entrepreneur OS." };
export default function EosPrivacyPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Privacy Policy</h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <p>Shina Salako and SALCOMMS KWIK XTRA LIMITED operate shinasalako.com. We collect only the information you provide name, email, and form responses.</p>
            <p>We use your information to deliver requested content, respond to enquiries, and send communications you opt into. We do not sell your data.</p>
            <p>We use Resend for email delivery and Paystack for payments. Both have their own privacy policies.</p>
            <p>To unsubscribe or request data deletion, email hello@shinasalako.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
