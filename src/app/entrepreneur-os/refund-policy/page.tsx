import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Refund Policy", description: "Refund policy for Entrepreneur OS products.",
  path: "/entrepreneur-os/refund-policy",
});
export default function EosRefundPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Refund Policy</h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {[
              { title: "Workshop seats", body: "Full refund if cancelled 14+ days before the event. 50% refund if cancelled 7–13 days before. No refund within 7 days of the event. Your seat may be transferred to another person at any time." },
              { title: "eBook / digital products", body: "Due to the nature of digital delivery, eBooks and PDF downloads are non-refundable once accessed. If you experience a technical issue, contact us within 48 hours." },
              { title: "Physical books", body: "Unopened physical books may be returned within 7 days of delivery for a full refund minus shipping costs." },
              { title: "Coaching programmes", body: "Coaching engagements may be cancelled with a full refund before the first session. After the first session, a pro-rated refund applies for unused sessions." },
            ].map((item) => (
              <div key={item.title} className="pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
                <h3 className="font-serif text-lg mb-2" style={{ color: "var(--navy)" }}>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
            <p>To request a refund, email hello@shinasalako.com with your order details.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
