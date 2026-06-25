'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const navGroups = [
  {
    label: "The Book",
    href: "/fleet/book",
    children: [
      { href: "/fleet/book", label: "About the book" },
      { href: "/fleet/firstlook", label: "Get the First Look — free" },
      { href: "/fleet/blog", label: "Writing & articles" },
      { href: "/fleet/press", label: "Press" },
    ],
  },
  {
    label: "Toolkit",
    href: "/fleet/toolkit",
    children: [
      { href: "/fleet/toolkit", label: "The Practitioner's Toolkit" },
      { href: "/fleet/toolkit#buy", label: "Pricing & buy" },
    ],
  },
  {
    label: "Training",
    href: "/fleet/training",
    children: [
      { href: "/fleet/training", label: "All programmes" },
      { href: "/fleet/training/cargo-owner", label: "Cargo-Owner programme" },
      { href: "/fleet/training/transporter", label: "Transporter programme" },
      { href: "/fleet/training/in-house", label: "In-house cohorts" },
      { href: "/fleet/training/scoping-call", label: "Book a scoping call" },
    ],
  },
  {
    label: "Live Sessions",
    href: "/fleet/sessions",
    children: [
      { href: "/fleet/sessions", label: "Upcoming sessions" },
      { href: "/fleet/session", label: "Book a session" },
      { href: "/fleet/session-replay", label: "Session replays" },
    ],
  },
  {
    label: "Diagnostic",
    href: "/fleet/assessment",
    children: [
      { href: "/fleet/assessment", label: "FOS maturity assessment" },
      { href: "/fleet/audit", label: "15-minute reporting audit" },
    ],
  },
  {
    label: "About",
    href: "/fleet/about",
    children: [
      { href: "/fleet/about", label: "About Shina Salako" },
      { href: "/fleet/contact", label: "Contact & enquiries" },
    ],
  },
];

const globalLinks = [
  { href: "/entrepreneur-os", label: "Entrepreneur OS" },
  { href: "/joseph-protocol", label: "The Joseph Protocol" },
  { href: "/resources", label: "Resources" },
];

function DropdownItem({ group }: { group: typeof navGroups[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 80);
  }

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-sm bg-transparent border-0 cursor-pointer py-2 px-1 transition-colors whitespace-nowrap"
        style={{ color: open ? "var(--navy)" : "var(--ink-soft)" }}
        onClick={() => setOpen(!open)}
      >
        {group.label}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-2.5 h-2.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 z-50 min-w-[210px]"
          style={{ paddingTop: "4px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="rounded-lg py-2"
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
          >
            {group.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm border-0 transition-colors"
                style={{ color: "var(--ink-soft)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                  (e.currentTarget as HTMLElement).style.color = "var(--navy)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)";
                }}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default function FleetNav() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-40">
      {/* Back to hub bar */}
      <div
        className="flex justify-end px-6 md:px-8 py-1"
        style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}
      >
        <Link
          href="/"
          className="border-0 text-xs transition-colors"
          style={{ color: "var(--muted)" }}
        >
          &#8592; shinasalako.com
        </Link>
      </div>

      {/* Main nav */}
      <div
        style={{
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid var(--line)",
          backdropFilter: "saturate(140%) blur(6px)",
        }}
      >
        <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between py-3 gap-6">
            <Link
              href="/fleet"
              className="font-serif font-bold text-lg border-0 whitespace-nowrap"
              style={{ color: "var(--navy)" }}
            >
              Shina Salako
              <span
                className="ml-1.5 text-xs font-normal tracking-wider uppercase"
                style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
              >
                · SALCOMMS
              </span>
            </Link>

            {/* Desktop dropdown links */}
            <ul className="hidden md:flex gap-1 items-center list-none m-0 p-0">
              {navGroups.map((group) => (
                <DropdownItem key={group.href} group={group} />
              ))}
              <li className="ml-2">
                <Link
                  href="/fleet/firstlook"
                  className="text-sm px-4 py-2.5 rounded-full border-0 font-semibold whitespace-nowrap"
                  style={{ background: "var(--navy)", color: "#fff" }}
                >
                  The First Look
                </Link>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1 border-0 bg-transparent cursor-pointer"
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
              className="md:hidden flex flex-col pb-5"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              {navGroups.map((group) => (
                <div key={group.href}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold bg-transparent border-0 cursor-pointer text-left"
                    style={{ color: "var(--navy)" }}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === group.label ? null : group.label
                      )
                    }
                  >
                    {group.label}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3 h-3 transition-transform duration-200"
                      style={{
                        color: "var(--muted)",
                        transform:
                          mobileExpanded === group.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {mobileExpanded === group.label && (
                    <div
                      className="flex flex-col pb-3 pl-4 mb-1"
                      style={{ borderLeft: "2px solid var(--amber)" }}
                    >
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="border-0 py-2 text-sm"
                          style={{ color: "var(--ink-soft)" }}
                          onClick={() => {
                            setOpen(false);
                            setMobileExpanded(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/fleet/firstlook"
                className="inline-block text-center mt-3 px-4 py-2.5 rounded-full border-0 font-semibold text-sm"
                style={{ background: "var(--navy)", color: "#fff" }}
                onClick={() => setOpen(false)}
              >
                The First Look
              </Link>

              {/* Global links */}
              <div
                className="mt-4 pt-4 flex flex-col gap-2"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <p
                  className="text-[10px] tracking-widest uppercase font-bold mb-1"
                  style={{ color: "var(--muted)" }}
                >
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
      </div>
    </nav>
  );
}
