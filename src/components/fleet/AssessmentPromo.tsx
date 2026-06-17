import Link from "next/link";

export default function AssessmentPromo() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--navy)", borderBottom: "1px solid rgba(235,243,251,0.1)" }}
      id="assessment"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--cream)" }}>
              Free interactive diagnostic
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl md:text-[36px] mb-5"
              style={{ color: "#fff", maxWidth: "520px", lineHeight: "1.12" }}
            >
              Where does your fleet operation actually sit on the seven layers?
            </h2>
            <p
              className="font-serif italic text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "rgba(235,243,251,0.92)" }}
            >
              Honest answers, in ten minutes. The assessment scores your
              operation against the same seven-layer Fleet Operating System
              this book builds toward.
            </p>
            <ul className="space-y-3">
              {[
                "Eighteen practitioner questions across the seven FOS layers.",
                "Your maturity stage on the 1-to-5 scale used in Chapter 20.",
                "Your weakest layer named, with a recommended next move.",
                "An optional follow-up: a two-hour facilitated session with the author.",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed pl-6 relative"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  <span
                    className="absolute left-0 top-2.5 w-3.5 h-0.5 inline-block"
                    style={{ background: "var(--cream)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-lg p-7 md:p-8"
            style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.18)" }}
          >
            <div className="font-serif text-5xl md:text-6xl font-bold mb-1" style={{ color: "var(--cream)", lineHeight: 1 }}>
              10<span className="text-lg font-normal ml-1" style={{ color: "rgba(235,243,251,0.7)" }}>min</span>
            </div>
            <p className="text-[11px] tracking-widest uppercase font-semibold mb-6" style={{ color: "var(--cream)" }}>
              Self-paced · No login
            </p>
            <ol className="space-y-3 mb-7 list-none p-0">
              {[
                "Answer 18 questions honestly — score each statement 1 to 5.",
                "See your maturity stage and weakest layer immediately.",
                "Enter your email if you want the written report and the next-move guide.",
              ].map((step, i) => (
                <li key={i} className="text-sm leading-relaxed pl-9 relative" style={{ color: "rgba(255,255,255,0.9)" }}>
                  <span
                    className="absolute left-0 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-serif"
                    style={{ background: "var(--cream)", color: "var(--navy)" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href="/fleet/assessment"
              className="block text-center rounded-full font-semibold py-3.5 text-sm border-0"
              style={{ background: "var(--cream)", color: "var(--navy)" }}
            >
              Take the assessment
            </Link>
            <p className="text-xs text-center mt-3" style={{ color: "rgba(235,243,251,0.7)" }}>
              No marketing list. Results sent once. Your data is not shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
