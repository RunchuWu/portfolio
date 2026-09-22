import type { MediaItem } from "./content";

export type ResearchSlug = "speech" | "humanai";

export const researchProjects = [
  {
    slug: "speech" as const,
    title: "Speech Language Model Mitigation & Failure Diagnosis",
    area: "Responsible AI · Speech interaction",
    description: "Mitigating speech language model failures in safety, privacy and fairness, and investigating how implicit cues connect to policies and responses.",
    status: "Mitigation experiments · Failure diagnosis",
    role: "Independent study with faculty supervision",
    cover: "/research/speech/six-condition-heatmap.png",
    coverWidth: 2046,
    coverHeight: 878,
    coverAlt: "Six-condition awareness results for Qwen3-Omni and runtime-corrected Kimi-Audio",
    coverCaption: "Formal793 · benchmark awareness",
  },
  {
    slug: "humanai" as const,
    title: "Human–AI trust calibration",
    area: "Human–AI interaction · GSoC 2026",
    description: "Making humanness a controllable study variable. An open-source platform for examining how people weigh AI advice.",
    status: "Platform complete · Human study currently running",
    role: "GSoC contributor · Cue, dataset & platform design",
    cover: "/research/trust/persona-modes.png",
    coverWidth: 2046,
    coverHeight: 1165,
    coverAlt: "Assistant, Alex and Sarah presenting the same numerical suggestion in cold, neutral and warm interfaces",
    coverCaption: "One suggestion · three interface modes",
  },
];

export const researchFigures: Record<string, MediaItem & { width: number; height: number }> = {
  pipeline: {
    src: "/research/speech/pipeline.png", kind: "diagram", eyebrow: "Methodology",
    width: 2047, height: 837,
    title: "The implemented probe, router and policy pipeline",
    alt: "A waveform feeds an acoustic probe and caption-based router, whose proposals select a policy bundle for a text-only answer generator",
    caption: "Probe and LLM routing implementation from the interview deck. Acoustic cues and a free-form caption inform expert-policy selection and answer generation. This figure shows the safety/privacy task subset; the external evaluator scores the final output.",
  },
  heatmap: {
    src: "/research/speech/six-condition-heatmap.png", kind: "diagram", eyebrow: "Main result",
    width: 2046, height: 878,
    title: "Six conditions, two models, four tasks",
    alt: "Aware/All heatmaps: task-macro scores for C0 through C5 are 29.5, 29.2, 86.2, 88.1, 77.4, 71.8 percent for Qwen and 26.3, 26.3, 57.6, 51.5, 53.1, 47.1 percent for corrected Kimi",
    caption: "Formal793: 793 matched items per model and condition. Aware/All = (WAR + RtA) / all scored responses; the task macro weights four tasks equally. Kimi uses corrected runtime outputs. These automatic labels measure benchmark awareness, not validated safety outcomes.",
  },
  modes: {
    src: "/research/trust/persona-modes.png", kind: "desktop", eyebrow: "Methodology",
    width: 2046, height: 1165,
    title: "The same suggestion, expressed with different cues",
    alt: "Cold Assistant, neutral Alex and warm Sarah interfaces each suggest 33 people for the same practice task",
    caption: "Three interface modes from the interview deck. This example keeps the numerical suggestion at 33 people while varying the agent’s appearance, framing and language. It demonstrates a controlled interface comparison, not a participant result.",
  },
  controls: {
    src: "/research/trust/cue-controls.png", kind: "desktop", eyebrow: "My contribution",
    width: 676, height: 1374,
    title: "Making cues configurable",
    alt: "Researcher sliders for agent name, tone, avatar and personality, each with five levels from 0 to 100",
    caption: "A detail of the researcher controls. Each cue has five explicit levels; low, medium and high humanness presets combine cues into study modes.",
  },
  catalog: {
    src: "/research/trust/cue-catalog.png", kind: "desktop", eyebrow: "My contribution",
    width: 2046, height: 1082,
    title: "An inspectable cue catalog",
    alt: "Five-level definitions for six cues: agent name, tone, avatar, personality, framing and confidence",
    caption: "The catalog makes all six cue definitions inspectable across levels 0, 25, 50, 75 and 100. The agent’s expressed confidence is a manipulated cue; the participant’s confidence is recorded separately.",
  },
  tasks: {
    src: "/research/trust/task-list-snapshot.png", kind: "desktop", eyebrow: "Dataset",
    width: 514, height: 686,
    title: "Everyday judgments and forecasts",
    alt: "Task menu with two practice entries and twelve everyday judgment tasks",
    caption: "Task-list interface from the interview deck: 12 main tasks + 2 practice entries. The tasks cover everyday judgments and forecasts, including shared resources, privacy, prices and community activities.",
  },
};
