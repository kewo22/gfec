# GFEC Codebase Cleanup — Implementation Plan

> **Scope**: `src/app/` only. No UI visual changes. No feature additions. No config changes.
> **Goal**: Remove dead code, fix code quality issues, improve TypeScript safety, and enforce consistency.

---

## Overview

After a full audit of `src/app/`, the following categories of issues were identified:

| Category | Severity | Count (est.) |
|---|---|---|
| Dead / commented-out code | High | 15+ instances |
| Unused imports | High | 10+ instances |
| Unused variables / functions | High | 8+ instances |
| Weak TypeScript typing (`any`) | Medium | 12+ instances |
| Duplicate / inconsistent logic | Medium | 5+ instances |
| Bad naming (generic `xxx`, `sss`) | Medium | 4+ instances |
| Hardcoded strings (should be constants/env) | Medium | 6+ instances |
| Direct DOM manipulation (should be React state) | Low–Medium | 4+ instances |
| `console.log` / debug statements left in | Low | 5+ instances |
| SEO / metadata not filled in | Low | 2 instances |

---

## Phase 1 — Dead Code & Commented-Out Code Removal

> **Priority: HIGH** — These are the most impactful changes and have no risk of regression.

### 1.1 Remove fully commented-out `<SuccessStories />` component usage

**File**: `(site)/page.tsx`

- The old audio-based `SuccessStories` component is commented out: `{/* <SuccessStories /> audio not using*/}`
- The component file `success-stories.tsx` still exists and is **never rendered anywhere**
- **Action**: Delete `success-stories.tsx` entirely. It references non-existent audio files (`/audio-1.mp3`, `/audio-2.mp3`, `/audio-3.mp3`, `/success-story.jpeg`) and uses Plyr for audio — a feature explicitly abandoned.

### 1.2 Remove fully commented-out image in `nav-items.tsx`

**File**: `(site)/_components/nav-items.tsx`

- Lines 26–33: Second logo `<Image>` is fully commented out (`GFEC-Trans-mobile-sm`)
- **Action**: Remove commented block.

### 1.3 Remove commented-out `<PromoPopUp />` from site layout

**File**: `(site)/layout.tsx`

- `{/* <PromoPopUp /> */}` is commented out — the component itself is feature-complete but disabled
- **Decision needed**: Either re-enable or delete `promo-popup.tsx`. If not planned for reactivation, delete the component file entirely to avoid confusion.

> [!IMPORTANT]
> Confirm with team: Is `PromoPopUp` planned for future use? If not, delete the file. If yes, keep it but add a `// TODO: re-enable for promotions` note.

### 1.4 Remove commented-out code in `success-stories-text.tsx`

**File**: `(site)/_components/success-stories-text.tsx`

- Lines 125–132: Commented-out `<Image>` component for a profile photo
- `imageRef` is still declared (line 45) and used in animation effects (lines 58–59, 68, 87) — but points to a removed element. **Remove `imageRef` declaration and all references to it** in addition to the comment.

### 1.5 Remove commented-out `onClick` in `could-your-next-home-be.tsx`

**File**: `(site)/_components/could-your-next-home-be.tsx`

- Line 67: `// onClick={() => onCountryClick(country)}` — handler commented out, no `onCountryClick` function exists in this component
- **Action**: Remove the commented-out line.

### 1.6 Remove commented-out code in `admin/application/page.tsx`

**File**: `(dashboard)/admin/application/page.tsx`

- Lines 40–43: Commented-out `_data` variable for concatenating data — never used
- **Action**: Remove the commented block.

### 1.7 Remove commented-out `currentVideo` state in `testimonial.tsx`

**File**: `(site)/_components/testimonial.tsx`

- Line 30: `// const [currentVideo, setCurrentVideo] = useState(0);`
- **Action**: Remove.

### 1.8 Remove commented-out poster in `testimonial.tsx`

**File**: `(site)/_components/testimonial.tsx`

- Line 23: `// poster: "/video-poster.jpg",`
- **Action**: Remove.

### 1.9 Remove commented-out code in `get-in-touch-form.tsx`

**File**: `(site)/_components/get-in-touch-form.tsx`

