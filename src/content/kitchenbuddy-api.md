---
title: "KitchenBuddy API"
slug: "kitchenbuddy-api"
client: "Personal project"
category: "Backend"
services: "C#, ASP.NET Core, EF Core, SQL, LINQ"
status: "Source available"
featuredImage: "./images/projects/kitchen-architecture.svg"
imageTwo: "./images/projects/kitchen-recipes.svg"
imageThree: "./images/projects/kitchen-data.svg"
imageFour: "./images/projects/kitchen-generation.svg"
imageAlt: "KitchenBuddy API architecture diagram, not an application screenshot"
imageTwoAlt: "Diagram of KitchenBuddy recipe CRUD endpoints"
imageThreeAlt: "KitchenBuddy users and recipes persistence diagram"
imageFourAlt: "KitchenBuddy ingredient-based recipe generation workflow diagram"
liveSite: "https://github.com/AlgoSumarai/KitchenBuddyAPI"
linkLabel: "View Source"
description: "An ASP.NET Core backend for recipe management, relational persistence and ingredient-based recipe generation through an external AI service. I designed and implemented the REST API, recipe workflows and data models with Entity Framework and SQL."
sortOrder: 3
isFeatured: true
isDraft: false
---

## A recipe workflow, built from the API up

KitchenBuddy separates recipe storage and ingredient-based suggestions from any particular frontend. I designed and implemented the backend using ASP.NET Core, Entity Framework, SQL and asynchronous database access. The visuals on this page are technical diagrams of the API.

## Resources and relational rules

The API exposes recipe creation, retrieval, full and partial updates, and deletion. Unique email and username indexes, required recipe fields and a user-to-recipes foreign key express data rules in the model. EF Core migrations support database evolution, with SQLite configured for development and SQL Server for other environments.

## External generation

The generation action sends supplied ingredients to OpenRouter / DeepSeek and deserialises the returned JSON into recipe objects. It checks upstream HTTP status; saving a generated recipe remains a separate operation. Comprehensive schema validation and retry handling remain areas for improvement.

## Current scope

This is a portfolio API with no public hosted demo. Signup/login code and JWT setup are present, but recipe routes should not be described as fully access-controlled or production-hardened.

[Inspect the recipe controller](https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Controllers/RecipeController.cs) and [review the database model](https://github.com/AlgoSumarai/KitchenBuddyAPI/blob/main/KitchenBuddyAPI/Data/KitchenBuddyDbContext.cs).
