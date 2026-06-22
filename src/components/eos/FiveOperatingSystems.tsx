import Link from "next/link";
import { eosOperatingSystems } from "@/lib/data/eos";

export default function FiveOperatingSystems() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>
          The framework
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-center" style={{ color: "var(--navy)" }}>
          The five operating systems
        </h2>
        <p
          className="font-serif italic text-base md:text-lg leading-relaxed mb-10 text-center mx-auto"
          style={{ color: "var(--ink-soft)", maxWidth: "780px" }}
        >
          Every business runs on five. When growth stalls, one of them is leaking. Usually only one.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-5 xl:gap-4">
          {eosOperatingSystems.map((os) => (
            <div
              key={os.number}
              className="rounded-lg p-6 xl:p-5 flex flex-col"
              style={{ background: "var(--cream)" }}
            >
              <div
                className="font-serif text-3xl font-bold mb-3"
                style={{ color: "var(--amber)" }}
              >
                {os.number}
              </div>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-2 leading-snug" style={{ color: "var(--muted)" }}>
                {os.tag}
              </p>
              <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>
                {os.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {os.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/entrepreneur-os/diagnostic"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Find your leak in 12 minutes &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
}
