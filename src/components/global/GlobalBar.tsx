'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "Home", href: "/", children: [] },
  {
    label: "Entrepreneur OS",
    href: "/entrepreneur-os",
    children: [
      { href: "/entrepreneur-os", label: "Overview" },
      { href: "/entrepreneur-os/book", label: "The Book" },
      { href: "/entrepreneur-os/workshop", label: "Workshop" },
      { href: "/entrepreneur-os/coaching", label: "Coaching" },
      { href: "/entrepreneur-os/diagnostic", label: "Take the Diagnostic" },
      { href: "/entrepreneur-os/about", label: "About" },
    ],
  },
  {
    label: "Fleet & Telematics",
    href: "/fleet",
    children: [
      { href: "/fleet", label: "Overview" },
      { href: "/fleet/book", label: "The Book" },
      { href: "/fleet/toolkit", label: "The Practitioner's Toolkit" },
      { href: "/fleet/training", label: "Training Programmes" },
      { href: "/fleet/assessment", label: "FOS Assessment" },
      { href: "/fleet/audit", label: "15-Minute Reporting Audit" },
      { href: "/fleet/firstlook", label: "Get the First Look" },
      { href: "/fleet/contact", label: "Contact" },
    ],
  },
  {
    label: "The Joseph Protocol",
    href: "/joseph-protocol",
    children: [
      { href: "/joseph-protocol", label: "Overview" },
      { href: "/joseph-protocol#quiz", label: "Find Your Phase" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { href: "/resources", label: "All Resources" },
      { href: "/entrepreneur-os/about", label: "About Shina" },
      { href: "/fleet/contact", label: "Contact" },
    ],
  },
];

function NavItem({ item }: { item: typeof navItems[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasChildren = item.children.length > 0;

  function handleMouseEnter() {
    if (!hasChildren) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    if (!hasChildren) return;
    // small delay so mouse can travel to dropdown without it closing
    timeoutRef.current = setTimeout(() => setOpen(false), 80);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasChildren ? (
        <button
          className="flex items-center gap-1.5 text-[13px] bg-transparent border-0 cursor-pointer py-3 transition-colors whitespace-nowrap"
          style={{ color: open ? "#fff" : "rgba(235,243,251,.82)" }}
          onClick={() => setOpen(!open)}
        >
          {item.label}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-2.5 h-2.5 transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className="text-[13px] border-0 whitespace-nowrap transition-colors py-3 inline-block"
          style={{ color: "rgba(235,243,251,.82)" }}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown — flush to button, no gap */}
      {hasChildren && open && (
        <div
          className="absolute top-full z-50 min-w-[210px]"
          style={{ paddingTop: "4px", ...(item.label === "Resources" ? { right: 0 } : { left: 0 }) }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="rounded-lg py-2"
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            {item.children.map((child) => (
              <Link
                key={child.href + child.label}
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

export default function GlobalBar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: "#1a3c6e", borderBottom: "1px solid rgba(235,243,251,.14)" }}>
      <div style={{ maxWidth: "1140px" }} className="mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-12 gap-6">

          {/* Brand */}
          <Link
            href="/"
            className="font-bold text-sm tracking-wide whitespace-nowrap border-0 flex-shrink-0"
            style={{ color: "#ebf3fb", fontFamily: "Georgia, serif" }}
          >
            Shina&nbsp;Salako
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-5 items-center list-none m-0 p-0">
            {navItems.map((item) => (
              <NavItem key={item.href + item.label} item={item} />
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 border-0 bg-transparent cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "#ebf3fb" }}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden flex flex-col pb-5"
            style={{ borderTop: "1px solid rgba(235,243,251,0.14)" }}
          >
            {navItems.map((item) => (
              <div key={item.href + item.label}>
                {item.children.length === 0 ? (
                  <Link
                    href={item.href}
                    className="block py-3 text-sm border-0"
                    style={{ color: "#ebf3fb" }}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-sm font-semibold bg-transparent border-0 cursor-pointer text-left"
                      style={{ color: "#ebf3fb" }}
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-3 h-3 transition-transform duration-200"
                        style={{
                          color: "rgba(235,243,251,0.6)",
                          transform:
                            mobileExpanded === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {mobileExpanded === item.label && (
                      <div
                        className="flex flex-col pb-3 pl-4 mb-1"
                        style={{ borderLeft: "2px solid rgba(235,243,251,0.25)" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="border-0 py-2 text-xs"
                            style={{ color: "rgba(235,243,251,0.75)" }}
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
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
