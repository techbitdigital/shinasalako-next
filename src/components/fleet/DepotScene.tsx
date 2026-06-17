export default function DepotScene() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
      id="book"
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-6" style={{ color: "var(--teal)" }}>
          The opening scene
        </p>
        <p
          className="font-serif italic text-lg sm:text-xl md:text-2xl leading-relaxed mb-6"
          style={{ color: "var(--ink)", maxWidth: "880px" }}
        >
          A transport manager calling drivers one by one to find out who
          actually left the yard. Fuel slips stacked on the desk, half of them
          unreadable. Two trucks that will not start. By midday, a vehicle
          reportedly broken down on the Lagos–Ibadan expressway — and nobody
          can say with certainty where it is.
        </p>
        <p
          className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-snug"
          style={{ color: "var(--navy)", maxWidth: "780px" }}
        >
          This is not a failing operation. It is a typical one.{" "}
          <span className="font-normal italic" style={{ color: "var(--ink-soft)" }}>
            And the book is built around what to do about it.
          </span>
        </p>
      </div>
    </section>
  );
}
