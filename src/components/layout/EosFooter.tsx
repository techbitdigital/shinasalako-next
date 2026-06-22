import Link from "next/link";

export default function EosFooter() {
  return (
    <footer
      className="pt-12 pb-7 text-sm"
      style={{ background: "#13294b", color: "rgba(255,255,255,0.8)" }}
    >
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">

          <div>
            <p className="font-serif font-bold text-lg mb-3" style={{ color: "var(--cream)" }}>
              The Entrepreneur <span style={{ color: "var(--amber)" }}>OS</span>
            </p>
            <p>A book, a workshop, a diagnostic, and a way of seeing your business — by Shina Salako.</p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              The products
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os/book", label: "The Book" },
                { href: "/entrepreneur-os/workshop", label: "The Workshop" },
                { href: "/entrepreneur-os/diagnostic", label: "The Diagnostic" },
                { href: "/entrepreneur-os/coaching", label: "1:1 Coaching" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 transition-colors hover:!text-[var(--amber)]" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              Company
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os/about", label: "About" },
                { href: "/entrepreneur-os/voices", label: "Founder Voices" },
                { href: "/entrepreneur-os/coaching", label: "Coaching & Workshops" },
                { href: "mailto:hello@shinasalako.com", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 transition-colors hover:!text-[var(--amber)]" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--cream)" }}>
              Legal
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/entrepreneur-os/terms", label: "Terms of Service" },
                { href: "/entrepreneur-os/privacy", label: "Privacy Policy" },
                { href: "/entrepreneur-os/refund-policy", label: "Refund Policy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="border-0 transition-colors hover:!text-[var(--amber)]" style={{ color: "rgba(255,255,255,0.85)" }}>
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
          <span>© 2026 Shina Salako. All rights reserved.</span>
          <span>Made in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}
