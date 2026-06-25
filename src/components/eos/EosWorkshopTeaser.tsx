import Link from "next/link";
import { eosWorkshopStats } from "@/lib/data/eos";

export default function EosWorkshopTeaser() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
              The workshop
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)" }}>
              The framework, in a room, in half a day.
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: "var(--ink-soft)" }}>
              Thirty seats. One Saturday. Lagos. You walk in with a problem.
              You walk out with a written 90-day fix plan for the one operating
              system that is leaking hardest.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {eosWorkshopStats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div
                    className="font-serif text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: "var(--amber)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/entrepreneur-os/workshop"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              See the workshop →
            </Link>
          </div>

          {/* Workshop date card */}
          <div
            className="rounded-lg p-8 flex flex-col gap-6 justify-around text-center"
            style={{ background: "var(--navy)", color: "var(--cream)" }}
          >
            <div>
              <p className="text-[11px] tracking-widest uppercase font-semibold mb-2" style={{ color: "var(--amber)" }}>
                Next cohort
              </p>
              <h3 className="font-serif text-5xl mb-1" style={{ color: "var(--cream)" }}>
                19 September
              </h3>
              <p className="font-serif italic" style={{ color: "var(--amber)" }}>
                2026 — Lagos
              </p>
            </div>
            <hr className="border-0 border-t w-4/5 mx-auto" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
            <div>
              <p className="text-sm mb-1" style={{ color: "rgba(235,243,251,0.7)" }}>Per seat</p>
              <p className="font-serif text-4xl font-bold mb-1" style={{ color: "var(--amber)" }}>
                ₦185,000
              </p>
              <p className="text-sm" style={{ color: "rgba(235,243,251,0.6)" }}>
                Pay in full or in two instalments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
