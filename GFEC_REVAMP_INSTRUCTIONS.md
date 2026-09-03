# GFEC — Complete Website Redesign & Modernization

You are a senior product designer, UX designer, and frontend engineer specializing in premium education, study-abroad, and international student platforms.

I want you to completely redesign and modernize the existing **GFEC (GFE Consultancy)** website.

Current website:
https://www.gfeconsultancy.com/

The goal is NOT to simply change colors, fonts, or spacing.

The goal is to transform the entire website into a:

**Premium + Modern + Trustworthy + Global + Human + Conversion-focused education consultancy platform.**

GFEC helps students from Sri Lanka pursue international education opportunities.

---

# 1. IMPORTANT — EXISTING WEBSITE

Before writing code:

Inspect the existing application and understand:

* Framework
* Routing
* Components
* Styling
* Data structures
* Existing assets
* Images
* University data
* Destination data
* Forms
* APIs
* Existing integrations
* Existing navigation
* Existing business logic

Also inspect the current live website pages:

* /
* /about
* /study-abroad
* /study-abroad/australia
* /gallery
* /contact

The existing website contains important business content and assets.

**Do not remove existing functionality or factual content simply because the UI is being redesigned.**

Reuse existing content where appropriate.

Improve wording where necessary for clarity and conversion, but do not invent business claims.

---

# 2. COMPLETE PAGE STRUCTURE

Redesign ALL of the following pages.

## Main pages

### Homepage

`/`

### About

`/about`

### Study Abroad / Destinations

`/study-abroad`

### Destination Detail

`/study-abroad/australia`

Also create the same reusable destination-detail architecture for the other destinations already present in the application.

### Gallery

`/gallery`

### Contact

`/contact`

The design system must remain visually consistent across every page.

---

# 3. DESIGN PHILOSOPHY

The website should feel like a modern international education brand rather than a traditional consultancy website.

Visual references should be closer to:

* Premium university websites
* Modern SaaS landing pages
* High-end travel websites
* International education platforms
* Modern immigration/consulting brands

Design characteristics:

* Strong typography
* Large editorial layouts
* Generous whitespace
* High-quality imagery
* Sophisticated cards
* Subtle borders
* Soft shadows
* Elegant interactions
* Strong visual hierarchy
* Premium CTA design
* Clear conversion paths

Avoid:

* Generic Bootstrap layouts
* Old-fashioned corporate sections
* Excessive rounded cards
* Excessive gradients
* Excessive glassmorphism
* Huge paragraphs
* Random animations
* Too many colors
* Cheap-looking stock UI
* Repetitive cards everywhere
* "AI-generated website" visual appearance

---

# 4. DESIGN SYSTEM

Create a unified design system.

## Typography

Use a premium modern font such as:

* Manrope
* Inter
* Plus Jakarta Sans
* DM Sans

Recommended:

Large headings:
Bold / Extra Bold

Body:
Regular / Medium

Buttons:
Medium / Semi-bold

Create a clear typography scale.

Example:

Hero:
64–80px desktop

Section headings:
42–56px

Card headings:
20–28px

Body:
16–18px

Mobile typography should scale appropriately.

---

# 5. COLOR SYSTEM

Use a sophisticated education/global brand palette.

Primary:
Deep Navy / Midnight Blue

Secondary:
Royal Blue

Accent:
Warm Gold / Amber

Background:
Off-white / very light neutral

Text:
Dark charcoal

Muted:
Neutral gray

Use accent colors sparingly.

Create design tokens/CSS variables for:

--background
--foreground
--primary
--secondary
--accent
--muted
--border
--card
--success
--warning

Ensure WCAG-friendly contrast.

---

# 6. GLOBAL HEADER

Create a premium sticky navigation.

Desktop:

Logo

Navigation:

* Home
* About
* Study Destinations
* Gallery
* Contact

Add a prominent CTA:

**Book a Free Consultation**

Optionally:

**Apply Now**

Header behavior:

Initial:
Transparent/overlay depending on page.

On scroll:
Solid background + subtle border/shadow.

Smooth transition.

Mobile:
Beautiful full-screen/drawer navigation.

Do not make the mobile menu look like a default hamburger implementation.

---

# 7. GLOBAL CTA STRATEGY

The website is designed to generate student leads.

Primary CTA throughout the website:

**Book a Free Consultation**

Secondary CTA:

