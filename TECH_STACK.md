# GFEC — Tech Stack

> **Gordon Foreign Education Consultancy** — A website helping students in Sri Lanka migrate and study abroad.
> GFEC partners with colleges/universities across the globe to link with students in Sri Lanka.

---

## 1. Framework & Runtime

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | `13.5.1` | Full-stack React framework (App Router) |
| **React** | `18.2.0` | UI library |
| **React DOM** | `18.2.0` | React DOM renderer |
| **TypeScript** | `5.2.2` | Static typing (strict mode enabled) |
| **Node.js** | — | Server runtime (API routes, SSR) |

- **Router**: Next.js **App Router** (`src/app/` directory)
- **Rendering**: Server Components (RSC) enabled — confirmed via `components.json` (`"rsc": true`)
- **Compiler**: SWC (Next.js built-in, `swcMinify: true`)
- **Target**: ES5 (`tsconfig.json`)

---

## 2. Styling

| Technology | Version | Purpose |
|---|---|---|
| **Tailwind CSS** | `3.3.3` | Utility-first CSS framework |
| **PostCSS** | `8.4.30` | CSS processing pipeline |
| **Autoprefixer** | `10.4.15` | Vendor prefix automation |
| **tailwindcss-animate** | `^1.0.7` | Tailwind animation utilities |
| **tailwind-merge** | `^1.14.0` | Merge Tailwind classes without conflicts |
| **clsx** | `^2.0.0` | Conditional className composition |
| **class-variance-authority (CVA)** | `^0.7.0` | Component variant management |
| **Custom CSS** | — | Extensive `globals.css` (714 lines) with custom keyframes, slider overrides, form styles |

### Design Tokens (Tailwind)

- **Primary**: `#BD9519` (Gold)
- **Secondary**: `#000080` (Navy Blue)
- **Accent**: `#040607` (Near-black)
- **Background**: `alice-blue` (`#DAEAF7`)

### Typography

- **Font**: `Ubuntu` (weight 400, Google Fonts via `next/font`)

---

## 3. UI Components & Libraries

| Library | Version | Purpose |
|---|---|---|
| **shadcn/ui** | — | Component library (New York style, Stone base color, CSS variables) |
| **Radix UI Icons** | `^1.3.0` | Icon set (used by shadcn/ui) |
| **Font Awesome** | `^6.4.2` | Icon set (brands, regular, solid) |
| **react-slick** | `^0.29.0` | Carousel / slider component |
| **slick-carousel** | `^1.8.1` | Slick carousel CSS/assets |
| **Swiper** | `^10.3.0` | Modern touch slider (with custom JSX typings via `swiper.d.ts`) |
| **Plyr React** | `^5.3.0` | Video player component |
| **react-intersection-observer** | `^9.5.3` | Intersection Observer hook for scroll-based animations/lazy loading |
| **react-device-detect** | `^2.2.3` | Device detection (mobile vs. desktop) |

### Custom UI Components (`src/app/_components/ui/`)

- `button.tsx` — App-wide button
- `checkbox.tsx` — Custom checkbox
- `radio.tsx` — Custom radio
- `input.tsx` — Form input
- `select.tsx` — Dropdown select
- `increment-input.tsx` — Number stepper
- `modal.tsx` — Dialog/modal
- `table.tsx` — Data table
- `typography.tsx` — Text component system

---

## 4. Forms & Validation

| Library | Version | Purpose |
|---|---|---|
| **React Hook Form** | `^7.46.2` | Form state management |
| **@hookform/resolvers** | `^3.3.1` | Schema-based validation resolvers |
| **Yup** | `^1.3.1` | Schema validation library |

---

## 5. Data Fetching

| Library | Version | Purpose |
|---|---|---|
| **SWR** | `^2.2.4` | React Hooks for data fetching (stale-while-revalidate) |
| **Fetch API** | Built-in | Custom `Fetcher` utility in `utils/common.ts` |

---

## 6. Backend / API Layer

### API Routes (Next.js Route Handlers)

All server-side logic lives inside `src/app/api/`:

| Endpoint | Purpose |
|---|---|
| `api/` (root `route.ts`) | GET health check + POST "Get In Touch" form → MongoDB + email notifications |
| `api/application/` | Student application handling |
| `api/apply/` | Apply Now form submissions |
| `api/getInTouch/` | Contact / inquiry submissions |
| `api/promo-register/` | Promotional event registrations |

### Database

| Technology | Version | Purpose |
|---|---|---|
| **MongoDB** (Atlas) | `^6.2.0` (`mongodb` driver) | Primary database — collections: `getInTouch`, `logger`, applications |

- Connection via MongoDB Atlas (`mongodb+srv://`)
- Database name: `gfec`

### Email

| Technology | Version | Purpose |
|---|---|---|
| **Nodemailer** | `^6.9.7` | Transactional email (SMTP via Gmail) |

- Sends notifications to multiple GFEC staff emails on form submissions
- HTML-formatted email templates generated server-side

