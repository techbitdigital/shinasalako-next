'use client';
import { useState } from "react";
import Link from "next/link";
import { validateFields, FieldErrors } from "@/lib/validation";
import { auditSections, auditStats, auditSeats, auditFaqs } from "@/lib/data/audit";

export default function FleetAuditClient() {
  const [form, setForm] = useState({ name: "", email: "", fleet_size: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(name: string, value: string) {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validateFields({
      name: { value: form.name, required: true, label: "Name" },
      email: { value: form.email, required: true, email: true, label: "Email" },
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const fieldStyle = (name: string) => ({
    border: errors[name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
    background: "#fff",
    color: "var(--ink)",
  });

  return (
    <main>
      {/* Hero */}
      <header className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
            Free diagnostic tool
          </p>
          <h1
            className="font-serif mb-5"
            style={{ color: "#fff", fontSize: "clamp(1.9rem, 4.5vw, 2.9rem)", lineHeight: 1.1, maxWidth: "780px" }}
          >
            The 15-Minute Fleet Reporting Audit.
          </h1>
          <p
            className="font-serif italic mb-7"
            style={{ color: "var(--cream)", fontSize: "1.2rem", lineHeight: 1.5, maxWidth: "680px" }}
          >
            A printable diagnostic that maps the reports your operation produces today, the reports it should
            produce, and the gap between them — with a 90-day plan to close it.
          </p>
          <div className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--cream)" }}>
            <span><strong style={{ color: "#fff" }}>15 minutes</strong> · to complete</span>
            <span><strong style={{ color: "#fff" }}>Printable PDF</strong> · A4 worksheet</span>
            <span><strong style={{ color: "#fff" }}>Free</strong> · delivered to your inbox</span>
          </div>
        </div>
      </header>

      {/* Main two-column layout */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">

            {/* Left: what's in the audit */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4" style={{ color: "var(--navy)" }}>
                What the audit covers.
              </h2>
              <p className="font-serif italic text-lg leading-relaxed mb-8" style={{ color: "var(--ink-soft)" }}>
                A structured worksheet, not a marketing PDF. You sit down with it, work through five sections in
                about fifteen minutes, and leave with an honest picture of where your fleet reporting actually
                sits — and the one or two changes that would do the most.
              </p>

              <div className="bg-white rounded-lg p-7 mb-8" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--amber)" }}>
                  The five audit sections
                </p>
                <div>
                  {auditSections.map((s, i) => (
                    <div
                      key={s.num}
                      className="relative pl-12 py-3.5"
                      style={{ borderBottom: i < auditSections.length - 1 ? "1px solid var(--line)" : "none" }}
                    >
                      <span
                        className="absolute left-0 top-3.5 w-7 h-7 rounded-full flex items-center justify-center font-serif font-bold text-sm"
                        style={{ background: "var(--navy)", color: "#fff" }}
                      >
                        {s.num}
                      </span>
                      <h4 className="font-serif text-base font-bold mb-1.5" style={{ color: "var(--navy)" }}>{s.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4 pt-3.5" style={{ color: "var(--muted)", borderTop: "1px solid var(--line)" }}>
                  Approximately 8 pages · A4 · printable double-sided · navy and cream throughout.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-3.5" style={{ color: "var(--navy)" }}>Why this audit exists.</h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: "var(--ink-soft)" }}>
                  Most fleet operations produce reports. Few of them produce reports the operating team uses to
                  make decisions. The gap between &ldquo;we have a report&rdquo; and &ldquo;we changed something
                  because of the report&rdquo; is where most fleet performance improvement lives — and where
                  most performance improvement programmes start.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  The audit exists to make that gap visible in fifteen minutes, with nothing more than a printed
                  worksheet and an honest pen. If after fifteen minutes you conclude your reporting is already
                  fit for purpose, you&rsquo;ve spent fifteen minutes confirming it. If the gap is larger than
                  you thought, you&rsquo;ve spent fifteen minutes finding the next investment.
                </p>
              </div>
            </div>

            {/* Right: opt-in form (sticky) */}
            <div className="lg:sticky lg:top-20">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-lg p-8"
                style={{ border: "1px solid var(--line)", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}
              >
                {status === "success" ? (
                  <div className="text-center py-4">
                    <p className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>Check your inbox.</p>
                    <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                      The audit PDF is on its way — usually within a minute.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>Send me the audit</h3>
                    <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                      Free printable PDF · delivered to your inbox in under a minute.
                    </p>

                    <label className="block text-xs font-bold mb-1.5" style={{ color: "var(--ink-soft)" }}>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-3.5 py-3 rounded-md text-sm outline-none mb-1"
                      style={fieldStyle("name")}
                    />
                    {errors.name && <p className="text-xs mb-3" style={{ color: "#e53e3e" }}>{errors.name}</p>}
                    {!errors.name && <div className="mb-4" />}

                    <label className="block text-xs font-bold mb-1.5" style={{ color: "var(--ink-soft)" }}>
                      Email <span className="font-normal" style={{ color: "var(--muted)" }}>(work email preferred)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-3.5 py-3 rounded-md text-sm outline-none mb-1"
                      style={fieldStyle("email")}
                    />
                    {errors.email && <p className="text-xs mb-3" style={{ color: "#e53e3e" }}>{errors.email}</p>}
                    {!errors.email && <div className="mb-4" />}

                    <label className="block text-xs font-bold mb-1.5" style={{ color: "var(--ink-soft)" }}>
                      Fleet size <span className="font-normal" style={{ color: "var(--muted)" }}>(optional)</span>
                    </label>
                    <select
                      value={form.fleet_size}
                      onChange={(e) => updateField("fleet_size", e.target.value)}
                      className="w-full px-3.5 py-3 rounded-md text-sm outline-none mb-5"
                      style={fieldStyle("fleet_size")}
                    >
                      <option value="">Select fleet size</option>
                      <option value="under-50">Under 50 vehicles</option>
                      <option value="50-100">50\u2013100 vehicles</option>
                      <option value="100-250">100\u2013250 vehicles</option>
                      <option value="250-1000">250\u20131,000 vehicles</option>
                      <option value="1000-plus">1,000+ vehicles</option>
                      <option value="not-applicable">Not a fleet operator</option>
                    </select>

                    {status === "error" && (
                      <p className="text-sm mb-3" style={{ color: "#e53e3e" }}>Something went wrong. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-md text-sm font-bold border-0"
                      style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
                    >
                      {status === "loading" ? "Sending..." : "Send me the audit"}
                    </button>
                    <p className="text-xs text-center mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                      Free. No marketing emails. Your address joins a quarterly note from the author — one
                      substantive piece per quarter, unsubscribe in one click.
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* The source */}
      <section className="py-14 md:py-16" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>The source</p>
          <h2 className="font-serif text-2xl mb-8" style={{ color: "var(--navy)", maxWidth: "680px" }}>
            Built from the operating discipline that runs through the book.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {auditStats.map((s) => (
              <div key={s.label} className="pl-5" style={{ borderLeft: "3px solid var(--navy)" }}>
                <div className="font-serif font-bold text-3xl mb-2" style={{ color: "var(--navy)" }}>{s.num}</div>
                <div className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Who this is for</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8" style={{ color: "var(--navy)", maxWidth: "720px" }}>
            Built for the three seats that own fleet reporting.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {auditSeats.map((seat) => (
              <div key={seat.label} className="bg-white rounded p-7" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>{seat.label}</p>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--navy)" }}>{seat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{seat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="py-14 md:py-16" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>After the audit</p>
              <h2 className="font-serif text-2xl mb-4" style={{ color: "#fff", maxWidth: "520px" }}>
                The audit is the starting point. The book is the operating system.
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(235,243,251,0.92)", maxWidth: "520px" }}>
                If the audit confirms the gap is bigger than fifteen minutes can resolve, the next step is the
                full First Look — the foreword, the introduction, Chapter 1, the opening of the Guinness Nigeria
                case study, and the maturity-model framework. Forty pages. Free.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(235,243,251,0.92)", maxWidth: "520px" }}>
                From there, the book itself. From the book, the training programmes. From the training, the
                embedded engagement — if your operation needs that level of intervention.
              </p>
            </div>
            <div
              className="rounded-lg p-7"
              style={{ background: "rgba(235,243,251,0.08)", border: "1px solid rgba(235,243,251,0.18)" }}
            >
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>
                Recommended next step
              </p>
              <h3 className="font-serif text-lg mb-3" style={{ color: "#fff" }}>The First Look — forty pages free</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(235,243,251,0.85)" }}>
                Foreword + introduction + Chapter 1 + the opening of the Guinness case study + the maturity-model framework.
              </p>
              <Link
                href="/fleet/firstlook"
                className="block text-center py-3 rounded text-sm font-bold"
                style={{ background: "var(--cream)", color: "var(--navy)" }}
              >
                Get the First Look
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "720px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>FAQ</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-10" style={{ color: "var(--navy)" }}>
            A few practical questions, answered.
          </h2>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {auditFaqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className="rounded-xl overflow-hidden transition-all duration-200"
            style={{
              background: isOpen ? "#fff" : "#fff",
              border: isOpen ? "1.5px solid var(--navy)" : "1px solid var(--line)",
              boxShadow: isOpen ? "0 4px 20px rgba(20,33,61,0.08)" : "none",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left border-0 bg-transparent cursor-pointer"
              style={{ padding: "20px 24px" }}
            >
              <span
                className="font-serif text-base font-bold"
                style={{ color: "var(--navy)" }}
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: isOpen ? "var(--navy)" : "var(--cream)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 4L6 8L10 4"
                    stroke={isOpen ? "#fff" : "var(--navy)"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-soft)", padding: "0 24px 20px" }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