**Explore Destinations**

Use contextual CTAs throughout pages.

Examples:

"Not sure where to study?"
→ Talk to a Consultant

"Find the right university"
→ Explore Universities

"Ready to start?"
→ Apply Now

---

# 8. HOMEPAGE `/`

Create a premium landing page.

## Hero

Create a strong visual hero.

Headline:

**Turn Your Study Abroad Dreams Into Reality.**

Supporting message:

"From choosing the right university to navigating your visa journey, GFEC supports you every step of the way."

CTA:

**Start Your Journey**

Secondary:

**Explore Destinations**

Hero visual:

Use existing high-quality assets where possible.

Create a sophisticated composition involving:

* International student
* University/campus imagery
* Travel/global imagery
* Destination indicators
* Floating information cards

Avoid generic centered hero designs.

---

## Trust Statistics

Use actual data from the application.

Possible categories:

* Countries
* University Partners
* Students
* Courses

DO NOT INVENT NUMBERS.

If real numbers aren't currently available, create the UI so the values can easily be populated later.

Use subtle count-up animations.

---

## Why GFEC

Headline:

**More Than Admissions. We Build Your Path Forward.**

Highlight:

* Personalized Guidance
* Global University Network
* End-to-End Support
* Visa Assistance
* Financial Guidance
* Pre-Departure Support

Use a visually interesting layout instead of six identical cards.

---

## Services

Present GFEC services as a student journey.

Current services include:

1. Program Selection
2. University Selection
3. Offers & Admissions
4. Financial Guidance
5. Visa Processing Assistance
6. Pre-Departure Briefing
7. Accommodation Guidance
8. Immigration Guidance

Create numbered service blocks.

Use:

01
02
03
...

Make the section feel editorial and premium.

---

## Study Destinations

Create a visually rich destination explorer.

Destinations currently include:

* Australia
* France
* Germany
* Ireland
* Malta
* Singapore
* South Korea
* Spain
* UAE
* United Kingdom

Use large image-driven cards.

Each card:

Country
Short description
Explore button

Hover:

Image zoom
Overlay transition
Arrow movement

Mobile:
Horizontal swipe experience.

---

## University Partners

Create a premium university discovery section.

Display:

* University logo
* University name
* Country
* Location
* Established year
* Popular programs

Add filters:

All
Australia
UK
Ireland
Germany
France
Spain
UAE
Singapore
Malta

Do not invent universities.

Use existing data.

---

## Student Journey

Create an elegant visual timeline.

01 Discover
02 Choose
03 Apply
04 Visa
05 Prepare
06 Fly

Each step should have concise supporting content.

Use subtle scroll animation.

---

## Testimonials

Create a premium testimonial carousel.

Include only existing testimonials.

Each card can contain:

Student photo
Student name
University
Country
Testimonial

Feature one testimonial prominently.

---

## Final CTA

Create a strong closing section:

**Your Global Future Starts Here.**

Supporting text:

"Tell us where you want to study. We'll help you figure out how to get there."

CTA:

**Book a Free Consultation**

---

# 9. ABOUT PAGE `/about`

The existing About page contains:

* Company introduction
* Vision
* Mission
* Personalized Guidance
* Comprehensive Support
* Unwavering Commitment

Redesign the page completely.

## Hero

Large editorial hero.

Headline:

**Helping Sri Lankan Students Build Global Futures.**

Use a high-quality team/student image.

Add breadcrumb:

Home / About GFEC

---

## About GFEC

Create a split layout:

LEFT:
Large image composition.

RIGHT:
Company story.

Do not display a huge block of text.

Break content into readable sections.

---

## Vision & Mission

Instead of two ordinary cards:

Create a visually strong split section.

VISION

"To be a market leader and most reliable organization in International Education Consultation Services in Sri Lanka."

MISSION

"To provide accurate information, professional service and maintain the highest level success rate in international education student enrollments."

Keep factual meaning intact.

---

## Our Approach

Create three pillars:

01 Personalized Guidance
02 Comprehensive Support
03 Unwavering Commitment

Use elegant iconography.

---

## Why Students Choose GFEC

Create a more emotional section explaining the student experience.

Focus on:

Guidance
Clarity
Support
Confidence
Global opportunities

Do not invent unsupported statistics or claims.

---

## CTA

**Ready to Start Your International Education Journey?**

