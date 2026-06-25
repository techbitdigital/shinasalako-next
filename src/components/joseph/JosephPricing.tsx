'use client';
import { useState } from "react";
import { pricingTiers } from "@/lib/data/joseph";

declare global {
  interface Window {
    PaystackPop: {
      setup: (options: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export default function JosephPricing() {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const tier = activeTier ? pricingTiers.find((t) => t.key === activeTier) : null;

  function openModal(key: string) {
    setActiveTier(key);
    setEmail("");
    setMsg("");
    setStatus("idle");
  }

  function closeModal() {
    setActiveTier(null);
  }

  function handlePay() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg("Please enter a valid email.");
      return;
    }
    if (!tier) return;
    setStatus("loading");

    function initPaystack() {
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
        email,
        amount: tier!.amount * 100, // tier.amount is in naira; Paystack wants kobo
        currency: "NGN",
        ref: `JOSEPH-${tier!.key.toUpperCase()}-${Date.now()}`,
        metadata: { product: tier!.title },
        callback: (response: { reference: string }) => {
          fetch("/api/joseph/purchase", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, reference: response.reference, product: tier!.title, amount: tier!.amount }),
          }).finally(() => setStatus("success"));
        },
        onClose: () => setStatus("idle"),
      });
      handler.openIframe();
    }

    if (window.PaystackPop) {
      initPaystack();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.onload = initPaystack;
      script.onerror = () => setMsg("Failed to load payment SDK.");
      document.body.appendChild(script);
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingTiers.map((t) => (
          <div
            key={t.key}
            className="relative rounded-2xl p-7 flex flex-col"
            style={{
              background: "#fff",
              border: t.featured ? "2px solid var(--amber)" : "1px solid var(--line)",
              boxShadow: t.featured ? "0 20px 50px -20px rgba(20,33,61,0.2)" : "0 8px 26px rgba(20,33,61,0.05)",
              transform: t.featured ? "translateY(-8px)" : undefined,
            }}
          >
            {t.badge && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide whitespace-nowrap"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                {t.badge}
              </span>
            )}
            <p className="text-[11px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--teal)" }}>
              {t.kicker}
            </p>
            <h3 className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>{t.title}</h3>
            <p className="text-sm mb-4" style={{ color: "var(--muted)", minHeight: "3em" }}>{t.desc}</p>
            <p className="font-serif text-3xl font-bold mb-5" style={{ color: "var(--navy)" }}>
              {t.price}
              {t.was && <span className="text-base font-normal line-through ml-2" style={{ color: "var(--muted)" }}>{t.was}</span>}
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--ink)" }}>
                  <span style={{ color: "var(--amber)", fontWeight: 700 }}>&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal(t.key)}
              className="w-full py-3 rounded-full text-sm font-semibold border-0"
              style={{
                background: t.featured ? "var(--amber)" : "transparent",
                color: t.featured ? "#fff" : "var(--navy)",
                border: t.featured ? "none" : "1.5px solid var(--navy)",
                cursor: "pointer",
              }}
            >
              {t.key === "bundle" ? "Get the Bundle" : t.key === "ebook" ? "Buy the eBook" : "Buy the Book"}
            </button>
          </div>
        ))}
      </div>

      {tier && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          style={{ background: "rgba(20,20,20,0.6)", backdropFilter: "blur(3px)" }}
          onClick={closeModal}
        >
          <div
            className="rounded-2xl w-full max-w-md p-8 relative"
            style={{ background: "var(--cream)", border: "1px solid var(--line)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl border-0 bg-transparent cursor-pointer"
              style={{ color: "var(--muted)" }}
              aria-label="Close"
            >
              &times;
            </button>
            {status === "success" ? (
              <div className="text-center py-4">
                <p className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>Payment successful.</p>
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                  A receipt has been sent to {email}.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-1" style={{ color: "var(--teal)" }}>
                  The Joseph Protocol
                </p>
                <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>Complete your purchase</h3>
                <p className="text-sm mb-5" style={{ color: "var(--ink-soft)" }}>
                  {tier.title} &mdash; <strong>{tier.price}</strong>
                </p>
                {msg && <p className="text-sm mb-3" style={{ color: "#e53e3e" }}>{msg}</p>}
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>
                  Email (for your receipt & delivery)
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none mb-5"
                  style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
                />
                <button
                  onClick={handlePay}
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff", opacity: status === "loading" ? 0.7 : 1, cursor: "pointer" }}
                >
                  {status === "loading" ? "Opening payment..." : "Pay securely"}
                </button>
                <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
                  Card payment secured by Paystack. Your card details are entered on Paystack&rsquo;s secure form &mdash; this site never sees them.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
