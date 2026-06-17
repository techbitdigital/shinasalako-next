import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Book a Session", description: "Book a live chapter session with Shina Salako." };

export default function SessionPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Live session</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Book a Session</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            Session booking is managed through the First Look list. Join to be notified of upcoming dates and to reserve your place.
          </p>
          <Link href="/fleet/firstlook" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0" style={{ background: "var(--navy)", color: "#fff" }}>
            Join the First Look list
          </Link>
        </div>
      </section>
    </main>
  );
}
