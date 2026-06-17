import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms of service for shinasalako.com." };

export default function FleetTermsPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Terms of Service</h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <p>By accessing shinasalako.com you agree to these terms. The content on this site — including the book, training materials, and diagnostic tools — is the intellectual property of SALCOMMS KWIK XTRA LIMITED and Shina Salako.</p>
            <p>Purchases are subject to our refund policy. Digital products are delivered electronically and are non-refundable once downloaded. Physical products may be returned within 7 days of delivery if unopened.</p>
            <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>
            <p>For questions, contact enquiries@salcomms.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
