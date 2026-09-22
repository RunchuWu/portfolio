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
  overview: string;
  outcome: string;
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
  twitter: "https://x.com/runchuwu",
  bio: "I study how AI systems behave and how people interact with them, with a focus on speech language model safety, human–AI trust calibration, and cognitive state monitoring.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dkumoves",
    overview: "DKU Moves helps students, staff and faculty record activities, follow their progress and take part in campus challenges. As product owner and design and front-end lead, I worked on activity logging, sharing, rankings and rewards.",
    outcome: "DKU Moves now serves around 3,000 students, staff and faculty across the university, bringing activity logging, campus rankings and rewards together in one place.",
    title: "DKU Moves",
    type: "Product strategy · UX/UI · Full-stack",
    period: "2026 — present",
    homeLine: "A campus activity product that turns movement into visible community momentum.",
    role: "Product Owner · Design · Frontend Lead",
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
        title: "Daily progress",
        caption: "Today's activity, streak, points and campus rank sit together on the home screen, giving people a quick view of their progress.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/log-activity.webp",
        fullSrc: "/work/dkumoves/log-activity.png",
        alt: "DKU Moves activity logging workflow with sport selection",
        eyebrow: "02 · Log",
        title: "Recording an activity",
        caption: "The logging flow starts with choosing a sport, then guides people through recording their activity.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/share-anonymized.webp",
        fullSrc: "/work/dkumoves/share-anonymized.png",
        alt: "DKU Moves generated activity sharing card",
        eyebrow: "03 · Share",
        title: "Sharing a check-in",
        caption: "A completed activity becomes a shareable card, so people can bring their progress into conversations with others.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/market-anonymized.webp",
        fullSrc: "/work/dkumoves/market-anonymized.png",
        alt: "DKU Moves rewards marketplace showing point balance and inventory",
        eyebrow: "04 · Market",
        title: "Using activity points",
        caption: "The marketplace brings the point balance and available rewards together, making it clear what people can redeem.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/campus-ranking.webp",
        fullSrc: "/work/dkumoves/campus-ranking.png",
        alt: "DKU Moves campus activity pulse and group rankings",
        eyebrow: "05 · Campus",
        title: "Campus activity",
        caption: "Campus rankings place individual activity alongside the wider community, with a view of how different groups are participating.",
        kind: "phone",
      },
      {
        src: "/work/dkumoves/profile-anonymized.webp",
        fullSrc: "/work/dkumoves/profile-anonymized.png",
        alt: "DKU Moves profile with personal progress and activity history",
        eyebrow: "06 · Profile",
        title: "Activity history",
        caption: "The profile brings past check-ins and personal progress together, so people can look back beyond today's activity.",
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
    slug: "sovi",
    overview: "Sovi.AI helps students work through questions and study materials. During my product management internship at Dreame Technology, I shaped the Smart PDF Parsing workflow, from uploading a document to asking follow-up questions grounded in its content.",
    outcome: "Smart PDF Parsing shipped as part of Sovi.AI’s commercial product. My work took the feature from its initial brief through workflow design and launch.",
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
        title: "Capturing a question",
        caption: "This view from Sovi.AI's public product shows how a photographed question enters the study workflow.",
        kind: "phone",
      },
      {
        src: "/work/sovi/solve.webp",
        fullSrc: "/work/sovi/solve.png",
        alt: "Official Sovi.AI product visual showing a structured step-by-step explanation",
        eyebrow: "02 · Explain",
        title: "Working through an explanation",
        caption: "Sovi.AI presents answers as a sequence of steps. These public product screens provide context for my work on the document-learning workflow.",
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
    overview: "Liberata connects literature discovery with research participation. As a full-stack engineer, I worked on browsing, search and researcher identity, allowing visitors to explore papers before signing in with ORCID to save or contribute.",
    outcome: "Visitors can explore literature before creating an account, then connect their ORCID identity when they are ready to save or contribute. The browsing and sign-in work supports this gradual path into research participation.",
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
        title: "Browsing literature",
        caption: "Visitors can search and explore papers before signing in. Researcher identity is introduced when they want to save or contribute.",
        kind: "desktop",
      },
      {
        src: "/work/liberata/peer-review.webp",
        fullSrc: "/work/liberata/peer-review.png",
        alt: "Liberata peer review product interface",
        eyebrow: "02 · Participate",
        title: "Peer review",
        caption: "The peer-review area gives researchers a place to explore review activity within the same navigation as literature discovery.",
        kind: "desktop",
      },
      {
        src: "/work/liberata/replication.webp",
        fullSrc: "/work/liberata/replication.png",
        alt: "Liberata replication workflow interface",
        eyebrow: "03 · Contribute",
        title: "Replication",
        caption: "The replication area carries the browsing layout into research participation, with separate views for the marketplace, papers and assignments.",
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
