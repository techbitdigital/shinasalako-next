export interface ToolkitItem {
  code: string;
  title: string;
  desc: string;
}

export interface ToolkitCategory {
  name: string;
  items: ToolkitItem[];
}

export const toolkitCategories: ToolkitCategory[] = [
  {
    name: "Operating reference",
    items: [
      { code: "A", title: "KPI Dictionary", desc: "The named definitions of every fleet KPI used in the book \u2014 on-time delivery, dwell time, route compliance, cost-per-km \u2014 with the formula, the data source, and the owner." },
      { code: "B", title: "RACI Matrix", desc: "Responsibility / Accountable / Consulted / Informed mapping across every operating discipline in the book \u2014 for a cargo-owner organisation and a transporter, separately." },
      { code: "E", title: "Control Tower Routine", desc: "The daily, weekly, and monthly control-tower routine as a one-page checklist \u2014 the order of checks, the named outputs, the cadence of escalations." },
      { code: "N", title: "Vehicle Master Data Spec", desc: "The minimum master-data fields every vehicle record must carry for telematics reporting to be reliable, with the validation rules." },
    ],
  },
  {
    name: "Scorecards & operating templates",
    items: [
      { code: "D", title: "Transporter Scorecard", desc: "The monthly scorecard cargo-owners use to grade third-party transporters on a single page \u2014 the metrics, the weightings, the conversation prompts." },
      { code: "K", title: "Driver Behaviour Scorecard", desc: "Weekly driver scorecard built to be read in the depot, not the dashboard. The five behaviours, the scoring, the coaching frame." },
      { code: "L", title: "Fuel Discipline Template", desc: "The monthly fuel review pack for the transporter-owned fuel model \u2014 actual versus expected, the variance investigation log." },
      { code: "O", title: "Maintenance Schedule Template", desc: "Preventive-maintenance schedule and tracker by vehicle class \u2014 the intervals, the triggers, the compliance reporting." },
    ],
  },
  {
    name: "Protocols & SOPs",
    items: [
      { code: "F", title: "Sample Standard Operating Procedures", desc: "Six worked SOPs \u2014 depot start-up, trip dispatch, exception escalation, vehicle handover, incident first response, daily reporting." },
      { code: "G", title: "Incident Protocols", desc: "Step-by-step protocols for the five most common incident types \u2014 diversion, theft, missing cargo, accident, breakdown \u2014 with named owners." },
      { code: "P", title: "Vendor Governance Cadence", desc: "Monthly transporter performance-review meeting agenda, minutes template, action-tracker \u2014 the discipline that makes the scorecard land." },
    ],
  },
  {
    name: "Frameworks & planning",
    items: [
      { code: "I", title: "Six-Month Practice Plan", desc: "A 26-week structured plan to take any cargo-owner or transporter operation from Stage 1 to Stage 3 on the FOS maturity model \u2014 with weekly deliverables." },
      { code: "J", title: "Maturity Model Workbook", desc: "The full 18-question workbook behind the free FOS assessment \u2014 with the scoring rubric, the layer-by-layer interpretation, and the next-move guide." },
      { code: "Q", title: "90-Day Improvement Plan", desc: "The one-page improvement plan template participants leave the training programmes with \u2014 outcomes, owners, milestones, the day-30 and day-90 check-in." },
    ],
  },
  {
    name: "Calculation tools",
    items: [
      { code: "H", title: "ROI Calculator (Excel)", desc: "The full ROI calculation spreadsheet from Chapter 19 \u2014 cost-side and benefit-side inputs, automatic calculations, the worked example pre-loaded." },
      { code: "R", title: "Cost-per-Kilometre Model (Excel)", desc: "Vehicle-level cost-per-km calculator covering fuel, maintenance, depreciation, driver cost, overhead \u2014 with variance reporting." },
      { code: "S", title: "Freight-Rate Sensitivity Model (Excel)", desc: "Tool to model freight-rate changes against transporter margin and cargo-owner cost \u2014 for negotiations grounded in evidence." },
    ],
  },
  {
    name: "Case study",
    items: [
      { code: "C", title: "Guinness Nigeria \u2014 Extended Case Study (PDF)", desc: "The full extended case study \u2014 twelve years of embedded telematics service at Guinness Nigeria. The starting condition, the operating model, the moments where the model held, the lessons. Approximately 40 pages." },
      { code: "M", title: "Engagement Models Reference", desc: "Side-by-side description of the three SALCOMMS engagement models \u2014 embedded service, direct service, advisory \u2014 and where each one fits." },
    ],
  },
];

