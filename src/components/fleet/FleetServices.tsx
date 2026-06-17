import Link from "next/link";
import { fleetServices } from "@/lib/data/fleet";

export default function FleetServices() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
      id="services"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
          Work with the author
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4"
          style={{ color: "var(--navy)", maxWidth: "780px" }}
        >
          Speaking, training, consulting — for organisations ready to build
          the operating system.
        </h2>
        <p
          className="font-serif italic text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--ink-soft)", maxWidth: "780px" }}
        >
          The book is the foundation. The work that follows it sits in three
          forms. Each is designed for a different conversation a serious fleet
          operation needs to have at the right moment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetServices.map((svc) => (
            <div
              key={svc.title}
              className="rounded-lg p-6 md:p-7 flex flex-col"
              style={{ border: "1px solid var(--line)" }}
            >
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>
                {svc.label}
              </p>
              <h3 className="font-serif text-xl mb-3 leading-snug" style={{ color: "var(--navy)" }}>
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--ink-soft)" }}>
                {svc.description}
              </p>
              <Link
                href={svc.ctaHref}
                className="text-sm font-semibold border-0 border-b-2 pb-0.5 self-start"
                style={{ color: "var(--navy)", borderBottomColor: "var(--navy)" }}
              >
                {svc.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
