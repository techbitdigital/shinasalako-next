'use client';
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const mainLinks = [
  { href: "/entrepreneur-os/book", label: "The Book" },
  { href: "/entrepreneur-os/workshop", label: "Workshop" },
  { href: "/entrepreneur-os/coaching", label: "Coaching" },
  { href: "/entrepreneur-os/about", label: "About" },
];

const globalLinks = [
  { href: "/fleet", label: "Fleet & Telematics" },
  { href: "/joseph-protocol", label: "The Joseph Protocol" },
  { href: "/resources", label: "Resources" },
];

export default function EosNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40"
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      {/* Back to hub bar — desktop only */}
      <div
        className="hidden md:block text-xs py-1.5 px-8 text-right"
        style={{ background: "rgba(235,243,251,0.6)", borderBottom: "1px solid var(--line)" }}
      >
        <Link
          href="/"
          className="border-0 inline-flex items-center gap-1.5 transition-colors"
          style={{ color: "var(--muted)" }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
          shinasalako.com
        </Link>
      </div>

      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between py-3.5 gap-6">
          <Link
            href="/entrepreneur-os"
            className="font-serif font-bold text-lg border-0 whitespace-nowrap"
            style={{ color: "var(--navy)" }}
          >
            The Entrepreneur{" "}
            <span style={{ color: "var(--amber)" }}>OS</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 items-center list-none m-0 p-0">
            {mainLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm border-0 border-b-2 border-transparent pb-1 transition-colors"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/entrepreneur-os/diagnostic"
                className="text-sm px-4 py-2.5 rounded-full border-0 font-semibold"
                style={{ background: "var(--amber)", color: "#fff" }}
              >
                Take the Diagnostic
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--navy)" }}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden flex flex-col pb-5 text-sm"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <div className="pt-3 flex flex-col gap-3">
              {mainLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-0 py-1"
                  style={{ color: "var(--ink-soft)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/entrepreneur-os/diagnostic"
                className="inline-block text-center mt-1 px-4 py-2.5 rounded-full border-0 font-semibold"
                style={{ background: "var(--amber)", color: "#fff" }}
                onClick={() => setOpen(false)}
              >
                Take the Diagnostic
              </Link>
            </div>

            {/* Back to hub */}
            <div
              className="mt-4 pt-4 flex flex-col gap-2"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <Link
                href="/"
                className="border-0 py-1 inline-flex items-center gap-1.5 font-semibold text-sm"
                style={{ color: "var(--navy)" }}
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
                Back to shinasalako.com
              </Link>
              <p className="text-[10px] tracking-widest uppercase font-bold mt-2 mb-1" style={{ color: "var(--muted)" }}>
                Also by Shina Salako
              </p>
              {globalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-0 py-0.5 text-xs"
                  style={{ color: "var(--muted)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
