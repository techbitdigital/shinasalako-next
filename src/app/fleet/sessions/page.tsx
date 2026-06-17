import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Chapter Sessions",
  description: "Join Shina Salako for live chapter-by-chapter sessions on fleet telematics and operations.",
};

export default function SessionsPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Live sessions</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>Live Chapter Sessions</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--cream)" }}>
            Chapter-by-chapter sessions with the author — live Q&A, practitioner case studies, and peer discussion.
          </p>
          <Link
            href="/fleet/session"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--cream)", color: "var(--navy)" }}
          >
            Book a session &#8594;
          </Link>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="font-serif italic text-lg" style={{ color: "var(--ink-soft)" }}>
            Session schedule and booking will be available here. Join the First Look list to be notified of upcoming dates.
          </p>
          <div className="mt-8">
            <Link
              href="/fleet/firstlook"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Join the First Look list
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
