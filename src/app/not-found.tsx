import Link from "next/link";
import GlobalBar from "@/components/global/GlobalBar";

export default function NotFound() {
  return (
    <main>
      <GlobalBar />
      <section className="py-24 text-center" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "580px" }} className="mx-auto px-5 md:px-8">
          <p className="font-serif text-8xl font-bold mb-4" style={{ color: "var(--navy)", opacity: 0.15 }}>404</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: "var(--navy)" }}>Page not found.</h1>
          <p className="font-serif italic text-lg mb-8" style={{ color: "var(--ink-soft)" }}>
            The page you are looking for does not exist — or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold border-0" style={{ background: "var(--navy)", color: "#fff" }}>
              Go home
            </Link>
            <Link href="/fleet" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold" style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}>
              Fleet & Telematics
            </Link>
            <Link href="/entrepreneur-os" className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold" style={{ background: "transparent", color: "var(--navy)", border: "1.5px solid var(--navy)" }}>
              Entrepreneur OS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
