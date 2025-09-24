# BehaviorHub Landing Page

A responsive marketing site for **BehaviorHub**, a web application that helps schools capture and celebrate student behavior data. The landing page highlights platform features, workflow, testimonials, and pricing while providing quick calls-to-action for scheduling a demo.

## Tech stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for lightning-fast builds and local development
- [React Router](https://reactrouter.com/) for client-side routing and navigation
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## Features

- Adaptive layout that looks great on desktops, tablets, and phones
- Hero section with product highlights, social proof, and primary calls-to-action
- Feature grid, workflow timeline, stats, testimonial, and pricing sections tailored to behavior tracking software
- Responsive navigation with an accessible mobile menu
- 404 not found route styled with Tailwind CSS

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Lint the project
npm run lint

# Build the production bundle
npm run build
```

The app will be available at [http://localhost:5173](http://localhost:5173) when running the dev server.

## Project structure

```
├── public/            # Static assets served as-is
├── src/
│   ├── App.tsx        # Landing page composition
│   ├── index.css      # Tailwind directives and global styles
│   ├── main.tsx       # Application entrypoint with router configuration
│   └── pages/
│       └── NotFound.tsx
├── index.html         # HTML template with metadata and fonts
├── tailwind.config.js # Tailwind configuration
└── vite.config.ts     # Vite build configuration
```

## Deployment

Build the production bundle with `npm run build`. The output will be generated inside the `dist/` directory and can be hosted on any static hosting provider such as Netlify, Vercel, or GitHub Pages.
