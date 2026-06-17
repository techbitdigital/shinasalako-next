'use client';
import { useState } from "react";

export default function FleetFirstLookForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/firstlook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return (
    <div className="text-center py-4">
      <p className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>Check your inbox.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>The First Look PDF is on its way — usually within a minute.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>First name</label>
        <input
          type="text"
          required
          placeholder="Your first name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Corporate email</label>
        <input
          type="email"
          required
          placeholder="your@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        />
      </div>
      {status === "error" && <p className="text-sm" style={{ color: "red" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending..." : "Get the First Look — free"}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>Corporate email preferred · one-click unsubscribe.</p>
    </form>
  );
}
