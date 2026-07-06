'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PaystackButton from "@/components/ui/PaystackButton";

export default function EosBookClient() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [successInfo, setSuccessInfo] = useState<{ product: string; email: string } | null>(null);

  async function handleSuccess(reference: string, product: string, amount: number) {
    await fetch("/api/eos/book-purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, reference, product, amount }),
    });
    setSuccessInfo({ product, email: form.email });
  }

  const parts = [
    {
      part: "Part One — Founder OS",
      name: "The Builder",
      desc: "Before you build the business, you must build the founder. Vision, mindset, discipline, leadership, and decision-making capacity.",
    },
    {
      part: "Part Two — Market OS",
      name: "The Map",
      desc: "A business does not exist because the founder has an idea. It exists because a customer has a problem.",
    },
    {
      part: "Part Three — Model OS",
      name: "The Engine",
      desc: "A business idea is not the same as a business model. How your business will make money, deliver value, and price properly.",
    },
    {
      part: "Part Four — Management OS",
      name: "The Skeleton",
      desc: "Growth without structure creates chaos. Roles, workflows, documentation, delegation, and cash flow.",
    },
    {
      part: "Part Five — Momentum OS",
      name: "The Loop",
      desc: "A good business must be visible, trusted, chosen, and remembered. Sales, marketing, and scalable growth.",
    },
  ];

  const preorderBenefits = [
    { timing: "1 — Ship date", title: "Signed book + workbook", desc: "Your signed paperback and the 83-page printed companion workbook arrive together." },
    { timing: "2 — Within 5 days", title: "The prologue, in your inbox", desc: "Twelve pages sent as a PDF so you have something to read while the book is at the printer." },
    { timing: "3 — Eight weeks", title: "Eight personal emails from Shina", desc: "Not marketing emails. Letters about the work, the framework, and how to read the book." },
    { timing: "4 — Workshop priority", title: "₦30,000 off the workshop seat", desc: "Twelve of the thirty workshop seats reserved exclusively for pre-order holders at ₦155,000." },
    { timing: "5 — When it arrives", title: "Arrival rituals + a reading guide", desc: "A Part-by-Part reading order based on your diagnostic result." },
  ];

  return (
    <main>
      {/* Hero */}
      <header className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cover-eos.jpg"
                alt="The Entrepreneur Operating System book cover"
                width={280} height={400}
                className="rounded-md"
                style={{ boxShadow: "0 28px 58px -14px rgba(20,33,61,.45)" }}
                priority
              />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
                The book
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "var(--navy)" }}>
                The Entrepreneur Operating System
              </h1>
              <p className="font-serif italic text-base md:text-lg mb-4" style={{ color: "var(--ink-soft)" }}>
                How to Start, Structure, Grow, and Scale a Business That Works Beyond You.
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>
                By <strong style={{ color: "var(--navy)" }}>Shina Salako</strong>. 322 pages. 25 chapters. 5 named frameworks. One companion workbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link
                  href="#buy"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Buy the book
                </Link>
                <Link
                  href="#inside"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
                >
                  What&rsquo;s inside
                </Link>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Ships <strong style={{ color: "var(--navy)" }}>10 August 2026</strong>. Pre-order holders receive a ₦30,000 workshop discount.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Pull quote */}
      <section className="py-12 md:py-16 text-center" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed mb-4" style={{ color: "var(--cream)" }}>
            &ldquo;A founder is not a business. A founder is a bottleneck wearing a job title.&rdquo;
          </p>
          <p className="text-sm" style={{ color: "rgba(235,243,251,0.6)" }}>— The locked thesis of the book</p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 md:py-24" style={{ background: "#fff" }} id="inside">
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>What&rsquo;s inside</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-center" style={{ color: "var(--navy)" }}>
            Five parts. Twenty-five chapters. One companion workbook.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {parts.map((p) => (
              <div key={p.part} className="rounded-lg p-6" style={{ background: "var(--cream)", border: "1px solid var(--line)" }}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>{p.part}</p>
                <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{p.desc}</p>
              </div>
            ))}
            <div className="rounded-lg p-6" style={{ background: "var(--navy)" }}>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "rgba(235,243,251,0.6)" }}>Bonus</p>
              <h3 className="font-serif text-xl mb-3" style={{ color: "#fff" }}>The Companion Workbook</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(235,243,251,0.85)" }}>
                83 pages of fill-in space. Every framework in the book becomes an exercise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }} id="buy">
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>Get your copy</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 text-center" style={{ color: "var(--navy)" }}>Choose your format</h2>

          {successInfo ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "#fff", border: "1px solid var(--line)", boxShadow: "0 20px 50px -20px rgba(20,33,61,0.15)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(255,107,0,0.1)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Order confirmed</p>
              <h2 className="font-serif text-2xl mb-4" style={{ color: "var(--navy)" }}>You&rsquo;re all set.</h2>
              <p className="text-sm mb-2" style={{ color: "var(--ink-soft)" }}>
                Your <strong>{successInfo.product}</strong> confirmation has been sent to
              </p>
              <p className="text-sm font-semibold mb-8" style={{ color: "var(--navy)" }}>{successInfo.email}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/entrepreneur-os/diagnostic"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--navy)", color: "#fff" }}
                >
                  Take the diagnostic
                </Link>
                <Link
                  href="/entrepreneur-os"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
                >
                  Back to Entrepreneur OS
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-lg p-7" style={{ border: "1px solid var(--line)" }}>
                  <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Paperback</p>
                  <p className="font-serif text-3xl font-bold mb-1" style={{ color: "var(--navy)" }}>₦25,000</p>
                  <p className="text-xs mb-5" style={{ color: "var(--muted)" }}>Physical copy + companion workbook · Lagos 2-3 days</p>
                  <PaystackButton
                    email={form.email} name={form.name}
                    amount={25000}
                    label="Buy Paperback"
                    reference={`EOS-PAPERBACK-${Date.now()}`}
                    metadata={{ product: "EOS Book Paperback" }}
                    onSuccess={(ref) => handleSuccess(ref, "Paperback", 25000)}
                    className="w-full py-3 rounded-full text-sm font-semibold border-0"
                    style={{ background: "var(--navy)", color: "#fff" }}
                  />
                </div>
                <div className="bg-white rounded-lg p-7" style={{ border: "2px solid var(--amber)" }}>
                  <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>eBook — PDF</p>
                  <p className="font-serif text-3xl font-bold mb-1" style={{ color: "var(--navy)" }}>₦20,000</p>
                  <p className="text-xs mb-5" style={{ color: "var(--muted)" }}>Instant delivery · Read on any device</p>
                  <PaystackButton
                    email={form.email} name={form.name}
                    amount={20000}
                    label="Buy eBook"
                    reference={`EOS-EBOOK-${Date.now()}`}
                    metadata={{ product: "EOS Book eBook" }}
                    onSuccess={(ref) => handleSuccess(ref, "eBook", 20000)}
                    className="w-full py-3 rounded-full text-sm font-semibold border-0"
                    style={{ background: "var(--amber)", color: "#fff" }}
                  />
                </div>
              </div>
              <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
                Secured by Paystack · Nigerian cards, bank transfer & USSD supported.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Pre-order benefits */}
      <section className="py-16 md:py-24" style={{ background: "#fff", borderTop: "4px solid var(--amber)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--amber)" }}>What you get when you pre-order</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-center" style={{ color: "var(--navy)" }}>
            Five things — most of them before the book even arrives.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {preorderBenefits.map((b) => (
              <div key={b.timing} className="rounded-lg p-6" style={{ background: "var(--cream)", border: "1px solid var(--line)", borderTop: "4px solid var(--amber)" }}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>{b.timing}</p>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--navy)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{b.desc}</p>
              </div>
            ))}
            <div className="rounded-lg p-6" style={{ background: "var(--navy)" }}>
              <h3 className="font-serif text-lg mb-3" style={{ color: "#fff" }}>Take the diagnostic first.</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(235,243,251,0.85)" }}>
                Most buyers take the diagnostic first. You arrive at the book already knowing which OS is your weakest.
              </p>
              <Link
                href="/entrepreneur-os/diagnostic"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold border-0"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                Take the diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