export interface ToolkitTier {
  key: string;
  label: string;
  badge?: string;
  title: string;
  desc: string;
  features: string[];
  priceNaira: string;
  priceUsd: string;
  delivery: string;
}

export const toolkitTiers: ToolkitTier[] = [
  {
    key: "toolkit",
    label: "Option 1 \u00b7 Toolkit only",
    title: "The Toolkit.",
    desc: "For practitioners who already own the book \u2014 or who want the templates without reading the full ~270 pages. The complete 19-appendix set as editable, brand-neutral files.",
    features: [
      "All 19 appendices \u00b7 editable .xlsx, .docx, .pdf",
      "Brand-neutral templates \u00b7 drop in your own logo",
      "The extended Guinness Nigeria case study (PDF)",
      "Single-organisation licence \u00b7 unlimited internal users",
      "Free updates for 12 months",
    ],
    priceNaira: "\u20a695,000",
    priceUsd: "$225",
    delivery: "Download link emailed on purchase",
  },
  {
    key: "bundle",
    label: "Option 2 \u00b7 Book + Toolkit bundle",
    badge: "Best value",
    title: "The Book and the Toolkit.",
    desc: "For first-time buyers. The ~270-page book (paperback or eBook) plus the 19-appendix toolkit at a combined price below the sum of the two.",
    features: [
      "The full ~270-page book \u00b7 paperback or eBook",
      "All 19 appendices \u00b7 editable templates",
      "The extended Guinness Nigeria case study",
      "Single-organisation licence on the toolkit",
      "Free updates for 12 months",
      "Priority email support for setup questions",
    ],
    priceNaira: "\u20a6110,000",
    priceUsd: "$265",
    delivery: "Book ships within 3\u20137 working days \u00b7 toolkit downloads immediately",
  },
];

export const toolkitBuyerTypes = [
  {
    label: "Buyer 1",
    title: "Cargo-owner operations leaders",
    desc: "Heads of supply chain or transport who want the scorecards, the control-tower routine, the ROI calculator working inside their operation in week one \u2014 without waiting for an external engagement.",
  },
  {
    label: "Buyer 2",
    title: "Transporter principals",
    desc: "Owner-operators and MDs who want the operating-evidence pack the cargo-owner expects to see, plus the cost-model and freight-rate tools to defend the rate in negotiation.",
  },
  {
    label: "Buyer 3",
    title: "Consultants & in-house improvement teams",
    desc: "Internal consultants, change-management teams, and external advisors who want a credible, practitioner-built starting kit rather than building templates from scratch.",
  },
];

export const toolkitFaqs = [
  {
    q: "What formats do the files come in?",
    a: "Mostly editable Microsoft Office formats \u2014 .xlsx for calculators and trackers, .docx for SOPs and protocols, .pdf for the reference documents and the case study. Everything opens in Google Workspace and LibreOffice as well.",
  },
  {
    q: "How is the Toolkit delivered?",
    a: "Two ways. A direct download link for a single .zip file is emailed immediately on purchase. You also receive a link to a cloud folder (Google Drive or Dropbox) that holds the same files individually, in case you want to pull single templates without downloading the whole set.",
  },
  {
    q: "Do I need the book to use the Toolkit?",
    a: "No \u2014 the templates are self-explanatory, each with a one-page README. But the book explains the reasoning behind each one, and most buyers find the combination considerably more useful than either alone. Hence the bundle option.",
  },
  {
    q: "Will the Toolkit work for our specific industry?",
    a: "The templates were built across beverages, FMCG, oil and gas, cement, and courier engagements. The operating discipline is industry-agnostic. The metrics in the KPI dictionary cover what every fleet measures; the scorecards and SOPs adapt cleanly to the vehicle mix and operating profile of any cargo-owner or transporter fleet.",
  },
  {
    q: "What if I want help installing the templates in our operation?",
    a: "That is what the training programmes are designed for \u2014 six-week practitioner cohorts that walk a team through installing the discipline these templates support. The Toolkit gives you the artefacts; the training programmes give you the practice.",
  },
  {
    q: "What about consultants who want to use the Toolkit with their own clients?",
    a: "The standard licence does not cover that use. A separate consultant licence exists for advisors who want to use the templates inside paid engagements with their clients. Write to enquiries@salcomms.com and we will share the terms.",
  },
];
