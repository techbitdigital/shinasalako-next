import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Founder Fifteen",
  description: "Fifteen founders. Fifteen stories. One framework — how the Entrepreneur OS shows up in real businesses.",
  path: "/entrepreneur-os/voices",
});

export default function EosVoicesPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Community</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Founder Fifteen</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            Fifteen founders. Fifteen stories. How the five operating systems show up and leak in real businesses across Nigeria.
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Stories coming soon. Take the diagnostic to be notified when the first Founder Fifteen profiles go live.
          </p>
          <div className="mt-8">
            <Link
              href="/entrepreneur-os/diagnostic"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--amber)", color: "#fff" }}
            >
              Take the diagnostic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
