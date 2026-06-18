import type { Metadata } from "next";
import Link from "next/link";
import GlobalBar from "@/components/global/GlobalBar";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free tools, diagnostics, and downloads from Shina Salako — for founders and fleet leaders.",
};

const resources = [
  {
    category: "Fleet & Telematics",
    items: [
      { title: "Fleet Maturity Assessment", desc: "18 questions across the seven FOS layers. Your maturity stage in 10 minutes.", href: "/fleet/assessment", cta: "Take the assessment" },
      { title: "15-Minute Reporting Audit", desc: "Find the gaps in your fleet reporting practice quickly.", href: "/fleet/audit", cta: "Start the audit" },
      { title: "The First Look PDF", desc: "40 pages — foreword, Chapter 1, Guinness Nigeria case study opening, maturity framework.", href: "/fleet/firstlook", cta: "Get free PDF" },
      { title: "Practitioner Toolkit", desc: "KPI dictionary, RACI matrix, transporter scorecard, control-tower routine.", href: "/fleet/toolkit", cta: "View toolkit" },
    ],
  },
  {
    category: "Entrepreneur OS",
    items: [
      { title: "12-Minute Founder Diagnostic", desc: "Five operating systems. One clear answer about where your business is leaking.", href: "/entrepreneur-os/diagnostic", cta: "Take the diagnostic" },
      { title: "EOS Readiness Worksheet", desc: "A downloadable worksheet to map your five operating systems before the book.", href: "/entrepreneur-os/diagnostic", cta: "Take the diagnostic" },
    ],
  },
  {
    category: "The Joseph Protocol",
    items: [
      { title: "Find Your Phase Quiz", desc: "Name the phase you are building through and the next step it calls for.", href: "/joseph-protocol#quiz", cta: "Find your phase" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <GlobalBar />
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Free resources</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Resources</h1>
          <p className="font-serif italic text-base md:text-lg mb-12" style={{ color: "var(--ink-soft)", maxWidth: "680px" }}>
            Free tools and diagnostics for founders and fleet leaders. No login required for any of them.
          </p>
          <div className="space-y-14">
            {resources.map((group) => (
              <div key={group.category}>
                <h2 className="font-serif text-xl mb-6 pb-3" style={{ color: "var(--navy)", borderBottom: "2px solid var(--amber)" }}>
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <div key={item.title} className="bg-white rounded-lg p-6 flex flex-col" style={{ border: "1px solid var(--line)" }}>
                      <h3 className="font-serif text-lg mb-2" style={{ color: "var(--navy)" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--ink-soft)" }}>{item.desc}</p>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold border-0 border-b-2 pb-0.5 self-start"
                        style={{ color: "var(--navy)", borderBottomColor: "var(--navy)" }}
                      >
                        {item.cta} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
