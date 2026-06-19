'use client';
import { phases } from "@/lib/data/joseph";

export default function JosephPhasesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
      {phases.map((phase, i) => (
        <div
          key={phase.num}
          className="transition-all duration-150"
          style={{
            background: "#EBF3FB",
            border: "1px solid #e0d2ba",
            borderRadius: "14px",
            padding: "24px",
            gridColumn: i === phases.length - 1 ? "1 / -1" : undefined,
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 18px 50px rgba(46,35,27,.14)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#FF6B00", fontWeight: 700 }}>
            {phase.num}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.32rem", color: "#1A3C6E", margin: "0.15em 0 0.1em", fontWeight: 600 }}>
            {phase.name}
          </h3>
          <div className="uppercase mb-2.5" style={{ fontSize: "0.74rem", letterSpacing: "0.16em", color: "#FF6B00" }}>
            {phase.stage}
          </div>
          <p className="m-0" style={{ color: "#7d6b58" }}>{phase.desc}</p>
        </div>
      ))}
    </div>
  );
}
