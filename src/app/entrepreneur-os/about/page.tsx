import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Shina Salako",
  description: "Started with 30,000 naira in 2009. Built and sold across SMS, fleet management, and consulting over eighteen years. Maxwell Leadership certified.",
};

export default function EosAboutPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-none" style={{ aspectRatio: "1/1.15" }}>
              <Image src="/images/shina.jpg" alt="Shina Salako" fill className="object-cover object-top" sizes="(max-width: 768px) 280px, 420px" priority />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>The author</p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-2" style={{ color: "var(--navy)" }}>Shina Salako</h1>
              <p className="font-serif italic text-base mb-8" style={{ color: "var(--ink-soft)" }}>
                Author & operator · MD/CEO, SALCOMMS KWIK XTRA LIMITED · Maxwell Leadership Team member
              </p>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <p>Started his first business in 2009 with ₦30,000 gifted by a neighbour, money originally intended for rent, redirected with the neighbour's blessing into an SMS gateway business.</p>
                <p>Built and sold across SMS, fleet management, and consulting over the next eighteen years. Postgraduate studies at the University of Liverpool (2014) and Lagos Business School (2019).</p>
                <p>In 2014 he pioneered Guinness Nigeria's first fleet management programme through SALCOMMS KWIK XTRA LIMITED. Twelve years later, that engagement is still running making it one of the longest-running embedded telematics service relationships in Nigeria.</p>
                <p>He joined the John Maxwell Leadership team in 2022 as a certified coach, speaker, and trainer. He runs regular leadership and entrepreneurship sessions across Lagos.</p>
                <p>The Entrepreneur Operating System is the book he wishes someone had handed him in 2009 when hustle felt like strategy, and nobody had named the leak.</p>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-8 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                {[
                  { value: "18+ years", label: "Building & selling businesses" },
                  { value: "2009", label: "First business — ₦30,000 start" },
                  { value: "Maxwell Leadership", label: "Certified coach & speaker" },
                  { value: "Lagos", label: "Based and building" },
                ].map((c) => (
                  <div key={c.value}>
                    <strong className="block text-sm font-bold mb-0.5" style={{ color: "var(--navy)" }}>{c.value}</strong>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/entrepreneur-os/diagnostic"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Take the diagnostic
                </Link>
                <Link
                  href="/entrepreneur-os/coaching"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
                >
                  Work with Shina
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
