'use client';
import { useState } from "react";

declare global {
  interface Window {
    PaystackPop: {
      setup: (options: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export default function EosWorkshopBooking() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organisation: "", instalment: "full" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const amount = form.instalment === "full" ? 185000 : 97500;

  function handlePaystack() {
    if (!form.name || !form.email) { alert("Please fill in your name and email."); return; }
    setStatus("loading");

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
        email: form.email,
        amount: amount * 100,
        currency: "NGN",
        ref: `EOS-WORKSHOP-${Date.now()}`,
        metadata: { name: form.name, phone: form.phone, organisation: form.organisation, instalment: form.instalment },
        callback: async (response: { reference: string }) => {
          try {
            await fetch("/api/eos/workshop", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...form, reference: response.reference, amount }),
            });
            setStatus("success");
          } catch { setStatus("error"); }
        },
        onClose: () => setStatus("idle"),
      });
      handler.openIframe();
    };
    document.body.appendChild(script);
  }

  if (status === "success") return (
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>You are booked.</p>
      <p className="text-sm mb-2" style={{ color: "var(--ink-soft)" }}>A confirmation email is on its way to {form.email}.</p>
      <p className="text-sm" style={{ color: "var(--muted)" }}>See you on 18 August 2026 in Lagos.</p>
    </div>
  );

  return (
    <div className="space-y-5">
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
        { name: "organisation", label: "Business / organisation", type: "text", placeholder: "Your company name (optional)" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type}
            required={field.name !== "organisation"}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>Payment option</label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "full", label: "Pay in full", amount: "₦185,000" },
            { value: "instalment", label: "First instalment", amount: "₦97,500" },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setForm({ ...form, instalment: opt.value })}
              className="p-4 rounded-lg text-left transition-all"
              style={{
                border: form.instalment === opt.value ? "2px solid var(--amber)" : "1px solid var(--line)",
                background: form.instalment === opt.value ? "rgba(255,107,0,0.05)" : "#fff",
              }}
            >
              <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--navy)" }}>{opt.label}</p>
              <p className="font-serif text-xl font-bold" style={{ color: "var(--amber)" }}>{opt.amount}</p>
            </button>
          ))}
        </div>
      </div>

      {status === "error" && <p className="text-sm" style={{ color: "red" }}>Payment failed. Please try again.</p>}

      <button
        type="button"
        onClick={handlePaystack}
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--amber)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Opening payment..." : `Pay ${form.instalment === "full" ? "₦185,000" : "₦97,500"} via Paystack`}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
        Secured by Paystack · Nigerian cards, bank transfer & USSD supported.
      </p>
    </div>
  );
}
