import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Training Programmes",
  description: "Six-week practitioner cohorts for fleet management teams — Cargo-Owner and Transporter programmes.",
  path: "/fleet/training",
});

const programmes = [
  {
    href: "/fleet/training/cargo-owner",
    label: "Cargo-Owner Programme",
    duration: "6 weeks",
    format: "Online cohort",
    desc: "For fleet managers, control-tower teams, and operations leaders on the cargo-owner side. Build the disciplines that give you independent visibility over your transporters.",
    price: "₦85,000",
  },
  {
    href: "/fleet/training/transporter",
    label: "Transporter Programme",
    duration: "6 weeks",
    format: "Online cohort",
    desc: "For transport companies and owner-operators. Build the operating disciplines that make you the preferred, trusted transporter for serious cargo-owners.",
    price: "₦75,000",
  },
  {
    href: "/fleet/training/in-house",
    label: "In-House Cohort",
    duration: "Flexible",
    format: "On-site or virtual",
    desc: "For organisations training 8 or more from one team. Custom delivery schedule, tailored case studies from your industry, direct access to the author.",
    price: "Custom pricing",
  },
];

export default function TrainingPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>
            Practitioner programmes
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>
            Training Programmes
          </h1>
          <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)", maxWidth: "680px" }}>
            Six-week cohorts built around the seven-layer Fleet Operating System — for cargo-owners, transporters, and in-house teams.
          </p>
          <Link
            href="/fleet/training/scoping-call"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Book a scoping call first
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div key={prog.href} className="bg-white rounded-lg p-7 flex flex-col" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>
                  {prog.duration} · {prog.format}
                </p>
                <h2 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>{prog.label}</h2>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--ink-soft)" }}>{prog.desc}</p>
                <p className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--navy)" }}>{prog.price}</p>
                <Link
                  href={prog.href}
                  className="block text-center py-3 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--navy)", color: "#fff" }}
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
