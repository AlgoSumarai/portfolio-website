# Portfolio audit and redesign plan

Reviewed 20 September 2026, before implementation.

## Sources and factual decisions

- Primary source: supplied `Sennelo_Mulanga_CV.pdf`, both pages, including embedded links.
- Existing deployed portfolio and local React source agree on TheRad dates (Sep 2025–Apr 2026), degree dates (Feb 2021–Jul 2025), and contact details.
- CV positioning: Junior Software Engineer, backend and full-stack development, Johannesburg. Do not invent current employment or remote availability.
- ChessLens is absent from the old portfolio but present in the CV. Its public README, worker implementation and SignalR hub verify the architecture. Feature it first; explicitly describe it as in development/local deployment, not a released service.
- AlgoDojo README, player store and live Bubble Sort playground verify pure algorithm frames, Zustand playback and SVG rendering. Next-step interaction checked in the live site. Authentication is deferred; do not claim it exists.
- KitchenBuddy controller, Program.cs and DbContext verify CRUD, async OpenRouter integration, EF Core, SQLite in development and SQL Server configuration elsewhere. README claims about retries/schema validation are not supported by the inspected controller, so omit them. JWT configuration exists, but do not describe all recipe routes as protected. Do not imply production scalability was measured.
- SnakeAI agent.py/model.py verify state encoding, replay memory and Q-learning. Keep as additional learning work without performance claims.
- OJGroceries: CV-backed academic work with existing video link. Rhoo is omitted because it is absent from the current CV and no project evidence was linked.

## Audit

- Recruiter hierarchy: long introduction repeated in Summary; education precedes work; strongest project absent; projects hidden in timed carousel; no resume CTA.
- Content: text-heavy experience, generic project summaries, no architecture/tradeoffs, duplicated Python logo, C++ logo not supported by latest CV.
- Visuals: pixel typography and decorative gradients distract; oversized discipline panel wastes first-screen space. Preserve personal graduation portrait, dark palette, direct contact, and accurate work history.
- Accessibility: empty anchor destinations, logo link has no accessible name, technology images labelled “Not Found,” menu lacks expanded state, timed carousel lacks pause, custom scroll ignores reduced-motion preference.
- SEO: generic “SMG” title, no description/canonical/social metadata, no sitemap, client-only HTML.
- Performance: 1.5 MB base64 SVG portrait, custom fonts, unnecessary router for a single page, continuous carousel timer. No measured Lighthouse score assumed.
- Mobile risk: dense paragraph and oversized typography; verify final layout at phone/tablet/laptop widths rather than carrying these styles forward.

## Implementation plan

1. Keep React/Vite and GitHub Pages base path. Use a single data source and reusable section/project components.
2. Hero: name, junior backend/full-stack positioning, core technologies, Johannesburg, projects/resume/contact links. Compact evidence snapshot: TheRad, 26 maths games, BSc IT.
3. Three featured projects: ChessLens, AlgoDojo, KitchenBuddy. Native expandable case studies with overview, contribution, requirements, architecture, decisions, challenges, capabilities, learning focus and honest limitations. Actual UI image where available; explanatory diagrams labelled as such elsewhere.
4. Additional projects, experience, evidence-linked skill groups, education/engineering approach, direct recruiter contact.
5. Restrained ink/navy, warm white and teal; readable system fonts; visible focus; semantic headings; native anchor navigation and disclosures; responsive spacing.
6. Prerender React at build time for crawlable/no-JavaScript content. Add metadata, Person structured data, sitemap, robots, social image, and downloadable original CV.
7. Validate build/lint, generated HTML and local asset/anchor integrity, browser interactions and responsive screenshots. Document any external verification limitations.

## Source links

- https://github.com/AlgoSumarai/chess-lens
- https://github.com/AlgoSumarai/chess-lens/blob/main/src/ChessLens.Worker/ImportWorker.cs
- https://github.com/AlgoSumarai/chess-lens/blob/main/src/ChessLens.Api/ProgressHub.cs
- https://github.com/AlgoSumarai/algo-dojo
- https://github.com/AlgoSumarai/algo-dojo/blob/main/src/store/player-store.ts
- https://algo-dojo-bice.vercel.app/playground/bubble-sort
- https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Controllers/RecipeController.cs
- https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Program.cs
- https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Data/KitchenBuddyDbContext.cs
- https://github.com/AlgoSumarai/snake-ai-pytorch
- https://youtu.be/ZOF0NhomNN0
