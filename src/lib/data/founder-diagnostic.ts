export interface QuizOption {
  label: string;
  score: number;
}

export interface QuizQuestion {
  system: string;
  tag: string;
  text: string;
  options: QuizOption[];
}

export const founderQuestions: QuizQuestion[] = [
  {
    system: "The Builder",
    tag: "FOUNDER OS · 1 of 3",
    text: 'In the last 30 days, how many decisions have you postponed because you "did not have bandwidth"?',
    options: [
      { label: "None — I made every decision the business needed", score: 4 },
      { label: "One or two — minor things", score: 3 },
      { label: "Three to five — some were important", score: 2 },
      { label: "Six or more — I am avoiding decisions regularly", score: 1 },
    ],
  },
  {
    system: "The Builder",
    tag: "FOUNDER OS · 2 of 3",
    text: "If you took two weeks off tomorrow with zero contact — what would happen to your business?",
    options: [
      { label: "It would continue running normally", score: 4 },
      { label: "A few decisions would wait, but nothing critical", score: 3 },
      { label: "Revenue would slow and some clients would be unhappy", score: 2 },
      { label: "It would effectively pause — or collapse", score: 1 },
    ],
  },
  {
    system: "The Builder",
    tag: "FOUNDER OS · 3 of 3",
    text: "When did you last spend an uninterrupted hour reviewing yourself the way you review your numbers?",
    options: [
      { label: "This week — I do it regularly", score: 4 },
      { label: "This month", score: 3 },
      { label: "This quarter or longer ago", score: 2 },
      { label: "I cannot remember the last time", score: 1 },
    ],
  },
  {
    system: "The Map",
    tag: "MARKET OS · 1 of 3",
    text: "Can you describe in ONE sentence who exactly your business serves?",
    options: [
      { label: "Yes — confidently, with specifics", score: 4 },
      { label: "Mostly — I have a clear segment in mind", score: 3 },
      { label: "Roughly — but the sentence is fuzzy", score: 2 },
      { label: "Honestly, anyone willing to pay", score: 1 },
    ],
  },
  {
    system: "The Map",
    tag: "MARKET OS · 2 of 3",
    text: "If three competitors called your same prospect tomorrow — what specific reason would your prospect have to choose you?",
    options: [
      { label: "I have multiple specific differentiators I can name", score: 4 },
      { label: "One specific reason that I lead with consistently", score: 3 },
      { label: "It usually comes down to relationship or price", score: 2 },
      { label: "I do not have a clear answer to this", score: 1 },
    ],
  },
  {
    system: "The Map",
    tag: "MARKET OS · 3 of 3",
    text: 'In your last ten sales conversations, what percentage ended with the prospect saying "this is not quite what I am looking for"?',
    options: [
      { label: "Under 20%", score: 4 },
      { label: "20–50%", score: 3 },
      { label: "50–80%", score: 2 },
      { label: "Over 80% — most of them", score: 1 },
    ],
  },
  {
    system: "The Engine",
    tag: "MODEL OS · 1 of 3",
    text: "How predictable is your revenue 90 days out from today?",
    options: [
      { label: "Highly predictable — I know within ±15%", score: 4 },
      { label: "Mostly predictable — within ±30%", score: 3 },
      { label: "I have a rough idea, but it could swing widely", score: 2 },
      { label: "I genuinely do not know", score: 1 },
    ],
  },
  {
    system: "The Engine",
    tag: "MODEL OS · 2 of 3",
    text: "Where do most of your new leads come from currently?",
    options: [
      { label: "Multiple reliable channels I can describe", score: 4 },
      { label: "One reliable channel I can describe", score: 3 },
      { label: "Word of mouth or referrals — but I cannot trace them", score: 2 },
      { label: "I genuinely am not sure where leads come from", score: 1 },
    ],
  },
  {
    system: "The Engine",
    tag: "MODEL OS · 3 of 3",
    text: "When was the last time you lost a deal — and you knew exactly why?",
    options: [
      { label: "I know specifically why each lost deal died", score: 4 },
      { label: "I usually know within a few possibilities", score: 3 },
      { label: "I am often unsure why deals go cold", score: 2 },
      { label: "I rarely know why deals die", score: 1 },
    ],
  },
  {
    system: "The Skeleton",
    tag: "MANAGEMENT OS · 1 of 3",
    text: 'How many "should I do X?" questions does your team ask you per day on average?',
    options: [
      { label: "Less than two — the team operates with clarity", score: 4 },
      { label: "Two to five", score: 3 },
      { label: "Six to ten", score: 2 },
      { label: "More than ten — or I am solo and would face this if I hired", score: 1 },
    ],
  },
  {
    system: "The Skeleton",
    tag: "MANAGEMENT OS · 2 of 3",
    text: "If your most experienced team member quit tomorrow, what would leave the business with them?",
    options: [
      { label: "Nothing critical — everything important is documented", score: 4 },
      { label: "A little — most things are documented", score: 3 },
      { label: "A lot — most knowledge is in their head", score: 2 },
      { label: "Almost everything — they hold key processes", score: 1 },
    ],
  },
  {
    system: "The Skeleton",
    tag: "MANAGEMENT OS · 3 of 3",
    text: "Of the ten things your business does most often — how many have a written process anyone could follow?",
    options: [
      { label: "Eight to ten", score: 4 },
      { label: "Five to seven", score: 3 },
      { label: "Two to four", score: 2 },
      { label: "Zero or one", score: 1 },
    ],
  },
  {
    system: "The Loop",
    tag: "MOMENTUM OS · 1 of 3",
    text: "In the last 12 months, what percentage of your revenue came from existing or repeat customers — not new acquisitions?",
    options: [
      { label: "More than 60% — repeat business is the core of my revenue", score: 4 },
      { label: "30–60% — a healthy mix of new and returning", score: 3 },
      { label: "10–30% — mostly new customers each cycle", score: 2 },
      { label: "Less than 10% — every month starts from zero", score: 1 },
    ],
  },
  {
    system: "The Loop",
    tag: "MOMENTUM OS · 2 of 3",
    text: "How often does a happy customer refer someone new to you without being asked?",
    options: [
      { label: "Regularly — we have a system that triggers it", score: 4 },
      { label: "Sometimes — it happens but I do not track it", score: 3 },
      { label: "Rarely — I have to ask for referrals every time", score: 2 },
      { label: "Almost never — customers buy and disappear", score: 1 },
    ],
  },
  {
    system: "The Loop",
    tag: "MOMENTUM OS · 3 of 3",
    text: "When a customer goes silent — stops responding, slows down their orders, or quietly drifts away — how often do you know about it before it is too late?",
    options: [
      { label: "Always — I have early-warning signals built in", score: 4 },
      { label: "Sometimes — when I am paying attention", score: 3 },
      { label: "Rarely — usually I notice after they have gone", score: 2 },
      { label: "Never — customers leaving is the first I hear of it", score: 1 },
    ],
  },
];

