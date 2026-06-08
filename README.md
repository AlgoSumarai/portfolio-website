# Portfolio Website

A lightweight React portfolio website built with Vite.

This project includes a simple single-page layout with reusable components for the header, projects carousel, and home section. It is designed for fast local development and easy deployment.

## Features

- React with Vite for fast development and build performance
- Component-based architecture
- Responsive styling using CSS modules and global styles
- Simple portfolio project showcase

## Project Structure

- `index.html` — application entry point
- `src/main.jsx` — React application bootstrap
- `src/App.jsx` — root application component
- `src/pages/Home.jsx` — home page content
- `src/components/Header.jsx` — header/navigation component
- `src/components/ProjectsCarousel.jsx` — project showcase carousel
- `src/index.css` — global styles
- `src/components/*.css` — component-specific styles

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the local URL shown in the terminal.

## Build

To create a production build:

```bash
npm run build
```

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Notes

- This project uses the standard Vite React template and can be extended for TypeScript or additional styling frameworks.
- Use `npm run lint` if ESLint is configured in the repository.
