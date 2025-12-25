# GEMINI.md

## Project Overview

This is a full-stack blog application built with Next.js, TypeScript, Convex, Shadcn UI, and Tailwind CSS.

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Convex
- **UI:** Shadcn UI, Tailwind CSS
- **Styling:** Tailwind CSS, next-themes for theme management.
- **Data:** Images are hosted on Unsplash.

The application features a blog with posts and comments. The database schema is defined in `convex/schema.ts` and includes tables for `blogs` and `comments`.

## Building and Running

To get started with the development environment, follow these steps:

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Run the development server:**
    ```bash
    pnpm dev
    ```

3.  **Build for production:**
    ```bash
    pnpm build
    ```

4.  **Start the production server:**
    ```bash
    pnpm start
    ```

5.  **Lint the code:**
    ```bash
    pnpm lint
    ```

## Development Conventions

- **Code Style:** The project uses ESLint for code linting. The configuration can be found in `eslint.config.mjs`.
- **Component-Based Architecture:** The project follows a component-based architecture with components located in the `components` directory.
- **Styling:** Styling is done using Tailwind CSS. Utility classes are preferred over custom CSS.
- **Backend:** The backend logic is handled by Convex. The schema is defined in `convex/schema.ts`.
