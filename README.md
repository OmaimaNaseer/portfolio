# Omaima — Software Engineer Portfolio

Premium personal portfolio for Omaima, a software engineer. The site is a single-page React application with a dark editorial design, centralized personal data, and a production-ready contact form.

Personal details are intentionally incomplete. Update the files in `src/data/` when confirmed information is available. The interface stays visually complete with clearly labeled placeholders.

## Features

- Sticky accessible navigation with active section tracking and an animated mobile menu
- Editorial hero with staggered motion, geometric composition, and dual CTAs
- About, skills, projects, education, goals, and contact sections
- Graceful empty states that never invent experience, skills, or project URLs
- React Hook Form + Zod validation and Formspree delivery
- Scroll progress, back-to-top, reduced-motion support, and SEO metadata
- Vercel-ready Vite production build

## Technology stack

- React 19 and JavaScript (ES6+)
- Vite
- Tailwind CSS v4 with custom CSS tokens
- Motion for React
- Lucide React
- React Hook Form and Zod
- Formspree
- Google Fonts (Space Grotesk, Manrope, Inter)

## Project structure

```text
src/
  components/   layout, common UI, cards, contact form
  sections/     hero through contact
  data/         personal info, navigation, skills, projects, education, goals, socials
  hooks/        active section and scroll progress
  config/       site metadata and Formspree endpoint
  styles/       design tokens, animations, utilities
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Other commands

```bash
npm run build
npm run preview
npm run lint
```

## Environment configuration

Copy `.env.example` to `.env` and add values as needed:

```bash
VITE_FORMSPREE_ENDPOINT=
```

Never commit `.env` files.

## Contact form setup

1. Create a form at [Formspree](https://formspree.io/).
2. Copy the endpoint, for example `https://formspree.io/f/xxxxxxxx`.
3. Set `VITE_FORMSPREE_ENDPOINT` locally and in Vercel.
4. Restart the dev server after changing environment variables.

If the endpoint is missing, the form shows a configuration message instead of a fake success state. When `personalInfo.email` is set, a mailto fallback is offered.

## Production build

```bash
npm run build
npm run preview
```

The static output is written to `dist/`.

## Vercel deployment

1. Push the project to GitHub.
2. Import the repository in Vercel as a Vite project.
3. Use the defaults: build command `npm run build`, output directory `dist`.
4. Add `VITE_FORMSPREE_ENDPOINT` in Project Settings → Environment Variables.
5. Deploy and confirm the live URL.

This repository is not deployed from this machine unless you request it.

## Updating personal information

Edit these files only:

- `src/data/personalInfo.js`
- `src/data/skills.js`
- `src/data/projects.js`
- `src/data/education.js`
- `src/data/goals.js`
- `src/data/socialLinks.js` (derived from GitHub, LinkedIn, and email)

Do not hardcode personal details in components.
