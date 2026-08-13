export type ProjectSlug = "dkumoves" | "humanai" | "sovi" | "liberata";
export type MediaKind = "phone" | "desktop" | "diagram";

export interface MediaItem {
  src?: string;
  fullSrc?: string;
  alt: string;
  eyebrow: string;
  title: string;
  caption: string;
  kind: MediaKind;
  render?: "sovi-study-flow";
}

export interface SummaryFact {
  label: "Problem" | "Decision" | "Outcome";
  text: string;
}

export interface ProcessArtifact {
  title: string;
  caption: string;
  steps: string[];
  visual: "loop" | "conditions" | "learning" | "session";
  image?: MediaItem;
  colors?: string[];
}

export interface CaseStudy {
  slug: ProjectSlug;
  title: string;
  type: string;
  period: string;
  homeLine: string;
  role: string;
  focus: string;
  tools: string;
  heroLine: string;
  externalUrl?: string;
  media: MediaItem[];
  summaryFacts: SummaryFact[];
  processArtifact: ProcessArtifact;
  metrics: Array<{ value: string; label: string }>;
  scopeNote: string;
  nextSlug: ProjectSlug;
  nextTitle: string;
}

export const profile = {
  email: "rw312@duke.edu",
  github: "https://github.com/RunchuWu",
  linkedin: "https://www.linkedin.com/in/runchuwu",
  bio: "I move from product framing and interaction design to production code—making complex AI systems feel clear, useful, and shippable.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dkumoves",
    title: "DKU Moves",
    type: "Product strategy · UX/UI · Full-stack",
    period: "2026 — present",
    homeLine: "A campus activity product that turns movement into visible community momentum.",
    role: "Product Owner · Design & Front-End Lead",
    focus: "Behavior change · Community",
    tools: "React · FastAPI · MySQL",
    heroLine: "Turning a points utility into a participation loop for the entire campus.",
    externalUrl: "https://app.moves.dukekunshan.edu.cn/",
    media: [
      {
        src: "/work/dkumoves/home-anonymized.webp",
        fullSrc: "/work/dkumoves/home-anonymized.png",
        alt: "DKU Moves home dashboard with daily distance, streak, points, and campus rank",
        eyebrow: "01 · Home",
        title: "Start with today",
        caption: "Progress, streak, points, and rank create one clear starting point.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/log-activity.webp",
        fullSrc: "/work/dkumoves/log-activity.png",
        alt: "DKU Moves activity logging workflow with sport selection",
        eyebrow: "02 · Log",
        title: "Reduce logging effort",
        caption: "A staged selector makes a broad activity catalog feel fast.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/share-anonymized.webp",
        fullSrc: "/work/dkumoves/share-anonymized.png",
        alt: "DKU Moves generated activity sharing card",
        eyebrow: "03 · Share",
        title: "Make effort visible",
        caption: "A generated card turns a check-in into a campus moment.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/market-anonymized.webp",
        fullSrc: "/work/dkumoves/market-anonymized.png",
        alt: "DKU Moves rewards marketplace showing point balance and inventory",
        eyebrow: "04 · Market",
        title: "Close the reward loop",
        caption: "Balance, inventory, and redemption states make points tangible.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/campus-ranking.webp",
        fullSrc: "/work/dkumoves/campus-ranking.png",
        alt: "DKU Moves campus activity pulse and group rankings",
        eyebrow: "05 · Campus",
        title: "See collective momentum",
        caption: "Rankings connect individual movement to the wider community.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/profile-anonymized.webp",
        fullSrc: "/work/dkumoves/profile-anonymized.png",
        alt: "DKU Moves profile with personal progress and activity history",
        eyebrow: "06 · Profile",
        title: "Own the progress",
        caption: "History and achievements build a durable activity identity.",
        kind: "phone",
      },
    ],
    summaryFacts: [
      { label: "Problem", text: "The old upload-and-points utility completed a task but gave people little reason to return." },
      { label: "Decision", text: "Connect daily progress, sharing, rankings, and rewards into one repeatable participation loop." },
      { label: "Outcome", text: "A working phone-first product spanning real authentication, activity, ranking, reward, and profile services." },
    ],
    processArtifact: {
      title: "Design the loop before the screens.",
      caption: "Every surface either reduces logging effort, clarifies progress, or turns personal movement into shared momentum.",
      steps: ["Move", "Log", "Earn", "Share", "Compare", "Redeem"],
      visual: "loop",
      colors: ["#0d4694", "#157d78", "#ff7417", "#eaf1fb"],
    },
    metrics: [
      { value: "6", label: "connected product surfaces shown" },
      { value: "~3K", label: "students, staff, and faculty served" },
      { value: "E2E", label: "React client to campus data services" },
    ],
    scopeNote: "Real implemented workflow; personal data and privileged controls are anonymized. No behavior-change claim is made without formal evaluation.",
    nextSlug: "humanai",
    nextTitle: "HumanAI Trust Calibration Engine",
  },
  {
    slug: "humanai",
    title: "HumanAI Trust Calibration Engine",
    type: "Research UX · Product architecture · Engineering",
    period: "Google Summer of Code 2026",
    homeLine: "A controlled AI study made simple for participants and inspectable for researchers.",
    role: "GSoC Contributor · Product, UX & Engineering",
    focus: "Trust calibration · Research tooling",
    tools: "Next.js · TypeScript · Playwright",
    heroLine: "One experiment platform, designed for two radically different users.",
    media: [
      {
        src: "/work/humanai-participant.jpg",
        alt: "Participant-facing HumanAI operational decision task",
        eyebrow: "01 · Participant",
        title: "Clarity under pressure",
        caption: "Staged information and neutral actions protect the decision task.",
        kind: "desktop",
      },
      {
        src: "/work/humanai-researcher.jpg",
        alt: "Researcher debug interface with condition and cue controls",
        eyebrow: "02 · Researcher",
        title: "Control without contamination",
        caption: "Conditions, cue inspection, and screen jumps stay researcher-only.",
        kind: "desktop",
      },
      {
        src: "/work/humanai-export.jpg",
        alt: "HumanAI researcher export quality assurance interface",
        eyebrow: "03 · Data",
        title: "Analysis-ready by design",
        caption: "Typed events and filtered exports preserve every decision context.",
        kind: "desktop",
      },
    ],
    summaryFacts: [
      { label: "Problem", text: "Participant clarity and scientific control require different information, actions, and levels of system visibility." },
      { label: "Decision", text: "Separate a quiet participant journey from a powerful researcher control plane." },
      { label: "Outcome", text: "A complete, documented experiment platform with deterministic QA and analysis-ready export." },
    ],
    processArtifact: {
      title: "Turn theory into composable variables.",
      caption: "Three cue-source conditions share one experiment model and five independently configurable humanlike cues.",
      steps: ["Consent", "Practice", "Situation", "Evidence", "Decide", "Debrief"],
      visual: "conditions",
    },
    metrics: [
      { value: "3", label: "cue-source conditions" },
      { value: "5", label: "humanlike cue modules" },
      { value: "10", label: "fixed decision trials" },
    ],
    scopeNote: "Internal walkthroughs and synthetic QA validate implementation and data integrity—not participant behavior or a scientific hypothesis.",
    nextSlug: "sovi",
    nextTitle: "Sovi.AI",
  },
  {
    slug: "sovi",
    title: "Sovi.AI",
    type: "AI product strategy · Interaction design",
    period: "Dreame Technology · 2025",
    homeLine: "A document-learning workflow shipped from product brief to early repeat use.",
    role: "AI Product Manager Intern · Feature Owner",
    focus: "PDF learning · Launch iteration",
    tools: "Research · Flows · PRD · Analytics",
    heroLine: "Designing an AI study loop around the document—not an empty chat box.",
    externalUrl: "https://mysovi.ai/study",
    media: [
      {
        src: "/work/sovi/scan.webp",
        fullSrc: "/work/sovi/scan.png",
        alt: "Official Sovi.AI product visual showing question capture and scan processing",
        eyebrow: "01 · Capture",
        title: "Meet the material",
        caption: "Start from the student’s own question or learning material.",
        kind: "phone",
      },
      {
        src: "/work/sovi/solve.webp",
        fullSrc: "/work/sovi/solve.png",
        alt: "Official Sovi.AI product visual showing a structured step-by-step explanation",
        eyebrow: "02 · Explain",
        title: "Structure the answer",
        caption: "Step-by-step output makes the reasoning scannable and actionable.",
        kind: "phone",
      },
      {
        render: "sovi-study-flow",
        alt: "Flow diagram based on Sovi.AI's public AI Study feature showing supported source materials and study outputs",
        eyebrow: "03 · Study",
        title: "Work from your files",
        caption: "PDF and document tools create a reusable learning workspace.",
        kind: "diagram",
      },
    ],
    summaryFacts: [
      { label: "Problem", text: "Generic upload-and-chat products leave students to invent the learning workflow and judge grounding themselves." },
      { label: "Decision", text: "Make parsing status, document structure, grounded answers, and follow-up questions one guided loop." },
      { label: "Outcome", text: "Smart PDF Parsing moved from product brief to a shipped commercial workflow." },
    ],
    processArtifact: {
      title: "Design for the next question.",
      caption: "A useful first answer should make the second question easier—and give the team a signal of repeat value.",
      steps: ["Upload", "Parse", "Orient", "Ask", "Follow up"],
      visual: "learning",
    },
    metrics: [
      { value: "0→1", label: "feature concept to launch" },
      { value: ">50%", label: "users tried it in two weeks" },
      { value: "3+", label: "follow-ups per session" },
    ],
    scopeNote: "Team-built commercial product. Metrics are directional early internal telemetry recorded during the internship, not independently audited results.",
    nextSlug: "liberata",
    nextTitle: "Liberata",
  },
  {
    slug: "liberata",
    title: "Liberata",
    type: "Discovery UX · Product engineering · Identity",
    period: "2025",
    homeLine: "A lower-friction path from scholarly discovery to verified researcher identity.",
    role: "Full-Stack Engineer · Auth & Discovery",
    focus: "Progressive access · Search",
    tools: "Next.js · Supabase · ORCID",
    heroLine: "Let researchers experience the platform’s value before asking them to sign in.",
    externalUrl: "https://liberata.info/",
    media: [
      {
        src: "/work/liberata/literature-browse.webp",
        fullSrc: "/work/liberata/literature-browse.png",
        alt: "Liberata literature browsing interface with fielded search and paper results",
        eyebrow: "01 · Discover",
        title: "Browse before commitment",
        caption: "Real literature gives first-time visitors a reason to continue.",
        kind: "desktop",
      },
      {
        src: "/work/liberata/peer-review.webp",
        fullSrc: "/work/liberata/peer-review.png",
        alt: "Liberata peer review product interface",
        eyebrow: "02 · Participate",
        title: "Reveal deeper actions",
        caption: "Identity appears when a durable researcher action needs it.",
        kind: "desktop",
      },
      {
        src: "/work/liberata/replication.webp",
        fullSrc: "/work/liberata/replication.png",
        alt: "Liberata replication workflow interface",
        eyebrow: "03 · Contribute",
        title: "Keep one product language",
        caption: "Discovery and contribution share a coherent navigation system.",
        kind: "desktop",
      },
    ],
    summaryFacts: [
      { label: "Problem", text: "An identity wall asked visitors to understand a new publishing model before they could experience its value." },
      { label: "Decision", text: "Let guests browse first, then introduce ORCID at the first identity-dependent action." },
      { label: "Outcome", text: "A coherent path across guest discovery, researcher identity, and member participation." },
    ],
    processArtifact: {
      title: "Separate activity from authentication.",
      caption: "A unified session layer tracks guest and member journeys without coupling analytics to the authentication schema.",
      steps: ["Guest", "Browse", "Save", "Connect ORCID", "Contribute"],
      visual: "session",
      image: {
        src: "/work/liberata/session-architecture.webp",
        fullSrc: "/work/liberata/session-architecture.png",
        alt: "Hand-drawn architecture showing Liberata guest and authenticated session tracking",
        eyebrow: "Selected process",
        title: "Guest + member session model",
        caption: "One traceable layer across progressive access states.",
        kind: "diagram",
      },
    },
    metrics: [
      { value: "3", label: "progressive access states" },
      { value: "1", label: "unified session model" },
      { value: "E2E", label: "tag search from UI to database" },
    ],
    scopeNote: "Team-built production platform. This case covers my authentication, guest access, sessions, literature discovery, saving, and tag-search work.",
    nextSlug: "dkumoves",
    nextTitle: "DKU Moves",
  },
];

export const selectedExperience = [
  { organization: "DKU Moves", role: "Product Owner · Design & Front-End", period: "2026 — present" },
  { organization: "Google Summer of Code", role: "Product, UX & Engineering Contributor", period: "2026" },
  { organization: "Dreame Technology", role: "AI Product Manager Intern", period: "2025" },
];
