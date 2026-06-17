import Image from "next/image";
import { fleetCredentials } from "@/lib/data/fleet";

export default function FleetAuthor() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
      id="author"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">

          <div
            className="relative rounded-md overflow-hidden w-full max-w-xs mx-auto md:max-w-none md:mx-0"
            style={{ aspectRatio: "1/1.15" }}
          >
            <Image
              src="/images/shina.jpg"
              alt="Shina Salako"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 280px, 400px"
            />
          </div>

          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
              The author
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl mb-2" style={{ color: "var(--navy)" }}>
              Shina Salako
            </h3>
            <p className="font-serif italic text-base mb-6" style={{ color: "var(--ink-soft)" }}>
              MD/CEO, SALCOMMS KWIK XTRA LIMITED · 15+ years in telematics and logistics operations
            </p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              <p>
                Shina Salako is the founder and managing director of SALCOMMS
                KWIK XTRA LIMITED, a telematics service provider whose
                operating model is built on embedded teams at client sites.
                SALCOMMS analysts and operators sit inside the cargo-owner's
                premises, install the tracking devices on every third-party
                transporter's vehicle before commercial operations begin, and
                produce the daily business management reports that allow the
                client's leadership to manage transporter performance with
                independent visibility.
              </p>
              <p>
                In 2014 he pioneered and managed Guinness Nigeria's first fleet
                management programme. Twelve years later, SALCOMMS is still
                embedded in that operation.
              </p>
              <p>
                He is affiliated with PowerFleet, a global telematics platform
                operating in over fifty countries, and is a certified Maxwell
                Leadership Team member.
              </p>
            </div>
            <div
              className="grid grid-cols-2 gap-6 mt-6 pt-6"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              {fleetCredentials.map((c) => (
                <div key={c.value}>
                  <strong className="block text-sm font-bold mb-0.5" style={{ color: "var(--navy)" }}>
                    {c.value}
                  </strong>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
