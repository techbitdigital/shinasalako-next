import type { Metadata } from "next";
import Link from "next/link";
import GlobalBar from "@/components/global/GlobalBar";

export const metadata: Metadata = { title: "Thank You", description: "Your worksheet is on its way." };

export default function WorksheetThanksPage() {
  return (
    <main>
      <GlobalBar />
      <section className="py-16 md:py-24 text-center" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "580px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif text-4xl mb-4" style={{ color: "var(--navy)" }}>Check your inbox.</p>
          <p className="font-serif italic text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            Your worksheet is on its way. Usually arrives within a minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/entrepreneur-os" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0" style={{ background: "var(--amber)", color: "#fff" }}>
              Explore Entrepreneur OS
            </Link>
            <Link href="/fleet" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold" style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}>
              Fleet & Telematics
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
