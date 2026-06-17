import Link from "next/link";

export default function FleetFinalCta() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--navy)" }}
      id="contact"
    >
      <div
        style={{ maxWidth: "720px" }}
        className="mx-auto px-5 md:px-8 text-center"
      >
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-[42px] mb-6"
          style={{ color: "#fff", lineHeight: "1.15" }}
        >
          Read the book. Then have the conversation.
        </h2>
        <p
          className="font-serif italic text-base md:text-xl mb-10"
          style={{ color: "var(--cream)" }}
        >
          The book exists to make a difficult conversation easier. Read it. If
          what is in it matches the operation you are running — or trying to
          build — talk to us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/fleet/firstlook"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold border-0"
            style={{ background: "var(--cream)", color: "var(--navy)" }}
          >
            Get the First Look
          </Link>
          <Link
            href="/fleet/book"
            className="inline-block text-center px-7 py-3.5 rounded-full text-sm font-semibold"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(235,243,251,0.6)",
            }}
          >
            Buy the book
          </Link>
        </div>
      </div>
    </section>
  );
}
