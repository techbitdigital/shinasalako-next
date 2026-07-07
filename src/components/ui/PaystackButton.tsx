'use client';
import { useState } from "react";

// PaystackPop v2 is instantiated as a class: new PaystackPop()

interface PaystackButtonProps {
  productId: string;        // server-side product ID from registry
  email: string;
  name: string;
  label: string;
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function PaystackButton({
  productId, email, name, label,
  metadata = {}, onSuccess, onClose,
  disabled = false, className = "", style = {},
}: PaystackButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePay() {
    if (!email || !name) {
      setError("Please fill in your name and email first.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      // Step 1: Initialize transaction server-side
      const res = await fetch("/api/checkout/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, email, name, metadata }),
      });

      if (!res.ok) {
        const { error: errMsg } = await res.json();
        setError(errMsg || "Failed to initialize payment. Please try again.");
        setLoading(false);
        return;
      }

      const { accessCode, reference } = await res.json();

      // Step 2: Load Paystack SDK and open popup with server-issued access_code
      // Use Paystack popup with access_code via v2 inline SDK
      function initPaystack() {
        const paystack = new (window as any).PaystackPop();
        paystack.resumeTransaction(accessCode, {
          onSuccess: (transaction: { reference: string }) => {
            setLoading(false);
            onSuccess(transaction.reference || reference);
          },
          onCancel: () => {
            setLoading(false);
            onClose?.();
          },
        });
      }

      if ((window as any).PaystackPop) {
        initPaystack();
      } else {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v2/inline.js";
        script.onload = initPaystack;
        script.onerror = () => {
          setError("Failed to load payment SDK. Please check your connection.");
          setLoading(false);
        };
        document.body.appendChild(script);
      }

    } catch (err) {
      console.error("Payment error:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handlePay}
        disabled={disabled || loading}
        className={className}
        style={{
          opacity: loading || disabled ? 0.7 : 1,
          cursor: loading || disabled ? "not-allowed" : "pointer",
          ...style,
        }}
      >
        {loading ? "Opening payment..." : label}
      </button>
      {error && (
        <p className="text-xs mt-2 text-center" style={{ color: "#e53e3e" }}>{error}</p>
      )}
    </div>
  );
}
