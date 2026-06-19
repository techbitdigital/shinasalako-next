'use client';
import { useState } from "react";
import Link from "next/link";
import { quizStatements, quizPhases, quizOrder } from "@/lib/data/joseph";

export default function JosephQuiz() {
  const [checked, setChecked] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState(false);

  function toggle(index: number, phase: string) {
    setChecked((prev) => {
      const next = { ...prev };
      if (next[index]) {
        delete next[index];
      } else {
        next[index] = phase;
      }
      return next;
    });
  }

  function reveal() {
    setRevealed(true);
    setTimeout(() => {
      document.getElementById("quiz-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  const tally: Record<string, number> = { v: 0, e: 0, n: 0, o: 0, a: 0, p: 0, l: 0 };
  Object.values(checked).forEach((phase) => {
    tally[phase] = (tally[phase] || 0) + 1;
  });

  const ranked = [...quizOrder].sort((a, b) => {
    if (tally[b] !== tally[a]) return tally[b] - tally[a];
    return quizOrder.indexOf(a) - quizOrder.indexOf(b);
  });

  const hasAnyChecked = Object.keys(checked).length > 0;
  const primary = quizPhases[ranked[0]];
  const secondaryKey = ranked[1];
  const hasSecondary = tally[secondaryKey] > 0;
  const secondary = quizPhases[secondaryKey];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {quizStatements.map((s, i) => {
          const isChecked = !!checked[i];
          return (
            <label
              key={i}
              className="flex items-start gap-3 rounded-xl px-4 py-3.5 cursor-pointer transition-colors text-sm"
              style={{
                background: isChecked ? "rgba(255,107,0,0.08)" : "#fff",
                border: isChecked ? "1px solid var(--amber)" : "1px solid var(--line)",
                color: "var(--ink)",
              }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggle(i, s.p)}
                className="mt-1 flex-shrink-0"
                style={{ accentColor: "var(--amber)", width: "16px", height: "16px" }}
              />
              <span>{s.t}</span>
            </label>
          );
        })}
      </div>

      <div className="text-center mb-8">
        <button
          onClick={reveal}
          className="px-8 py-3.5 rounded-full text-sm font-semibold border-0"
          style={{ background: "var(--amber)", color: "#fff", cursor: "pointer" }}
        >
          Reveal My Phase
        </button>
      </div>

      {revealed && (
        <div
          id="quiz-result"
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{ background: "var(--navy)", color: "#fff" }}
        >
          {!hasAnyChecked ? (
            <p style={{ color: "rgba(235,243,251,0.9)" }}>
              Tick at least one statement above, then reveal your phase.
            </p>
          ) : (
            <>
              <p className="text-[11px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--amber)" }}>
                Your dominant phase
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-1" style={{ color: "#fff" }}>
                {primary.name}
              </h3>
              <p className="font-serif italic mb-5" style={{ color: "var(--amber)" }}>
                {primary.stage}
              </p>
              <p className="mb-3 max-w-xl mx-auto" style={{ color: "rgba(235,243,251,0.9)" }}>
                {primary.line}
              </p>
              <p className="mb-5" style={{ color: "#fff" }}>
                Your next step: <strong>{primary.step}</strong>
              </p>
              {hasSecondary && (
                <p
                  className="text-sm max-w-xl mx-auto pt-4 mb-2"
                  style={{ color: "rgba(216,195,154,0.9)", borderTop: "1px solid rgba(255,107,0,0.3)" }}
                >
                  You also show signs of <strong style={{ color: "var(--amber)" }}>{secondary.name}</strong> &mdash;{" "}
                  {secondary.stage.toLowerCase()}. Many people are in more than one phase at once, in different areas of life.
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Link
                  href="#pricing"
                  className="px-7 py-3 rounded-full text-sm font-semibold border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Get the workbook & build your blueprint
                </Link>
                <button
                  onClick={() => window.print()}
                  className="px-7 py-3 rounded-full text-sm font-semibold"
                  style={{ background: "transparent", color: "#fff", border: "1.5px solid var(--amber)", cursor: "pointer" }}
                >
                  Save / Print My Result
                </button>
              </div>
              <p className="text-xs italic mt-6 max-w-xl mx-auto" style={{ color: "rgba(235,243,251,0.6)" }}>
                This is a quick taster. The full Phase Assessment inside the workbook scores all seven phases in
                depth &mdash; and helps you see exactly where you stand in each area of your life.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
