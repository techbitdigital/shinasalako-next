import type { ServiceCard, CredentialBadge, StatBlock } from "@/types/shared";

export const fleetCredentials: CredentialBadge[] = [
  { value: "15+ years", label: "Telematics & logistics operations" },
  { value: "12 years", label: "Embedded at Guinness Nigeria" },
  { value: "70+ transporters", label: "Across multiple client engagements" },
  { value: "PowerFleet", label: "Affiliated consultant" },
];

export const fleetServices: ServiceCard[] = [
  {
    label: "Keynote",
    title: "Executive keynote & conferences",
    description:
      "A 60-90 minute keynote — Building the Fleet Operating System: What twelve years at Guinness Nigeria taught us — for executive audiences, industry conferences, board offsites, and strategy retreats.",
    ctaText: "Enquire about speaking →",
    ctaHref: "/fleet/contact?topic=speaking",
  },
  {
    label: "Training",
    title: "In-house masterclasses & programmes",
    description:
      "Six-week practitioner cohorts for fleet management teams, control towers, and operations leadership — Cargo-Owner and Transporter programmes, plus in-house cohorts for organisations training eight or more from one team.",
    ctaText: "See the training programmes →",
    ctaHref: "/fleet/training",
  },
  {
    label: "Consulting",
    title: "Fleet Operating System assessment & embedded service",
    description:
      "Start with the free 10-minute self-diagnostic, then deepen into a 10-day written assessment of your fleet against the seven-layer FOS. Most engagements continue into SALCOMMS embedded telematics service.",
    ctaText: "Take the free self-diagnostic →",
    ctaHref: "/fleet/assessment",
  },
];

export const fosLayers = [
  { num: "L7", name: "Strategy", desc: "Maturity, scaling, AI, the long view." },
  { num: "L6", name: "Governance", desc: "SOPs, evidence, audit readiness, vendor management." },
  { num: "L5", name: "Technology Architecture", desc: "Integrations, automation, the single source of truth." },
  { num: "L4", name: "Economics", desc: "Cost-per-km, budgeting, variance review, ROI." },
  { num: "L3", name: "People & Roles", desc: "Named owners, role-specific KPIs, performance rhythm." },
  { num: "L2", name: "Operational Disciplines", desc: "Driver, maintenance, fuel, dispatch, customer, compliance, incidents, reporting." },
  { num: "L1", name: "Data & Visibility", desc: "Devices, connectivity, platform, master data, uptime." },
];

export const fleetQuotes = [
  {
    text: "Lack of effort is rarely the problem in fleet operations. Lack of evidence almost always is.",
    source: "Part I — Foundations",
  },
  {
    text: "We do not solve the problem. We make it visible enough that the parties who own it can solve it together.",
    source: "The operating credo",
  },
  {
    text: "A modern fleet is not a department. It is an operating system — built bottom-up, in seven layers, over years.",
    source: "Chapter 27 — The Capstone",
  },
];

export const fleetWhoFor = [
  {
    label: "Fleet operators",
    title: "If you run the fleet",
    desc: "Fleet managers, transport heads, control-tower controllers, operations leaders responsible for delivery reliability, asset uptime, and cost-per-kilometre across 3PL, FMCG, beverages, oil and gas, mining haulage, courier, or government fleets.",
  },
  {
    label: "Executive sponsors",
    title: "If you answer for it",
    desc: "COOs, supply-chain directors, CFOs, and business owners whose vehicles are central to revenue — and who are quietly unsure whether the fleet is generating, protecting, or leaking margin.",
  },
  {
    label: "Practitioners",
    title: "If you build the discipline",
    desc: "Telematics buyers and implementers; consultants; analysts; the next generation of fleet leaders who want to build operations that are not just functional, but intelligent, accountable, and scalable.",
  },
];

export const fleetInsideParts = [
  {
    num: "PART I",
    text: "Foundations — devices, connectivity, trips, geofences, the control tower, ETA, dwell, route compliance, data integrity.",
  },
  {
    num: "PART II",
    text: "Operating disciplines — driver behaviour, maintenance, fuel, dispatch, customer SLAs, vendor governance, compliance, incident response, reporting.",
  },
  {
    num: "PART III",
    text: "Strategy, scale & future — cost-per-km, ROI, the maturity model, team and KPI design, AI, scaling, the seven-layer Fleet Operating System.",
  },
  {
    num: "APPENDICES",
    text: "A practitioner toolkit — KPI dictionary, RACI matrix, transporter scorecard, control-tower routine, sample SOPs, incident protocols, the extended Guinness Nigeria case study, and a six-month practice plan.",
  },
];
