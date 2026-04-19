# Task: Migrate wedding site from vanilla HTML/CSS/JS to Next.js

## Context

The current repo is a plain HTML/CSS/JS wedding site (`index.html`, `css/styles.css`, `js/script.js`, `assets/`). It's deployed on Vercel. We're migrating to **Next.js 14+ with the App Router and TypeScript** so we can build server-side features (password protection, RSVP API, email notifications) cleanly.

Read `CLAUDE.md` before starting — it contains the full project context, aesthetic guidelines, and code conventions.

## Goal

End state: a working Next.js app that renders the same content as the current site, deployable to Vercel with zero config changes, ready for the password-protection feature to be layered on next.

**Not in scope for this task**: password protection, curtain reveal, RSVP backend, email sending. Those come in the next task. Focus only on the migration.

## Requirements

### 1. Scaffold Next.js in the existing repo

- Use `create-next-app` with: App Router, TypeScript, ESLint, no Tailwind, no `src/` directory, default import alias (`@/*`)
- Node 20+ target
- This is a fresh scaffold into the existing repo — preserve git history, don't wipe the repo

### 2. Preserve the existing site as a reference, then supersede it

- Move the current `index.html`, `css/styles.css`, `js/script.js` into a `_legacy/` folder at the repo root. Don't delete them — I want to reference the original content and styling choices.
- Make sure `_legacy/` is ignored by Next.js (it shouldn't try to build or serve it). Add to `.gitignore` if needed for any build artifacts, but keep the source files tracked.
- The new Next.js app should be the thing that builds and deploys.

### 3. Build the site as a single-page scroll

The existing site is a single-page scroll layout. Keep that — don't split into multiple routes. One `app/page.tsx` with sections.

### 4. Component structure

Create these components in `components/`:

```
components/
  Nav.tsx              # Sticky top navigation with anchor links
  Hero.tsx             # Names, date, countdown
  Story.tsx            # "How we met" section
  Details.tsx          # Ceremony, reception, dress code cards
  Schedule.tsx         # Timeline of the day
  Travel.tsx           # Accommodation and transport cards
  Rsvp.tsx             # RSVP form (client component, local state only for now)
  Registry.tsx         # Honeymoon fund section
  Faq.tsx              # Accordion FAQ
  Footer.tsx           # Names + date
  ui/
    SectionLabel.tsx   # The small uppercase label above each section heading
    Divider.tsx        # The horizontal rule with centered icon
```

`app/page.tsx` imports and composes these. Keep it readable — the page file should be mostly just a list of sections.

### 5. Content migration

Pull the actual text content from the existing `index.html` where it exists, and use sensible defaults for anything the existing site doesn't have. For sections that are purely placeholder (story, specific venue names), use clearly-marked placeholders I can fill in later — e.g. `{/* TODO: real story */}`.

Confirmed real content (use this, not placeholders):

- Names: Tom & Jane
- Date: Saturday 12 September 2026
- Location: Cotswolds, Oxfordshire
- RSVP deadline: 15 July 2026

### 6. Styling

Follow the aesthetic guidelines in `CLAUDE.md` precisely — palette, typography, spacing, all of it. Use inline styles (no Tailwind, no CSS modules). Fonts loaded via `next/font/google`:

- `Cormorant_Garamond` with weights `[400, 500]` and styles `['normal', 'italic']`
- `Karla` with weights `[300, 400, 500]`

Expose them as CSS variables on `<body>` so any component can reference them without re-importing.

I previously built a working React component for this site — you can find inspiration in the conversation history or ask me to paste it. It has the right palette, typography, and component decomposition. Don't copy it verbatim (it was a single-file prototype), but use it as a reference for what "good" looks like.

### 7. Interactive behaviors to preserve

- Sticky nav with smooth scroll to anchored sections
- Live countdown in the hero (auto-calculates days/hours/minutes until the wedding)
- RSVP form with conditional fields (meal choice only appears if attending) — local state, no backend yet
- Accordion FAQ (click to expand/collapse)

Client components only where necessary. Mark with `"use client"` at the top of files that need interactivity (Nav, Hero countdown, Rsvp, Faq). Everything else should be a server component.

### 8. Accessibility and SEO baseline

- `<meta name="robots" content="noindex, nofollow" />` in the root layout
- Semantic HTML throughout
- Alt text on any images migrated from `assets/`
- `lang="en"` on `<html>`
- Sensible `<title>` and meta description (but still noindexed)
- Respect `prefers-reduced-motion` — countdown animations etc. should not violate this

### 9. Dev experience

- `npm run dev` should just work after `npm install`
- No console warnings or errors in the browser on first page load
- TypeScript strict mode on, no `any` types
- ESLint passes cleanly

### 10. Vercel deployment

- The existing Vercel project should continue to deploy from `main` with no config changes needed
- Verify the `package.json` `build` and `start` scripts are correct Next.js defaults
- Don't touch `vercel.json` unless strictly necessary — and if you do, explain why in your summary

## Process

Do this in stages so I can review as you go:

1. **Scaffold + move legacy files.** Stop and show me the file tree. Commit as "Scaffold Next.js and preserve legacy files".
2. **Build the component skeleton** with placeholder content in each section. Dev server should run, sections should render in order, nav should scroll. Commit as "Build component skeleton".
3. **Flesh out content, styling, and interactivity** section by section. Commit per section (`feat: build Hero section`, etc.) — small, reviewable diffs.
4. **Final pass**: accessibility audit, console errors, TypeScript clean, lint clean. Commit as "Polish and accessibility pass".

At each stage, pause and tell me what's done before continuing. If anything in this spec is ambiguous or you think a different approach is better, push back before coding.

## Deliverables

When the migration is complete:

1. A summary of what you built and the full final file tree
2. Confirmation that `npm run dev` runs cleanly with no warnings
3. A list of anything I should test manually (countdown accuracy, smooth scroll, form validation, mobile responsive)
4. Notes on any placeholders I need to fill in before the site is guest-ready
5. Confirmation that the Vercel preview deploy works (push a branch, check the preview URL)

## Quality bar

This is the foundation I'll build the rest of the site on. It needs to be clean. Specifically:

- Component boundaries should feel natural, not arbitrary
- No dead code, no commented-out blocks, no `console.log`s left behind
- Props and types should be self-documenting — I shouldn't need comments to understand what a component does
- If you catch yourself doing something awkward because "that's how Next.js works," stop and question whether you're actually using the framework correctly

The site doesn't need to look identical to the current one — it should look **better**, following the aesthetic in `CLAUDE.md`. The old site is a starting point, not a target to match pixel-for-pixel.
