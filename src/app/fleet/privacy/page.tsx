import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy", description: "Privacy policy for shinasalako.com and SALCOMMS KWIK XTRA LIMITED.",
  path: "/fleet/privacy",
});

export default function FleetPrivacyPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Privacy Policy</h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <p>SALCOMMS KWIK XTRA LIMITED operates shinasalako.com. We collect only the information you provide — name, email address, and any details submitted through our forms.</p>
            <p>We use your information to deliver requested content (First Look PDF, assessment results), respond to enquiries, and send our quarterly practitioner note if you opt in. We do not sell your data to third parties.</p>
            <p>We use Resend to deliver emails and Paystack to process payments. Both are governed by their own privacy policies.</p>
            <p>You may unsubscribe from any email communication at any time using the link in the email footer. To request deletion of your data, email enquiries@salcomms.com.</p>
            <p>For questions about this policy, contact us at enquiries@salcomms.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
