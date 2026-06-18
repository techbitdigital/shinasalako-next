'use client';
import { useState } from "react";
import { validateFields, FieldErrors } from "@/lib/validation";

export default function FleetScopingForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", organisation: "", team_size: "", programme: "" });
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
      programme: { value: form.programme, required: true, label: "Programme of interest" },
      team_size: { value: form.team_size, required: true, label: "Team size" },
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
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

  const fieldStyle = (name: string) => ({
    border: errors[name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
    background: "#fff", color: "var(--ink)"
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
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
      {[
        { name: "programme", label: "Programme of interest", options: ["Cargo-Owner Programme", "Transporter Programme", "In-House Cohort", "Not sure yet"] },
        { name: "team_size", label: "Team size", options: ["1 - 3 people", "4 - 7 people", "8 - 15 people", "15+ people"] },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <select
            value={form[field.name as keyof typeof form]}
            onChange={(e) => updateField(field.name, e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={fieldStyle(field.name)}
          >
            <option value="">Select one</option>
            {field.options.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
          {errors[field.name] && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors[field.name]}</p>}
        </div>
      ))}
      {status === "error" && <p className="text-sm" style={{ color: "#e53e3e" }}>Something went wrong. Please try again.</p>}
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
