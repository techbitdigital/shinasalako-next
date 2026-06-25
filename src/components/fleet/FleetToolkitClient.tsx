'use client';
import { useState } from "react";
import Link from "next/link";
import PaystackButton from "@/components/ui/PaystackButton";
import { toolkitCategories, toolkitTiers, toolkitBuyerTypes, toolkitFaqs } from "@/lib/data/toolkit";

export default function FleetToolkitClient() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [successInfo, setSuccessInfo] = useState<{ product: string; email: string } | null>(null);

  async function handleSuccess(reference: string, product: string, amount: number) {
    await fetch("/api/fleet/toolkit-purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, reference, product, amount }),
    });
    setSuccessInfo({ product, email: form.email });
  }

  return (
    <main>
      {/* Hero */}
      <header className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
            The Practitioner&rsquo;s Toolkit
          </p>
          <h1
            className="font-serif mb-5"
            style={{ color: "#fff", fontSize: "clamp(1.9rem, 4.5vw, 2.9rem)", lineHeight: 1.1, maxWidth: "780px" }}
          >
            Nineteen working templates from the playbook. In your operation tomorrow.
          </h1>
          <p
            className="font-serif italic mb-7"
            style={{ color: "var(--cream)", fontSize: "1.2rem", lineHeight: 1.5, maxWidth: "680px" }}
          >
            The full appendix set from the book — KPI dictionary, transporter scorecard, control-tower
            routine, ROI calculator, sample SOPs, the maturity workbook, the six-month practice plan, the
            extended Guinness case study. Editable. Brand-neutral. Ready to use.
          </p>
          <div className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--cream)" }}>
            <span><strong style={{ color: "#fff" }}>19 templates</strong> · editable formats</span>
            <span><strong style={{ color: "#fff" }}>Instant download</strong> · zip + cloud folder</span>
            <span><strong style={{ color: "#fff" }}>Single-organisation licence</strong></span>
          </div>
        </div>
      </header>

      {/* Buy section */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }} id="buy">
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          {successInfo ? (
            <div
              className="max-w-[680px] mx-auto rounded-2xl p-10 md:p-12 text-center"
              style={{ background: "#fff", border: "1px solid var(--line)", boxShadow: "0 20px 50px -20px rgba(20,33,61,0.15)" }}
            >
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
                Order confirmed
              </p>
              <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--navy)" }}>You&rsquo;re all set.</h2>
              <p className="text-sm md:text-base mb-2" style={{ color: "var(--ink-soft)" }}>
                Your <strong>{successInfo.product}</strong> confirmation has been sent to
              </p>
              <p className="text-sm md:text-base font-semibold" style={{ color: "var(--navy)" }}>{successInfo.email}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[680px] mx-auto mb-10">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Full name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Email address</label>
                  <input
                    type="email" required placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[920px] mx-auto">
                {toolkitTiers.map((tier) => (
                  <div
                    key={tier.key}
                    className="relative bg-white rounded-lg p-8 flex flex-col"
                    style={{ border: tier.badge ? "2px solid var(--navy)" : "1px solid var(--line)" }}
                  >
                    {tier.badge && (
                      <span
                        className="absolute -top-3 right-6 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide"
                        style={{ background: "var(--amber)", color: "#fff" }}
                      >
                        {tier.badge}
                      </span>
                    )}
                    <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>
                      {tier.label}
                    </p>
                    <h3 className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>{tier.title}</h3>
                    <p className="text-sm mb-5" style={{ color: "var(--ink-soft)" }}>{tier.desc}</p>
                    <ul className="space-y-2 mb-6 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--ink)" }}>
                          <span style={{ color: "#2c6f4f", fontWeight: 700 }}>&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="rounded p-4 mb-3 flex justify-between items-center"
                      style={{ background: "var(--cream)", border: "1px solid var(--line)" }}
                    >
                      <span className="text-xs uppercase tracking-wide font-bold" style={{ color: "var(--muted)" }}>Nigeria</span>
                      <span className="font-serif text-xl font-bold" style={{ color: "var(--navy)" }}>{tier.priceNaira}</span>
                    </div>
                    <PaystackButton
                      email={form.email} name={form.name}
                      amount={Number(tier.priceNaira.replace(/[^0-9]/g, ""))}
                      label={`Buy ${tier.key === "bundle" ? "the Bundle" : "the Toolkit"} in naira`}
                      reference={`TOOLKIT-${tier.key.toUpperCase()}-${Date.now()}`}
                      metadata={{ product: tier.title }}
                      onSuccess={(ref) => handleSuccess(ref, tier.title, Number(tier.priceNaira.replace(/[^0-9]/g, "")))}
                      className="w-full py-3 rounded text-sm font-semibold border-0 mb-1"
                      style={{ background: "var(--navy)", color: "#fff" }}
                    />
                    <p className="text-xs text-center mb-4" style={{ color: "var(--muted)" }}>{tier.delivery}</p>

                    <div
                      className="rounded p-4 mb-3 flex justify-between items-center"
                      style={{ background: "var(--cream)", border: "1px solid var(--line)" }}
                    >
                      <span className="text-xs uppercase tracking-wide font-bold" style={{ color: "var(--muted)" }}>International</span>
                      <span className="font-serif text-xl font-bold" style={{ color: "var(--navy)" }}>{tier.priceUsd}</span>
                    </div>
                    <Link
                      href="/fleet/contact"
                      className="w-full text-center py-3 rounded text-sm font-semibold block"
                      style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
                    >
                      Buy in dollars — contact us
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 md:py-24" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>What&rsquo;s in the Toolkit</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-5" style={{ color: "var(--navy)", maxWidth: "780px" }}>
            Nineteen templates, grouped by where they live in the operating discipline.
          </h2>
          <p className="font-serif italic text-lg mb-10" style={{ color: "var(--ink-soft)", maxWidth: "780px" }}>
            Every template is editable, brand-neutral, and built from real operating use across cargo-owner and
            transporter engagements. You drop in your own logo, your own KPI definitions, your own transporter
            mix — and the templates work in your operation tomorrow.
          </p>

          {toolkitCategories.map((cat) => (
            <div key={cat.name} className="mb-9">
              <h3
                className="font-serif text-xl mb-4 pb-2.5"
                style={{ color: "var(--navy)", borderBottom: "2px solid var(--navy)", maxWidth: "780px" }}
              >
                {cat.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cat.items.map((item) => (
                  <div
                    key={item.code}
                    className="bg-white rounded p-5 grid gap-3.5"
                    style={{ border: "1px solid var(--line)", gridTemplateColumns: "46px 1fr" }}
                  >
                    <div
                      className="font-serif font-bold text-sm text-center py-2 rounded"
                      style={{ color: "var(--amber)", background: "var(--cream)", border: "1px solid var(--line)" }}
                    >
                      {item.code}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--navy)" }}>{item.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--ink-soft)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who buys */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Who buys the Toolkit</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8" style={{ color: "var(--navy)", maxWidth: "720px" }}>
            For practitioners who are ready to install the discipline themselves.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolkitBuyerTypes.map((b) => (
              <div key={b.label} className="bg-white rounded p-7" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>{b.label}</p>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--navy)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licence */}
      <section className="py-14 md:py-16" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Licence terms</p>
          <h2 className="font-serif text-2xl mb-5" style={{ color: "#fff" }}>One organisation, unlimited internal users.</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(235,243,251,0.92)" }}>
            The Toolkit is licensed for use inside a single buying organisation — head office, all branches,
            all internal users, no per-seat limit. You may rebrand the templates with your own logo and adapt
            them to your operation. You may not redistribute, resell, or use them inside a paid consulting
            engagement for a third party without a separate commercial licence — write to{" "}
            <a href="mailto:enquiries@salcomms.com" style={{ color: "#fff" }}>enquiries@salcomms.com</a> for
            consultant licensing.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(235,243,251,0.92)" }}>
            Free updates for twelve months. After twelve months, an annual renewal is available — or you
            keep the version you have, indefinitely.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8" style={{ color: "var(--navy)" }}>
            A few practical questions, answered.
          </h2>
          <div className="space-y-7">
            {toolkitFaqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
