# CLAUDE.md

Project context for Claude Code. Read this before starting any task.

## Project

**Wedding website** for Tom Richardson & Jane, getting married **12 September 2026** in the Cotswolds, Oxfordshire. Private site shared with ~100 guests via a password on the physical invitation.

Deployed at: https://wedding-website-chi-three.vercel.app
Repo: https://github.com/tdr24008/Wedding-website

## Stack

**Target stack** (the project is migrating to this — see TASK.md if present):

- **Next.js 14+** (App Router, not Pages Router)
- **TypeScript** throughout
- **React 18+**
- Inline styles and CSS-in-JS (no Tailwind, no CSS modules) for consistency with the component patterns already written
- **lucide-react** for icons
- **Vercel** for hosting (already connected)

**Do not** introduce: Tailwind, styled-components, Emotion, Redux, Zustand, or any other state/styling library without asking. The site is small and doesn't need them.

**Current state**: The repo originally started as vanilla HTML/CSS/JS (`index.html`, `css/styles.css`, `js/script.js`). If those files still exist when you read this, the migration to Next.js is in progress or not yet started — check `TASK.md` and the current file tree before acting.

## Aesthetic

Warm, rustic, editorial. Cotswolds countryside wedding, not rustic-barn-Pinterest-cliché. Think: elegant, slightly editorial, small-town English theatre on a summer evening.

**Palette** (use these exact hex codes, don't reinvent):

- `#F5EBD6` — cream, primary background
- `#F2E8D5` — oatmeal, alternate section background
- `#FAF6EF` — off-white, card backgrounds
- `#D9C9A8` — soft tan, borders
- `#B8935A` — warm tan, accents and dividers
- `#8A6A3D` — muted brown, secondary text and labels
- `#5C3A1E` — deep walnut, primary text and CTAs
- `#3D2514` — dark walnut, headings

Accent colors (use sparingly):

- `#D4AF37` — antique gold (for the curtain reveal and special accents only)
- `#6B1818` — deep burgundy (curtain reveal only)

**Typography**:

- **Cormorant Garamond** (serif) — all headings, body prose, decorative text. Use italics for emphasis and for the ampersand in "Tom & Jane". Weight 400 unless specifically making a heading heavier.
- **Karla** (sans) — labels, navigation, buttons, form inputs, metadata. Always uppercase with letter-spacing for small labels (11px, 2-3px letter-spacing).

Both fonts load from Google Fonts. Font pairing is load-bearing for the aesthetic — don't substitute without asking.

**Design rules**:

- No gradients, no drop shadows (except functional focus rings), no neon, no gimmicks
- Dividers: thin horizontal lines in `#B8935A` with a small icon centered, or dashed borders for schedule items
- Buttons: either solid walnut background with cream text, or transparent with walnut border
- Generous whitespace — sections should breathe. 80px vertical padding on desktop, 48px on mobile
- Sentence case for body copy, Title Case only for section headings if needed
- Small caps labels (`letter-spacing: 2-3px; text-transform: uppercase; font-size: 11px`) above every section heading — in `#8A6A3D`

## Content truth

Don't invent wedding details. If the task requires specific content I haven't provided, use obvious placeholders like `[VENUE NAME]` or ask.

Confirmed details:

- Couple: Tom & Jane
- Date: Saturday 12 September 2026
- Location: Cotswolds, Oxfordshire
- RSVP deadline: 15 July 2026

Everything else (venue names, exact schedule, dress code specifics, hotel names) is placeholder until I confirm.

## Sections the site needs

1. Hero (names, date, countdown)
2. Our Story
3. The Details (ceremony, reception, dress code)
4. Schedule (timeline of the day)
5. Travel & Stay (accommodation, transport)
6. RSVP (form with meal choice and dietary requirements)
7. Registry (honeymoon fund)
8. FAQs

Plus a password-gated entry with a theatrical curtain reveal (separate feature — see TASK.md).

## Code conventions

- **TypeScript strict mode**. No `any` without a genuine reason.
- **Functional components** with hooks. No class components.
- **Named exports** for utilities, **default exports** for page/component files (Next.js convention).
- **File naming**: `PascalCase.tsx` for components, `camelCase.ts` for utilities, `kebab-case` for route folders in `app/`.
- **One component per file** unless tightly coupled (e.g. a component and its sub-component used only internally).
- **Props interfaces** above the component, named `ComponentNameProps`.
- **No prop-drilling beyond 2 levels** — if state needs to go deeper, lift it to a context or reconsider the component tree.
- **Keep files under ~300 lines**. If something gets larger, suggest splitting.

## Accessibility

This is a public-ish site that older relatives will use. Accessibility matters.

- Semantic HTML (`<nav>`, `<section>`, `<header>`, `<footer>` — not everything a `<div>`)
- All interactive elements keyboard-accessible, visible focus rings
- Form inputs have real labels (visually hidden is fine, but they must exist)
- Colour contrast meets WCAG AA (the walnut-on-cream palette is already good; check any new color combinations)
- Respect `prefers-reduced-motion` — the curtain reveal especially should cross-fade instead of slide for users with this preference
- Alt text on all images

## Privacy and indexing

- `<meta name="robots" content="noindex, nofollow" />` globally. This site must not appear in search results.
- No analytics tracking guests without consent. If analytics are added later, use Plausible or Fathom (privacy-friendly), not Google Analytics.
- The password protection is "keep the casually curious out," not real security — don't oversell its strength in code comments or UI copy.

## Environment variables

When tasks require env vars, document them in `.env.example` with placeholder values (never real ones) and note them in the task summary. Never commit `.env.local` or real secrets.

Currently expected env vars (add as needed):

- `WEDDING_PASSWORD` — the password guests receive on their invitation
- `COOKIE_SECRET` — used to sign the unlock cookie, 32+ bytes of randomness

## Deployment

- Vercel auto-deploys from `main`
- Use feature branches for non-trivial changes, open a PR, let Vercel build a preview, then merge
- Don't push directly to `main` for anything that changes the user-facing site
- If a change requires new env vars, remind me to set them in Vercel dashboard **before** merging

## How I want you to work

- **Ask before making architectural changes.** If a task could be solved multiple ways and the choice has long-term consequences, pause and flag it.
- **Push back when the spec is wrong.** If I've asked for something that won't work, is inconsistent with the existing code, or is genuinely worse than an alternative, say so before implementing. I'd rather discuss than rework.
- **Summarize at the end.** After completing a task, give me: what you did, which files changed, what I need to do manually (env vars, testing, deployments), and any trade-offs you made.
- **Be honest about uncertainty.** If you're not sure something works, say so and suggest how to verify. Don't pretend.
- **Small, reviewable diffs.** If a task sprawls, checkpoint with me rather than making 30 file changes in one go.
- **Test as you go.** Run the dev server and verify things actually work. Don't just trust that TypeScript compiling means it works.

## Out of scope

Unless I explicitly ask:

- Don't add new sections to the site
- Don't change the color palette or typography
- Don't refactor existing working code just to "clean it up"
- Don't add dependencies
- Don't set up CI/CD, testing frameworks, or linters beyond what Next.js ships with
- Don't write README updates (I'll do those)

## Context about me

I'm an ML practitioner, comfortable with TypeScript/React/Next.js but not a frontend specialist. I've deployed Next.js to Railway and Vercel before. I value clean, idiomatic code over clever code. Explain design decisions I might not catch, but don't over-explain basic TypeScript or React.

I'm building this in evenings around a full-time job and a Master's degree, so efficiency matters — but this is my wedding, so polish matters more than speed.