Book a Free Consultation.

---

# 10. STUDY ABROAD PAGE `/study-abroad`

This page should become the primary destination discovery experience.

## Hero

Headline:

**Choose Where Your Future Takes You.**

Supporting copy about exploring global study destinations.

Use a strong destination image.

---

## Destination Explorer

Create an immersive destination grid.

For each country:

Large image
Country name
Short description
Explore button

Destinations:

Australia
France
Germany
Ireland
Malta
Singapore
South Korea
Spain
UAE
United Kingdom

Use existing destination content.

---

## Interactive Experience

Consider adding:

* Hover states
* Country filters
* Featured destination
* Search
* Smooth transitions

Do not overcomplicate the UX.

---

## Help Me Choose

Add a conversion section:

**Not Sure Which Country Is Right For You?**

Supporting text:

"Our consultants can help you compare destinations based on your education goals, career plans and personal preferences."

CTA:

**Talk to a Consultant**

---

# 11. DESTINATION DETAIL PAGE

Example:

`/study-abroad/australia`

Build a reusable destination detail template.

The Australia page currently contains:

* Hero
* Country introduction
* University list
* Why Choose Australia

Redesign all of this.

---

## Destination Hero

Example:

**Study in Australia**

Use a stunning Australia image.

Include:

Breadcrumb:
Home / Study Abroad / Australia

CTA:

**Explore Australian Universities**

---

## Country Introduction

Use a split editorial layout.

LEFT:
Large destination image.

RIGHT:
Country overview.

Do not create an enormous wall of text.

---

## Quick Facts

Create a visual facts row.

Potential data points only if supported by existing data:

* Universities
* Popular Study Areas
* Major Cities
* International Students

Do not invent values.

---

## Universities

Create premium university cards.

Existing Australia universities include:

* Edith Cowan College
* CQUniversity
* University of Tasmania
* La Trobe University
* Deakin College

Use actual application data.

Card:

Logo
University
Location
Established
Popular programs
Learn More

---

## Why Choose Australia?

Current content includes:

* Top-tier universities and global recognition
* Work & stay opportunities
* Pathway to permanent residency

Redesign as a visual benefits section.

IMPORTANT:

Visa, work-right, and PR information can change over time.

Do not strengthen or rewrite these claims into guarantees.

Where appropriate, include a small disclaimer encouraging students to verify current immigration requirements with official sources.

---

## CTA

**Thinking About Studying in Australia?**

CTA:

**Speak With a Consultant**

---

# 12. DESTINATION ARCHITECTURE

Make the destination page reusable.

Example route structure:

/study-abroad/australia
/study-abroad/france
/study-abroad/germany
/study-abroad/ireland
/study-abroad/malta
/study-abroad/singapore
/study-abroad/south-korea
/study-abroad/spain
/study-abroad/uae
/study-abroad/uk

Do not create completely separate hardcoded page structures.

Create reusable components/data.

For example:

DestinationPage
DestinationHero
DestinationOverview
DestinationFacts
DestinationUniversities
DestinationBenefits
DestinationCTA

Destination data should live separately.

---

# 13. GALLERY PAGE `/gallery`

The existing gallery contains approximately 71 images organized into categories including:

* Agent Meetup
* GDEU
* Openday 2025
* Students

Redesign the gallery as a premium visual experience.

---

## Gallery Hero

Headline:

**Moments From the GFEC Journey**

Supporting text:

"Explore moments from our events, student experiences and university engagements."

---

## Category Filters

Create elegant filter tabs:

All
Agent Meetup
GDEU
Openday
Students

Display counts where available.

---

## Masonry Gallery

DO NOT use a boring uniform grid.

Use a responsive masonry/editorial gallery.

Vary image sizes.

Examples:

Large featured image
Small image
Portrait
Landscape

Maintain visual rhythm.

---

## Image Interaction

Clicking an image should open a premium lightbox.

Features:

* Fullscreen image
* Next/previous
* Close
* Keyboard navigation
* Caption/category
* Mobile swipe

Add subtle animations.

Optimize gallery images for performance.

Use lazy loading.

---

# 14. CONTACT PAGE `/contact`

The current contact page contains:

Phone
Email
Address
Office hours
Social media
Map
Consultation form

Redesign the page completely.

---

## Hero

Headline:

**Let's Plan Your Global Future.**

Supporting copy:

