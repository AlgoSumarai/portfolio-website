---
title: "AlgoDojo"
slug: "algo-dojo"
client: "Personal project"
category: "Frontend"
services: "Next.js, TypeScript, React, Zustand, SVG"
status: "Live application"
featuredImage: "./images/projects/algodojo-playground.png"
imageTwo: "./images/projects/algo-architecture.svg"
imageThree: "./images/projects/algo-controls.svg"
imageFour: "./images/projects/algo-coverage.svg"
imageAlt: "AlgoDojo Bubble Sort playground with array bars and step-by-step controls"
imageTwoAlt: "AlgoDojo architecture diagram from step generators to SVG scenes"
imageThreeAlt: "Diagram of AlgoDojo input and playback controls"
imageFourAlt: "Diagram of the algorithm families available in AlgoDojo"
liveSite: "https://algo-dojo-bice.vercel.app/"
linkLabel: "Live Site"
description: "An interactive learning platform for exploring sorting, searching, trees, graphs and data structures. Reusable SVG visualisations and shared playback controls let learners inspect algorithm behaviour one step at a time."
sortOrder: 2
isFeatured: true
isDraft: false
---

## Make the algorithm visible

Static diagrams make it difficult to follow how a data structure changes. AlgoDojo lets learners inspect comparisons, swaps and traversal steps at their own pace. I designed and developed the Next.js platform, reusable visualisations and component architecture across multiple algorithm families.

## Separate logic from rendering

Pure TypeScript algorithms emit typed frames without depending on React. A shared Zustand player selects a frame, and scene dispatch sends it to the appropriate SVG renderer. Next.js routes also serve MDX lessons alongside interactive playgrounds.

Discriminated frame types let arrays, trees and graphs share one playback contract. Stepping, scrubbing, restart and bounded playback speed live in a shared store rather than being duplicated for each algorithm.

## Explore the application

The platform includes six sorting algorithms, linear and binary search, stacks, queues, lists, trees, heaps, hash maps, BFS and DFS. Learners can edit inputs and navigate individual execution steps. Accounts and persistent learning progress are deferred.

[Explore Bubble Sort](https://algo-dojo-bice.vercel.app/playground/bubble-sort), [inspect the player implementation](https://github.com/AlgoSumarai/algo-dojo/blob/main/src/store/player-store.ts) or [browse the repository](https://github.com/AlgoSumarai/algo-dojo).
