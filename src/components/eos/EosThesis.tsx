export default function EosThesis() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8 text-center">
        <hr className="w-16 mx-auto mb-8 border-0 h-px" style={{ background: "var(--amber)" }} />
        <p
          className="font-serif italic text-xl sm:text-2xl md:text-3xl mb-3"
          style={{ color: "var(--navy)", maxWidth: "780px", margin: "0 auto 12px" }}
        >
          You don&apos;t need another business idea. You need an operating system.
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>— The thesis</p>
      </div>
    </section>
  );
}