"Have questions about studying abroad? Our consultants are ready to help."

---

## Contact Information

Create a premium information section.

Phone
0112271854

Email
[info@gfeconsultancy.com](mailto:info@gfeconsultancy.com)

Address
408 (3rd Floor),
Galle Road,
Colombo 3

Office Hours:

Monday–Friday
9:00 AM – 5:00 PM

Saturday
9:00 AM – 1:00 PM

Sunday
Closed

Use existing information.

---

## Consultation Form

Redesign the existing form.

Suggested fields:

First Name
Last Name
Email
Mobile
Preferred Study Destination
Preferred Date
Preferred Time
Message

CTA:

**Book My Consultation**

Add:

* Proper validation
* Error states
* Loading state
* Success state
* Accessible labels
* Mobile-friendly inputs

Do not break the existing form submission functionality.

---

## Map

Create a visually integrated map section.

Use the existing location.

Do not expose unnecessary location data beyond the existing business address.

---

# 15. FOOTER

Create one global footer used across every page.

Include:

GFEC logo

Short description.

Navigation:

Explore
About
Study Destinations
Gallery
Contact

Contact information.

Social links.

Privacy Policy.

Copyright.

Keep footer clean and modern.

---

# 16. PAGE TRANSITIONS

Add subtle page transitions.

Use:

* Fade
* Slide
* Image reveal

Keep them fast.

Do not create slow cinematic transitions that hurt usability.

---

# 17. MICRO INTERACTIONS

Use tasteful interactions:

Buttons:
Arrow movement

Cards:
Subtle lift / image zoom

Links:
Underline/arrow animation

Images:
Soft scale

Sections:
Reveal on scroll

Stats:
Count-up

Navigation:
Smooth active state

Everything should feel intentional.

---

# 18. MOBILE EXPERIENCE

Mobile is NOT an afterthought.

Test:

375px
390px
414px
768px
1024px
1440px+

Pay particular attention to:

Hero
Navigation
Destination cards
University cards
Gallery
Forms
CTAs
Footer

No horizontal overflow.

---

# 19. SEO — BUILD A STRONG SEO FOUNDATION FROM SCRATCH

SEO is a **critical requirement** for this project.

The current GFEC website should NOT be assumed to be SEO-friendly.

Treat the existing website as having **limited / inadequate SEO implementation** and use this redesign as an opportunity to build a proper technical and on-page SEO foundation from scratch.

However, do NOT blindly rewrite all existing website content.

The goal is:

**Modern UI + Strong SEO Architecture + SEO-optimized content structure + Preserved valuable existing content**

---

# 19.1 SEO AUDIT BEFORE IMPLEMENTATION

Before redesigning the pages, perform an SEO audit of the existing website/codebase.

Review:

* Page titles
* Meta descriptions
* H1/H2/H3 structure
* URL structure
* Internal linking
* Image alt text
* Canonical URLs
* Robots.txt
* XML sitemap
* Open Graph metadata
* Structured data
* Indexability
* Noindex directives
* Crawlability
* Duplicate content
* Missing metadata
* Broken links
* Orphan pages
* Page speed
* Mobile SEO
* Semantic HTML
* Existing keyword targeting

Identify SEO problems and fix them as part of the redesign.

Do not simply assume that existing SEO implementation is correct.

---

# 19.2 SEO CONTENT RULE — VERY IMPORTANT

The current website content is NOT necessarily SEO-optimized.

Therefore:

**You ARE allowed to improve, restructure, expand, and optimize content where necessary for SEO.**

However:

**Do NOT completely rewrite every existing page from scratch.**

Preserve useful existing factual content.

Do not remove valuable information simply to make the page shorter.

Where existing content is weak:

* Improve the wording
* Improve keyword targeting
* Improve headings
* Improve search intent alignment
* Add missing context
* Improve readability
* Add useful supporting sections

Where existing content is already useful:

**Keep it and improve its structure/presentation.**

---

# 19.3 SEO CONTENT + UI MUST WORK TOGETHER

Do not sacrifice SEO content for visual design.

A modern page can still contain substantial SEO content.

For example, a destination page such as:

`/study-abroad/australia`

should not consist only of:

Hero
Image
University cards
CTA

It should also provide useful search-oriented information such as:

