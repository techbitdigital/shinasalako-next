export interface Phase {
  num: string;
  stage: string;
  name: string;
  desc: string;
}

export const phases: Phase[] = [
  { num: "01", stage: "The Seed Stage", name: "Vision", desc: "Clarify what you see before you announce it. The first work is not publicity — it is clarity." },
  { num: "02", stage: "The Formation Stage", name: "Excellence", desc: "Build capacity in hidden places. Excellence is what you form while the work is still unseen." },
  { num: "03", stage: "The Connection Stage", name: "Network", desc: "Serve sincerely where you are. Your name travels through the value you create." },
  { num: "04", stage: "The Access Stage", name: "Opportunity", desc: "Prepare the solution before the door opens. Opportunity reveals readiness; it does not create it." },
  { num: "05", stage: "The Structure Stage", name: "Accumulation", desc: "Build storehouses in the good years. The famine does not ask what you earned — it asks what you stored." },
  { num: "06", stage: "The Stability Stage", name: "Preservation", desc: "Govern what you have built. If it matters, protect it before pressure exposes it." },
  { num: "07", stage: "The Multiplication Stage", name: "Legacy", desc: "Transfer what must not die with you. What God builds in you was never meant to bless only you." },
];

export const insideBullets: string[] = [
  "Locate your current Joseph phase",
  "Clarify and protect the seed of your vision",
  "Build excellence in hidden places",
  "Strengthen integrity before influence",
  "Serve relationships with wisdom",
  "Prepare for your “Pharaoh rooms”",
  "Build storehouses in your good years",
  "Create stewardship systems that last",
  "Preserve what God has placed in your hands",
  "Use power for preservation, not revenge",
  "Transfer wisdom that outlives you",
  "Build your personal 90-day blueprint",
];

export interface Tool {
  num: string;
  title: string;
  desc: string;
}

export const tools: Tool[] = [
  { num: "01", title: "Phase Assessment", desc: "Locate your dominant phase from the evidence." },
  { num: "02", title: "Vision Statement Worksheet", desc: "Put what you see into clear language." },
  { num: "03", title: "30-Day Excellence Plan", desc: "Raise one standard, and build evidence." },
  { num: "04", title: "Relationship Map", desc: "Serve, prepare, and set wise boundaries." },
  { num: "05", title: "Pharaoh Solution Brief", desc: "Prepare your solution before the door opens." },
  { num: "06", title: "Storehouse Plan", desc: "Preserve what is increasing." },
  { num: "07", title: "Stewardship System Builder", desc: "Make good stewardship repeatable." },
  { num: "08", title: "Preservation Plan", desc: "Protect what is valuable but vulnerable." },
  { num: "09", title: "Legacy Declaration", desc: "Clarify what must not die with you." },
  { num: "10", title: "90-Day Roadmap", desc: "Turn the blueprint into real movement." },
];

export interface QuizPhaseInfo {
  name: string;
  stage: string;
  line: string;
  step: string;
}

export const quizPhases: Record<string, QuizPhaseInfo> = {
  v: { name: "Vision", stage: "The Seed Stage", line: "Your season is asking for clarity, not yet publicity.", step: "Clarify and write your vision before you announce it — begin with the Vision Statement tool." },
  e: { name: "Excellence", stage: "The Formation Stage", line: "You are being formed in a hidden place; the work now is your standard.", step: "Raise one standard for 30 days — begin with the 30-Day Excellence Plan." },
  n: { name: "Network", stage: "The Connection Stage", line: "This is a season of sincere service and relational wisdom.", step: "Serve someone sincerely and map your relationships — begin with the Relationship Map." },
  o: { name: "Opportunity", stage: "The Access Stage", line: "A room may be near; the work is readiness, not access.", step: "Prepare your solution before the door opens — begin with the Pharaoh Solution Brief." },
  a: { name: "Accumulation", stage: "The Structure Stage", line: "Something is increasing and needs structure before it scatters.", step: "Build one storehouse — begin with the Storehouse Plan." },
  p: { name: "Preservation", stage: "The Stability Stage", line: "You have built something that now needs to be protected.", step: "Govern what you have built — begin with the Preservation Plan." },
  l: { name: "Legacy", stage: "The Multiplication Stage", line: "You are ready to transfer what must not die with you.", step: "Begin transferring your wisdom — start with the Legacy Declaration." },
};

export const quizOrder = ["v", "e", "n", "o", "a", "p", "l"];

export interface QuizStatement {
  p: string;
  t: string;
}

export const quizStatements: QuizStatement[] = [
  { p: "v", t: "I have ideas or a burden, but I can’t yet explain them simply." },
  { p: "e", t: "I know what I should do, but my consistency is weak." },
  { p: "n", t: "I’ve been treating some relationships transactionally." },
  { p: "o", t: "A bigger room, client, or platform may be near." },
  { p: "a", t: "Something is increasing in my life, but it isn’t structured." },
  { p: "p", t: "I’ve built something that now feels fragile." },
  { p: "l", t: "I’m thinking beyond personal success." },
  { p: "v", t: "I feel scattered because many opportunities look attractive." },
  { p: "e", t: "I’m in a hidden or ordinary place that may be forming me." },
  { p: "n", t: "I feel forgotten by someone I helped." },
  { p: "o", t: "I’ve been seeking access but haven’t prepared a solution." },
  { p: "a", t: "Money, ideas, or clients seem to leak away." },
  { p: "p", t: "Too much depends on one person — often me." },
  { p: "l", t: "I want what I’m building to continue beyond me." },
  { p: "v", t: "I still need to define who I’m called to serve." },
  { p: "e", t: "I need to raise my standard in a specific area." },
  { p: "n", t: "I need to serve people more sincerely." },
  { p: "o", t: "I need to prepare before the door opens." },
  { p: "a", t: "I need to stop consuming everything that comes in." },
  { p: "p", t: "Processes aren’t documented and roles are unclear." },
  { p: "l", t: "I need to document wisdom or begin mentoring others." },
];

export interface PricingTier {
  key: string;
  kicker: string;
  title: string;
  desc: string;
  price: string;
  was?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  amount: number;
}

export const pricingTiers: PricingTier[] = [
  {
    key: "book",
    kicker: "The Book",
    title: "The Joseph Protocol",
    desc: "The full framework — Joseph’s journey turned into a usable map for your own.",
    price: "₦15,000",
    amount: 15000,
    features: ["21 chapters across six parts", "Real-world examples in every phase", "Reflection prompts throughout", "Print & eBook"],
  },
  {
    key: "bundle",
    kicker: "Book + Workbook",
    title: "The Complete Bundle",
    desc: "Everything you need to read the pattern and build the blueprint.",
    price: "₦25,000",
    amount: 25000,
    featured: true,
    badge: "Best Value",
    features: ["The full book", "The Workbook & 12-Week Program", "A worked example in every tool", "Discussion guide for groups"],
  },
  {
    key: "ebook",
    kicker: "The Companion",
    title: "eBook",
    desc: "The full framework in digital form — read on any device.",
    price: "₦10,000",
    amount: 10000,
    features: ["21 chapters across six parts", "Real-world examples in every phase", "Reflection prompts throughout", "Instant digital delivery"],
  },
];