export interface DiagnosisEntry {
  body: string;
  action: string;
}

export const founderDiagnoses: Record<string, DiagnosisEntry> = {
  "The Builder": {
    body: "Your weakest system is <em>The Founder Operating System</em> — also known as The Builder. The Builder is you. Your business depends too heavily on your daily presence, your energy, and your decision-making capacity. Before you build the business, you must build the founder. This is the most expensive system to leave broken because every other system pays the tax. When the founder degrades — sleeping less, deciding under pressure, dodging the hard conversations — every other operating system in the business eventually follows.",
    action: "<strong>Your next move:</strong> book yourself a Founder audit — one uninterrupted hour, three questions: (1) What decision am I avoiding that the business is paying for daily? (2) If a stranger watched my last seven days, what would they say I am actually building? (3) What is the next decision I am most likely to delay? Write the answers down. Do not solve them yet — just name them.",
  },
  "The Map": {
    body: "Your weakest system is <em>The Market Operating System</em> — also known as The Map. A business does not exist because the founder has an idea. It exists because a customer has a problem. Your business has not yet sharpened which customer problem it solves, who exactly that customer is, and where the gap in the market actually sits. A blurry Map is the most expensive thing in your business — every other system you build on top of it is built on sand. The good news: this is the cheapest leak to fix.",
    action: "<strong>Your next move:</strong> in one paragraph, write down the answers to three questions — who you serve specifically, the exact problem you solve for them, and the single most defensible reason your solution beats the alternatives they are currently using. If you cannot answer all three in one breath, you have just found your work for this week.",
  },
  "The Engine": {
    body: "Your weakest system is <em>The Model Operating System</em> — also known as The Engine. A business idea is not the same as a business model. Your engine — how you make money, deliver value, price, and package the offer — has not been designed deliberately. Most businesses inherit their model from the first version of themselves and never revisit it. The result: revenue feels random, pricing feels uncomfortable, and profit per customer is lower than it could be.",
    action: '<strong>Your next move:</strong> write down your current business model on one page. Who pays. For what. How much. How often. Then ask: if I were designing this from scratch today, what would I change? You will probably find one specific shift — a pricing change, a packaging shift, a new tier — that you have been delaying. That is your Engine work. This is the system the <a href="/entrepreneur-os/workshop" style="color:#D88C3B;">half-day workshop</a> is built around.',
  },
  "The Skeleton": {
    body: "Your weakest system is <em>The Management Operating System</em> — also known as The Skeleton. Growth without structure creates chaos. Your business has not yet built the roles, workflows, documentation, delegation, cash flow tracking, and compliance discipline that let it grow past you without breaking. The sentence “it is faster if I just do it myself” is the most expensive sentence a founder can say. Familiar is a tax. A high one.",
    action: "<strong>Your next move:</strong> write three one-page documents this week. A Decision Map (which decisions your team can make without asking you, and the budget limits on each). A Process Inventory (the ten things this business does most often, and who owns each). A Knowledge Vault (where lessons learned get stored). Three pages can replace fifty meetings.",
  },
  "The Loop": {
    body: "Your weakest system is <em>The Momentum Operating System</em> — also known as The Loop. A good business must be visible, trusted, chosen, and remembered. Your business has not yet built the loop that turns a transaction into a relationship — and a relationship into momentum. Every month effectively starts from zero because past customers are not generating repeat purchases, referrals, or compounding word of mouth. You are running an acquisition treadmill where you should be building a flywheel.",
    action: "<strong>Your next move:</strong> for each of your last ten customers, write down (1) whether they have bought again, (2) whether they have referred anyone, and (3) whether you would even know if they stopped. The pattern you will see is your Momentum leak. Then pick one specific intervention — a 30-day check-in call, a written referral ask, a customer experience touchpoint — and build it into your week. The momentum compounds from there.",
  },
};

export const founderSystemTags: Record<string, string> = {
  "The Builder": "FOUNDER OS",
  "The Map": "MARKET OS",
  "The Engine": "MODEL OS",
  "The Skeleton": "MANAGEMENT OS",
  "The Loop": "MOMENTUM OS",
};

export const founderCtaLabels: Record<string, string> = {
  "The Builder": "the Founder OS (The Builder)",
  "The Map": "the Market OS (The Map)",
  "The Engine": "the Model OS (The Engine)",
  "The Skeleton": "the Management OS (The Skeleton)",
  "The Loop": "the Momentum OS (The Loop)",
};

export const founderSystems = ["The Builder", "The Map", "The Engine", "The Skeleton", "The Loop"];
