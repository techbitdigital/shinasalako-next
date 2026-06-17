import Link from "next/link";
import { hubServices } from "@/lib/data/hub";

export default function WorkWith() {
  return (
    <section
      id="work"
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
          Work with Shina
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)", maxWidth: "780px" }}>
          Speaking, training, and consulting — for teams ready to build the system.
        </h2>
        <p className="font-serif italic text-base md:text-xl mb-8 md:mb-10" style={{ color: "var(--ink-soft)", maxWidth: "820px" }}>
          The books are the foundation. The work that follows sits in three
          forms, each for a different conversation a serious operation needs to have.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubServices.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg p-6 flex flex-col"
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
