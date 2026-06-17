import { fleetWhoFor } from "@/lib/data/fleet";

export default function WhoItsFor() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
          Who this book is for
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-10"
          style={{ color: "var(--navy)", maxWidth: "780px" }}
        >
          For the people who carry the daily weight of a fleet — and the
          leaders who answer for it at the top of the house.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetWhoFor.map((item) => (
            <div
              key={item.title}
              className="rounded-md p-7"
              style={{ background: "var(--cream)" }}
            >
              <p
                className="text-[11px] tracking-widest uppercase font-bold mb-3"
                style={{ color: "var(--amber)" }}
              >
                {item.label}
              </p>
              <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
