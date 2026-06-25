import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "In-House Training Cohort",
  description: "Custom fleet training delivery for organisations training 8 or more people from one team.",
  path: "/fleet/training/in-house",
});

export default function InHousePage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Custom delivery</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>In-House Cohort</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--cream)" }}>
            For organisations training 8 or more from one team. Custom schedule, tailored case studies, direct access to the author.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { value: "8+", label: "minimum participants" },
              { value: "Flexible", label: "delivery schedule" },
              { value: "Custom", label: "case studies" },
            ].map((stat) => (
              <div key={stat.value} className="text-center p-5 rounded-lg" style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.18)" }}>
                <p className="font-serif text-3xl font-bold mb-1" style={{ color: "var(--amber)" }}>{stat.value}</p>
                <p className="text-xs" style={{ color: "rgba(235,243,251,0.7)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/fleet/training/scoping-call"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Book a scoping call
          </Link>
        </div>
      </section>
    </main>
  );
}
