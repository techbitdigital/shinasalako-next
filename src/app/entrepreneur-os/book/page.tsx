import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import EosBookClient from "@/components/eos/EosBookClient";

export const metadata = buildMetadata({
  title: "Buy the Book — The Entrepreneur Operating System",
  description:
    "The Entrepreneur Operating System — twenty-five chapters across five operating systems, with a companion workbook. By Shina Salako.",
  path: "/entrepreneur-os/book",
});

const parts = [
  { part: "Part One — Founder OS", name: "The Builder", desc: "Before you build the business, you must build the founder. Vision, mindset, discipline, leadership, and decision-making capacity. Most founder books treat this as self-help. This book treats it as the most expensive system in your P&L." },
  { part: "Part Two — Market OS", name: "The Map", desc: "A business does not exist because the founder has an idea. It exists because a customer has a problem. Identifying real market problems, validating demand, studying the landscape, and finding the gap nobody else is naming." },
  { part: "Part Three — Model OS", name: "The Engine", desc: "A business idea is not the same as a business model. How your business will make money, deliver value, price properly, package the solution, and create an offer that makes financial sense." },
  { part: "Part Four — Management OS", name: "The Skeleton", desc: "Growth without structure creates chaos. Roles, workflows, documentation, delegation, cash flow, compliance, team systems, and operational discipline." },
  { part: "Part Five — Momentum OS", name: "The Loop", desc: "A good business must be visible, trusted, chosen, and remembered. Sales, marketing, partnerships, customer experience, referrals, retention, and scalable growth." },
];

const chapters = [
  { part: "Part One — Founder OS", name: "The Builder", items: ["The Entrepreneurial Journey", "The Million-Dollar Entrepreneur Mindset", "Your Role As The CEO", "The Discipline Of Controlled Failure", "Your Vision, Values, And Personal Prize"] },
  { part: "Part Two — Market OS", name: "The Map", items: ["Why Businesses Exist To Solve Problems", "Validating Your Business Idea Before You Build", "Knowing Who You Truly Serve", "Understanding The Market Landscape", "Finding The Gap In The Market"] },
  { part: "Part Three — Model OS", name: "The Engine", items: ["Designing Your Business Model", "Creating An Offer People Want", "Pricing For Profit, Not Survival", "The Offer Behind The Price", "Revenue, Profit, And Cash Flow Logic"] },
  { part: "Part Four — Management OS", name: "The Skeleton", items: ["Structure Is What Survives You", "The Documented Business", "Delegation And The End Of Founder Bottleneck", "The Risks You Cannot See Yet", "The Team That Outlasts You"] },
  { part: "Part Five — Momentum OS", name: "The Loop", items: ["Sales Without Sleaze", "Marketing That Speaks To Real Pain", "Customer Experience And Retention", "Building Strategic Relationships", "Scaling Without Losing Control"] },
];

const preorderBenefits = [
  { timing: "1 — Ship date", title: "Signed book + workbook", desc: "Your signed paperback and the 83-page printed companion workbook arrive together in one package." },
  { timing: "2 — Within 5 days", title: "The prologue, in your inbox", desc: "Twelve pages sent as a PDF so you have something to read while the book is at the printer." },
  { timing: "3 — Eight weeks", title: "Eight personal emails from Shina", desc: "Not marketing emails. Letters about the work, the framework, and how to read the book when it arrives." },
  { timing: "4 — Workshop priority", title: "₦30,000 off the workshop seat", desc: "Twelve of the thirty seats reserved exclusively for pre-order holders at ₦155,000 instead of ₦185,000." },
  { timing: "5 — When it arrives", title: "Arrival rituals + a reading guide", desc: "A Part-by-Part reading order based on your diagnostic result." },
];

