'use client';
import { useState } from "react";
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

  if (successInfo) return (
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
      <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>{successInfo.email}</p>
    </div>
  );

  return (
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
            productId="eos-book-paperback"
            email={form.email} name={form.name}
            label="Buy Paperback"
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
            productId="eos-book-ebook"
            email={form.email} name={form.name}
            label="Buy eBook"
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
  );
}
