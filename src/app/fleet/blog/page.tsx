import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "The Practitioner Blog",
  description: "Writing on fleet telematics, operations, and the business of running a disciplined fleet — by Shina Salako.",
  path: "/fleet/blog",
});

const posts = [
  {
    slug: "five-mistakes",
    title: "Five Mistakes Fleet Managers Make When Implementing Telematics",
    date: "March 2026",
    desc: "The most common and costly errors — and how to avoid them before you spend a naira on hardware.",
  },
  {
    slug: "maturity-model",
    title: "The Fleet Maturity Model: Which Stage Is Your Operation At?",
    date: "February 2026",
    desc: "Tracking, Monitoring, Discipline, Optimisation, Strategic Asset — where you are determines what you do next.",
  },
  {
    slug: "roi-calculation",
    title: "How to Calculate the ROI of a Fleet Telematics Investment",
    date: "January 2026",
    desc: "A practitioner's framework for building the business case — fuel, maintenance, incidents, and productivity.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>Writing</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-10" style={{ color: "var(--navy)" }}>The Practitioner Blog</h1>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/fleet/blog/${post.slug}`}
                className="bg-white rounded-lg p-7 border-0 block transition-shadow hover:shadow-md"
                style={{ border: "1px solid var(--line)" }}
              >
                <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{post.date}</p>
                <h2 className="font-serif text-xl md:text-2xl mb-3" style={{ color: "var(--navy)" }}>{post.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{post.desc}</p>
                <p className="text-sm font-semibold mt-4" style={{ color: "var(--navy)" }}>Read →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
