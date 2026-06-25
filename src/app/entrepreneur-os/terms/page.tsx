import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Terms of Service", description: "Terms of service for the Entrepreneur OS.",
  path: "/entrepreneur-os/terms",
});
export default function EosTermsPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Terms of Service</h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Last updated: June 2026</p>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <p>By accessing shinasalako.com you agree to these terms. All content is the intellectual property of Shina Salako and SALCOMMS KWIK XTRA LIMITED.</p>
            <p>Workshop seats are refundable up to 14 days before the event date. Digital products are non-refundable once delivered. Physical books may be returned within 7 days if unopened.</p>
            <p>We reserve the right to modify these terms. Continued use constitutes acceptance.</p>
            <p>Questions: hello@shinasalako.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