- Line 105: `// submitted();` inside `.finally()`
- Line 226: Empty `const resetForm = () => {};` function body (a no-op stub replaced by `useImperativeHandle`)
- **Action**: Remove both.

### 1.10 Remove unused country flags from Tailwind config

**File**: `tailwind.config.ts`

- Country background images for commented-out countries (Finland `fi-flag`, Belarus `by-flag`, Sweden `se-flag`, Russia `ru-flag`, Latvia `lv-flag`, Switzerland `ch-flag`) are still defined in Tailwind config along with banner image entries
- **Action**: Remove their Tailwind config entries.

---

## Phase 2 — Unused Imports Cleanup

> **Priority: HIGH** — Unused imports add visual noise.

### 2.1 `footer.tsx` — Remove unused `faFacebook` import

- `faFacebook` is imported but **`faSquareFacebook` is actually used** in the JSX
- **Action**: Remove `faFacebook` from the import.

### 2.2 `footer.tsx` — Remove unused `Button` import

- `Button` is imported but never used (plain `<button>` elements used instead)
- **Action**: Remove `Button` import.

### 2.3 `destination/page.tsx` — Remove unused country component imports

- Imports `Fin`, `Bel`, `Swe`, `Rus`, `Lat`, `Swi` — these countries are commented out of the `COUNTRIES` constant, so their `id` can **never** match `selectedCountry.id`. They are dead imports.
- **Action**: Remove the 6 unused imports and their corresponding render conditions.

### 2.4 `study-overseas-with-gfec.tsx` — Remove unused `useEffect` import

- `useEffect` is imported but never used in the component
- **Action**: Remove from import.

### 2.5 `typography.tsx` — Remove unused React type imports

- `DOMElement`, `InputHTMLAttributes`, `RefAttributes` are imported but never used
- **Action**: Remove unused type imports; keep `forwardRef`, `ElementType`.

### 2.6 `countries.constants.ts` — Remove unused image imports

- Images for `finland`, `belarus`, `sweden`, `russia`, `latvia`, `switzerland` are imported but the corresponding country objects are commented out
- **Action**: Remove their import statements.

---

## Phase 3 — TypeScript Type Safety Improvements

> **Priority: MEDIUM** — Reduces `any` usage and makes interfaces stronger.

### 3.1 `mobile-nav.tsx` — Type the `isMainNavInView` prop

- `export default function MobileNav({ isMainNavInView }: any)` — prop typed as `any`
- **Action**: Create proper props interface: `interface MobileNavProps { isMainNavInView: boolean }`.

### 3.2 `nav-actions.tsx` — Type the `openModel` prop

- `export default function NavActions({ openModel }: any)` — typed as `any`
- **Action**: `interface NavActionsProps { openModel: () => void }`.

### 3.3 `nav-items.tsx` — Type the `onOpenModel` prop

- `function NavItems({ onOpenModel }: any)` — typed as `any`
- **Action**: `interface NavItemsProps { onOpenModel: () => void }`.

### 3.4 `mobile-nav-item.ts` — Replace `icon: any` with proper FA icon type

- `icon: any` in `NavItemLink` type
- **Action**: `import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; icon: IconDefinition`.

### 3.5 `country.ts` — Remove self-documented dead field

- `isCourseDetailAvailable: boolean; // not using anywhere` — the comment admits it's dead
- Every country entry in `countries.constants.ts` also has `// not using anywhere` next to each value
- **Action**: Remove `isCourseDetailAvailable` from the `Country` type and remove it from all country entries in `countries.constants.ts`.

### 3.6 `success-stories-text.tsx` — Fix `let data` typing

- `let data: any[] | null` — hardcoded data array typed as `any[]`
- **Action**: Extract a proper type `interface SuccessStory { name: string; uni: string; successStory: string; }` and type as `const data: SuccessStory[]` (the `| null` is meaningless since data is always initialized).

### 3.7 `success-stories-text.tsx` — Fix `useRef<any>()` usage

- `fullNameRef`, `uniRef`, `successStoryRef`, `startsRef`, `imageRef` all typed as `useRef<any>()`
- **Action**: Type as `useRef<HTMLElement | null>(null)` or the specific element type.

