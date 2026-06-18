'use client';
import { useState } from "react";
import { validateFields, FieldErrors } from "@/lib/validation";

export default function FleetContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", organisation: "", email: "", phone: "", type: "", message: "" });
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
      type: { value: form.type, required: true, label: "Type of enquiry" },
      message: { value: form.message, required: true, label: "Message" },
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div className="rounded-lg p-8 text-center" style={{ background: "var(--cream)" }}>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>Message received.</p>
      <p className="text-sm" style={{ color: "var(--ink-soft)" }}>We will respond within one business day.</p>
    </div>
  );

  const fieldStyle = (name: string) => ({
    border: errors[name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
    background: "#fff", color: "var(--ink)"
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {[
        { name: "name", label: "Full name", type: "text", placeholder: "Your full name" },
        { name: "organisation", label: "Organisation", type: "text", placeholder: "Company or organisation" },
        { name: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
        { name: "phone", label: "Phone number", type: "tel", placeholder: "+234 xxx xxx xxxx" },
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
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Type of enquiry</label>
        <select
          value={form.type}
          onChange={(e) => updateField("type", e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={fieldStyle("type")}
        >
          <option value="">Select one</option>
          <option>Speaking engagement</option>
          <option>Consulting enquiry</option>
          <option>Training programme</option>
          <option>Embedded telematics service</option>
          <option>General enquiry</option>
        </select>
        {errors.type && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.type}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Message</label>
        <textarea
          rows={5} placeholder="Tell us about your fleet and what you need..."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
          style={fieldStyle("message")}
        />
        {errors.message && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.message}</p>}
      </div>
      {status === "error" && <p className="text-sm" style={{ color: "#e53e3e" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit" disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>We respond within one business day.</p>
    </form>
  );
}