* Study in Australia
* Why study in Australia
* Universities
* Popular courses
* Entry requirements
* Application process
* Cost/living information where existing data supports it
* Student experience
* Career/work opportunities where factually appropriate
* Visa information
* FAQs

Only add factual sections where reliable content is available.

**Do not invent facts, statistics, visa rules, university partnerships, or guarantees.**

---

# 19.4 KEYWORD STRATEGY

Build an intentional keyword/topic strategy for GFEC.

Primary topic:

**Study Abroad Consultancy Sri Lanka**

Related topics:

* Study abroad Sri Lanka
* Overseas education consultancy Sri Lanka
* International education consultancy Sri Lanka
* Study abroad consultants Sri Lanka
* Study overseas from Sri Lanka
* Foreign university admissions Sri Lanka
* Student visa assistance Sri Lanka
* Study destinations from Sri Lanka

Build supporting destination topics such as:

### Australia

* Study in Australia from Sri Lanka
* Study in Australia
* Australian universities for international students
* Australia study visa
* Study abroad Australia Sri Lanka

### United Kingdom

* Study in UK from Sri Lanka
* UK universities for international students
* Study abroad UK Sri Lanka

### Ireland

* Study in Ireland from Sri Lanka
* Ireland universities for international students

And similarly for the other destinations.

Do NOT keyword stuff.

Focus on search intent and topical relevance.

---

# 19.5 PAGE-SPECIFIC SEO

Every important page should have a clear search intent.

## Homepage `/`

Primary topic:

**Study Abroad Consultancy Sri Lanka**

Suggested title:

**GFEC | Study Abroad Consultancy in Sri Lanka**

Create a compelling meta description based on the actual services GFEC provides.

H1 should clearly communicate the business and primary service.

Example:

**Your Trusted Partner for Studying Abroad**

Supporting copy should naturally include relevant context around studying abroad from Sri Lanka.

---

## About `/about`

Search intent:

Education consultancy / study abroad consultancy / overseas education services.

Create:

* Unique title
* Unique meta description
* One H1
* Proper H2/H3 structure
* Relevant internal links

Preserve useful existing company information.

---

## Study Abroad `/study-abroad`

Primary topic:

**Study Abroad from Sri Lanka**

Create content covering:

* Study abroad destinations
* Countries available
* How GFEC helps students
* University selection
* Application support
* Visa assistance
* Student journey

Ensure every destination links to its corresponding destination page.

---

## Australia `/study-abroad/australia`

Primary topic:

**Study in Australia from Sri Lanka**

Optimize around relevant search intent.

Preserve existing Australia information while improving:

* Heading structure
* Content organization
* Internal links
* Metadata
* Semantic HTML
* FAQ opportunities
* University information

---

## Gallery `/gallery`

Gallery is primarily visual, but it should still have:

* SEO-friendly title
* Meta description
* H1
* Introductory content
* Descriptive image alt text
* Crawlable category/content structure

Do not expect the gallery itself to be a major traffic page, but make it technically SEO-friendly.

---

## Contact `/contact`

Optimize for:

* Education consultancy contact
* Study abroad consultation Sri Lanka
* Study abroad consultants Colombo

Include:

* H1
* Useful introductory copy
* Contact information
* Location information
* Consultation CTA
* Local business structured data where appropriate

---

# 19.6 HEADING STRUCTURE

Every page should have a logical hierarchy.

Example:

H1
Study in Australia from Sri Lanka

H2
Why Study in Australia?

H2
Australian Universities

H3
University Name

H2
Popular Study Areas

H2
How GFEC Helps You

H2
Application Process

H2
Frequently Asked Questions

Do not use headings purely for visual styling.

Do not skip heading levels unnecessarily.

Use semantic headings based on content hierarchy.

---

# 19.7 TITLE TAGS

Every indexable page must have a unique title.

Do not duplicate titles across pages.

Use a consistent structure.

Example:

Homepage:
GFEC | Study Abroad Consultancy in Sri Lanka

About:
About GFEC | Study Abroad Consultants in Sri Lanka

Study Abroad:
Study Abroad from Sri Lanka | GFEC

Australia:
Study in Australia from Sri Lanka | GFEC

Gallery:
GFEC Gallery | Student Experiences & Events

Contact:
Contact GFEC | Study Abroad Consultation Sri Lanka

These are examples.

Review and improve them based on actual page content and search intent.

---

# 19.8 META DESCRIPTIONS