### 3.8 `useMutationObserver.ts` — Type params properly

- All three params typed as `any`
- **Action**: `ref: React.RefObject<Element>`, `callback: MutationCallback`, `options?: MutationObserverInit`.

### 3.9 `api/route.ts` — Use `unknown` instead of `any` for errors; consolidate `ApiResponse` type

- `error?: any` — use `error?: unknown` per TypeScript best practices
- The local `ApiResponse<T>` type in `route.ts` duplicates the one in `_interfaces/response.ts` — consolidate by importing from the interface file.

---

## Phase 4 — Naming & Variable Clarity

> **Priority: MEDIUM** — Poor names make the code hard to maintain.

### 4.1 Rename `sss` ID in `mobile-nav.tsx`

- `id="sss"` on the mobile nav drawer section — meaningless ID
- **Action**: Rename to `id="mobile-nav-drawer"`. Update all `document.getElementById("sss")` references in `menuOnClick` and `useEffect`.

### 4.2 Rename `slidNo` typo in `navigation.tsx`

- `const [slidNo, setSlideNo] = useState(0)` — inconsistent name (`slidNo` vs `setSlideNo`)
- **Action**: Rename to `const [slideNo, setSlideNo]`.

### 4.3 Rename `xxx` variable in `useNavigationEvent.ts`

- `const xxx = pathname + searchParams.toString();`
- **Action**: Rename to `const url = pathname + searchParams.toString();`.

### 4.4 Rename `onYearOfCompletionChange` in `get-in-touch-form.tsx`

- This handler sets `preferredTime`, not year of completion — wrong name copied from the apply-now form
- **Action**: Rename to `onPreferredTimeChange`.

---

## Phase 5 — Code Logic & Quality Issues

> **Priority: MEDIUM** — Correctness and maintainability issues.

### 5.1 Fix `setInterval` side-effect-during-render in `navigation.tsx`

- Additional `setInterval`/`clearInterval` calls are made during the render body (lines 85–102) outside of any hook. This runs on every render cycle and creates multiple intervals.
- **Action**: Move all interval management exclusively into `useEffect` with `inView` as a dependency. Remove the naked interval logic from the render body.

### 5.2 Fix `tel:` protocol used for email links in `footer.tsx`

- Line 122: `<a href={\`tel:${mail}\`}>` — emails linked with `tel:` instead of `mailto:`
- **Action**: Change to `href={\`mailto:${mail}\`}`.

### 5.3 Fix same `tel:` bug in `nav-contact-ribbon.tsx`

- Email links in the contact ribbon also use `tel:` protocol
- **Action**: Change to `mailto:`.

### 5.4 Remove redundant `setIsLoading(false)` in `apply-now/page.tsx`

- `setIsLoading(false)` is called 3 times: in `.then()`, `.catch()`, and `.finally()`. Since `.finally()` always runs, the first two are redundant.
- **Action**: Remove `setIsLoading(false)` from `.then` and `.catch`, keep only in `.finally`.

### 5.5 Same redundant loading state issue in `get-in-touch-form.tsx`

- Same pattern as 5.4
- **Action**: Remove from `.then` and `.catch`.

### 5.6 Rename `class` field in `ApplicationFormModel`

- `ApplicationFormModel` has a field named `class` — a reserved JavaScript keyword, which can cause confusion and subtle bugs
- **Action**: Rename to `degreeClass` in `_interfaces/application-form.ts`, `apply-now/page.tsx`, and `utils/common.ts`.

> [!WARNING]
> This is a **breaking change** to the MongoDB document schema. Existing documents in the `applications` collection use the field name `class`. Any rename must account for backward compatibility or a DB migration.

### 5.7 Remove `console.log` and `console.info` debug statements

The following files contain debug logging that should not be in production:

| File | Statement |
|---|---|
| `gfec-map.tsx` | `console.log("Marker Loaded")` in marker `onLoad` |
| `api/route.ts` | Multiple `console.info(res)` calls |
| `promo-popup.tsx` | `console.log(document.querySelector("#ad-img"))` |

