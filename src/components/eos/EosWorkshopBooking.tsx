'use client';
import { useState } from "react";
import { validateFields, FieldErrors } from "@/lib/validation";

// PaystackPop v2 is instantiated as a class: new PaystackPop()

export default function EosWorkshopBooking() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organisation: "", instalment: "full" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const amount = form.instalment === "full" ? 185000 : 97500;

  function updateField(name: string, value: string) {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  async function handlePaystack() {
    const newErrors = validateFields({
      name: { value: form.name, required: true, label: "Full name" },
      email: { value: form.email, required: true, email: true, label: "Email address" },
      phone: { value: form.phone, required: true, label: "Phone number" },
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorEl = document.querySelector('[data-field-error]');
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      // Initialize transaction server-side — amount is locked by the server
      const productId = form.instalment === "full" ? "eos-workshop-full" : "eos-workshop-instalment";
      const res = await fetch("/api/checkout/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          email: form.email,
          name: form.name,
          metadata: { phone: form.phone, organisation: form.organisation, instalment: form.instalment },
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const { accessCode, reference } = await res.json();

      function initPaystack() {
        const paystack = new (window as any).PaystackPop();
        paystack.resumeTransaction(accessCode, {
          onSuccess: (transaction: { reference: string }) => {
            const response = transaction;
            fetch("/api/eos/workshop", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...form, reference: response.reference || reference, amount }),
            })
              .then(() => setStatus("success"))
              .catch(() => setStatus("error"));
          },
          onCancel: () => setStatus("idle"),
        });
      }

      if ((window as any).PaystackPop) {
        initPaystack();
      } else {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v2/inline.js";
        script.onload = initPaystack;
        script.onerror = () => setStatus("error");
        document.body.appendChild(script);
      }
    } catch (err) {
      console.error("Paystack error:", err);
      setStatus("error");
    }
  }

  if (status === "success") return (
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>You are booked.</p>
      <p className="text-sm mb-2" style={{ color: "var(--ink-soft)" }}>A confirmation email is on its way to {form.email}.</p>
      <p className="text-sm" style={{ color: "var(--muted)" }}>See you on 19 September 2026 in Lagos.</p>
    </div>
  );

  const fieldStyle = (name: string) => ({
    border: errors[name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
    background: "#fff",
    color: "var(--ink)",
  });

  return (
    <div className="space-y-5">
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
        { name: "organisation", label: "Business / organisation (optional)", type: "text", placeholder: "Your company name (optional)" },
      ].map((field) => (
        <div key={field.name} data-field-error={errors[field.name] ? "true" : undefined}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => updateField(field.name, e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={fieldStyle(field.name)}
          />
          {errors[field.name] && (
            <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors[field.name]}</p>
          )}
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
                cursor: "pointer",
              }}
            >
              <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--navy)" }}>{opt.label}</p>
              <p className="font-serif text-xl font-bold" style={{ color: "var(--amber)" }}>{opt.amount}</p>
            </button>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#e53e3e" }}>
          Payment failed or could not load. Please check your connection and try again.
        </p>
      )}

      <button
        type="button"
        onClick={handlePaystack}
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{
          background: "var(--amber)",
          color: "#fff",
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading"
          ? "Opening payment..."
          : `Pay ${form.instalment === "full" ? "₦185,000" : "₦97,500"} via Paystack`}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
        Secured by Paystack · Nigerian cards, bank transfer & USSD supported.
      </p>
    </div>
  );
}
