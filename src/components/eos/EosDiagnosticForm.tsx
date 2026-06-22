'use client';
import { useState } from "react";
import Link from "next/link";
import {
  founderQuestions,
  founderDiagnoses,
  founderSystemTags,
  founderCtaLabels,
  founderSystems,
} from "@/lib/data/founder-diagnostic";

type Screen = "intro" | "quiz" | "result" | "submitted";

export default function EosDiagnosticForm() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(founderQuestions.length).fill(null)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  function selectOption(i: number) {
    const next = [...answers];
    next[currentQ] = i;
    setAnswers(next);
  }

  function goNext() {
    if (answers[currentQ] === null) return;
    if (currentQ === founderQuestions.length - 1) {
      setScreen("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  function goBack() {
    if (currentQ === 0) return;
    setCurrentQ(currentQ - 1);
  }

  // Score calculation
  const scores: Record<string, number> = {};
  founderSystems.forEach((s) => (scores[s] = 0));
  founderQuestions.forEach((q, i) => {
    if (answers[i] !== null) {
      scores[q.system] += q.options[answers[i] as number].score;
    }
  });

  const sorted = [...founderSystems].sort((a, b) => scores[b] - scores[a]);
  const weakest = sorted[sorted.length - 1];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/eos/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          weakestOS: weakest,
          strongestOS: sorted[0],
          allScores: scores,
        }),
      });
      if (res.ok) {
        setScreen("submitted");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const progress = ((currentQ + 1) / founderQuestions.length) * 100;

  return (
    <div>
      {/* Progress bar (only during quiz) */}
      {screen === "quiz" && (
        <div className="mb-6 max-w-[480px] mx-auto">
          <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--amber) 0%, #e89456 100%)",
              }}
            />
          </div>
          <p className="text-center text-xs font-semibold tracking-wide mt-2" style={{ color: "var(--muted)" }}>
            Question {currentQ + 1} of {founderQuestions.length}
          </p>
        </div>
      )}

      {/* INTRO */}
      {screen === "intro" && (
        <div
          className="max-w-[720px] mx-auto text-center rounded-xl p-8 md:p-12"
          style={{ background: "#fff", boxShadow: "0 20px 60px -20px rgba(20,33,61,0.15)" }}
        >
          <span
            className="inline-block text-[0.7rem] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--amber)", color: "#fff" }}
          >
            Free — 12 minutes
          </span>
          <h1 className="font-serif font-bold mb-3" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--navy)" }}>
            The Founder Diagnostic
          </h1>
          <p className="mb-6" style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>
            Fifteen questions. Five operating systems. One clear answer about where your business is silently leaking.
          </p>
          <div className="flex justify-center gap-8 flex-wrap mb-6">
            {[
              { num: "15", label: "questions" },
              { num: "12", label: "minutes" },
              { num: "5", label: "systems scored" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-serif font-bold text-3xl" style={{ color: "var(--amber)" }}>{m.num}</div>
                <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{m.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            No login. No credit card. Your results appear instantly. Then you can choose to receive the deeper version by email.
          </p>
          <button
            onClick={() => setScreen("quiz")}
            className="px-8 py-3.5 rounded text-sm font-semibold border-0"
            style={{ background: "var(--navy)", color: "#fff", cursor: "pointer" }}
          >
            Begin the diagnostic →
          </button>
        </div>
      )}

      {/* QUIZ */}
      {screen === "quiz" && (
        <div
          className="max-w-[720px] mx-auto rounded-xl p-6 md:p-10"
          style={{ background: "#fff", boxShadow: "0 20px 60px -20px rgba(20,33,61,0.15)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--amber)" }}>
            {founderQuestions[currentQ].tag}
          </p>
          <h2
            className="font-serif font-bold mb-6"
            style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.3, color: "var(--navy)" }}
          >
            {founderQuestions[currentQ].text}
          </h2>
          <div className="flex flex-col gap-3">
            {founderQuestions[currentQ].options.map((opt, i) => {
              const letter = ["A", "B", "C", "D"][i];
              const isSelected = answers[currentQ] === i;
              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  className="flex items-center text-left w-full transition-all"
                  style={{
                    padding: "1.1rem 1.3rem",
                    background: isSelected ? "var(--navy)" : "#fff",
                    border: isSelected ? "2px solid var(--navy)" : "2px solid var(--line)",
                    borderRadius: "8px",
                    color: isSelected ? "var(--cream)" : "var(--ink)",
                    fontSize: "1.02rem",
                    lineHeight: 1.45,
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0 font-bold"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isSelected ? "var(--amber)" : "var(--cream)",
                      color: isSelected ? "var(--cream)" : "var(--amber)",
                      fontSize: "0.95rem",
                      marginRight: "1rem",
                    }}
                  >
                    {letter}
                  </span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-6 gap-3">
            <button
              onClick={goBack}
              disabled={currentQ === 0}
              className="text-sm bg-transparent border-0"
              style={{ color: "var(--muted)", cursor: currentQ === 0 ? "not-allowed" : "pointer", opacity: currentQ === 0 ? 0.3 : 1 }}
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              disabled={answers[currentQ] === null}
              className="px-7 py-3 rounded text-sm font-semibold border-0"
              style={{
                background: answers[currentQ] === null ? "var(--line)" : "var(--navy)",
                color: "#fff",
                cursor: answers[currentQ] === null ? "not-allowed" : "pointer",
              }}
            >
              {currentQ === founderQuestions.length - 1 ? "See my results →" : "Next →"}
            </button>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen === "result" && (
        <div
          className="max-w-[720px] mx-auto rounded-xl p-6 md:p-10"
          style={{ background: "#fff", boxShadow: "0 20px 60px -20px rgba(20,33,61,0.15)" }}
        >
          <span
            className="inline-block text-[0.7rem] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
            style={{ background: "#5a8f3a", color: "#fff" }}
          >
            Diagnostic complete
          </span>
          <h1 className="font-serif font-bold text-center mb-2" style={{ fontSize: "1.9rem", color: "var(--navy)" }}>
            Your ranked Operating Systems
          </h1>
          <p className="text-center mb-6" style={{ color: "var(--ink-soft)" }}>
            From healthiest to most at risk. The one at the bottom is your leak.
          </p>

          <div className="mb-6">
            {sorted.map((sys, rank) => {
              const score = scores[sys];
              const pctScore = (score / 12) * 100;
              const isWeakest = sys === weakest;
              const isStrongest = rank === 0;
              return (
                <div
                  key={sys}
                  className="flex items-center rounded-lg mb-3 text-left"
                  style={{
                    padding: "1.25rem 1.5rem",
                    background: isWeakest
                      ? "linear-gradient(90deg, rgba(200,74,26,0.05) 0%, #fff 100%)"
                      : isStrongest
                      ? "linear-gradient(90deg, rgba(90,143,58,0.05) 0%, #fff 100%)"
                      : "#fff",
                    borderLeft: isWeakest ? "5px solid #c84a1a" : isStrongest ? "5px solid #5a8f3a" : "5px solid var(--line)",
                  }}
                >
                  <div
                    className="font-serif font-bold flex-shrink-0"
                    style={{
                      fontSize: "2rem",
                      marginRight: "1.25rem",
                      minWidth: "40px",
                      color: isWeakest ? "#c84a1a" : isStrongest ? "#5a8f3a" : "var(--muted)",
                    }}
                  >
                    {rank + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                      {founderSystemTags[sys]}
                    </p>
                    <h3 className="font-serif font-bold text-lg" style={{ color: "var(--navy)" }}>{sys}</h3>
                    <div className="h-1.5 rounded-full overflow-hidden mt-1" style={{ background: "var(--line)", width: "80px" }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${pctScore}%`,
                          background: isWeakest ? "#c84a1a" : isStrongest ? "#5a8f3a" : "var(--amber)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-serif font-bold text-xl" style={{ color: "var(--navy)" }}>{score}/12</div>
                </div>
              );
            })}
          </div>

          {/* Diagnosis */}
          <div className="rounded-lg p-6 mb-6 text-left" style={{ background: "var(--navy)", color: "var(--cream)" }}>
            <span
              className="inline-block text-[0.7rem] font-bold uppercase px-3 py-1 rounded-full mb-3"
              style={{ background: "#e89456", color: "var(--navy)" }}
            >
              Your diagnosis
            </span>
            <h3 className="font-serif text-xl mb-3" style={{ color: "var(--cream)" }}>{weakest}</h3>
            <p
              className="mb-3 leading-relaxed"
              style={{ color: "rgba(235,243,251,0.9)" }}
              dangerouslySetInnerHTML={{ __html: founderDiagnoses[weakest].body }}
            />
            <p
              style={{ color: "rgba(235,243,251,0.9)" }}
              dangerouslySetInnerHTML={{ __html: founderDiagnoses[weakest].action }}
            />
          </div>

          {/* Workshop CTA */}
          <div
            className="rounded-lg p-6 text-center mb-6"
            style={{ background: "var(--navy)", color: "var(--cream)", borderTop: "4px solid var(--amber)" }}
          >
            <span
              className="inline-block text-[0.7rem] font-bold uppercase px-3 py-1 rounded-full mb-3"
              style={{ background: "var(--amber)", color: "#fff" }}
            >
              The room where this gets fixed
            </span>
            <h3 className="font-serif text-xl mb-3" style={{ color: "var(--cream)" }}>
              The workshop spends two hours just on{" "}
              <span style={{ color: "#e89456" }}>{founderCtaLabels[weakest]}</span>.
            </h3>
            <p className="text-sm mb-5 max-w-md mx-auto" style={{ color: "rgba(235,243,251,0.85)" }}>
              18 August 2026 · Lagos · 30 founders in the room · written 90-day plan for the OS the
              diagnostic just named. Twelve of the thirty seats are reserved for pre-order holders at{" "}
              <strong style={{ color: "var(--cream)" }}>₦155,000</strong> (₦30,000 off the public price of ₦185,000).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/entrepreneur-os/workshop"
                className="px-6 py-3 rounded text-sm font-semibold border-0"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                See the workshop →
              </Link>
              <Link
                href="/entrepreneur-os/book"
                className="px-6 py-3 rounded text-sm font-semibold"
                style={{ background: "transparent", color: "#e89456", border: "1.5px solid #e89456" }}
              >
                Pre-order the book (save ₦30k)
              </Link>
            </div>
            <p className="text-xs mt-4" style={{ color: "rgba(235,243,251,0.6)" }}>
              Or take the next step below — get the full written diagnosis emailed to you first.
            </p>
          </div>

          {/* Email capture */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg p-6 text-left"
            style={{ background: "#fff", border: "2px solid var(--amber)" }}
          >
            <span
              className="inline-block text-[0.7rem] font-bold uppercase px-3 py-1 rounded-full mb-3"
              style={{ background: "var(--amber)", color: "#fff" }}
            >
              Free deeper report
            </span>
            <h3 className="font-serif text-lg mb-2" style={{ color: "var(--navy)" }}>
              Want the full written diagnosis in your inbox?
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--ink-soft)" }}>
              The deeper version includes a paragraph diagnosis for each of the five systems, a 90-day plan
              template for your weakest one, and a five-day email follow-up — one short email per day, one
              operating system per day.
            </p>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Your name</label>
            <input
              type="text"
              required
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none mb-4"
              style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
            />
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Email</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none mb-5"
              style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
            />
            {status === "error" && <p className="text-sm mb-3" style={{ color: "#e53e3e" }}>Something went wrong. Try again.</p>}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
            >
              {status === "loading" ? "Sending..." : "Send me my full diagnosis →"}
            </button>
            <p className="text-xs text-center mt-3" style={{ color: "var(--muted)" }}>
              No spam. One welcome email immediately, then five short daily emails. Unsubscribe anytime.
            </p>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: "var(--muted)" }}>
            Already on the list?{" "}
            <Link href="/entrepreneur-os" style={{ color: "var(--amber)" }}>
              Skip and return to the homepage →
            </Link>
          </p>
        </div>
      )}

      {/* SUBMITTED */}
      {screen === "submitted" && (
        <div
          className="max-w-[720px] mx-auto text-center rounded-xl p-8 md:p-12"
          style={{ background: "#fff", boxShadow: "0 20px 60px -20px rgba(20,33,61,0.15)" }}
        >
          <span
            className="inline-block text-[0.7rem] font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "#5a8f3a", color: "#fff" }}
          >
            Sent
          </span>
          <h1 className="font-serif font-bold text-3xl mb-3" style={{ color: "var(--navy)" }}>Check your inbox.</h1>
          <p className="mb-5" style={{ color: "var(--ink-soft)" }}>
            Your full written diagnosis is on the way. It usually arrives within 60 seconds.
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            While you wait, the next obvious move is to take a look at the workshop — it&rsquo;s built around
            exactly the kind of work the diagnostic just flagged.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/entrepreneur-os/workshop"
              className="px-7 py-3.5 rounded text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              See the workshop →
            </Link>
            <Link
              href="/entrepreneur-os/book"
              className="px-7 py-3.5 rounded text-sm font-semibold"
              style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
            >
              Read more about the book
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
