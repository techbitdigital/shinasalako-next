import Link from "next/link";

export default function HubFooter() {
  return (
    <footer
      className="pt-12 pb-7 text-sm"
      style={{ background: "#13294b", color: "rgba(255,255,255,0.8)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              Shina Salako
            </h4>
            <p className="mb-2">Author, operator, and builder · Lagos, Nigeria</p>
            <p>Three books, their diagnostics and programmes — for founders, fleet leaders, and the season you are building through.</p>
            <p className="text-xs mt-4 pt-4" style={{ color: "rgba(255,255,255,0.55)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              SALCOMMS KWIK XTRA LIMITED · Affiliated with PowerFleet.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>The books</h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os", label: "The Entrepreneur OS" },
                { href: "/fleet", label: "Fleet & Telematics" },
                { href: "/joseph-protocol", label: "The Joseph Protocol" },
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
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>Start free</h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os/diagnostic", label: "Founder diagnostic" },
                { href: "/fleet/assessment", label: "Fleet assessment" },
                { href: "/joseph-protocol#quiz", label: "Find your phase" },
                { href: "/fleet/training", label: "Programmes" },
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
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>Company</h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os/about", label: "About" },
                { href: "/fleet/contact", label: "Contact" },
                { href: "/fleet/privacy", label: "Privacy" },
                { href: "/fleet/terms", label: "Terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between gap-4 pt-5 text-[13px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
        >
          <span>© 2026 Shina Salako · SALCOMMS KWIK XTRA LIMITED. All rights reserved.</span>
          <span>
            shinasalako.com ·{" "}
            <a href="mailto:hello@shinasalako.com" className="border-0 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
              hello@shinasalako.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
