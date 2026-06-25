'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PaystackButton from "@/components/ui/PaystackButton";
import { eosBookPoints } from "@/lib/data/eos";

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

  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cover-eos.jpg"
                alt="The Entrepreneur Operating System book cover"
                width={280}
                height={400}
                className="rounded-md"
                style={{ boxShadow: "0 28px 58px -14px rgba(20,33,61,.45)" }}
                priority
              />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>
                The book
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>
                The Entrepreneur Operating System
              </h1>
              <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)" }}>
                Eighteen years of building, distilled into twenty-five chapters and five named frameworks.
              </p>
              <ul className="space-y-3 mb-8">
                {eosBookPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 w-3 h-0.5 flex-shrink-0" style={{ background: "var(--amber)" }} />
                    <span className="text-sm" style={{ color: "rgba(235,243,251,0.9)" }}>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#buy"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Buy the book
                </Link>
                <Link
                  href="/entrepreneur-os/diagnostic"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
                >
                  Take the diagnostic first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }} id="buy">
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          {successInfo ? (
            <div
              className="rounded-2xl p-10 md:p-12 text-center"
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
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
                Order confirmed
              </p>
              <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: "var(--navy)" }}>
                You&rsquo;re all set.
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-2" style={{ color: "var(--ink-soft)" }}>
                Your <strong>{successInfo.product}</strong> confirmation has been sent to
              </p>
              <p className="text-sm md:text-base font-semibold mb-8" style={{ color: "var(--navy)" }}>
                {successInfo.email}
              </p>
              <div
                className="rounded-lg p-5 mb-8 text-left"
                style={{ background: "var(--cream)" }}
              >
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                  {successInfo.product === "eBook"
                    ? "Check your inbox — your eBook link will arrive within a few minutes."
                    : "Your paperback will be dispatched within 1–2 business days. We'll email you a tracking update when it ships."}
                </p>
              </div>
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
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Get your copy</p>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4" style={{ color: "var(--navy)" }}>Choose your format</h2>

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
    </main>
  );
}
