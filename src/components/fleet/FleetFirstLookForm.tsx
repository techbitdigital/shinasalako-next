'use client';
import { useState } from "react";
import { validateFields, FieldErrors } from "@/lib/validation";

export default function FleetFirstLookForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validateFields({
      name: { value: form.name, required: true, label: "First name" },
      email: { value: form.email, required: true, email: true, label: "Email address" },
    });
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
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
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {[
        { name: "name", label: "First name", type: "text", placeholder: "Your first name" },
        { name: "email", label: "Corporate email", type: "email", placeholder: "your@company.com" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => { setForm({ ...form, [field.name]: e.target.value }); setErrors({ ...errors, [field.name]: "" }); }}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              border: errors[field.name] ? "1.5px solid #e53e3e" : "1px solid var(--line)",
              background: "#fff", color: "var(--ink)"
            }}
          />
          {errors[field.name] && (
            <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors[field.name]}</p>
          )}
        </div>
      ))}
      {status === "error" && <p className="text-sm" style={{ color: "#e53e3e" }}>Something went wrong. Please try again.</p>}
      <button
        type="submit" disabled={status === "loading"}
        className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
        style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending..." : "Get the First Look — free"}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>Corporate email preferred · one-click unsubscribe.</p>
    </form>
  );
}
