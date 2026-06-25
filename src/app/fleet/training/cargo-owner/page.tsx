import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Cargo-Owner Training Programme",
  description: "Six-week practitioner cohort for fleet managers and control-tower teams on the cargo-owner side.",
  path: "/fleet/training/cargo-owner",
});

const modules = [
  { week: "Week 1", title: "Data & Visibility", desc: "Device setup, connectivity, platform configuration, master data, uptime standards." },
  { week: "Week 2", title: "Operational Disciplines", desc: "Driver behaviour, maintenance scheduling, fuel management, dispatch protocols." },
  { week: "Week 3", title: "Transporter Governance", desc: "Onboarding transporters, setting SLAs, running the scorecard, managing performance conversations." },
  { week: "Week 4", title: "Control Tower Operations", desc: "Daily routine, escalation protocols, incident response, customer SLA reporting." },
  { week: "Week 5", title: "Reporting & Analytics", desc: "Building the daily business report, variance analysis, presenting to leadership." },
  { week: "Week 6", title: "Strategy & Scale", desc: "The maturity model, cost-per-km, ROI calculation, building the case for investment." },
];

export default function CargoOwnerPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>6-week cohort</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>Cargo-Owner Programme</h1>
          <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)" }}>
            For fleet managers, control-tower teams, and operations leaders. Build the disciplines that give you independent visibility over your transporters.
          </p>
          <p className="font-serif text-2xl font-bold mb-6" style={{ color: "var(--amber)" }}>Custom pricing</p>
          <Link
            href="/fleet/training/scoping-call"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Book a scoping call
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8" style={{ color: "var(--navy)" }}>Six weeks. Six modules.</h2>
          <div className="space-y-4">
            {modules.map((mod) => (
              <div key={mod.week} className="bg-white rounded-lg p-6" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>{mod.week}</p>
                <h3 className="font-serif text-lg mb-2" style={{ color: "var(--navy)" }}>{mod.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
