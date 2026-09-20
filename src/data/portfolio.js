export const base = "/portfolio-website/";
export const profile = {
  name: "Sennelo Mulanga Gundo",
  email: "mgsennelo@gmail.com",
  phone: "+27697949195",
  github: "https://github.com/AlgoSumarai",
  linkedin: "https://linkedin.com/in/mulangasennelo",
  resume: `${base}Sennelo_Mulanga_CV.pdf`,
};

export const projects = [
  {
    id: "chess-lens",
    number: "01",
    name: "ChessLens",
    category: "FULL-STACK · ASYNC SYSTEMS",
    status: "In development",
    tagline: "From a finished game to a focused practice plan.",
    description:
      "A chess analysis platform that imports games, runs Stockfish analysis, and turns recurring mistakes into personalised practice.",
    stack: ["C# / .NET", "PostgreSQL", "React", "TypeScript", "Docker"],
    highlights: [
      "Separate Stockfish worker for background analysis",
      "Live progress and evaluation visualisations",
      "Evidence-backed insights and spaced puzzle review",
    ],
    repo: "https://github.com/AlgoSumarai/chess-lens",
    overview:
      "Game analysis is most useful when it leads to something a player can practise. ChessLens connects imported PGN games, legal replay, engine evaluations and recurring-weakness insights in one workflow.",
    contribution:
      "Built the full-stack platform, including the .NET backend, React interface, database-backed analysis workflow and personalised puzzle practice.",
    requirements: [
      "Import and persist completed games with legal move replay.",
      "Run engine analysis outside the HTTP request and report progress.",
      "Link insights and practice positions back to the original games.",
    ],
    architecture: [
      "React / TypeScript",
      "ASP.NET Core API",
      "PostgreSQL",
      ".NET worker / Stockfish",
    ],
    architectureNote:
      "The API and worker share durable database state. A SignalR hub sends owner-scoped progress to the browser; HTTP requests reconcile state when notifications are unavailable.",
    decisions: [
      [
        "Separate engine work",
        "A background worker processes imports, analysis, insights and puzzles, keeping long-running engine work outside request handlers.",
      ],
      [
        "Traceable practice",
        "Weakness snapshots retain supporting positions and sample sizes. Puzzles validate tactical objectives and alternatives with Stockfish.",
      ],
    ],
    challenge:
      "Keeping the interface consistent while analysis runs asynchronously. Versioned progress updates, cancellation barriers and HTTP reconciliation address stale or interrupted work.",
    capabilities:
      "Supports PGN imports, legal replay and variations, live evaluations, recurring-weakness insights, puzzle hints, attempt tracking and spaced review scheduling.",
    learning:
      "Engineering focus: durable background processing, cancellation, ownership boundaries and the relationship between analysis evidence and useful feedback.",
    limitations:
      "Local Docker deployment; not a public live service. Provider imports and final release checks remain outstanding.",
    evidence: [
      [
        "Implementation & verification",
        "https://github.com/AlgoSumarai/chess-lens/blob/main/docs/verification.md",
      ],
      [
        "Background worker",
        "https://github.com/AlgoSumarai/chess-lens/blob/main/src/ChessLens.Worker/ImportWorker.cs",
      ],
    ],
  },
  {
    id: "algo-dojo",
    number: "02",
    name: "AlgoDojo",
    category: "FRONTEND · ALGORITHMS",
    status: "Live application",
    tagline: "Make the algorithm visible. Then step through it.",
    description:
      "An interactive learning platform for exploring sorting, searching, trees, graphs and data structures through reusable visualisations.",
    stack: ["Next.js", "TypeScript", "React", "Zustand", "SVG"],
    highlights: [
      "Pure algorithms emit reusable visualisation frames",
      "Shared playback, stepping, scrubbing and speed controls",
      "MDX lessons alongside interactive playgrounds",
    ],
    repo: "https://github.com/AlgoSumarai/algo-dojo",
    demo: "https://algo-dojo-bice.vercel.app/",
    overview:
      "Static diagrams make it difficult to follow how a data structure changes. AlgoDojo lets learners inspect individual comparisons, swaps and traversal steps at their own pace.",
    contribution:
      "Designed and developed the Next.js learning platform, reusable visualisations and component-based architecture across multiple algorithm families.",
    requirements: [
      "Visualise sorting, searching, linear structures, trees and graphs.",
      "Let learners edit inputs and navigate individual execution steps.",
      "Reuse playback controls across different visual representations.",
    ],
    architecture: [
      "Pure TypeScript algorithms",
      "Typed frame sequence",
      "Zustand player store",
      "SVG scene renderers",
    ],
    architectureNote:
      "Algorithms emit frames without depending on React. The player selects a frame; FrameScene dispatches it to the appropriate renderer. Next.js routes also serve MDX lessons.",
    decisions: [
      [
        "Separate logic from rendering",
        "Pure step generators describe algorithm state; SVG renderers decide how to display it. This gives different structures a common playback contract.",
      ],
      [
        "One player, many scenes",
        "A shared Zustand store handles stepping, scrubbing, restart and bounded playback speed instead of duplicating controls for each algorithm.",
      ],
    ],
    challenge:
      "Supporting arrays, trees and graphs without making playback specific to one layout. Discriminated frame types and renderer dispatch keep scene differences separate from navigation.",
    capabilities:
      "Includes six sorting algorithms, linear and binary search, stacks, queues, lists, trees, heaps, hash maps, BFS and DFS, plus play/pause, step and timeline controls.",
    learning:
      "Engineering focus: state modelling, reusable component boundaries and making algorithm behaviour inspectable through deterministic steps.",
    limitations:
      "A learning and visualisation platform. Accounts and persistent learning progress are deferred.",
    image: `${base}images/algodojo-playground.png`,
    imageAlt:
      "AlgoDojo Bubble Sort playground showing array bars, a comparison explanation and step-by-step playback controls.",
    evidence: [
      [
        "Player implementation",
        "https://github.com/AlgoSumarai/algo-dojo/blob/main/src/store/player-store.ts",
      ],
      [
        "Explore Bubble Sort",
        "https://algo-dojo-bice.vercel.app/playground/bubble-sort",
      ],
    ],
  },
  {
    id: "kitchenbuddy",
    number: "03",
    name: "KitchenBuddy API",
    category: "BACKEND · API DESIGN",
    status: "Source available",
    tagline: "A recipe workflow, built from the API up.",
    description:
      "An ASP.NET Core backend for recipe management, relational persistence and ingredient-based recipe generation through an external AI service.",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL", "LINQ"],
    highlights: [
      "Recipe CRUD with asynchronous database access",
      "Relational user and recipe models with migrations",
      "External recipe-generation API integration",
    ],
    repo: "https://github.com/AlgoSumarai/KitchenBuddyAPI",
    overview:
      "KitchenBuddy brings recipe storage and ingredient-based suggestions behind an HTTP API, separating backend behaviour from any particular user interface.",
    contribution:
      "Designed and implemented the REST backend, recipe workflows and relational persistence using ASP.NET Core, Entity Framework and SQL.",
    requirements: [
      "Create, retrieve, update and delete recipes.",
      "Represent users and their recipes with relational constraints.",
      "Request structured recipe suggestions from a supplied ingredient list.",
    ],
    architecture: [
      "HTTP client",
      "ASP.NET Core controllers",
      "EF Core / SQL database",
      "OpenRouter / DeepSeek",
    ],
    architectureNote:
      "Controllers handle recipe requests. EF Core persists users and recipes; the generation action calls OpenRouter separately. SQLite is configured for development and SQL Server for other environments.",
    decisions: [
      [
        "Explicit relational constraints",
        "Unique email and username indexes, required recipe fields and a user-to-recipes foreign key express data rules in the model.",
      ],
      [
        "Structured generation",
        "The generation action sends ingredients to an external model and deserialises the returned JSON into recipe objects. Saving a recipe remains a separate operation.",
      ],
    ],
    challenge:
      "Connecting an external generation service to a structured API. The controller checks upstream HTTP status and deserialises responses; comprehensive schema validation and retry handling remain areas for improvement.",
    capabilities:
      "Exposes recipe CRUD, including partial updates, relational persistence, signup/login code and ingredient-based recipe generation. Source is available for technical review.",
    learning:
      "Engineering focus: HTTP resource design, async I/O, data integrity and the reliability boundaries of third-party integrations.",
    limitations:
      "A portfolio API project with no public hosted demo. JWT setup is present, but recipe routes should not be described as fully access-controlled or production-hardened.",
    evidence: [
      [
        "Recipe controller",
        "https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Controllers/RecipeController.cs",
      ],
      [
        "Database model",
        "https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Data/KitchenBuddyDbContext.cs",
      ],
    ],
  },
];