Every indexable page must have a unique meta description.

Descriptions should:

* Match the actual page
* Include relevant search intent naturally
* Encourage clicks
* Avoid keyword stuffing
* Avoid duplicate descriptions

Do not use the same meta description everywhere.

---

# 19.9 INTERNAL LINKING

Build a strong internal linking architecture.

Homepage should link to:

Study Abroad
About
Services
Destinations
Contact

Study Abroad should link to every destination.

Destination pages should link to:

Relevant universities
Related destinations where appropriate
Contact
Consultation

About should link to:

Study Abroad
Contact

Gallery should link to:

About
Contact
Study Abroad

Contact should link back to:

Study Abroad
Destinations

Use descriptive anchor text.

Avoid generic anchors such as:

"Click here"

Prefer:

"Explore study opportunities in Australia"

---

# 19.10 BREADCRUMBS

Implement breadcrumbs on deeper pages.

Example:

Home
→ Study Abroad
→ Australia

Use:

* Visible breadcrumb UI
* Semantic markup
* BreadcrumbList structured data

Do not show breadcrumbs on the homepage.

---

# 19.11 STRUCTURED DATA

Implement appropriate Schema.org structured data.

Potential schemas:

* Organization
* EducationalOrganization where appropriate
* LocalBusiness where appropriate
* WebSite
* WebPage
* BreadcrumbList
* FAQPage where genuine FAQs exist

Use accurate business information.

Do NOT add fake reviews, ratings, awards, affiliations, or statistics to structured data.

Structured data must accurately represent visible/real content.

---

# 19.12 FAQ SEO

Where useful, create FAQ sections on relevant pages.

For example, destination pages may have questions such as:

* Why should I study in Australia?
* What universities can I apply to?
* How does the application process work?
* Can GFEC help with visa processing?
* What support does GFEC provide?

Only add questions that can be answered accurately.

Use actual useful answers.

Do not create FAQs purely to insert keywords.

If FAQ structured data is used, ensure the FAQ content is visible to users on the page.

---

# 19.13 IMAGE SEO

Optimize all images.

Use:

* Descriptive filenames where practical
* Proper alt text
* Width/height attributes
* Responsive images
* WebP/AVIF where appropriate
* Lazy loading below the fold

Alt text must describe the actual image.

For example:

Bad:

"image"

"IMG_1234"

Good:

"GFEC students attending an international education event"

Do not keyword stuff alt text.

---

# 19.14 URL STRUCTURE

Preserve the current URL structure wherever possible.

Important URLs:

`/`

`/about`

`/study-abroad`

`/study-abroad/australia`

`/gallery`

`/contact`

Keep destination URLs structured consistently:

`/study-abroad/{country}`

Do not unnecessarily change existing URLs.

If a URL MUST change:

* Add a 301 redirect
* Update internal links
* Update canonical
* Update sitemap
* Check for broken links

---

# 19.15 CANONICAL URLs

Every indexable page should have the correct canonical URL.

Prevent:

* Duplicate canonical URLs
* Missing canonical URLs where needed
* Incorrect domain variations
* Query-parameter duplicates

Use the preferred HTTPS URL.

---

# 19.16 XML SITEMAP

Create or properly configure an XML sitemap.

Include all important indexable pages:

* Homepage
* About
* Study Abroad
* Destination pages
* Gallery
* Contact
* Other important public pages

Exclude:

* Admin pages
* Internal tools
* API routes
* Duplicate pages
* Non-indexable pages

Ensure the sitemap uses canonical URLs.

---

# 19.17 ROBOTS.TXT

Create/review robots.txt.

Ensure search engines can crawl important public pages.

Do NOT accidentally block:

* Homepage
* About
* Study Abroad
* Destination pages
* Gallery
* Contact
* CSS
* Important JavaScript required for rendering

Block only genuinely private/system areas.

---

# 19.18 INDEXABILITY

Review every route.

Ensure important public pages are:

* Indexable
* Crawlable
* Canonicalized
* Included in sitemap

Check for accidental:

`noindex`

`nofollow`

robots restrictions

Do not add noindex simply because a page currently has little content.

---

# 19.19 SEMANTIC HTML

Use semantic HTML throughout.

Prefer:

`header`

`nav`

`main`

`section`

`article`

`footer`

`aside`

Use buttons for actions.

Use links for navigation.

