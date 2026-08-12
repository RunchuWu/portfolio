export type ProjectSlug = "dkumoves" | "humanai" | "liberata";

export interface CaseStudy {
  slug: ProjectSlug;
  title: string;
  type: string;
  period: string;
  oneLiner: string;
  tags: string[];
  cover: string;
  externalUrl?: string;
  caseLede: string;
  role: string;
  focus: string;
  stack: string;
  challengeTitle: string;
  challenge: string[];
  strategyTitle: string;
  strategyIntro: string;
  flow: string[];
  principles: Array<{title:string;description:string}>;
  buildIntro: string;
  buildPoints: string[];
  architecture: string[];
  collaboration: Array<{title:string;description:string}>;
  outcome: string;
  evidence: Array<{value:string;label:string}>;
  scopeNote: string;
  nextSlug: ProjectSlug;
  nextTitle: string;
}

export const profile = {
  email: "rw312@duke.edu",
  github: "https://github.com/RunchuWu",
  linkedin: "https://www.linkedin.com/in/runchuwu",
  bio: "I’m Runchu, a Duke and DKU undergraduate who moves comfortably between product conversations, Figma decisions, and production code. I care about the small interaction choices that make complex systems feel obvious—and the technical structure that keeps those choices shippable.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dkumoves",
    title: "DKU Moves",
    type: "Product strategy · UX/UI · Full-stack product delivery",
    period: "2026 — present",
    oneLiner: "Redesigning a campus activity tracker into a community engagement loop for roughly 3,000 students, staff, and faculty.",
    tags: ["Product ownership","Interaction design","Design system","React + FastAPI"],
    cover: "",
    caseLede: "How do you turn a functional upload-and-points tool into a product people want to return to—and a system a campus team can actually operate?",
    role: "Contracted Product Owner · Design & Front-End Lead",
    focus: "Behavior change · Community engagement · Cross-platform UX",
    stack: "React · TypeScript · FastAPI · MySQL · Mobile WebView",
    challengeTitle: "The existing utility captured activity. It did not create momentum.",
    challenge: [
      "DKU Moves began as a functional campus tool centered on uploads and point collection. That model completed an administrative task, but offered little reason to explore, compete, celebrate progress, or return between submissions.",
      "The redesign had to serve a diverse campus population while staying realistic for a small implementation team. The product needed a stronger engagement model, a coherent visual language, and clean seams for a backend that was still being finalized.",
    ],
    strategyTitle: "Design the loop before designing the screens.",
    strategyIntro: "I reframed the product around a repeatable participation loop. Every feature had to either reduce the effort of logging activity, make progress legible, or turn individual movement into campus-level motivation.",
    flow: ["Move","Log proof","Earn points","Join challenges","Compare progress","Redeem + share"],
    principles: [
      {title:"Progress before promotion",description:"The home screen leads with a user’s points, distance, streak, and active challenge—not announcements or inventory."},
      {title:"Community at multiple scales",description:"Personal history, residential challenges, and campus leaderboards let users participate without a single definition of fitness."},
      {title:"Trust through explicit states",description:"Estimated points, pending approval, available stock, and joined challenges make system status visible instead of mysterious."},
    ],
    buildIntro: "I evolved the early prototype into a connected product system: responsive enough for a phone-first workflow, explicit enough for operational review, and structured around real authentication, activity, ranking, reward, and profile data.",
    buildPoints: [
      "Built reusable cards, navigation, activity selectors, progress treatments, empty states, and action patterns from shared UI foundations.",
      "Implemented dashboard, multi-step activity logging, rankings, rewards, generated share cards, profile, privacy, and authentication flows.",
      "Connected the React client to a FastAPI service layer and legacy campus data model while preserving clear product-facing state boundaries.",
      "Designed validation, loading, success, error, inventory, privacy, pending, and empty states—not only ideal screenshots.",
    ],
    architecture: ["Responsive React client","Feature modules","Reusable UI primitives","Typed API client","FastAPI services","Legacy MySQL integration"],
    collaboration: [
      {title:"Scope the reviewable MVP",description:"I translated broad ambitions—community, gamification, rewards—into a navigable product shell the team could critique before backend dependencies were final."},
      {title:"Give engineering clean seams",description:"Business logic lives behind shared models and a service interface, making the integration contract visible to the backend collaborator."},
      {title:"Make decisions legible",description:"The product loop, state model, and token system give product and engineering teams concrete artifacts to discuss instead of subjective screen feedback."},
    ],
    outcome: "The result is a working phone-first product that carries the redesigned participation loop across daily progress, logging, sharing, rewards, campus rankings, and personal history. The current workflow is implemented against real product services rather than presented only as a prototype.",
    evidence: [
      {value:"9",label:"product surfaces implemented"},
      {value:"1",label:"shared token + component system"},
      {value:"~3K",label:"campus audience the redesign serves"},
    ],
    scopeNote: "The interface captures in this case study come from the implemented DKUMoves workflow. Personal data, privileged controls, and internal test labels were anonymized for portfolio use. The case does not claim measured behavior change without a formal live evaluation.",
    nextSlug: "humanai",
    nextTitle: "HumanAI Trust Calibration Engine",
  },
  {
    slug: "humanai",
    title: "HumanAI Trust Calibration Engine",
    type: "AI research product · UX architecture · Full-stack engineering",
    period: "Google Summer of Code 2026",
    oneLiner: "Turning a complex behavioral study into a clear participant experience and a controllable research platform.",
    tags: ["Human-AI interaction","Research UX","System design","Next.js"],
    cover: "/work/humanai-participant.jpg",
    caseLede: "How do you design an experiment that feels simple to participants while preserving the control, traceability, and flexibility researchers need behind the scenes?",
    role: "GSoC Contributor · Product, UX & Engineering",
    focus: "Trust calibration · Experiment UX · Research tooling",
    stack: "Next.js · TypeScript · JSONL · CSV · Playwright",
    challengeTitle: "Scientific control and participant clarity pull in opposite directions.",
    challenge: [
      "The platform studies whether humanlike and authority-signaling interface cues change how people follow or override AI recommendations in transportation and drone-operations scenarios.",
      "Participants need a focused, comprehensible task. Researchers need configurable conditions, stable identities, inspectable cue metadata, reproducible exports, and fast ways to review every experiment state. Mixing those needs into one interface would compromise both.",
    ],
    strategyTitle: "Separate the experience from the control plane.",
    strategyIntro: "I designed two connected surfaces around a single experiment model: a quiet participant flow that reveals information in deliberate stages, and a researcher workspace that exposes configuration, navigation, and data without contaminating the study.",
    flow: ["Consent","Comprehend","Practice","Review situation","Inspect evidence","Follow or override","Debrief"],
    principles: [
      {title:"Stage cognitive load",description:"Situation, evidence, and recommendation appear in sequence so participants understand the decision instead of scanning a dense dashboard."},
      {title:"Keep decisions visually neutral",description:"Follow AI and choose opposite receive equal visual weight, reducing interface-induced preference."},
      {title:"Design for reversibility",description:"Participants can revisit trials and revise answers while the append-only event history preserves what changed."},
    ],
    buildIntro: "The interface is backed by a modular condition and event architecture. Product decisions—what a researcher can vary, what a participant can see, what an analyst can recover—are represented directly in types, schemas, and routes.",
    buildPoints: [
      "Implemented control, industry-set, and user-set cue-source conditions with five independently configurable humanlike cue modules.",
      "Built the complete flow from consent and comprehension checks to practice, ten main trials, review, and debrief.",
      "Instrumented task-shown and decision events with participant, session, condition, trial, recommendation, ground truth, follow/override, correctness, cue, and latency data.",
      "Created researcher-only condition forcing, screen jumping, event previews, run summaries, and filtered JSON/CSV export.",
    ],
    architecture: ["Participant flow","Condition + cue engine","Typed event schema","Append-only run store","Researcher controls","Analysis-ready export"],
    collaboration: [
      {title:"Respond to a changing brief",description:"After mentor feedback, I migrated the study from hiring decisions to transportation and drone operations without discarding the core assignment and logging architecture."},
      {title:"Translate theory into UI variables",description:"I mapped Human–System–Fit dimensions to concrete interface cues while keeping unapproved research decisions out of the participant runtime."},
      {title:"Document decisions, not just code",description:"Plans, schemas, stimulus matrices, walkthroughs, QA reports, and a decision tracker made the platform reviewable by people who did not build it."},
    ],
    outcome: "The final GSoC work product is a complete, documented experiment platform ready for controlled internal review and extension. The participant flow, researcher tools, exports, accessibility behavior, and deterministic QA all passed the project’s final verification chain.",
    evidence: [
      {value:"3",label:"configurable cue-source conditions"},
      {value:"5",label:"independent humanlike cue modules"},
      {value:"10",label:"fixed operational decision trials"},
    ],
    scopeNote: "The walkthrough and synthetic QA validate implementation behavior and data integrity. They are not presented as a real-participant study or as evidence for a scientific hypothesis.",
    nextSlug: "liberata",
    nextTitle: "Liberata",
  },
  {
    slug: "liberata",
    title: "Liberata",
    type: "Academic publishing · Product engineering · Full-stack",
    period: "2025",
    oneLiner: "Reducing the identity and discovery barriers between a first-time visitor and useful scholarly work.",
    tags: ["Product architecture","ORCID OAuth","Discovery UX","Next.js"],
    cover: "/work/liberata-logo.png",
    externalUrl: "https://liberata.info/",
    caseLede: "How do you let researchers experience the value of an academic platform before asking them to understand a new publishing system—or create another account?",
    role: "Full-Stack Engineer · Authentication & Discovery",
    focus: "Progressive access · Researcher identity · Literature discovery",
    stack: "Next.js 15 · TypeScript · Supabase · PostgreSQL · ORCID",
    challengeTitle: "The product had value behind an identity wall.",
    challenge: [
      "Liberata is an open-access publishing platform with incentivized quality controls. Its product model asks researchers to learn new ideas about contribution shares, peer review, replication, and academic capital.",
      "Requiring authentication before discovery added another unfamiliar decision at the very start. The experience needed to support curious visitors, ORCID-verified researchers, and returning members without fragmenting the platform into three unrelated products.",
    ],
    strategyTitle: "Let value earn the sign-in.",
    strategyIntro: "I designed the access model as a progression rather than a gate: make literature genuinely browsable, introduce identity only when it unlocks a meaningful action, and preserve one coherent session model underneath.",
    flow: ["Arrive","Browse as guest","Search by field or tag","Evaluate a paper","Save or contribute","Connect ORCID"],
    principles: [
      {title:"Value before commitment",description:"Guest browsing lets a first-time visitor understand the product through real scholarly content before deciding whether to connect an identity."},
      {title:"Identity at the right moment",description:"ORCID is introduced as the path to durable, researcher-specific actions—not as an unexplained obstacle on the landing page."},
      {title:"Search in researcher language",description:"Fielded queries and partial tag matching support the ways people actually look for literature: title, author, institution, topic, or a combination."},
    ],
    buildIntro: "The UX work was inseparable from the platform architecture. Guest and verified experiences had to share navigation and discovery behavior while authentication, sessions, search, and saved state remained secure and traceable.",
    buildPoints: [
      "Implemented a three-tier access model spanning guest browsing, ORCID-connected researchers, and registered Liberata members.",
      "Built and deployed the ORCID OAuth flow, callback handling, authentication state, and supporting troubleshooting documentation.",
      "Unified guest and ORCID activity under a typed session model so behavior could be analyzed without conflating identity states.",
      "Delivered literature browsing, manuscript saving, and end-to-end tag search with partial matching, safe topic handling, API changes, and database migrations.",
    ],
    architecture: ["Next.js product surfaces","Auth provider + middleware","ORCID OAuth","Unified session tracking","Literature search APIs","Supabase + PostgreSQL RPCs"],
    collaboration: [
      {title:"Translate policy into product states",description:"I turned abstract access requirements into concrete guest, connected, and member capabilities the product and engineering teams could review."},
      {title:"Own the full interaction contract",description:"Search and authentication changes crossed interface components, route handling, API validation, database functions, and deployment configuration."},
      {title:"Make integration knowledge reusable",description:"Authentication, guest-mode, session, deployment, troubleshooting, and public test-plan documentation reduced hidden context for later contributors."},
    ],
    outcome: "My contribution established a lower-friction entry path into Liberata and the technical foundation connecting discovery behavior to researcher identity. Visitors could browse first, search more precisely, and encounter ORCID when an authenticated action made its value clear.",
    evidence: [
      {value:"3",label:"coherent access states"},
      {value:"1",label:"unified guest + ORCID session model"},
      {value:"E2E",label:"tag search from UI to database"},
    ],
    scopeNote: "Liberata is a team-built production platform. This case study is limited to the authentication, guest access, session tracking, literature browsing, saving, and tag-search work documented in my contributions; it does not claim ownership of the full publishing, peer-review, or replication product.",
    nextSlug: "dkumoves",
    nextTitle: "DKU Moves",
  },
];

export const experience = [
  {company:"Dreame Technology",role:"AI Product Manager Intern",period:"2025",detail:"Competitive research across 50+ AI tools; translated user needs into workflows, prototypes, requirements, launch criteria, and post-launch review."},
];