export default function EosBookPage() {
  return (
    <main>
      {/* Hero */}
      <header className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cover-eos.jpg"
                alt="The Entrepreneur Operating System book cover"
                width={280} height={400}
                className="rounded-md"
                style={{ boxShadow: "0 28px 58px -14px rgba(20,33,61,.45)" }}
                priority
              />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>The book</p>
              <h1 className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "var(--navy)" }}>
                The Entrepreneur Operating System
              </h1>
              <p className="font-serif italic text-base md:text-lg mb-4" style={{ color: "var(--ink-soft)" }}>
                How to Start, Structure, Grow, and Scale a Business That Works Beyond You.
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>
                By <strong style={{ color: "var(--navy)" }}>Shina Salako</strong>. 322 pages. 25 chapters. 5 named frameworks. One companion workbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <Link
                  href="#buy"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Buy the book
                </Link>
                <Link
                  href="#inside"
                  className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
                >
                  What&rsquo;s inside
                </Link>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Ships <strong style={{ color: "var(--navy)" }}>10 August 2026</strong>. Pre-order holders receive a ₦30,000 workshop discount and eight personal emails between now and ship day.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Pull quote */}
      <section className="py-12 md:py-16 text-center" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed mb-4" style={{ color: "var(--cream)" }}>
            &ldquo;A founder is not a business. A founder is a bottleneck wearing a job title.&rdquo;
          </p>
          <p className="text-sm" style={{ color: "rgba(235,243,251,0.6)" }}>— The locked thesis of the book</p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 md:py-24" style={{ background: "#fff" }} id="inside">
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>What&rsquo;s inside</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-center" style={{ color: "var(--navy)" }}>
            Five parts. Twenty-five chapters. One companion workbook.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {parts.map((p) => (
              <div key={p.part} className="rounded-lg p-6" style={{ background: "var(--cream)", border: "1px solid var(--line)" }}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>{p.part}</p>
                <h3 className="font-serif text-xl mb-3" style={{ color: "var(--navy)" }}>{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{p.desc}</p>
              </div>
            ))}
            <div className="rounded-lg p-6" style={{ background: "var(--navy)" }}>
              <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "rgba(235,243,251,0.6)" }}>Bonus</p>
              <h3 className="font-serif text-xl mb-3" style={{ color: "#fff" }}>The Companion Workbook</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(235,243,251,0.85)" }}>
                83 pages of fill-in space. Every framework in the book becomes an exercise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prologue excerpt */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>From the prologue</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center" style={{ color: "var(--navy)" }}>A read from the opening pages</h2>
          <div className="bg-white rounded-lg p-8 md:p-10" style={{ border: "1px solid var(--line)" }}>
            {[
              "In 2009, a neighbour gifted me ₦30,000. He had heard I was struggling to make rent on my apartment, and he wrote me a cheque without ceremony. I did not cash it. I sat with the cheque for weeks.",
              "By the time he noticed and reached out to ask why, I had decided I did not want to use the money for rent. I wanted to use it to start a business. I told him so. I asked whether the gift would still hold if I used it that way instead. He said yes.",
              "I bought a laptop. Started an SMS gateway in Lagos. It worked for a while.",
              "By 2011 I had moved into fleet management — installing tracking devices in the cars of banks and logistics companies in Lagos. That was the business that actually taught me what running a business meant.",
              "One day in 2012, a mentor sat me down and said a sentence I argued with in my head for a year before I understood what he was saying.",
            ].map((para, i) => (
              <p key={i} className="font-serif text-base md:text-lg leading-relaxed mb-5" style={{ color: "var(--ink)" }}>
                {para}
              </p>
            ))}
            <blockquote
              className="font-serif italic text-lg md:text-xl leading-relaxed my-6 pl-5"
              style={{ color: "var(--navy)", borderLeft: "4px solid var(--amber)" }}
            >
              &ldquo;Everything in this business depends on you, and that is the problem.&rdquo;
            </blockquote>
            <p className="font-serif text-base md:text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
              This book is what I wish someone had handed the 2009 version of me.
            </p>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-16 md:py-24" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>Table of contents</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-10 text-center" style={{ color: "var(--navy)" }}>All twenty-five chapters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {chapters.map((p) => (
              <div key={p.part}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-1" style={{ color: "var(--amber)" }}>{p.part}</p>
                <h3 className="font-serif text-lg mb-4" style={{ color: "var(--navy)" }}>{p.name}</h3>
                <ul className="space-y-2 list-none p-0">
                  {p.items.map((ch, i) => (
                    <li key={ch} className="flex items-start gap-3 text-sm py-1.5" style={{ borderBottom: "1px solid var(--line)", color: "var(--ink-soft)" }}>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--cream)", color: "var(--navy)" }}>{i + 1}</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this book */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widests uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>Why this book</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center" style={{ color: "var(--navy)" }}>The book most business books are not.</h2>
          <ul className="space-y-5">
            {[
              { label: "It is not motivational.", body: "If you are looking for inspiration, this is the wrong book. If you are looking for what to do on Monday morning, this is the right one." },
              { label: "It is not theory.", body: "Eighteen years of operating across SMS, fleet management, consulting, and corporate leadership development — distilled into language you can use the same day." },
              { label: "It is not soft.", body: "The book names what most business advice will not: that you, the founder, are usually the system that is leaking." },
              { label: "It is for the working founder.", body: "Lagos. Nairobi. Accra. New York. Anywhere a founder is doing the work and wondering why hustle alone is not producing the next level." },
            ].map((item) => (
              <li key={item.label} className="text-sm md:text-base leading-relaxed pl-5" style={{ borderLeft: "3px solid var(--amber)", color: "var(--ink-soft)" }}>
                <strong style={{ color: "var(--navy)" }}>{item.label}</strong> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pre-order benefits */}
      <section className="py-16 md:py-24" style={{ background: "#fff", borderTop: "4px solid var(--amber)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--amber)" }}>What you get when you pre-order</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-center" style={{ color: "var(--navy)" }}>
            Five things — most of them before the book even arrives.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {preorderBenefits.map((b) => (
              <div key={b.timing} className="rounded-lg p-6" style={{ background: "var(--cream)", border: "1px solid var(--line)", borderTop: "4px solid var(--amber)" }}>
                <p className="text-[10px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>{b.timing}</p>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--navy)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{b.desc}</p>
              </div>
            ))}
            <div className="rounded-lg p-6" style={{ background: "var(--navy)" }}>
              <h3 className="font-serif text-lg mb-3" style={{ color: "#fff" }}>Take the diagnostic first.</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(235,243,251,0.85)" }}>
                Most pre-order holders take the diagnostic first. You arrive at the book already knowing which OS is your weakest.
              </p>
              <Link
                href="/entrepreneur-os/diagnostic"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold border-0"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                Take the diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buy section — client component with real Paystack */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }} id="buy">
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3 text-center" style={{ color: "var(--teal)" }}>Get your copy</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 text-center" style={{ color: "var(--navy)" }}>Choose your format</h2>
          <p className="text-sm mb-8 text-center" style={{ color: "var(--muted)" }}>
            Payment processed securely via Paystack. Nigerian cards, bank transfer, and USSD supported.
          </p>
          <EosBookClient />
        </div>
      </section>
    </main>
  );
}
