# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: prospective university students in Sri Lanka (and their parents, who are often the actual decision-makers/payers) planning to study abroad — evaluating destination countries, universities, programs, visa pathways, and costs, and needing a trustworthy local consultancy to guide the process end-to-end. Secondary: partner universities/agents (lower priority, not a primary design audience for this revamp).

## Product Purpose

GFEC (Gordon Foreign Education Consultancy / "GFE Consultancy") is a Colombo, Sri Lanka-based international education and student-visa consultancy. It helps Sri Lankan students go from "where should I study" to "I have my visa and I'm ready to fly" — program/university selection, admissions support, financial guidance, visa processing, accommodation guidance, and pre-departure briefing. Success = qualified student leads (consultation bookings, applications) who go on to enroll and successfully obtain a visa through GFEC's guidance.

## Positioning

A Sri Lanka-local, full-service consultancy (not a directory or self-serve tool): one point of contact who personally carries a student from program selection through visa approval and pre-departure, with direct working relationships with partner universities across 10 countries. Operating since 2021.

## Operating Context

- Lead capture happens through two live forms wired to production email + MongoDB: a "Get In Touch" consultation-booking form (`api/getInTouch`, `get-in-touch-form.tsx`) and a separate "Apply Now" student-application form (`apply-now/page.tsx`, its own API route). **Both must keep working exactly as-is (same fields, same validation, same submit endpoints) through the redesign** — only presentation changes.
- The office is physically visited (address + Google Maps link in the footer/contact page), called (`tel:` links), and emailed — this is a real local business with a real office, not a purely online product.
- WhatsApp button is present site-wide (fixed, per `(site)/layout.tsx`).
- Content is bilingual-adjacent in practice: real testimonials mix English and Sinhala as actually given by students — preserve as-is, do not translate or normalize.

## Capabilities and Constraints

- **Stack (existing, not up for revisiting):** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4 (CSS-based `@theme` tokens in `globals.css`, no `tailwind.config.ts` in active use), pnpm. Forms: `react-hook-form` + `zod` + `@hookform/resolvers/zod`. Animation: `motion` (Framer Motion successor). Icons: `lucide-react`.
- **URL structure must not change.** Current destination routes are `/study-abroad/{route}` where `route` is inconsistent casing per `countries.constants.ts` (`australia`, `france`, `germany`, `ireland`, `malta`, `singapore`, `south-korea`, `spain`, `UAE`, `united_kingdom`) — preserve exactly; do not "clean up" casing without a redirect plan, which is out of scope unless the user asks.
- **No fabricated facts.** Real trust numbers already exist in code (`summary-counter-group.tsx`): 14 Countries, 600+ Universities, 150+ Courses, 30+ Students, "since 2021." Real testimonials exist (2, in `success-stories-text.tsx`). Real university list exists (23 named institutions across the 10 countries, in `countries.constants.ts`). These are the only facts to use — do not invent additional stats, awards, or partnerships.
- Two country components are the reference pattern to generalize into one reusable template: `_components/countries/*.tsx` (currently one file per live country: aus, dxb, fra, ger, ireland, malta, singapore, sk, spain, uk).
- Admin dashboard (`(dashboard)` route group) is explicitly out of scope for this revamp — public marketing site only.
- No automated test suite in this repo; verification is manual (build + browser).

## Brand Commitments

- Name: **GFEC** (legal/trading name "GFE Consultancy" / "GEFC™" per footer copyright — keep existing usage as-is unless the user corrects it).
- Existing logo asset: `public/comp/GFEC-Trans.png` (transparent background) — reuse, do not redesign the logo mark itself.
- Country flag SVGs already exist per destination (`/au.svg`, `/fr.svg`, `/de.svg`, etc.) and should keep being used for destination identification.

## Evidence on Hand

- Real trust stats (see Capabilities above) — reuse verbatim, keep them easy to update later (already componentized as `SummaryCounter`).
- Real testimonials: Isanka Edirisooriya (University of Essex, UK) and Janitha & Manoharan Dineshan (UK visa, family of 4) — full text in `success-stories-text.tsx`. No other testimonials exist; do not add invented ones.
- Real gallery: ~90 event photos already organized into 4 categories (Agent Meetup, GDEU, Openday 2025 incl. a Granbell venue subset, Students) at `public/comp/events/**`.
- Real "Why choose GFEC" pillars (About page, existing copy): Personalized Guidance, Comprehensive Support, Unwavering Commitment — plus Vision and Mission statements with exact wording the user wants meaning preserved on.
- Real services list (8): Program Selection, University Selection, Offers & Admissions, Financial Guidance, Visa Processing Assistance, Pre-Departure Briefing, Accommodation Guidance, Immigration Guidance.
- Real contact facts: phone `0112271854`, email `info@gfeconsultancy.com`, address "408 (3rd Floor), Galle Road, Colombo 3," hours Mon–Fri 9–5, Sat 9–1, Sun closed.
- **Absence:** no case studies beyond the 2 testimonials above, no accreditation/award badges, no published success-rate or visa-approval percentage — none of these may be fabricated for the redesign.

## Product Principles

1. Preserve every business fact, form, and API integration exactly — this redesign is a presentation and information-architecture transformation, not a content or backend rewrite.
2. Never invent numbers, partnerships, awards, or claims not already present in the codebase or explicitly given by the user.
3. Sri Lankan students and their parents are the audience — copy and trust signals should speak to that specific relationship (a parent researching on behalf of, or alongside, a teenager/young-adult applicant), not a generic global-student tone.
4. The two lead-generation forms (Get In Touch, Apply Now) are the commercial core of the site — their functioning correctness outranks any visual risk taken elsewhere.
5. Country/destination pages must stay data-driven from one reusable template, not one-off hand-built pages per country, so new destinations are cheap to add later.

## Accessibility & Inclusion

No project-specific accessibility requirement was stated beyond the general WCAG-friendly-contrast and keyboard/ARIA expectations already named in the user's brief (`GFEC_REVAMP_INSTRUCTIONS.md` §21) — treat that as the standard to meet.
