import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GlobalBar from "@/components/global/GlobalBar";
import JosephQuiz from "@/components/joseph/JosephQuiz";
import JosephPricing from "@/components/joseph/JosephPricing";
import JosephPhasesGrid from "@/components/joseph/JosephPhasesGrid";
import { insideBullets, tools } from "@/lib/data/joseph";

export const metadata: Metadata = {
  title: "The Joseph Protocol \u2014 Shina Salako",
  description:
    "Build With Wisdom. Steward With Excellence. Preserve for Legacy. A practical biblical framework for understanding your season, preparing for opportunity, and building a legacy that outlives you.",
};

export default function JosephProtocolPage() {
  return (
    <main style={{ fontFamily: "'Lora', Georgia, serif", color: "#1A1A1A", background: "#EBF3FB" }}>
      <GlobalBar />

      {/* Hero */}
      <header
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(255,107,0,.10), transparent 42%), radial-gradient(circle at 85% 8%, rgba(26,60,110,.10), transparent 40%), #EBF3FB",
        }}
      >
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-center">
            <div>
              <span
                className="inline-block text-[0.7rem] tracking-[0.18em] uppercase font-semibold px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#FF6B00", color: "#fff" }}
              >
                Now Available
              </span>
              <h1
                className="mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#1A3C6E", lineHeight: 1.1, fontWeight: 600 }}
              >
                The Joseph Protocol
              </h1>
              <p className="italic mb-5" style={{ color: "#1A3C6E", fontSize: "1.18rem" }}>
                Build With Wisdom. Steward With Excellence. Preserve for Legacy.
              </p>
              <p style={{ color: "#1A1A1A", fontSize: "1.12rem", maxWidth: "30em" }} className="mb-7">
                <strong style={{ color: "#1A3C6E" }}>You are not stuck.</strong> You may simply be in a phase you
                do not yet understand. Joseph had a dream &mdash; but it did not take him straight to the palace.
                It took him through a process. And that process has a pattern you can learn.
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="#pricing"
                  className="inline-block border-0 font-semibold"
                  style={{ background: "#FF6B00", color: "#fff", padding: "15px 32px", borderRadius: "40px", fontSize: "1rem" }}
                >
                  Get the Book
                </Link>
                <Link
                  href="#phases"
                  className="inline-block font-semibold"
                  style={{ background: "transparent", color: "#1A3C6E", border: "1.5px solid #1A3C6E", padding: "15px 32px", borderRadius: "40px", fontSize: "1rem" }}
                >
                  See the Seven Phases
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="flex flex-col justify-between relative"
                style={{
                  aspectRatio: "3/4.3",
                  maxWidth: "330px",
                  width: "100%",
                  borderRadius: "8px",
                  background: "linear-gradient(150deg, #13294B, #1A3C6E 55%, #13294B)",
                  boxShadow: "0 18px 50px rgba(20,33,61,.30)",
                  border: "1px solid #13294B",
                  transform: "rotate(1.4deg)",
                  padding: "34px 28px",
                }}
              >
                <div
                  className="absolute pointer-events-none"
                  style={{ inset: "10px", border: "1px solid rgba(255,107,0,.45)", borderRadius: "4px" }}
                />
                <div style={{ textTransform: "uppercase", letterSpacing: "0.28em", fontSize: "0.62rem", color: "#FF6B00" }}>
                  Shina Salako
                </div>
                <div
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", lineHeight: 1.08, color: "#EBF3FB" }}
                >
                  The Joseph Protocol
                </div>
                <div
                  style={{ fontSize: "0.74rem", fontStyle: "italic", color: "#EBF3FB", borderTop: "1px solid rgba(255,107,0,.4)", paddingTop: "12px", letterSpacing: "0.04em" }}
                >
                  Build with wisdom. Steward with excellence. Preserve for legacy.
                </div>
                <div style={{ letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.72rem", color: "#EBF3FB" }}>
                  A Blueprint for Your Process
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="py-16 md:py-[78px]">
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6 text-center">
          <div style={{ maxWidth: "40em" }} className="mx-auto">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              Why this book
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-3.5">
              Your season is not random. It has a pattern.
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#1A3C6E" }}>
              Pain is hard. But pain without interpretation is harder. Many people are not lazy or faithless
              &mdash; they are simply carrying a vision that does not yet match their daily life. <em>The Joseph
              Protocol</em> takes the life of Joseph and turns it into a practical map: seven phases that help
              you locate where you are, understand what your season requires, and build accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        className="text-center py-16 md:py-[78px]"
        style={{
          background:
            "radial-gradient(circle at 80% 30%, rgba(255,107,0,.18), transparent 45%), linear-gradient(135deg, #1A3C6E, #43332650 100%), #1A3C6E",
        }}
      >
        <div style={{ maxWidth: "820px" }} className="mx-auto px-6">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", lineHeight: 1.3, color: "#EBF3FB", margin: 0 }}>
            &ldquo;The palace was not where Joseph became ready. It was where his readiness was revealed.&rdquo;
          </p>
          <span className="block italic mt-5" style={{ fontSize: "1rem", color: "#FF6B00", letterSpacing: "0.04em" }}>
            &mdash; The Joseph Protocol
          </span>
        </div>
      </section>

      {/* Seven phases */}
      <section
        className="py-16 md:py-[78px]"
        style={{ background: "linear-gradient(180deg, #EBF3FB, #EBF3FB)", borderTop: "1px solid #e0d2ba", borderBottom: "1px solid #e0d2ba" }}
        id="phases"
      >
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6">
          <div style={{ maxWidth: "40em" }} className="mx-auto text-center mb-12">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              The Framework
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-3.5">
              The Seven Phases
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#1A3C6E" }}>
              Most people use the right effort in the wrong season. These seven phases help you stop
              misdiagnosing your life &mdash; and start building with focus.
            </p>
          </div>
          <JosephPhasesGrid />
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 md:py-[78px]" id="quiz">
        <div style={{ maxWidth: "780px" }} className="mx-auto px-6">
          <div style={{ maxWidth: "40em" }} className="mx-auto text-center mb-12">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              Free 2-minute self-check
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-3.5">
              Find Your Phase
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#1A3C6E" }}>
              Tick every statement that feels true for you right now &mdash; honestly, not where you wish you
              were. Then reveal the phase your season is asking you to build in.
            </p>
          </div>
          <JosephQuiz />
        </div>
      </section>

      {/* What's inside */}
      <section
        className="py-16 md:py-[78px]"
        style={{ borderTop: "1px solid #e0d2ba", borderBottom: "none" }}
      >
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6">
          <div style={{ maxWidth: "40em" }} className="mx-auto text-center mb-12">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              What you&rsquo;ll learn
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }}>
              Inside the book
            </h2>
          </div>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-[38px] gap-y-3 list-none p-0 mx-auto"
            style={{ maxWidth: "880px" }}
          >
            {insideBullets.map((b) => (
              <li key={b} className="relative" style={{ paddingLeft: "30px" }}>
                <span className="absolute left-0" style={{ color: "#FF6B00" }}>&#10022;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools showcase */}
      <section
        className="py-16 md:py-[78px]"
        style={{ background: "linear-gradient(180deg, #EBF3FB, #EBF3FB)", borderTop: "1px solid #e0d2ba", borderBottom: "1px solid #e0d2ba" }}
        id="tools"
      >
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6">
          <div style={{ maxWidth: "40em" }} className="mx-auto text-center mb-12">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              Inside the workbook
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-3.5">
              Ten tools to build your blueprint
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#1A3C6E" }}>
              The companion turns each phase into something you build &mdash; and every tool includes a worked
              example, so you always know what &ldquo;done&rdquo; looks like.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {tools.map((tool) => (
              <div
                key={tool.num}
                className="flex gap-3"
                style={{ background: "#EBF3FB", border: "1px solid #e0d2ba", borderRadius: "12px", padding: "18px" }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", color: "#FF6B00", fontWeight: 700, fontSize: "1.05rem", flexShrink: 0, lineHeight: 1.4 }}>
                  {tool.num}
                </div>
                <div>
                  <h4 className="m-0" style={{ fontSize: "1.04rem", color: "#1A3C6E", fontWeight: 600 }}>{tool.title}</h4>
                  <p className="mt-1" style={{ fontSize: "0.86rem", color: "#7d6b58" }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-[78px]" id="pricing">
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6">
          <div style={{ maxWidth: "40em" }} className="mx-auto text-center mb-12">
            <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
              Get your copy
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-3.5">
              Choose how you&rsquo;ll build
            </h2>
            <p style={{ fontSize: "1.12rem", color: "#1A3C6E" }}>
              Start with the book, go deeper with the workbook, or get both together and save.
            </p>
          </div>
          <JosephPricing />
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-[78px]">
        <div style={{ maxWidth: "1080px" }} className="mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-12 items-center">
            <div
              className="relative rounded-full overflow-hidden mx-auto w-full"
              style={{ aspectRatio: "1/1", maxWidth: "260px", border: "3px solid #FF6B00", boxShadow: "0 18px 50px rgba(46,35,27,.14)" }}
            >
              <Image src="/images/shina.jpg" alt="Shina Salako" fill className="object-cover object-top" sizes="260px" />
            </div>
            <div>
              <p className="uppercase font-semibold mb-3.5" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
                About the Author
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.3rem", color: "#1A3C6E", fontWeight: 600 }} className="mb-4">
                Shina Salako
              </h2>
              <p style={{ color: "#1A3C6E" }} className="mb-4">
                Shina Salako is a leadership coach, business strategist, speaker, and trainer with a passion for
                helping people build with wisdom, steward with excellence, and preserve for legacy. A certified
                Maxwell Leadership Team member, his work sits at the intersection of faith, leadership,
                entrepreneurship, systems thinking, and stewardship.
              </p>
              <p style={{ color: "#1A3C6E" }}>
                He has trained, coached, and spoken to entrepreneurs, professionals, ministry leaders, and
                organizations &mdash; helping them move from inspiration to implementation. <em>The Joseph
                Protocol</em> distills that work into a single, usable framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="text-center py-16 md:py-[78px]"
        style={{ background: "linear-gradient(160deg, #1A3C6E, #43332e), #1A3C6E", color: "#EBF3FB" }}
      >
        <div style={{ maxWidth: "680px" }} className="mx-auto px-6">
          <p className="uppercase font-semibold mb-3" style={{ letterSpacing: "0.22em", fontSize: "0.72rem", color: "#FF6B00" }}>
            Do not only admire Joseph
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", color: "#EBF3FB", fontWeight: 600 }} className="mb-3.5">
            Build your own Joseph Protocol
          </h2>
          <p style={{ color: "#EBF3FB", fontSize: "1.12rem" }} className="mb-6">
            Locate your phase. Build with wisdom. Preserve for legacy. Your copy is ready when you are.
          </p>
          <Link
            href="#pricing"
            className="inline-block border-0 font-semibold"
            style={{ background: "#FF6B00", color: "#fff", padding: "15px 32px", borderRadius: "40px", fontSize: "1rem" }}
          >
            Get the Book
          </Link>
          <p className="mt-4" style={{ fontSize: "0.9rem", color: "#7d6b58" }}>
            Available in print and eBook &middot; Instant access to the workbook
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-6" style={{ background: "#1A3C6E", color: "#cdb79a", fontSize: "0.9rem" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", color: "#EBF3FB", fontSize: "1.2rem" }}>
          The Joseph Protocol
        </div>
        <p>Build With Wisdom. Steward With Excellence. Preserve for Legacy.</p>
        <p>&copy; 2026 Shina Salako. All rights reserved.</p>
      </footer>
    </main>
  );
}
