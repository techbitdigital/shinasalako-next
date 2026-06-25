import { buildMetadata } from "@/lib/metadata";
import EosCoachingForm from "@/components/eos/EosCoachingForm";

export const metadata = buildMetadata({
  title: "1:1 Coaching",
  description: "Work directly with Shina Salako — Maxwell Leadership certified coach. For founders ready to fix the leak.",
  path: "/entrepreneur-os/coaching",
});

export default function EosCoachingPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--cream)" }}>Work with Shina</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>1:1 Coaching & Corporate Workshops</h1>
          <p className="font-serif italic text-base md:text-lg mb-8" style={{ color: "var(--cream)" }}>
            For founders who have identified the leak and are ready to fix it with support. And for organisations that want the Entrepreneur OS framework delivered to their leadership team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { label: "1:1 Founder Coaching", desc: "Six sessions over three months. We work through your weakest operating system together — with accountability between sessions." },
              { label: "Corporate Workshop", desc: "Half-day or full-day sessions for leadership teams. The five operating systems framework applied to your organisation." },
            ].map((item) => (
              <div key={item.label} className="rounded-lg p-6" style={{ background: "rgba(235,243,251,0.07)", border: "1px solid rgba(235,243,251,0.18)" }}>
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--amber)" }}>{item.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(235,243,251,0.9)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "680px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Get in touch</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4" style={{ color: "var(--navy)" }}>Apply for coaching</h2>
          <p className="font-serif italic text-sm md:text-base mb-8" style={{ color: "var(--ink-soft)" }}>
            Tell us a little about where you are and what you are working on. We will respond within two business days.
          </p>
          <EosCoachingForm />
        </div>
      </section>
    </main>
  );
}
