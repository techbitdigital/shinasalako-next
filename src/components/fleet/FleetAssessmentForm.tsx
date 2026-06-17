'use client';
import { useState } from "react";

const questions = [
  { id: 1, layer: "L1 — Data & Visibility", text: "All active vehicles have functioning GPS devices with real-time connectivity." },
  { id: 2, layer: "L1 — Data & Visibility", text: "We have a single platform where all trip data is visible without manual aggregation." },
  { id: 3, layer: "L1 — Data & Visibility", text: "Data uptime across the fleet is consistently above 95%." },
  { id: 4, layer: "L2 — Operational Disciplines", text: "Driver behaviour (speeding, harsh braking, idling) is tracked and reviewed weekly." },
  { id: 5, layer: "L2 — Operational Disciplines", text: "Preventive maintenance is scheduled and tracked against actual vehicle usage." },
  { id: 6, layer: "L2 — Operational Disciplines", text: "Fuel consumption is monitored per vehicle and variance is investigated." },
  { id: 7, layer: "L2 — Operational Disciplines", text: "We have a documented incident response protocol that is followed consistently." },
  { id: 8, layer: "L2 — Operational Disciplines", text: "Customer SLA compliance is measured and reported weekly." },
  { id: 9, layer: "L3 — People & Roles", text: "Every fleet KPI has a named owner responsible for its performance." },
  { id: 10, layer: "L3 — People & Roles", text: "Fleet team members have role-specific KPIs linked to their performance reviews." },
  { id: 11, layer: "L3 — People & Roles", text: "There is a regular operating rhythm (daily, weekly, monthly reviews) for fleet performance." },
  { id: 12, layer: "L4 — Economics", text: "We calculate and track cost-per-kilometre by vehicle or route." },
  { id: 13, layer: "L4 — Economics", text: "Fleet budget variance is reviewed monthly and explained." },
  { id: 14, layer: "L5 — Technology Architecture", text: "Our telematics platform integrates with at least one other business system (ERP, WMS, TMS)." },
  { id: 15, layer: "L5 — Technology Architecture", text: "Routine reports are generated automatically without manual data extraction." },
  { id: 16, layer: "L6 — Governance", text: "We have documented SOPs for core fleet operations that are actively followed." },
  { id: 17, layer: "L6 — Governance", text: "Vendor performance (transporters, telematics providers) is reviewed on a formal scorecard." },
  { id: 18, layer: "L7 — Strategy", text: "Fleet performance data informs strategic decisions at the leadership level." },
];

const scores = [1, 2, 3, 4, 5];
const scoreLabels: Record<number, string> = { 1: "Not at all", 2: "Barely", 3: "Partially", 4: "Mostly", 5: "Fully" };

export default function FleetAssessmentForm() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [step, setStep] = useState<"questions"|"email"|"result">("questions");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const currentQ = questions.filter((_, i) => i < Object.keys(answers).length)[Object.keys(answers).length - 1];
  const progress = (Object.keys(answers).length / questions.length) * 100;
  const currentIndex = Object.keys(answers).length;
  const question = questions[currentIndex];

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const maturityStage =
    percentage >= 80 ? "Strategic Asset" :
    percentage >= 60 ? "Optimisation" :
    percentage >= 40 ? "Discipline" :
    percentage >= 20 ? "Monitoring" : "Tracking";

  async function handleSubmitEmail(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/fleet/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, answers, score: totalScore, stage: maturityStage }),
      });
      if (res.ok) {
        setStatus("success");
        setStep("result");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (step === "questions") return (
    <div>
      {/* Progress bar */}
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
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
            {question.layer}
          </p>
          <p className="font-serif text-xl md:text-2xl mb-8" style={{ color: "var(--navy)", lineHeight: 1.35 }}>
            {question.text}
          </p>
          <div className="grid grid-cols-5 gap-3">
            {scores.map((score) => (
              <button
                key={score}
                onClick={() => {
                  const newAnswers = { ...answers, [question.id]: score };
                  setAnswers(newAnswers);
                  if (Object.keys(newAnswers).length === questions.length) {
                    setStep("email");
                  }
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border transition-all"
                style={{
                  border: "1px solid var(--line)",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--navy)" }}>{score}</span>
                <span className="text-[10px] text-center leading-tight" style={{ color: "var(--muted)" }}>
                  {scoreLabels[score]}
                </span>
              </button>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
            1 = Not at all · 5 = Fully implemented
          </p>
        </div>
      )}
    </div>
  );

  if (step === "email") return (
    <div>
      <p className="font-serif text-2xl mb-2" style={{ color: "var(--navy)" }}>All 18 questions answered.</p>
      <p className="text-sm mb-8" style={{ color: "var(--ink-soft)" }}>
        Enter your email to see your maturity stage and receive the written report with your next-move guide.
      </p>
      <form onSubmit={handleSubmitEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>First name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Email address</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--ink)" }}
          />
        </div>
        {status === "error" && <p className="text-sm" style={{ color: "red" }}>Something went wrong. Try again.</p>}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 rounded-full text-sm font-semibold border-0"
          style={{ background: "var(--navy)", color: "#fff", opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading" ? "Calculating..." : "See my result"}
        </button>
        <p className="text-xs text-center" style={{ color: "var(--muted)" }}>No marketing list. Results sent once.</p>
      </form>
    </div>
  );

  return (
    <div className="text-center">
      <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
        Your result
      </p>
      <p className="font-serif text-4xl md:text-5xl font-bold mb-2" style={{ color: "var(--navy)" }}>
        {maturityStage}
      </p>
      <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
        Score: {totalScore} / {maxScore} ({percentage}%)
      </p>
      <p
        className="font-serif italic text-lg mb-8 mx-auto"
        style={{ color: "var(--ink-soft)", maxWidth: "520px" }}
      >
        Your written report and next-move guide has been sent to {email}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => window.location.href = "/fleet/book"}
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0 cursor-pointer"
          style={{ background: "var(--navy)", color: "#fff" }}
        >
          Read the book
        </button>
        <button
          onClick={() => window.location.href = "/fleet/firstlook"}
          className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
          style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}
        >
          Get First Look free
        </button>
      </div>
    </div>
  );
}