export const skills = [
  {
    name: "Backend & APIs",
    items:
      "C# · ASP.NET Core · ASP.NET MVC · PHP · Laravel · REST APIs · EF Core · LINQ",
    evidence: "Background analysis in ChessLens; ERP modules at TheRad.",
    href: "#chess-lens",
  },
  {
    name: "Frontend & interfaces",
    items: "TypeScript · JavaScript · React · Next.js · Vue.js · HTML · CSS",
    evidence:
      "Reusable visualisation components and state management in AlgoDojo.",
    href: "#algo-dojo",
  },
  {
    name: "Data & persistence",
    items: "PostgreSQL · SQL Server · MySQL · SQL · Relational data modelling",
    evidence:
      "Persisted analysis workflows, recipe data and ERP business models.",
    href: "#kitchenbuddy",
  },
  {
    name: "Tools & engineering",
    items:
      "Git · GitHub Actions · Docker · Postman · Unit testing · Debugging · OOP",
    evidence:
      "Containerised services in ChessLens; delivery and production support at TheRad.",
    href: "#experience",
  },
];

export const experience = {
  company: "TheRad",
  title: "Junior Software Engineer",
  dates: "Sep 2025 — Apr 2026",
  location: "Remote",
  points: [
    [
      "Backend development",
      "Developed and maintained Laravel / Filament modules for a manufacturing ERP, implementing business logic, structured workflows and admin functionality.",
    ],
    [
      "Relational data modelling",
      "Worked with the data models and queries behind ERP workflows, maintaining data integrity across modules.",
    ],
    [
      "Independent delivery",
      "Designed, built and shipped an interactive platform of 26 maths games with JavaScript, HTML and CSS, owning architecture, application logic and deployment.",
    ],
    [
      "Production support",
      "Diagnosed and resolved defects on a client-facing Joomla / PHP website, alongside implementation, testing and deployment in a remote engineering team.",
    ],
  ],
};
