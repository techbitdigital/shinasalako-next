'use client';
import { useState } from "react";

const questions = [
  { id: 1, os: "Founder OS", text: "I have a clear written vision for my business three years from now." },
  { id: 2, os: "Founder OS", text: "I make decisions quickly and revisit them rarely." },
  { id: 3, os: "Founder OS", text: "My personal energy and discipline are assets, not liabilities, to this business." },
  { id: 4, os: "Market OS", text: "I can name the single most painful problem my best customers have — in their words, not mine." },
  { id: 5, os: "Market OS", text: "I have validated that enough people will pay for what I sell before building it." },
  { id: 6, os: "Market OS", text: "I know exactly who I am NOT selling to — and I enforce that boundary." },
  { id: 7, os: "Model OS", text: "My pricing reflects the value I deliver, not my fear of losing the deal." },
  { id: 8, os: "Model OS", text: "I know my unit economics — cost to acquire, cost to serve, and margin per customer." },
  { id: 9, os: "Management OS", text: "My business runs for at least two weeks without me making every decision." },
  { id: 10, os: "Management OS", text: "I have documented processes for the work that matters most in this business." },
  { id: 11, os: "Momentum OS", text: "New customers find me consistently — not just when I am actively selling." },
  { id: 12, os: "Momentum OS", text: "I have a clear system for turning satisfied customers into referrals." },
];

const osMap: Record<string, string> = {
  "Founder OS": "You — vision, mindset, discipline, leadership.",
  "Market OS": "Customer — real problems, demand validation, the gap.",
  "Model OS": "Business model — pricing, packaging, how you make money.",
  "Management OS": "Structure — roles, workflows, delegation, cash flow.",
  "Momentum OS": "Growth — sales, marketing, retention, referrals.",
};

export default function EosDiagnosticForm() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [step, setStep] = useState<"questions" | "email" | "result">("questions");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const currentIndex = Object.keys(answers).length;
  const question = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  // Score per OS
  const osScores: Record<string, number[]> = {};
  questions.forEach((q) => {
    if (!osScores[q.os]) osScores[q.os] = [];
    if (answers[q.id]) osScores[q.os].push(answers[q.id]);
  });

  const osAverages = Object.entries(osScores).map(([os, scores]) => ({
    os,
    avg: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
  }));

  const weakestOS = osAverages.sort((a, b) => a.avg - b.avg)[0];

  async function handleSubmitEmail(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/eos/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, answers, weakestOS: weakestOS?.os }),
      });
      if (res.ok) { setStatus("success"); setStep("result"); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  if (step === "questions") return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between text-xs mb-2" style={{ color: "var(--muted)" }}>
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full rounded-full h-1.5" style={{ background: "var(--line)" }}>
          <div
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, background: "var(--amber)" }}
          />
        </div>
      </div>
      {question && (
        <div>
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>
            {question.os}
          </p>
          <p className="font-serif text-xl md:text-2xl mb-8" style={{ color: "var(--navy)", lineHeight: 1.35 }}>
            {question.text}
          </p>
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => {
                  const newAnswers = { ...answers, [question.id]: score };
                  setAnswers(newAnswers);
                  if (Object.keys(newAnswers).length === questions.length) setStep("email");
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg transition-all"
                style={{ border: "1px solid var(--line)", background: "#fff", cursor: "pointer" }}
              >
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--navy)" }}>{score}</span>
                <span className="text-[10px] text-center leading-tight" style={{ color: "var(--muted)" }}>
                  {["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"][score - 1]}
                </span>
              </button>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
            1 = Strongly disagree · 5 = Strongly agree
          </p>
        </div>
      )}
    </div>
  );

  if (step === "email") return (
    <div>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>All 12 questions answered.</p>
      <p className="text-sm mb-8" style={{ color: "var(--ink-soft)" }}>
        Enter your details to see which operating system is leaking hardest — and receive your result by email.
      </p>
      <form onSubmit={handleSubmitEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>First name</label>
          <input
            type="text" required placeholder="Your name" value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Email address</label>
          <input
            type="email" required placeholder="your@email.com" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
        {status === "error" && <p className="text-sm" style={{ color: "red" }}>Something went wrong. Try again.</p>}
        <button
          type="submit" disabled={status === "loading"}
          className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
          style={{ background: "var(--amber)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading" ? "Calculating..." : "See my result"}
        </button>
        <p className="text-xs text-center" style={{ color: "var(--muted)" }}>Free. No credit card. Result lands in your inbox immediately.</p>
      </form>
    </div>
  );

  return (
    <div className="text-center">
      <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
        Your result
      </p>
      <p className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--navy)" }}>
        The leak is in your {weakestOS?.os}
      </p>
      <p
        className="font-serif italic text-lg mb-4 mx-auto"
        style={{ color: "var(--ink-soft)", maxWidth: "520px" }}
      >
        {weakestOS && osMap[weakestOS.os]}
      </p>
      <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        Your full result and 90-day fix plan has been sent to {email}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => window.location.href = "/entrepreneur-os/book"}
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0 cursor-pointer"
          style={{ background: "var(--amber)", color: "#fff" }}
        >
          Read the book
        </button>
        <button
          onClick={() => window.location.href = "/entrepreneur-os/workshop"}
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
          style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
        >
          Join the workshop
        </button>
      </div>
    </div>
  );
}
