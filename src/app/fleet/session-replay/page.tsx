import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Session Replays", description: "Recordings of past live chapter sessions." };

export default function SessionReplayPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Replays</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Session Replays</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            Recordings of past live sessions will be available here. Join the First Look list to be notified when replays go live.
          </p>
          <Link href="/fleet/firstlook" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0" style={{ background: "var(--navy)", color: "#fff" }}>
            Join the First Look list
          </Link>
        </div>
      </section>
    </main>
  );
}
