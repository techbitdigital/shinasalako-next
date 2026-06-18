'use client';
import { useState } from "react";

export default function JosephWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/joseph/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <p className="font-serif italic text-lg" style={{ color: "var(--navy)" }}>
      You are on the list. We will be in touch.
    </p>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
      <input
        type="email" required placeholder="your@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
        style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
      />
      <button
        type="submit" disabled={status === "loading"}
        className="px-6 py-3 rounded-full text-sm font-semibold border-0 whitespace-nowrap"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Joining..." : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-sm w-full text-center" style={{ color: "red" }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