- **Action**: Remove all `console.log`/`console.info` from production code. Keep `console.error` in `api/route.ts` (server-side error logging is acceptable).

### 5.8 Fix side-effect inside `useMemo` in `navigation.tsx`

- `const slides = useMemo(...)` performs DOM mutations (appending elements, scrolling) inside a `useMemo` — this is an anti-pattern. `useMemo` must be pure.
- **Action**: Move DOM mutation logic from `useMemo` to a `useEffect` with `[slideNo]` dependency. `useMemo` should only return the slides array.

### 5.9 Move social media URLs to constants

- Facebook, Instagram, LinkedIn URLs are duplicated across `nav-social.tsx` and `footer.tsx`
- **Action**: Extract to a `SOCIAL_LINKS` constant in `(site)/_constants/` and import in both components.

---

## Phase 6 — SEO & Metadata

> **Priority: LOW** — Important for search visibility, low technical risk.

### 6.1 Fix site layout metadata

**File**: `(site)/layout.tsx`

- Current: `title: "GFEC"`, `description: "GFEC DESC"` — placeholders
- **Action**: Update to:
  ```ts
  title: "GFEC | Gordon Foreign Education Consultancy",
  description: "GFEC helps students in Sri Lanka study abroad. We partner with universities worldwide for visa, admissions, and relocation support."
  ```

### 6.2 Fix root layout metadata

**File**: `layout.tsx`

- Current: `title: "Create Next App"`, `description: "Generated by create next app"` — default boilerplate
- **Action**: Same as 6.1 — update to GFEC-branded copy.

### 6.3 Add per-page metadata to key pages

- `about/page.tsx`, `destination/page.tsx`, `contact/page.tsx`, `apply-now/page.tsx` have no `export const metadata`
- **Action**: Add appropriate `metadata` exports to each page.

---

## Files to Delete

| File | Reason |
|---|---|
| `(site)/_components/success-stories.tsx` | Feature explicitly abandoned; never rendered; references non-existent audio/image assets |
| `(ui-test)/ui-test/` | Developer sandbox — not suitable for production; accessible at `/ui-test` in prod |
| `(site)/_components/promo-popup.tsx` | Commented out at usage; confirm with team before deleting |

---

## Open Questions

> [!IMPORTANT]
> **PromoPopUp**: Is this planned for future reactivation (e.g., for a next event)? If yes, keep the file but add a clear TODO comment. If no, delete it.

> [!IMPORTANT]
> **Countries commented out (Finland, Belarus, Sweden, Russia, Latvia, Switzerland)**: Are these permanently removed from the offering, or just temporarily disabled? This affects whether we clean up their image files, Tailwind classes, and component files (`fin.tsx`, `bel.tsx`, `swe.tsx`, `rus.tsx`, `lat.tsx`, `swi.tsx`).

> [!NOTE]
> **`(ui-test)` route group**: This is a developer sandbox accessible in production at `/ui-test`. Should it be deleted or excluded via a route config?

> [!NOTE]
> **`class` field renaming** in `ApplicationFormModel` (Phase 5.6): This is a schema-level breaking change. Existing MongoDB documents use the field name `class`. Requires a data migration plan before executing.

---

## Proposed Execution Order

```
Phase 1 → Phase 2 → Phase 4 → Phase 3 → Phase 5 → Phase 6
(Dead)   (Imports) (Naming) (TypeScript) (Logic)   (SEO)
```

Each phase builds on the previous — dead code removed first to avoid fixing code that gets deleted, then imports, then naming (rename once), then TypeScript (cleaner after naming), then logic fixes.

---

## Verification Plan

### After each phase
- Run `npm run lint` — zero new lint errors
- Run `npm run build` — TypeScript compiler produces zero errors

### Key pages to manually verify after all phases
- `/` — Banner slideshow runs without multiple interval leaks, navigation modal opens
- `/destination` — All 11 active countries render correctly; removed countries don't error
- `/contact` — Email links open email client (`mailto:`), Google Map loads
- `/apply-now` — Form submits correctly, loading state works
- `/admin` — Applications table loads, no console errors