Do not use clickable `<div>` elements when a semantic button/link is appropriate.

---

# 19.20 MOBILE SEO

The mobile website must contain the same important SEO content as desktop.

Do NOT create a simplified mobile version that removes important content.

If accordions are used:

Keep the content in the DOM.

Ensure search engines and users can access it.

---

# 19.21 PERFORMANCE SEO

Optimize Core Web Vitals.

Pay particular attention to:

* LCP
* CLS
* INP

Optimize:

* Hero images
* Fonts
* JavaScript
* CSS
* Gallery images
* Third-party scripts

Avoid unnecessarily loading every gallery image immediately.

---

# 19.22 SEO-FRIENDLY CONTENT MANAGEMENT

Keep content/data separate from components where practical.

For example:

`destinations.ts`

`universities.ts`

`services.ts`

`seo.ts`

The SEO metadata should be easy to maintain.

For destination pages, create structured SEO data such as:

* title
* metaDescription
* h1
* intro
* sections
* FAQs
* canonical
* image
* alt text

This allows new destinations to be added without duplicating page logic.

---

# 19.23 DO NOT OVER-OPTIMIZE

Do NOT:

* Keyword stuff
* Repeat the same keyword unnaturally
* Hide SEO content
* Create invisible text
* Create doorway pages
* Generate meaningless pages for keywords
* Duplicate destination content
* Add fake reviews
* Add fake statistics
* Add fake structured data
* Create hundreds of thin pages

Prioritize useful content for real students.

---

# 19.24 SEO CONTENT MANUAL REVIEW

I will manually review and update SEO copy later.

Therefore, whenever you create or significantly improve SEO-focused content, make it easy for me to locate.

Add clear comments where appropriate:

`// SEO CONTENT — MANUAL REVIEW`

or:

`{/* SEO CONTENT — MANUAL REVIEW */}`

However:

**Do not replace useful content with placeholders.**

Keep the working content in place.

The comments are only markers showing me where I can later refine the copy.

---

# 19.25 FINAL SEO VALIDATION

Before considering the project complete, perform an SEO QA pass across every page.

Verify:

### Technical SEO

* [ ] HTTPS URLs
* [ ] Correct canonical URLs
* [ ] XML sitemap
* [ ] robots.txt
* [ ] No accidental noindex
* [ ] Crawlable pages
* [ ] Correct status codes
* [ ] No broken internal links
* [ ] No unnecessary redirects
* [ ] Clean URL structure

### On-Page SEO

* [ ] Unique title
* [ ] Unique meta description
* [ ] One H1
* [ ] Logical H2/H3 structure
* [ ] Relevant content
* [ ] Search intent alignment
* [ ] Internal links
* [ ] Breadcrumbs where appropriate
* [ ] Descriptive image alt text

### Structured Data

* [ ] Organization
* [ ] LocalBusiness where appropriate
* [ ] BreadcrumbList
* [ ] WebPage
* [ ] FAQPage where appropriate

### Performance

* [ ] Good LCP
* [ ] Good CLS
* [ ] Good INP
* [ ] Optimized images
* [ ] Optimized fonts
* [ ] Minimal unnecessary JavaScript

### Mobile

* [ ] Responsive
* [ ] No horizontal scrolling
* [ ] Same important SEO content
* [ ] Fast loading
* [ ] Accessible navigation

---

# FINAL SEO OBJECTIVE

Do not think:

"Make the existing SEO better."

Think:

**"Build a proper SEO foundation for GFEC from the ground up while preserving valuable existing content."**

The final website should be:

**Visually premium**
+
**Technically SEO-friendly**
+
**Semantically structured**
+
**Search-intent focused**
+
**Fast**
+
**Mobile-friendly**
+
**Accessible**
+
**Easy to maintain**

Most importantly:

**Do not sacrifice useful SEO content to achieve a cleaner UI.**

Use design, layout, accordions, tabs, typography, spacing, editorial sections and visual hierarchy to make substantial SEO content look attractive and easy to consume.


---

# 20. PERFORMANCE

Prioritize performance.

Use:

* WebP/AVIF where supported
* Responsive images
* Lazy loading
* Proper image dimensions
* Code splitting
* Efficient components
* Optimized fonts
* Minimal JavaScript
* Avoid unnecessary dependencies

Gallery should especially be optimized.

---

# 21. ACCESSIBILITY

Ensure:

