import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import { fleetCredentials } from "@/lib/data/fleet";

export const metadata = buildMetadata({
  title: "About Shina Salako",
  description: "MD/CEO of SALCOMMS KWIK XTRA LIMITED. 15+ years in telematics and logistics operations. Pioneer of Guinness Nigeria first fleet management programme.",
  path: "/fleet/about",
});

export default function FleetAboutPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-none" style={{ aspectRatio: "1/1.15" }}>
              <Image src="/images/shina.jpg" alt="Shina Salako" fill className="object-cover object-top" sizes="(max-width: 768px) 280px, 420px" priority />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>The author</p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-2" style={{ color: "var(--navy)" }}>Shina Salako</h1>
              <p className="font-serif italic text-base mb-8" style={{ color: "var(--ink-soft)" }}>MD/CEO, SALCOMMS KWIK XTRA LIMITED · 15+ years in telematics and logistics operations</p>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <p>Shina Salako is the founder and managing director of SALCOMMS KWIK XTRA LIMITED, a telematics service provider whose operating model is built on embedded teams at client sites.</p>
                <p>In 2014 he pioneered and managed Guinness Nigeria's first fleet management programme. Twelve years later, SALCOMMS is still embedded in that operation a dual relationship that has shaped how this book describes vendor governance, change management, and the long arc of a service-provider relationship.</p>
                <p>He is affiliated with PowerFleet, a global telematics platform operating in over fifty countries, and is a certified Maxwell Leadership Team member.</p>
                <p>Much of this book is written from the seat he has worked in for the last fifteen years that of the embedded telematics service provider sitting alongside the client's operations team, daily.</p>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-8 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                {fleetCredentials.map((c) => (
                  <div key={c.value}>
                    <strong className="block text-sm font-bold mb-0.5" style={{ color: "var(--navy)" }}>{c.value}</strong>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
