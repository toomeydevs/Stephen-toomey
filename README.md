# Stephen Toomey Portfolio

A personal portfolio web app built with React, TypeScript, and Vite.

## Overview

This project showcases Stephen Toomey's work as a full-stack software engineer, including:

- Hero landing page
- Filterable projects section
- Filterable skills section with proficiency indicators
- Education timeline
- Contact form with toast feedback
- Downloadable resume (`public/resume.pdf`)

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui + Radix UI
- Vitest + Testing Library

## Routes

- `/` — Home
- `/projects` — Projects
- `/skills` — Skills
- `/education` — Education
- `/contact` — Contact

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

The app will run at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build
- `npm run test` — run tests once
- `npm run test:watch` — run tests in watch mode
- `npm run lint` — run ESLint

## Project Structure

- `src/pages` — route-level pages
- `src/components` — shared layout and UI components
- `src/components/ui` — shadcn/ui primitives
- `src/assets` — static source assets
- `public` — public static files (favicon, resume, robots)

## Notes

There are existing lint issues in the generated UI/component files unrelated to this README update.
