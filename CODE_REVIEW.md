# GFEC — Code Review & Dependency Audit

> Senior-level pass over `src/app/` architecture and `package.json`. Written 2026-08-02 against the `new-design-v-2` branch, post-cleanup of `IMPLEMENTATION_PLAN.md`.

---

## 1. Areas that need improvement

### Security — highest priority

| Issue | Where | Detail |
|---|---|---|
| Admin area has no real auth gate | [layout.tsx:18](src/app/(dashboard)/layout.tsx#L18) | `getServerSession()` is fetched and handed to `<SessionProvider>`, but the result is **never checked** — there's no `if (!session) redirect(...)`. Anyone can hit `/admin/*` directly. There's also no `middleware.ts`/`proxy.ts` at all, which is the standard place to gate a whole route group in App Router — right now protection depends on a check that doesn't exist. |
| Server secrets are exposed via a mechanism that ignores `NEXT_PUBLIC_` | [next.config.js:6-35](next.config.js#L6) | The `env:` block re-declares `MONGO_URL`, `NODEMAILER_PASSWORD`, `NODEMAILER_USER`, etc. Next.js inlines **everything** listed under `env:` into the client bundle wherever `process.env.X` is referenced — the `NEXT_PUBLIC_` safety convention is bypassed entirely for these vars. Nothing leaks *today* (every `"use client"` file was checked — only `EMAILS`/`PHONE`/`ADDRESS_LINE_*`/`LAT`/`LNG`/`GL_MAP_KEY` are touched client-side), but it's a landmine: the next person who writes `process.env.MONGO_URL` inside a client component gets zero build warning and ships a DB connection string to the browser. Fix: drop the `env:` block, use `NEXT_PUBLIC_` prefixes only for the values that are genuinely public (contact info, map key), read the rest with plain `process.env.X` server-side only. |
| Hardcoded test credentials in auth provider | [auth-options.ts:19-23](src/app/_lib/auth-options.ts#L19) | `username === "user" && password === "password"` — scaffolding that's wired into a live `next-auth` config, not just a comment. Already called out in CLAUDE.md as scaffolding, but worth flagging again since it sits right next to the missing session check above. |
| Unvalidated form input goes straight into a DB insert and into an HTML email | [api/route.ts:24-31,52-76](src/app/api/route.ts#L24) | `request.json()` is inserted into Mongo and interpolated into an email `<table>` via template literals (`${data.firstName}`) with no schema validation or escaping. Low severity (recipients are your own staff inboxes) but it's the same pattern across all 4 POST routes — a shared `zod`/`yup` schema per route would close this cheaply. |

### Reliability / correctness

- [api/route.ts:110-168](src/app/api/route.ts#L110) sends 4 notification emails **sequentially** with `await` each — a `Promise.all` version is sitting there commented out. Sequential awaiting means one slow/failed send delays or (depending on your error handling) can short-circuit the rest; it also just makes the request 4x slower than it needs to be for no reason.
- Two schema-validation libraries doing the same job: `yup` (+`@hookform/resolvers/yup`) in [get-in-touch-form.tsx](src/app/(site)/_components/get-in-touch-form.tsx), `zod` in [apply-now/page.tsx](src/app/(site)/apply-now/page.tsx). These are near-identical forms — worth standardizing on one (zod is more actively maintained and you already ship it) and dropping the other dependency.
- Inconsistent env var naming for the same values: `contact/page.tsx` reads `NEXT_PUBLIC_EMAILS || EMAILS` with fallbacks, `footer.tsx` reads plain `EMAILS` only. Pick one convention.

### Dead code confirmed unreferenced (safe to delete, zero imports anywhere)

- `src/app/(site)/_components/nav-actions.tsx` and `nav-links.tsx` — superseded by `-new` siblings, not imported anywhere.
- `src/app/(site)/_components/countries/{fin,bel,rus,lat,swe,swi}.tsx` — 6 files, all 0 imports (open question from the cleanup pass — is this a permanent product decision or temporary? Either way, confirmed dead weight right now).
- `src/app/(site)/_components/success-stories-text-bkp.tsx`, `src/app/globals-bkp.txt`, `src/app/faviconnn.ico` — backup files per CLAUDE.md, still sitting in the tree.
- `swiper.d.ts` at repo root — the package it types isn't used anywhere (see dependency section).

### Missing App Router features

- No `loading.tsx` or `error.tsx` anywhere except a root `not-found.tsx`. The admin pages do client-side SWR fetches with a hand-rolled `<Loader />` component instead of route-level Suspense boundaries — works, but there's no error boundary if a fetch throws.
- No `sitemap.ts` / `robots.ts` — a straightforward SEO win for a marketing site that's currently missing.

### Config debt

- `tsconfig.json` targets `es5` ([tsconfig.json:3](tsconfig.json#L3)) — unnecessarily old for a Next 16/React 19 app, bloats the output with legacy transpilation (generators, classes, etc.) that no target browser needs. Bump to at least `es2020`.
- `next.config.js`'s `transpilePackages` list carries ~20 packages including `react`, `next`, `postcss`, `tailwindcss` itself — none of these need transpiling (they ship their own builds); this list looks copy-pasted defensively rather than reasoned about, and most of it can go.
- `components.json` still points `utils` at `@/lib/utils`, a path that's never existed in this repo (real path is `@/app/utils/utils`) — cosmetic but will trip up anyone running `shadcn add`.

### Structural (lower priority, bigger effort)

- 19 near-identical per-country components (`aus.tsx`, `uk.tsx`, `ger.tsx`, …) each hand-rolling the same layout with different copy/images. Good candidate for one generic `<CountryPage country={...}>` component driven entirely by the `COUNTRIES` data already in `countries.constants.ts` — would cut a few thousand lines and remove an entire class of "did I update all 19 files" bugs.

---

## 2. Dependencies

### Remove — confirmed zero usage in source

| Package | Evidence |
|---|---|
| `swiper` | 0 imports anywhere; only trace is the unused `swiper.d.ts` |
| `class-variance-authority` | 0 imports, no `cva(` calls anywhere |
| `@radix-ui/react-icons` | 0 imports |
| `tailwindcss-animate` | Only referenced in `tailwind-shad.config.js`, which per CLAUDE.md is a legacy backup file not loaded by the active Tailwind v4 CSS-based config |
| `@types/mongodb` (dev) | pnpm flags it **Deprecated** — the `mongodb` driver ships its own types now; having both risks type conflicts |

### Consolidate

| Pair | Recommendation |
|---|---|
| `yup` vs `zod` | Standardize both forms on `zod` (already used, more active upstream), drop `yup` and the `yup`-specific half of `@hookform/resolvers` |

### Outdated — safe patch/minor bumps

(from `pnpm outdated`)

`next` 16.2.4→16.2.12, `eslint-config-next` 16.0.1→16.2.12 (notably behind — likely related to the ESLint 9 crash noted below), `react`/`react-dom` 19.2.5→19.2.8, `@radix-ui/react-popover`, `next-auth`, `postcss`, `swr`, `@hookform/resolvers`, `tailwindcss`/`@tailwindcss/postcss`, `motion`, `react-hook-form`, `tailwind-merge`, `zod`, `mongodb` driver, `nodemailer`, `@auth/mongodb-adapter` — none of these look risky, just routine bumps.

### Outdated — needs care, breaking changes likely

- `eslint` 9→10 and `typescript` 5.9→7 — major jumps, don't bump blindly. Also: `next lint` no longer works at all in this project right now (Next 16 dropped the command) and `.eslintrc.json` crashes under ESLint 9 with a circular-JSON error — this is broken *today*, independent of any version bump. Needs migrating to flat `eslint.config.js` regardless of which ESLint version is targeted.
- `@vercel/analytics` 1→2, `@vercel/speed-insights` 1→2 — major versions, check their migration notes before bumping.
- `lucide-react` 0.553→1.28 — major version (icon libraries usually keep API stable across majors, but verify a couple of icon imports still resolve after bumping).
- `react-intersection-observer` 10→11, `swiper` 12→14 — moot if the removal recommendation above for swiper is taken; the intersection-observer one is worth checking for hook API changes before bumping.

---

## Suggested next steps

Safe, low-risk wins that can be done directly: dead package removal, patch/minor version bumps, `tsconfig` target bump.

Bigger changes that need scoping first: ESLint flat-config migration, TypeScript major bump, `yup`→`zod` consolidation, admin middleware auth.
