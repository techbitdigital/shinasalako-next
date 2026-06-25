import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "The Practitioner Toolkit",
  description: "A collection of templates, checklists, and frameworks for fleet operations professionals.",
  path: "/fleet/toolkit",
});

const tools = [
  { title: "KPI Dictionary", desc: "The complete set of fleet KPIs — defined, measured, and benchmarked.", tag: "Reference" },
  { title: "RACI Matrix Template", desc: "Role clarity for fleet operations teams — who owns what.", tag: "Template" },
  { title: "Transporter Scorecard", desc: "Monthly performance scorecard for third-party transporters.", tag: "Template" },
  { title: "Control Tower Routine", desc: "The daily operating rhythm for a fleet control tower.", tag: "Checklist" },
  { title: "Incident Response Protocol", desc: "Step-by-step response framework for fleet incidents.", tag: "Protocol" },
  { title: "FOS Maturity Self-Assessment", desc: "Score your operation against the seven-layer Fleet Operating System.", tag: "Diagnostic" },
];

export default function ToolkitPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Free resources</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>The Practitioner Toolkit</h1>
          <p className="font-serif italic text-base md:text-lg mb-12" style={{ color: "var(--ink-soft)", maxWidth: "680px" }}>
            Templates, checklists, and frameworks drawn from the appendices of the book — free for working fleet practitioners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.title} className="bg-white rounded-lg p-6 flex flex-col" style={{ border: "1px solid var(--line)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>{tool.tag}</p>
                <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>{tool.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--ink-soft)" }}>{tool.desc}</p>
                <Link
                  href="/fleet/firstlook"
                  className="text-sm font-semibold border-0 border-b-2 pb-0.5 self-start"
                  style={{ color: "var(--navy)", borderBottomColor: "var(--navy)" }}
                >
                  Get via First Look →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
