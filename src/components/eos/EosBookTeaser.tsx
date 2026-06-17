import Image from "next/image";
import Link from "next/link";
import { eosBookPoints } from "@/lib/data/eos";

export default function EosBookTeaser() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/cover-eos.jpg"
              alt="The Entrepreneur Operating System — book cover"
              width={320}
              height={420}
              className="rounded-md"
              style={{ boxShadow: "0 28px 58px -14px rgba(20,33,61,.45)", maxHeight: "380px", width: "auto" }}
            />
          </div>

          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
              The book
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: "var(--navy)" }}>
              Eighteen years of building, distilled.
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>
              Started with ₦30,000 in 2009. SMS gateway, then fleet management,
              then a mentor's one sentence that took thirteen years to fully understand.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: "var(--ink-soft)" }}>
              This is the book I wish someone had handed the 2009 version of me.
              Twenty-five chapters. Five parts. One companion workbook.
            </p>
            <ul className="space-y-2 mb-7">
              {eosBookPoints.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed pl-5 relative"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <span
                    className="absolute left-0 top-2.5 w-3 h-0.5 inline-block"
                    style={{ background: "var(--amber)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/entrepreneur-os/book"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Read more about the book →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
