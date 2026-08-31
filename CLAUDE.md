# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About GFEC

GFEC (Gordon Foreign Education Consultancy) helps students in Sri Lanka migrate and study abroad. GFEC partners with colleges/universities worldwide and this repo is the marketing site + application/admin backend for that business.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml` is the lockfile in use; a stray `package-lock.json` may show as deleted in git status — ignore it).

```bash
pnpm dev       # start dev server on port 8080 (Turbopack)
pnpm dev2      # start dev server on default port 3000 (Turbopack)
pnpm build     # production build
pnpm start     # run production build
pnpm lint      # next lint
```

There is no test runner configured in this repo.

## Architecture

Next.js 16 App Router project (React 19, TypeScript strict, Tailwind CSS v4). All routes live under `src/app/`, split into three route groups:

- **`(site)`** — the public marketing site (home, about, contact, apply-now, events, gallery, study-abroad/[country], privacy-policy). Wrapped by `src/app/(site)/layout.tsx`, which renders the nav (`navigation-new.tsx`), `footer.tsx`, Vercel Analytics/SpeedInsights, and a fixed WhatsApp button.
- **`(dashboard)`** — the internal admin area (`/admin/...`: applications, get-in-touch inquiries, insights, menu management). No auth is currently enforced despite `next-auth`/`@auth/mongodb-adapter` being wired up in `src/app/_lib/auth-options.ts` (credentials provider with hardcoded test user — treat as scaffolding, not production auth).
- **`(ui-test)`** — a dev-only component sandbox; not linked from production nav.

Route-group-local code is colocated and prefixed with `_` so Next.js ignores it as routes: `_components/`, `_constants/`, `_types/`, `_hooks/`, `_interfaces/`, `_lib/`, `_data/`. When adding a component/type/constant used only within one route group, put it in that group's `_`-prefixed folder rather than the shared `src/app/_components` / `src/app/utils`.

### Shared vs. per-group UI

- `src/app/_components/ui/` — hand-rolled shared primitives (button, input, select, modal, table, typography, spinner, etc.), imported via `@/*` → `src/*`.
- `src/components/ui/` — the shadcn/ui-generated component(s) (`components.json` config: style `new-york`, alias `@/components`). Note the `components.json` `utils` alias points at `@/lib/utils`, but the actual `cn()` helper lives at `src/app/utils/utils.ts` — import it as `@/app/utils/utils`, not `@/lib/utils`.
- `src/app/utils/common.ts` — `ResolveBaseUrl`, `ToApplicationFormObject`, and the SWR `Fetcher`.

### Country pages

`src/app/(site)/study-abroad/[country]/page.tsx` is a client-rendered dynamic route matching against `COUNTRIES` in `src/app/(site)/_constants/countries.constants.ts` by `route` slug, then rendering one of the per-country components in `src/app/(site)/_components/countries/` (e.g. `uk.tsx`, `aus.tsx`, `ger.tsx`). Several country components/flags exist for countries not currently offered (fin, bel, swe, rus, lat, swi) — check `countries.constants.ts` before assuming a country is live.

### API routes / data flow

Route handlers live in `src/app/api/*/route.ts` and talk directly to MongoDB:

- `src/app/_lib/mongodb.ts` — shared `MongoClient` promise (global-cached in dev, per-request in prod). Requires `MONGO_URL`.
- Individual route handlers (e.g. `api/route.ts`, `api/getInTouch/`, `api/apply/`, `api/application/`, `api/promo-register/`) mostly open their own `MongoClient` connection inline rather than importing the shared `mongodb.ts` client — follow the existing pattern in the specific file you're editing rather than assuming one shared client is used everywhere.
- Database name is `gfec`; known collections include `getInTouch`, `logger`, and an applications collection.
- Form submissions trigger Nodemailer emails (Gmail SMTP) to multiple `TO_MAIL*` recipients, with success/failure logged to the `logger` collection.

### Environment variables

Required at runtime (see `next.config.js`, which also re-exposes them via `env:` with `"NO ... FROM NEXT.CONFIG"` fallback strings — a missing var shows up as that literal string rather than `undefined`):

`MONGO_URL`, `API_BASE_URL`, `APP_BASE_URL`, `NODEMAILER_SERVICE`, `NODEMAILER_USER`, `NODEMAILER_PASSWORD`, `NODEMAILER_PORT`, `TO_MAIL`, `TO_MAIL_1`, `TO_MAIL_2`, `TO_MAIL_3`, `APP_VER`, `EMAILS`, `PHONE`, `ADDRESS_LINE_1/2/3`, `GL_MAP_KEY`, `LAT`, `LNG`.

### Styling

Tailwind v4 with CSS-based theme config in `src/app/globals.css` (`@import "tailwindcss"` + `@theme { ... }` block) — there is no `tailwind.config.ts` in active use (the `tailwind-shad.config.js` / `tailwind.config.keepong-as-bkp.txt` files are legacy/backup, not loaded). Root font is `Abel` (Google Font via `next/font`, applied in `src/app/layout.tsx`).

### Known repo quirks

- Several `*-new.tsx` / `*-v9.tsx` files (e.g. `navigation-new.tsx`, `nav-actions-new.tsx`, `nav-links-new.tsx`, `hero-new.tsx`, `destinations-v9.tsx`, `success-path-new.tsx`) are the currently-active versions superseding older non-`-new` siblings that are still present but unused — check actual imports in `layout.tsx`/`page.tsx` before editing a component to confirm it's the one actually rendered.
- `success-stories-text-bkp.tsx`, `globals-bkp.txt`, `faviconnn.ico` are backup files left in place, not dead-code to silently assume unused without checking imports.
- `IMPLEMENTATION_PLAN.md` in the repo root is a pre-existing cleanup audit (dead code, `any` typing, naming, SEO gaps) — consult it if asked to do cleanup work, but confirm each item against current code since the branch has moved on since it was written.

## Versioning

This repo follows [Semantic Versioning](https://semver.org/), starting from `v1.0.0` (the completed site redesign, merged to `main`). Older tags (`before-layout-change`, `gfec-v1`, `initial-web-release`) predate this convention and are historical only.

Releases are automated by [release-please](https://github.com/googleapis/release-please) (`.github/workflows/release-please.yml`), driven entirely by [Conventional Commits](https://www.conventionalcommits.org/) on `main`. A commit-msg hook (`.husky/commit-msg` + `commitlint.config.js`) enforces the format locally — non-conventional commit messages are rejected at commit time.

Commit type → version bump:

- `fix:`, `chore:`, `perf:`, `refactor:` → **patch** (`1.0.x`) — bug fixes, dependency bumps, dead code removal (e.g. working through `CODE_REVIEW.md`)
- `feat:` → **minor** (`1.x.0`) — new pages/features added without breaking the current design
- `feat!:` or a `BREAKING CHANGE:` footer → **major** (`x.0.0`) — reserve for the planned full site revamp (→ `v2.0.0`)

release-please maintains an open "Release PR" on `main` accumulating unreleased changes into `CHANGELOG.md`; merging that PR is what actually cuts a release (bumps `package.json`, tags `vX.Y.Z`, publishes a GitHub Release). Nothing releases automatically on a normal merge — only on merging the release PR itself.
