# Portfolio design principles

Keep this portfolio restrained, readable and simple. Apply these preferences consistently across projects; the user's latest explicit instructions take precedence.

- The homepage research and project entries contain only a cover image and title. Keep detailed descriptions on the project pages.
- Order the homepage sections and navigation as About, Research and Projects; use “Projects” without “Other” or “Selected”.
- About uses a portrait on the left with a modestly sized author name underneath, and a wider introduction area on the right. Stack these on mobile. Keep the introduction in a few editable paragraphs about background, research and project experience.
- Frame the About portrait in a circle with the face centered and some background visible, using a reversible CSS crop. Center “Runchu (Rachel) Wu” beneath the portrait. Major section headings use an expressive but restrained italic serif in dark green, with consistent hierarchy above the plain body text.
- Show the author's name once below the About portrait. Do not repeat it in the header or footer, or add a small field-of-study label above it.
- Keep contact links as accessible icons below the name, with descriptive accessible names and hover labels. Do not duplicate a Contact section at the bottom.
- On selected product-project pages, put the project title first, followed directly by role, Tools and a single product link. Use readable text around 16–17 px, not tiny metadata labels.
- Keep project detail pages organized into a few substantial sections: Project Overview, Selected Interfaces, and Outcome (or Current Activity when appropriate). Concise means clear hierarchy and restrained prose, not stripping out the story or all explanation.
- Use a short overview explaining the project and the author's contribution. Show original interface images with a short descriptive heading and one or two useful sentences beside each image on desktop, stacked below it on mobile. No tiny numbered labels, separate cards, inspection buttons or click-to-enlarge interactions. Preserve aspect ratios and descriptive alt text; do not overlap screenshots.
- Alternate the image and text sides on desktop: image left, then image right, repeating down the page. Keep image first and text below on mobile.
- Do not add Scope & Evidence panels, process/loop sections, large metric cards, or decorative statistics to selected product-project pages.
- Write outcomes as complete, grounded sentences rather than standalone numbers or metric tiles. DKU Moves should explain that it serves around 3,000 students, staff and faculty, with the DKU Athletics website link below.
- Liberata keeps a minimal title header without role, Tools or extra introductory metadata, then follows the same overview, captioned interfaces and outcome structure. Omit the session-architecture sketch and metric tiles.
- Avoid page-end Get in touch, All research & projects, Next project and Back to top links. The primary navigation is sufficient.
- Research detail pages retain the requested RQ, Methodology, My Contribution, Dataset and Main Result structure. Necessary scientific captions and interpretation limits belong with their evidence; do not strip them simply to match product-project pages.
- Remove redundant text and controls, but preserve the few section headings and adjacent explanations that make each project's progression understandable. Do not interpret requests for simplicity as requests for an image-only page.

## Validation

Use `npm run lint` for TypeScript checks and `GITHUB_ACTIONS=true npm run build` for the GitHub Pages `/portfolio/` base path. Verify relevant pages and image loading when changing their layout. The existing GitHub Pages workflow deploys pushes to `main`.
