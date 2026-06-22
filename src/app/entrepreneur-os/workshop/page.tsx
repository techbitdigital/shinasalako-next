import type { Metadata } from "next";
import EosWorkshopBooking from "@/components/eos/EosWorkshopBooking";
import { eosWorkshopStats } from "@/lib/data/eos";

export const metadata: Metadata = {
  title: "The Workshop",
  description: "Half-day intensive in Lagos. Walk in with a problem. Walk out with a written 90-day fix plan.",
};

export default function EosWorkshopPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>The workshop</p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>
                The framework, in a room, in half a day.
              </h1>
              <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)" }}>
                Thirty seats. One Saturday. Lagos. You walk in with a problem. You walk out with a written 90-day fix plan for the one operating system leaking hardest.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {eosWorkshopStats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="font-serif text-3xl font-bold mb-1" style={{ color: "var(--amber)" }}>{stat.value}</div>
                    <div className="text-xs" style={{ color: "rgba(235,243,251,0.7)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {[
                  "The Entrepreneur OS framework taught live by the author",
                  "Your diagnostic result used as the starting point",
                  "Peer cohort of 30 founders from Lagos",
                  "Written 90-day fix plan — yours to leave with",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-3 h-0.5 flex-shrink-0" style={{ background: "var(--amber)" }} />
                    <span className="text-sm" style={{ color: "rgba(235,243,251,0.9)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-8 text-center" style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.18)" }}>
              <p className="text-[11px] tracking-widest uppercase font-semibold mb-2" style={{ color: "var(--amber)" }}>Next cohort</p>
              <h3 className="font-serif text-5xl mb-1" style={{ color: "var(--cream)" }}>18 August</h3>
              <p className="font-serif italic mb-6" style={{ color: "var(--amber)" }}>2026 — Lagos</p>
              <hr className="border-0 border-t w-4/5 mx-auto mb-6" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
              <p className="text-sm mb-1" style={{ color: "rgba(235,243,251,0.7)" }}>Per seat</p>
              <p className="font-serif text-4xl font-bold mb-1" style={{ color: "var(--amber)" }}>₦185,000</p>
              <p className="text-sm mb-6" style={{ color: "rgba(235,243,251,0.6)" }}>Pay in full or in two instalments.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Reserve your seat</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4" style={{ color: "var(--navy)" }}>Book your place 18 August 2026</h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>30 seats only. Payment via Paystack Nigerian cards, bank transfer, and USSD supported.</p>
          <EosWorkshopBooking />
        </div>
      </section>
    </main>
  );
}
