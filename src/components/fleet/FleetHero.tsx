import Image from "next/image";
import Link from "next/link";

export default function FleetHero() {
  return (
    <header
      className="py-16 md:py-24"
      style={{ background: "var(--navy)", color: "#fff" }}
      id="top"
    >
      <div
        style={{ maxWidth: "1140px" }}
        className="mx-auto px-5 md:px-8 flex flex-col md:flex-row gap-10 md:gap-12 items-center"
      >
        <div className="flex-1">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
            A practitioner's playbook
          </p>
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-5"
            style={{ color: "#fff" }}
          >
            Telematics & Fleet Management.
          </h1>
          <p
            className="font-serif italic text-base sm:text-lg md:text-[22px] mb-4"
            style={{ color: "var(--cream)", maxWidth: "780px" }}
          >
            The operating playbook for fleet leaders in emerging markets —
            visibility, control, safety, and profitability.
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--cream)" }}>
            By Shina Salako · MD/CEO, SALCOMMS KWIK XTRA LIMITED · 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/fleet/firstlook"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--cream)", color: "var(--navy)" }}
            >
              Get the First Look — free
            </Link>
            <Link
              href="/fleet/book"
              className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(235,243,251,0.6)" }}
            >
              Buy the book
            </Link>
          </div>
        </div>

        {/* Book cover */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/images/cover-fleet.jpg"
            alt="Telematics & Fleet Management — book cover"
            width={260}
            height={370}
            className="rounded-lg"
            style={{ boxShadow: "0 26px 60px rgba(0,0,0,.45)" }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
