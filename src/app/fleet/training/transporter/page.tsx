import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Transporter Training Programme",
  description: "Six-week practitioner cohort for transport companies and owner-operators.",
  path: "/fleet/training/transporter",
});

export default function TransporterPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>6-week cohort</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>Transporter Programme</h1>
          <p className="font-serif italic text-base md:text-lg mb-6" style={{ color: "var(--cream)" }}>
            For transport companies and owner-operators. Build the operating disciplines that make you the preferred, trusted transporter for serious cargo-owners.
          </p>
          <p className="font-serif text-3xl font-bold mb-6" style={{ color: "var(--amber)" }}>₦75,000</p>
          <Link
            href="/fleet/training/scoping-call"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Book a scoping call
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif italic text-lg mb-6" style={{ color: "var(--ink-soft)" }}>
            Full curriculum details available on the scoping call. The programme covers vehicle tracking standards, driver management, documentation, client reporting, and building a scorecard-ready operation.
          </p>
          <Link
            href="/fleet/training/scoping-call"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            Book a scoping call to learn more
          </Link>
        </div>
      </section>
    </main>
  );
}
