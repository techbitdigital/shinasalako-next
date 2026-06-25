import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Five Mistakes Fleet Managers Make When Implementing Telematics",
  description: "The most common and costly errors in telematics implementation and how to avoid them before you spend a naira on hardware.",
  path: "/fleet/blog/five-mistakes",
});

export default function BlogPost() {
  return (
    <main>
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "780px" }} className="mx-auto px-5 md:px-8">
          <Link href="/fleet/blog" className="text-sm border-0 mb-8 inline-block" style={{ color: "var(--muted)" }}>
            &#8592; All articles
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl mb-6 mt-4" style={{ color: "var(--navy)" }}>
            Five Mistakes Fleet Managers Make When Implementing Telematics
          </h1>
          <p className="font-serif italic text-lg leading-relaxed mb-10" style={{ color: "var(--ink-soft)" }}>
            The most common and costly errors in telematics implementation and how to avoid them before you spend a naira on hardware.
          </p>
          <div className="rounded-lg p-8 text-center" style={{ background: "#fff", border: "1px solid var(--line)" }}>
            <p className="font-serif text-xl mb-4" style={{ color: "var(--navy)" }}>Full article coming soon.</p>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Join the First Look list to be notified when new articles go live.</p>
            <Link
              href="/fleet/firstlook"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0"
              style={{ background: "var(--navy)", color: "#fff" }}
            >
              Get the First Look
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
