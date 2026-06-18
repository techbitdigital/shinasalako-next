'use client';
import { useState } from "react";
import { validateFields, FieldErrors } from "@/lib/validation";

export default function FleetAuditForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", organisation: "", fleet_size: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  function updateField(name: string, value: string) {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validateFields({
      name: { value: form.name, required: true, label: "Full name" },
      email: { value: form.email, required: true, email: true, label: "Email address" },
      organisation: { value: form.organisation, required: true, label: "Organisation" },
      fleet_size: { value: form.fleet_size, required: true, label: "Fleet size" },
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>Audit request received.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>We will send your audit results within one business day.</p>
    </div>
  );

  const fieldStyle = (name: string) => ({
    border: errors[name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
    background: "#fff", color: "var(--ink)"
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "organisation", label: "Organisation", type: "text", placeholder: "Company name" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type} placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => updateField(field.name, e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={fieldStyle(field.name)}
          />
          {errors[field.name] && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors[field.name]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Fleet size</label>
        <select
          value={form.fleet_size}
          onChange={(e) => updateField("fleet_size", e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={fieldStyle("fleet_size")}
        >
          <option value="">Select fleet size</option>
          <option>1 - 10 vehicles</option>
          <option>11 - 50 vehicles</option>
          <option>51 - 200 vehicles</option>
          <option>200+ vehicles</option>
        </select>
        {errors.fleet_size && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.fleet_size}</p>}
      </div>
      {status === "error" && <p className="text-sm" style={{ color: "#e53e3e" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit" disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Submitting..." : "Start my audit"}
      </button>
    </form>
  );
}
