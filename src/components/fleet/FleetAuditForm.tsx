'use client';
import { useState } from "react";

export default function FleetAuditForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", organisation: "", fleet_size: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/audit", {
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
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>Audit request received.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>We will send your audit results within one business day.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "organisation", label: "Organisation", type: "text", placeholder: "Company name" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type}
            required
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Fleet size</label>
        <select
          required
          value={form.fleet_size}
          onChange={(e) => setForm({ ...form, fleet_size: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        >
          <option value="">Select fleet size</option>
          <option>1 - 10 vehicles</option>
          <option>11 - 50 vehicles</option>
          <option>51 - 200 vehicles</option>
          <option>200+ vehicles</option>
        </select>
      </div>
      {status === "error" && <p className="text-sm" style={{ color: "red" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Submitting..." : "Start my audit"}
      </button>
    </form>
  );
}
