'use client';
import { useState } from "react";

export default function FleetContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", organisation: "", email: "", phone: "", type: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/contact", {
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
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>Message received.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>We will respond within one business day.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your full name" },
        { name: "organisation", label: "Organisation", type: "text", placeholder: "Company or organisation" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type}
            required={field.name !== "phone"}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Type of enquiry</label>
        <select
          required
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
        >
          <option value="">Select one</option>
          <option>Speaking engagement</option>
          <option>Consulting enquiry</option>
          <option>Training programme</option>
          <option>Embedded telematics service</option>
          <option>General enquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your fleet and what you need..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
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
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>We respond within one business day.</p>
    </form>
  );
}
