# Portfolio design principles

Keep this portfolio restrained, readable and simple. Apply these preferences consistently across projects; the user's latest explicit instructions take precedence.

- The homepage research and project entries contain only a cover image and title. Keep detailed descriptions on the project pages.
- Name the two homepage sections “Research” and “Projects”; use “Projects” in the navigation too, without “Other” or “Selected”.
- Show the author's name once in the homepage introduction. Do not repeat it in the header or footer, or add a small field-of-study label above it.
- Keep contact links as accessible icons below the introduction, with descriptive accessible names and hover labels. Do not duplicate a Contact section at the bottom.
- On selected product-project pages, put the project title first, followed directly by role, Tools and a single product link. Use readable text around 16–17 px, not tiny metadata labels.
- A short Project Overview may use Problem, Decision and Outcome as inline labels. Use normal document flow rather than cards, grids, boxes or separate metadata panels.
- Below that, show the original project images without captions, promotional headings, inspection buttons or click-to-enlarge interactions. Preserve aspect ratios and descriptive alt text. Do not stack or overlap screenshots decoratively.
- Do not add Scope & Evidence panels, process/loop sections, large metric cards, or decorative statistics to selected product-project pages.
- DKU Moves ends with a plain “3K users” line and the DKU Athletics website link. Do not add other closing calls to action.
- Liberata is simpler: show its title, Project Overview and Selected Interfaces only. Omit role, Tools, introductory metadata, the session-architecture sketch, metrics and closing links.
- Avoid page-end Get in touch, All research & projects, Next project and Back to top links. The primary navigation is sufficient.
- Research detail pages retain the requested RQ, Methodology, My Contribution, Dataset and Main Result structure. Necessary scientific captions and interpretation limits belong with their evidence; do not strip them simply to match product-project pages.
- Favor removing redundant text and controls over inventing new headings or components. Do not reintroduce removed elements during later redesigns.

## Validation

Use `npm run lint` for TypeScript checks and `GITHUB_ACTIONS=true npm run build` for the GitHub Pages `/portfolio/` base path. Verify relevant pages and image loading when changing their layout. The existing GitHub Pages workflow deploys pushes to `main`.