* Keyboard navigation
* Visible focus states
* Accessible forms
* Proper labels
* ARIA where necessary
* Alt text
* Color contrast
* Reduced motion support
* Accessible mobile menu
* Accessible gallery lightbox

---

# 22. COMPONENT ARCHITECTURE

Build reusable components.

Suggested:

Layout
Header
MobileMenu
Footer
Breadcrumbs

Homepage:
Hero
TrustStats
WhyGFEC
Services
DestinationExplorer
UniversityPartners
StudentJourney
Testimonials
CTASection

About:
AboutHero
CompanyStory
VisionMission
Values
AboutCTA

Study Abroad:
DestinationHero
DestinationGrid
DestinationCard
DestinationFilters
DestinationCTA

Destination:
CountryHero
CountryOverview
CountryFacts
UniversityGrid
UniversityCard
WhyDestination
DestinationCTA

Gallery:
GalleryHero
GalleryFilters
MasonryGallery
GalleryLightbox

Contact:
ContactHero
ContactInfo
ConsultationForm
MapSection

Keep components modular and reusable.

---

# 23. DATA ARCHITECTURE

Separate content/data from UI.

Example:

destinations.ts
universities.ts
services.ts
testimonials.ts
gallery.ts

Avoid hardcoding the same content in multiple components.

Destination pages should be driven by structured data.

---

# 24. CONTENT QUALITY

Improve current copy where appropriate.

Current website copy should become:

* Shorter
* More persuasive
* More human
* Easier to scan
* More student-focused

Instead of:

"We provide comprehensive assistance throughout your educational journey..."

Prefer:

"From your first consultation to your departure, we're with you at every step."

However:

DO NOT invent:

* Student numbers
* Success rates
* Visa approval percentages
* University partnerships
* Scholarships
* Government affiliations
* Awards
* Accreditations
* Guarantees

Only use factual information available in the existing website/application.

---

# 25. IMAGE STRATEGY

Use the existing GFEC images wherever they are valuable.

Do not unnecessarily replace genuine GFEC/student/event photography with generic stock photos.

For areas where existing imagery is insufficient:

Create a clear placeholder structure so new photography can be added later.

Use image aspect ratios intentionally.

Hero:
Wide/high-impact

Cards:
Consistent ratios

Gallery:
Original proportions where appropriate

Optimize all images.

---

# 26. DESIGN CONSISTENCY

Every page must feel like the same product.

Consistent:

* Header
* Footer
* Buttons
* Typography
* Colors
* Cards
* Spacing
* Breadcrumbs
* Animation language
* CTA patterns

But do NOT make every section look identical.

Each page should have its own visual personality.

---

# 27. FINAL QUALITY BAR

Before considering the work complete, act as a senior design reviewer.

Review the website and ask:

Does this look like a premium 2026 education brand?

Does it look trustworthy?

Does it immediately communicate that GFEC helps students from Sri Lanka study abroad?

Can a student quickly understand what GFEC does?

Are the CTAs obvious?

Does the website feel human?

Does it look better than the existing website by a significant margin?

Does it look good on mobile?

Does anything look like an AI-generated template?

If something feels generic, repetitive, outdated, or visually weak:

**Fix it directly.**

Do not merely tell me what could be improved.

---

# 28. FINAL TESTING

After implementation:

1. Run the development server.
2. Visit every route.
3. Check all navigation.
4. Check every CTA.
5. Check every form.
6. Check destination links.
7. Check university links.
8. Check gallery filters.
9. Check gallery lightbox.
10. Check mobile navigation.
11. Check desktop layout.
12. Check tablet layout.
13. Check browser console.
14. Fix TypeScript errors.
15. Fix build errors.
16. Fix accessibility issues.
17. Fix responsive issues.
18. Run production build.

Do not stop after implementing the homepage.

The task is complete only when ALL pages have been redesigned and visually reviewed.

---

# 29. MOST IMPORTANT INSTRUCTION

Do not approach this as:

"Make the existing website prettier."

Approach it as:

**"Design and build a completely new premium digital experience for GFEC while preserving the existing business functionality and factual content."**

The final experience should feel:

* Global
* Premium
* Modern
* Trustworthy
* Human
* Confident
* Student-focused
* Conversion-focused
* SEO-FRIENDLY

Start by inspecting the existing codebase and current website structure.

Then implement the redesign directly.
