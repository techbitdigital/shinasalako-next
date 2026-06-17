'use client';
import { useState } from "react";

declare global {
  interface Window {
    PaystackPop: {
      setup: (options: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

interface PaystackButtonProps {
  email: string;
  name: string;
  amount: number;
  label: string;
  reference: string;
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function PaystackButton({
  email, name, amount, label, reference,
  metadata = {}, onSuccess, onClose,
  disabled = false, className = "", style = {},
}: PaystackButtonProps) {
  const [loading, setLoading] = useState(false);

  function handlePay() {
    if (!email || !name) { alert("Please fill in your name and email first."); return; }
    setLoading(true);

    function initPaystack() {
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
        email,
        amount: amount * 100,
        currency: "NGN",
        ref: reference,
        metadata: { name, ...metadata },
        callback: (response: { reference: string }) => {
          setLoading(false);
          onSuccess(response.reference);
        },
        onClose: () => {
          setLoading(false);
          onClose?.();
        },
      });
      handler.openIframe();
    }

    if (window.PaystackPop) {
      initPaystack();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.onload = initPaystack;
      document.body.appendChild(script);
    }
  }

  return (
    <button
      type="button"
      onClick={handlePay}
      disabled={disabled || loading}
      className={className}
      style={{ opacity: loading || disabled ? 0.7 : 1, cursor: loading || disabled ? "not-allowed" : "pointer", ...style }}
    >
      {loading ? "Opening payment..." : label}
    </button>
  );
}
