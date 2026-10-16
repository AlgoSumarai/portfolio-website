---
title: "ChessLens"
slug: "chess-lens"
client: "Personal project"
category: "Full-Stack"
services: "C# / .NET, PostgreSQL, React, TypeScript, Docker"
status: "In development"
featuredImage: "./images/projects/chess-review.png"
imageTwo: "./images/projects/chess-import.png"
imageThree: "./images/projects/chess-progress.png"
imageFour: "./images/projects/chess-architecture.svg"
imageAlt: "ChessLens game review with move replay, engine evaluation and coaching"
imageTwoAlt: "ChessLens completed PGN game import"
imageThreeAlt: "ChessLens saved player progress"
imageFourAlt: "ChessLens architecture diagram showing the interface, API, worker and database"
liveSite: "https://github.com/AlgoSumarai/chess-lens"
linkLabel: "View Source"
description: "A chess analysis platform that imports games, runs Stockfish analysis and turns recurring mistakes into personalised practice. Built with a .NET backend, a React / TypeScript interface and a durable PostgreSQL analysis workflow."
sortOrder: 1
isFeatured: true
isDraft: false
---

## From analysis to practice

ChessLens connects imported PGN games, legal move replay, engine evaluations and recurring-weakness insights in one workflow. I built the full-stack platform, including the .NET backend, React interface, database-backed analysis and personalised puzzle practice.

## Background work with durable state

A separate .NET / Stockfish worker processes imports, analysis, insights and puzzles outside HTTP requests. The API and worker share PostgreSQL state. SignalR sends owner-scoped progress to the browser, while HTTP requests reconcile state when notifications are unavailable.

Versioned progress updates, cancellation barriers and HTTP reconciliation help keep the interface consistent during asynchronous work. Weakness snapshots retain supporting positions and sample sizes; puzzles validate tactical objectives and alternatives with Stockfish.

## Capabilities and current scope

The platform supports legal replay and variations, live evaluations, recurring-weakness insights, puzzle hints, attempt tracking and spaced review scheduling. It currently runs through local Docker deployment and is not a public live service. Provider imports and final release checks remain outstanding.

[Read implementation and verification notes](https://github.com/AlgoSumarai/chess-lens/blob/main/docs/verification.md) or [inspect the background worker](https://github.com/AlgoSumarai/chess-lens/blob/main/src/ChessLens.Worker/ImportWorker.cs).
