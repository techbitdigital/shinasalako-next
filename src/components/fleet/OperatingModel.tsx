import { fosLayers } from "@/lib/data/fleet";

export default function OperatingModel() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <p className="text-[11px] tracking-widest uppercase font-bold mb-4" style={{ color: "var(--teal)" }}>
          The framework the book builds toward
        </p>
        <h2
          className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4"
          style={{ color: "var(--navy)", maxWidth: "780px" }}
        >
          The seven-layer Fleet Operating System.
        </h2>
        <p
          className="font-serif italic text-base md:text-lg leading-relaxed mb-8"
          style={{ color: "var(--ink-soft)", maxWidth: "780px" }}
        >
          A modern fleet is not a department. It is an operating system —
          deliberate, documented, measurable, built layer by layer. Each layer
          depends on the stability of the one beneath it.
        </p>

        <div className="flex flex-col gap-2">
          {fosLayers.map((layer) => (
            <div
              key={layer.num}
              className="bg-white rounded-md p-4 md:p-5 grid grid-cols-[56px_1fr] md:grid-cols-[80px_180px_1fr] gap-3 md:gap-6 items-center"
              style={{ border: "1px solid var(--line)" }}
            >
              <span
                className="font-serif text-base md:text-lg font-bold"
                style={{ color: "var(--navy)" }}
              >
                {layer.num}
              </span>
              <span
                className="font-serif text-base font-bold"
                style={{ color: "var(--navy)" }}
              >
                {layer.name}
              </span>
              <span
                className="text-sm col-span-2 md:col-span-1"
                style={{ color: "var(--ink-soft)" }}
              >
                {layer.desc}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-sm italic mt-6"
          style={{ color: "var(--ink-soft)" }}
        >
          Build bottom-up. Investing in higher layers before lower layers are
          stable wastes money — the most common failure mode in this industry,
          and the one this book is built to help operations avoid.
        </p>
      </div>
    </section>
  );
}
