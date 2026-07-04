import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Press",
  description: "Press information, media kit, and contact for Shina Salako and SALCOMMS KWIK XTRA LIMITED.",
  path: "/fleet/press",
});

export default function PressPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Media</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Press & Media</h1>
          <p className="font-serif italic text-base md:text-lg mb-10" style={{ color: "var(--ink-soft)" }}>
            For media enquiries, interview requests, and press kit downloads — contact us directly.
          </p>
          <div className="space-y-6">
            {[
              { label: "Media enquiries", value: "info@salcomms.com" },
              { label: "Speaking & events", value: "info@salcomms.com" },
              { label: "Response time", value: "Within one business day" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-4" style={{ borderBottom: "1px solid var(--line)" }}>
                <span className="text-xs tracking-widest uppercase font-bold w-40 flex-shrink-0" style={{ color: "var(--muted)" }}>{item.label}</span>
                <span className="text-sm" style={{ color: "var(--ink)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
