# Runchu Wu — HCI & Responsible AI

A restrained research portfolio featuring speech language model mitigation and failure diagnosis, human–AI trust calibration, and cognitive state monitoring, followed by selected product and engineering work.

## Content

- `src/content.ts` contains contact details and existing project materials.
- `src/App.tsx` contains the research overview and page templates.
- `src/research.ts` contains research metadata and figure captions; `src/ResearchPage.tsx` presents RQ, Methodology, My Contribution, Dataset and Main Result.
- Speech LM results report automatic benchmark awareness and the limits of the C0–C5 interface interventions. They do not establish real-world safety or identify internal model stages.
- HumanAI documents completed GSoC infrastructure and the V2 dataset rebuild. The human study is currently running; no behavioral finding is claimed.
- Cognitive monitoring remains a conceptual research-area overview.
- `docs/research-assets.md` records figure provenance and known version differences.
- Email, GitHub, LinkedIn, and Twitter / X (@runchuwu) appear once, below the introduction. The Contact navigation link points to this row.
- Homepage research and project entries show only an image and title; descriptions and evidence remain on the detail pages.

## Project pages

- `#/research/speech` — Speech Language Model Mitigation & Failure Diagnosis
- `#/research/humanai` — Human–AI trust calibration (`#/work/humanai` remains an alias)
- `#/work/dkumoves` — DKU Moves
- `#/work/liberata` — Liberata
- `#/work/sovi` — Sovi.AI

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

GitHub Pages builds with the existing `/portfolio/` base path. Run `GITHUB_ACTIONS=true npm run build` to validate that deployment configuration locally.
