import Link from "next/link";
import { hubBooks } from "@/lib/data/hub";

export default function ThreeBooks() {
  return (
    <section
      id="books"
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: "var(--teal)" }}>
          The books
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10" style={{ color: "var(--navy)" }}>
          Pick the operating system you are working on.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubBooks.map((book) => (
            <div
              key={book.slug}
              className="bg-white rounded-xl flex flex-col overflow-hidden"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="h-2" style={{ background: book.accentColor }} />
              <div className="px-6 pt-6 pb-0">
                <p className="text-[11px] tracking-widest uppercase font-bold mb-3" style={{ color: book.accentColor }}>
                  {book.label}
                </p>
                <h3 className="font-serif text-xl md:text-2xl mb-3 leading-snug" style={{ color: "var(--navy)" }}>
                  {book.title}
                </h3>
                <p className="font-serif italic text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>
                  {book.who}
                </p>
              </div>
              <div className="px-6 flex-1">
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {book.description}
                </p>
              </div>
              <div className="px-6 py-6 mt-2">
                <Link
                  href={book.href}
                  className="block text-center rounded-md text-sm font-bold py-3 px-4 border-0"
                  style={{ background: "var(--amber)", color: "#fff" }}
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
