'use client';
import { useState } from "react";

export default function FleetScopingForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", organisation: "", team_size: "", programme: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/training-scoping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>Request received.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>We will be in touch within one business day to schedule your scoping call.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
        { name: "organisation", label: "Organisation", type: "text", placeholder: "Company name" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type} required placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Programme of interest</label>
        <select
          required value={form.programme}
          onChange={(e) => setForm({ ...form, programme: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        >
          <option value="">Select one</option>
          <option>Cargo-Owner Programme</option>
          <option>Transporter Programme</option>
          <option>In-House Cohort</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Team size</label>
        <select
          required value={form.team_size}
          onChange={(e) => setForm({ ...form, team_size: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        >
          <option value="">Select one</option>
          <option>1 - 3 people</option>
          <option>4 - 7 people</option>
          <option>8 - 15 people</option>
          <option>15+ people</option>
        </select>
      </div>
      {status === "error" && <p className="text-sm" style={{ color: "red" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit" disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending..." : "Request a scoping call"}
      </button>
    </form>
  );
}
