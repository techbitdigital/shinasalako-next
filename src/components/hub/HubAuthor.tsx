import Image from "next/image";
import Link from "next/link";
import { hubCredentials } from "@/lib/data/hub";

export default function HubAuthor() {
  return (
    <section
      id="about"
      className="py-16 md:py-24"
      style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Photo */}
          <div
            className="relative rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-none md:mx-0"
            style={{ aspectRatio: "1/1.15" }}
          >
            <Image
              src="/images/shina.jpg"
              alt="Shina Salako"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 280px, 420px"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
              The author
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2" style={{ color: "var(--navy)" }}>
              Shina Salako
            </h2>
            <p className="font-serif italic text-sm md:text-base mb-6" style={{ color: "var(--ink-soft)" }}>
              Author & operator · MD/CEO, SALCOMMS KWIK XTRA LIMITED · Maxwell Leadership Team member
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Shina Salako started his first business in 2009 with ₦30,000
                gifted by a neighbour, and spent the next eighteen years
                building and selling across SMS, fleet management, and consulting.
                In 2014 he pioneered Guinness Nigeria first fleet management
                programme — and twelve years later, SALCOMMS is still embedded
                in that operation.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                He writes the books he wishes someone had handed him along the way:
                one for the founder he was in 2009, one for the fleet leaders he
                has worked beside for fifteen years, and one for the long seasons
                in between.
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-5 pt-5 mt-5"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              {hubCredentials.map((cred) => (
                <div key={cred.value}>
                  <strong className="block text-sm font-bold mb-0.5" style={{ color: "var(--navy)" }}>
                    {cred.value}
                  </strong>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6">
              <Link href="/entrepreneur-os/about" className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
                Read the full story →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
