export interface AuditSection {
  num: number;
  title: string;
  desc: string;
}

export const auditSections: AuditSection[] = [
  {
    num: 1,
    title: "The five core reports — do you produce them?",
    desc: "A checklist of the five operating reports every fleet should produce — daily trip log, exception report, transporter scorecard, fuel and maintenance summary, weekly performance pack. Tick what you have today, name what's missing.",
  },
  {
    num: 2,
    title: "The audience map — who actually reads them?",
    desc: "For each report you produce, who reads it, on what cadence, and what decision does it inform. The reports that no one reads are the first ones to fix or kill.",
  },
  {
    num: 3,
    title: "The decision check — do they change behaviour?",
    desc: "For each report that is read, what decision was last made on the basis of it. A report that has not driven a decision in 90 days is not a report — it is a screensaver.",
  },
  {
    num: 4,
    title: "The data integrity check — can the numbers be trusted?",
    desc: "A short series of checks against the underlying data — device uptime, vehicle-master coverage, trip-detection accuracy. If the data layer is broken, every report above it is also broken.",
  },
  {
    num: 5,
    title: "The 90-day plan — what to fix first.",
    desc: "A one-page worksheet to commit to the next 90 days: which two reports to build, which two to retire, who owns each, and what changes you expect to see by day 90.",
  },
];

export const auditStats = [
  { num: "15+", label: "years building reporting routines inside cargo-owner operations." },
  { num: "70+", label: "third-party transporters worked with across client engagements." },
  { num: "Daily", label: "cadence of reports the SALCOMMS embedded teams produce for clients." },
];

export const auditSeats = [
  {
    label: "Seat 1",
    title: "Cargo-owner operations leaders",
    desc: "If your supply-chain reports rely on transporter compliance and the data behind them is patchy, this audit is for you. It separates \u201cwhat we produce\u201d from \u201cwhat is acted on.\u201d",
  },
  {
    label: "Seat 2",
    title: "Transporter principals",
    desc: "If your cargo-owner clients are asking for evidence rather than promises, this audit shows what reporting they expect to see — and what's missing from yours.",
  },
  {
    label: "Seat 3",
    title: "Practitioners & control-tower leads",
    desc: "If you produce the reports and quietly wonder whether anyone reads them, this audit is the structured way to find out — and the route to the conversation that fixes it.",
  },
];

export const auditFaqs = [
  {
    q: "What format is the audit?",
    a: "A4 trim, navy headers, cream body. Approximately 8 pages, designed to be printed double-sided and filled in with a pen — though you can complete it on screen as a PDF form if you prefer.",
  },
  {
    q: "What happens after I submit the form?",
    a: "The PDF arrives in your inbox within a minute, addressed to the email you provided. If it does not arrive, check your spam folder once and then write to enquiries@salcomms.com.",
  },
  {
    q: "Will you ask me what I scored?",
    a: "No. The audit is for you. We will not ask for the result, and we will not follow up to \u201creview\u201d it with you unless you explicitly ask us to. If you want a conversation about what the result implies, the route is the facilitated maturity assessment — a deeper, paid engagement.",
  },
  {
    q: "Will I be added to a marketing list?",
    a: "You will be added to one list: a quarterly note from the author with one substantive piece per quarter, never more. No promotional emails, no sales sequences. One-click unsubscribe in every note.",
  },
  {
    q: "Is this the same thing as the First Look?",
    a: "No. The First Look is the 40-page opening of the book — content from the practitioner playbook. The audit is a self-contained diagnostic tool — a worksheet you fill in. They complement each other; many readers do the audit first and then read the First Look to learn the framework that explains the gaps the audit revealed.",
  },
];
