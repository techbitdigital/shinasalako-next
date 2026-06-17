import type { Metadata } from "next";
import FleetFirstLookForm from "@/components/fleet/FleetFirstLookForm";

export const metadata: Metadata = {
  title: "Get the First Look",
  description: "A free 40-page PDF — the foreword, introduction, full first chapter, and the maturity-model framework.",
};

export default function FirstLookPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Free PDF</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>The First Look</h1>
          <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)" }}>
            Read the opening of the book before you buy. Roughly 40 pages — enough to know whether the rest is for you.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Foreword + introduction + the operating credo.",
              "Chapter 1 in full — Fleet Management & Telematics Foundations.",
              "Opening of the Guinness Nigeria case study (first 1,000 words).",
              "The maturity-model framework as a one-page diagnostic.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-3 h-0.5 flex-shrink-0" style={{ background: "var(--cream)" }} />
                <span className="text-sm" style={{ color: "rgba(235,243,251,0.9)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-lg p-7 md:p-8" style={{ border: "1px solid var(--line)" }}>
            <h2 className="font-serif text-xl mb-2" style={{ color: "var(--navy)" }}>Send me the First Look</h2>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Free PDF · delivered to your inbox in under a minute.</p>
            <FleetFirstLookForm />
          </div>
        </div>
      </section>
    </main>
  );
}
