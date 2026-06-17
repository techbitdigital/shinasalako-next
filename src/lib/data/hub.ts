import type { BookCard, DiagnosticLink, ServiceCard, CredentialBadge } from "@/types/shared";

export const hubBooks: BookCard[] = [
  {
    slug: "eos",
    label: "For founders",
    title: "The Entrepreneur Operating System",
    who: "For the founder who has become the bottleneck — building a business that works beyond them.",
    description:
      "Your business runs on five operating systems, and one of them is leaking. This is the playbook for finding the leak and building the 90-day plan to fix it. The book, the workshop, and a twelve-minute founder diagnostic.",
    href: "/entrepreneur-os",
    accentColor: "#ff6b00",
  },
  {
    slug: "fleet",
    label: "For fleet leaders",
    title: "Telematics & Fleet Management",
    who: "For the people who run fleets — and the leaders who answer for them at the top of the house.",
    description:
      "The operating playbook for fleet leaders in emerging markets — built on the seven-layer Fleet Operating System and twelve years embedded at Guinness Nigeria. The book, the training programmes, and a ten-minute maturity diagnostic.",
    href: "/fleet",
    accentColor: "#ff6b00",
  },
  {
    slug: "joseph",
    label: "For the season you are in",
    title: "The Joseph Protocol",
    who: "For the builder in a long season — naming the phase you are in and what it asks of you.",
    description:
      "A framework for the phases every builder moves through. The workbook, plus a Find Your Phase quiz that tells you which phase you are in and the next step it calls for — printable as a one-page result.",
    href: "/joseph-protocol",
    accentColor: "#1a3c6e",
  },
];

export const hubDiagnostics: DiagnosticLink[] = [
  {
    title: "The 12-Minute Founder Diagnostic",
    description:
      "Twelve questions, five operating systems, one clear answer about where your business is silently leaking.",
    href: "/entrepreneur-os/diagnostic",
  },
  {
    title: "The Fleet Maturity Assessment",
    description:
      "Eighteen questions across the seven FOS layers — your maturity stage and the layer holding the others back, in ten minutes.",
    href: "/fleet/assessment",
  },
  {
    title: "Find Your Phase",
    description:
      "A short quiz that names the phase you are building through and the single next step it calls for — printable to keep.",
    href: "/joseph-protocol#quiz",
  },
];

export const hubServices: ServiceCard[] = [
  {
    label: "Keynote",
    title: "Executive keynote & conferences",
    description:
      "Keynotes for executive audiences, industry conferences, and board offsites — including What twelve years at Guinness Nigeria taught us about building a Fleet Operating System.",
    ctaText: "Enquire about speaking →",
    ctaHref: "/fleet/contact?topic=speaking",
  },
  {
    label: "Training",
    title: "Practitioner programmes",
    description:
      "Six-week cohorts for fleet teams — Cargo-Owner and Transporter programmes, plus in-house cohorts. And the half-day Entrepreneur OS workshop for founders in Lagos.",
    ctaText: "See the programmes →",
    ctaHref: "/fleet/training",
  },
  {
    label: "Consulting",
    title: "Assessment & embedded service",
    description:
      "Start with a free self-diagnostic, then deepen into a written assessment against the seven-layer FOS — or SALCOMMS embedded telematics service inside your operation.",
    ctaText: "Explore consulting →",
    ctaHref: "/fleet#services",
  },
];

export const hubCredentials: CredentialBadge[] = [
  { value: "18+ years", label: "Building & selling businesses" },
  { value: "12 years", label: "Embedded at Guinness Nigeria" },
  { value: "Maxwell Leadership", label: "Certified team member" },
  { value: "PowerFleet", label: "Affiliated consultant" },
];