---

## 7. Third-Party Integrations

| Service | Purpose |
|---|---|
| **Google Maps** (`@react-google-maps/api ^2.19.2`) | Office location map on Contact page |
| **Google Analytics** (`gtag.js`, ID: `G-VGW6MGB10Q`) | Website analytics tracking |
| **Vercel Analytics** (`@vercel/analytics ^1.1.1`) | Performance + usage analytics |
| **Vercel Speed Insights** (`@vercel/speed-insights ^1.0.1`) | Core Web Vitals monitoring |

---

## 8. Data Tables

| Library | Version | Purpose |
|---|---|---|
| **TanStack React Table** | `^8.10.7` | Headless table component (admin dashboard) |

---

## 9. Deployment & Hosting

| Service | Purpose |
|---|---|
| **Vercel** | Hosting & CI/CD (Next.js native support) |

- Preview deployments via `NEXT_PUBLIC_VERCEL_BRANCH_URL`
- Environment-aware base URL resolution (`production` / `preview`)

---

## 10. Code Quality

| Tool | Version | Purpose |
|---|---|---|
| **ESLint** | `8.49.0` | Linting |
| **eslint-config-next** | `13.5.1` | Next.js-specific ESLint rules (`next/core-web-vitals`) |
| **TypeScript** | `5.2.2` | Type checking (strict mode) |

---

## 11. Project Architecture

```
src/app/
├── (site)/                    # Public-facing website (route group)
│   ├── _components/           # Site-specific components
│   │   ├── countries/         # 17 country-specific components (aus, uk, can, etc.)
│   │   ├── layouts/           # Layout wrappers (container, form layout)
│   │   ├── ui/                # Slider arrows
│   │   └── *.tsx              # Navigation, Footer, Testimonials, Forms, etc.
│   ├── _constants/            # Country data, nav items
│   ├── _types/                # Country, MobileNavItem types
│   ├── about/                 # About page
│   ├── apply-now/             # Multi-step application form
│   ├── contact/               # Contact page
│   ├── destination/           # Study destinations page
│   ├── open-day-register/     # Open day event registration
│   ├── privacy-policy/        # Privacy policy page
│   ├── layout.tsx             # Site layout (Nav + Footer + Analytics)
│   └── page.tsx               # Home page
│
├── (dashboard)/               # Admin dashboard (route group)
│   ├── _components/           # Dashboard components (SideNav, Loader)
│   ├── _constants/            # Dashboard nav items
│   ├── _types/                # Dashboard types
│   └── admin/                 # Admin pages (applications, inquiries, insights)
│
├── (ui-test)/                 # UI testing sandbox
│
├── _components/ui/            # Shared UI primitives (shadcn/ui style)
├── _hooks/                    # Custom hooks (MutationObserver, NavigationEvent, NavigationHeight)
├── _interfaces/               # Shared TypeScript interfaces (ApplicationForm, OpenDayRegister, Response)
├── api/                       # Next.js API route handlers
├── utils/                     # Utility functions (cn, Fetcher, BaseUrl resolver)
├── globals.css                # Global styles (714 lines)
└── layout.tsx                 # Root layout (Google Analytics, Ubuntu font)
```

### Key Architecture Patterns

- **Route Groups**: `(site)` for public pages, `(dashboard)` for admin, `(ui-test)` for dev sandbox
- **Colocation**: Components, constants, and types colocated with their route groups (prefixed with `_`)
- **Server Components**: Default RSC with client components where needed
- **No auth layer**: Admin dashboard currently has no authentication

---

## 12. Static Assets

- **80+ files** in `/public/` — country flags (SVG), country banners (JPG), icons, about images
- **Formats**: SVG, JPG, JPEG, PNG, WebP, GIF
- **Logo**: `GFEC-Trans.png`
- Country coverage: Australia, UK, Canada, Finland, Belarus, Germany, Italy, Sweden, Russia, France, Netherlands, Latvia, Switzerland, Dubai, Malta, Spain, Ireland

---

## 13. Environment Variables

| Variable | Purpose |
|---|---|
| `MONGO_URL` | MongoDB Atlas connection string |
| `API_BASE_URL` | API endpoint base URL |
| `APP_BASE_URL` | Application base URL |
| `NODEMAILER_*` | Email service config (service, user, password, port) |
| `TO_MAIL`, `TO_MAIL_1-3` | Notification recipient emails |
| `GL_MAP_KEY` | Google Maps API key |
| `LAT`, `LNG` | Office coordinates (Kirulapone, Sri Lanka) |
| `EMAILS`, `PHONE` | Public contact info |
| `ADDRESS_LINE_1-3` | Office address |
| `APP_VER` | Application version |

---

## 14. Dev Scripts

```json
{
  "dev": "next dev -p 8080",
  "dev2": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

- Default dev port: **8080** (custom), fallback: **3000**
- No test runner configured
- No CI/CD pipeline files present (relies on Vercel auto-deploy)
