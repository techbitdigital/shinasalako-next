import Link from "next/link";

export default function FleetFooter() {
  return (
    <footer
      className="pt-12 pb-7 text-sm"
      style={{ background: "#13294b", color: "rgba(255,255,255,0.8)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8">

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              SALCOMMS KWIK XTRA LIMITED
            </h4>
            <p className="mb-2">Telematics service provider · Lagos, Nigeria</p>
            <p className="mb-4">Embedded operations, independent visibility, daily business reports for cargo-owners managing third-party transporters.</p>
            <p className="text-xs pt-4" style={{ color: "rgba(255,255,255,0.55)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              Affiliated with PowerFleet · global telematics platform.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              The book & programmes
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/fleet/firstlook", label: "Get the First Look" },
                { href: "/fleet/book", label: "Buy the book" },
                { href: "/fleet/toolkit", label: "The Practitioner Toolkit" },
                { href: "/fleet/sessions", label: "Live chapter sessions" },
                { href: "/fleet/training", label: "Training programmes" },
                { href: "/fleet/blog", label: "The practitioner blog" },
                { href: "/fleet/assessment", label: "FOS maturity assessment" },
                { href: "/fleet/audit", label: "15-minute reporting audit" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              Get in touch
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/fleet/contact", label: "Contact page" },
                { href: "/fleet/about", label: "About" },
                { href: "mailto:enquiries@salcomms.com", label: "enquiries@salcomms.com" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 text-xs space-x-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}>
              <Link href="/fleet/privacy" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy</Link>
              <Link href="/fleet/terms" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>Terms</Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between gap-4 pt-5 text-[13px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
        >
          <span>© 2026 Shina Salako · SALCOMMS KWIK XTRA LIMITED. All rights reserved.</span>
          <span className="italic">Built around the operating credo: we make the problem visible enough that the parties who own it can solve it together.</span>
        </div>
      </div>
    </footer>
  );
}
