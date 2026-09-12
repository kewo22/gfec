export type DestinationBenefit = {
  title: string;
  description: string;
};

/** "verified" = confirmed accurate, safe to show without caveats. "draft" = researched from public
 * sources but not yet checked by a GFEC consultant — rendered with a visible verification notice. */
export type FactStatus = "verified" | "draft";

export type FactTable = {
  headers: string[];
  rows: string[][];
};

export type CountryFact = {
  status: FactStatus;
  paragraphs?: string[];
  table?: FactTable;
  bullets?: string[];
  /** A specific callout worth surfacing prominently, e.g. an upcoming policy change. */
  note?: string;
  /** Where this was researched from, shown in small print under the section. */
  source?: string;
};

export type DestinationContent = {
  intro: string[];
  benefits: DestinationBenefit[];
  faqs: { question: string; answer: string }[];
  quickFacts?: { label: string; value: string }[];
  visa?: CountryFact;
  cost?: CountryFact;
  intakes?: CountryFact;
  scholarships?: CountryFact;
  workRights?: CountryFact;
  studentCities?: string[];
};

export const DESTINATION_CONTENT: Record<string, DestinationContent> = {
  united_kingdom: {
    intro: [
      "The United Kingdom is a global leader in higher education, renowned for its academic excellence, world-class universities, and centuries-old tradition of scholarship. Home to prestigious institutions and many top-ranking modern universities, the UK offers students an enriching academic journey with qualifications that are globally recognized and respected by employers and institutions alike.",
      "The UK is not just about academics — its diverse and inclusive society, vibrant student communities, and dynamic cities make it a welcoming destination for students from all walks of life.",
    ],
    benefits: [
      { title: "Globally Recognized Qualifications", description: "UK degrees are respected across the world for their rigorous academic standards, equipping graduates with a competitive edge in the global job market." },
      { title: "Shorter Degree Duration", description: "Complete your undergraduate degree in 3 years and postgraduate degree in just 1 year, helping save both time and money." },
      { title: "IELTS Waiver & Foundation Programs", description: "Many universities offer IELTS waivers for students from English-speaking backgrounds or with previous English-medium education." },
      { title: "Post-Study Work Opportunities", description: "Students can benefit from the Graduate Route Visa, which allows them to stay in the UK for 2 years (or 3 years for PhD holders) after graduation to seek employment." },
      { title: "Part-Time Work While Studying", description: "International students can work up to 20 hours per week during term time and full-time during holidays." },
      { title: "Multicultural Society & Safe Environment", description: "The UK welcomes thousands of international students every year, making it easy to find communities and support networks." },
      { title: "Gateway to Europe", description: "Situated close to Europe, students can enjoy budget travel to explore nearby countries during holidays and breaks." },
    ],
    faqs: [
      { question: "Why should I study in the UK?", answer: "UK degrees are globally recognized, many programs are shorter than elsewhere, and graduates can access the Graduate Route post-study work visa." },
      { question: "Do I need IELTS to study in the UK?", answer: "Many universities offer IELTS waivers for students with previous English-medium education — GFEC can check your eligibility." },
      { question: "Can I work while studying in the UK?", answer: "Yes, international students can generally work up to 20 hours per week during term time and full-time during holidays." },
      { question: "What is a CAS letter, and do I need one?", answer: "Confirmation of Acceptance for Studies (CAS) is issued electronically by your UK university once you accept your offer and pay any required deposit. You need it to apply for your Student visa." },
      { question: "What if I don't meet the entry requirements yet?", answer: "Many UK universities offer foundation/pathway programs that build up academic and English-language skills before you join the main degree — GFEC can help identify the right one for your profile." },
    ],
    quickFacts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "GBP (£)" },
      { label: "Capital", value: "London" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "Applicants aged 16+ apply for the Student visa (formerly Tier 4) through a 70-point system: a Confirmation of Acceptance for Studies (CAS) from your sponsor institution (50 points), financial evidence (10 points), and English language proficiency (10 points).",
        "Maintenance funds required (as of 11 Nov 2025): £1,529/month if studying in London, £1,171/month outside London, for up to 9 months.",
      ],
      table: {
        headers: ["Fee", "Amount"],
        rows: [
          ["Visa application", "£558 (from 8 Apr 2026)"],
          ["Immigration Health Surcharge", "£776 / year"],
        ],
      },
      source: "UK Visas & Immigration (gov.uk) Student visa guidance",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Undergraduate tuition", "£12,000 – £22,000 / year"],
          ["Postgraduate tuition", "£12,000 – £22,000 / year"],
          ["Living costs, outside London", "£900 – £1,300 / month"],
          ["Living costs, London", "£1,300 – £1,400 / month"],
          ["Indicative all-in annual budget", "£35,000 – £62,000 / year"],
        ],
      },
      paragraphs: ["Tuition is not capped and varies hugely by university and subject — treat these as a starting-conversation number, not a quote."],
      source: "British Council Study UK cost guidance",
    },
    intakes: {
      status: "draft",
      table: {
        headers: ["Intake", "Months", "Notes"],
        rows: [
          ["Autumn / Main", "Sep – Dec", "Largest intake, widest course choice"],
          ["Spring", "Jan – Apr", "Limited course availability"],
          ["Summer", "Apr – Jun", "Select courses only"],
        ],
      },
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [
          ["Chevening Scholarship", "Fully-funded postgraduate awards for future leaders; UK Government-run"],
          ["Commonwealth Scholarship & Fellowship", "Postgraduate study for students from Commonwealth countries, incl. Sri Lanka"],
          ["GREAT Scholarships", "~£10,000 awards, jointly funded by UK Government + British Council, across a rotating list of partner universities"],
          ["Scotland Saltire Scholarships", "Scottish universities; creative industries, tech, science, healthcare, clean energy"],
        ],
      },
      source: "British Council Study UK scholarships listing",
    },
    workRights: {
      status: "draft",
      paragraphs: ["While studying: up to 20 hours/week during term time, full-time during holidays (standard Student visa condition)."],
      note: "The Graduate Route post-study work visa is currently 2 years for bachelor's/master's graduates (3 years for PhD) but is confirmed to shorten to 18 months for bachelor's/master's graduates applying on or after 1 January 2027 — the most time-sensitive fact on this page.",
      source: "gov.uk Graduate Route guidance",
    },
    studentCities: ["London", "Birmingham", "Liverpool", "Manchester", "Edinburgh"],
  },
  australia: {
    intro: [
      "Australia is a vast and diverse country known for its stunning natural landscapes, unique wildlife, and vibrant cities. As both a continent and a nation, it features everything from golden beaches and tropical rainforests to arid deserts and snowy mountains.",
      "Major cities like Sydney, Melbourne, and Brisbane blend modern living with laid-back charm, while iconic landmarks such as the Sydney Opera House, the Great Barrier Reef, and Uluru highlight the country's natural and cultural beauty.",
    ],
    benefits: [
      { title: "Top-Tier Universities & Global Recognition", description: "Study at top-ranked Australian universities offering globally recognized qualifications." },
      { title: "Work & Stay Opportunities", description: "Earn while you study and enjoy post-study work rights through the Temporary Graduate Visa (Subclass 485)." },
      { title: "Pathway to Permanent Residency", description: "Build your career in Australia with study programs that can lead to PR opportunities." },
    ],
    faqs: [
      { question: "Why should I study in Australia?", answer: "Australia offers globally recognized qualifications, strong post-study work rights, and pathways that can lead toward permanent residency." },
      { question: "Can international students work in Australia?", answer: "Yes, and graduates may qualify for the Temporary Graduate Visa (Subclass 485) after completing their studies." },
      { question: "What is the \"Genuine Student\" requirement?", answer: "A recent replacement for the old GTE statement — you'll need to show your visa application reflects a genuine intention to study and that Australia is a reasonable choice given your circumstances." },
      { question: "Do I need health insurance to study in Australia?", answer: "Yes — Overseas Student Health Cover (OSHC) is mandatory for the full length of your student visa." },
    ],
    quickFacts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "AUD (A$)" },
      { label: "Capital", value: "Canberra" },
    ],
    visa: {
      status: "draft",
      paragraphs: ["Applicants apply for the Subclass 500 Student visa via ImmiAccount at immi.homeaffairs.gov.au."],
      table: {
        headers: ["Requirement", "Detail"],
        rows: [
          ["Confirmation of Enrolment (CoE)", "Electronic enrolment confirmation from your Australian institution"],
          ["Genuine Student (GS) requirement", "Replaced the old \"GTE\" statement — demonstrates genuine intent to study"],
          ["English proficiency", "IELTS overall 6.0, or an approved equivalent"],
          ["Overseas Student Health Cover (OSHC)", "Mandatory health insurance for the visa duration"],
          ["Financial capacity", "AUD 29,710/year for living costs (2026 figure), plus tuition + return travel"],
          ["Visa application fee", "AUD 2,000 for the primary applicant (from 1 Jul 2025)"],
        ],
      },
      source: "Australian Department of Home Affairs Subclass 500 guidance",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Undergraduate tuition", "AUD 20,000 – 45,000 / year"],
          ["— Business & Commerce", "AUD 35,000 – 48,000 / year"],
          ["— Engineering & IT", "AUD 40,000 – 55,000 / year"],
          ["Postgraduate tuition", "AUD 22,000 – 50,000 / year"],
          ["Living costs (official visa minimum)", "AUD 29,710 / year (≈ AUD 2,476/month)"],
        ],
      },
      paragraphs: ["The living-cost figure is the government-mandated visa financial-capacity minimum, not a comfortable-budget number — actual spend in Sydney/Melbourne typically runs higher."],
      source: "Home Affairs financial-capacity requirement + current university/agency fee guides",
    },
    intakes: {
      status: "draft",
      table: {
        headers: ["Intake", "Months", "Notes"],
        rows: [
          ["Semester 1 (main)", "Feb – Mar", "Largest intake — most courses + scholarships open"],
          ["Semester 2", "Jul – Aug", "Strong for IT, postgraduate, business — some health/nursing courses Feb-only"],
          ["Semester 3 (select unis)", "Nov", "Trimester-system universities only"],
        ],
      },
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [
          ["Australia Awards Scholarships", "Fully-funded, Australian Government-run, specifically open to Sri Lankan applicants. Applications open 1 Feb, close 30 Apr each year. 2-year mandatory return to Sri Lanka after completion."],
        ],
      },
      paragraphs: ["This is the one scholarship with a verified, Sri-Lanka-specific, currently-open program behind it — worth leading with."],
      source: "australiaawardssrilanka.org (official Australia Awards Sri Lanka site)",
    },
    workRights: {
      status: "draft",
      paragraphs: ["While studying: up to 48 hours per fortnight during term time, unlimited during scheduled course breaks."],
      table: {
        headers: ["Post-study qualification", "Visa duration (Subclass 485)"],
        rows: [
          ["Bachelor's or Master's (coursework)", "2 years"],
          ["Master's by research", "3 years"],
          ["Doctoral degree", "4 years"],
        ],
      },
      note: "Must apply within 6 months of course completion. The 48-hour fortnightly work limit is a recent change from earlier pandemic-era rules — re-verify it hasn't moved again.",
      source: "Home Affairs Subclass 485 guidance",
    },
    studentCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  uae: {
    intro: [
      "Dubai is quickly becoming an education hub for international students with its world-class infrastructure, international university campuses, and dynamic lifestyle. The city offers a unique opportunity to study in one of the fastest-growing economies, blending academic excellence with career potential.",
      "With a wide range of globally recognized programs and top-tier facilities, Dubai is the gateway to education in the Middle East with a global impact.",
    ],
    benefits: [
      { title: "International Campuses of Top Global Universities", description: "Dubai hosts campuses from countries like the UK, Australia, and India, offering globally recognized degrees in a central location." },
      { title: "Work While Studying & Career-Oriented Programs", description: "Students are allowed to work part-time, and many institutions offer internship-integrated degrees." },
      { title: "Strategic Location & Business Hub", description: "Dubai connects East and West, making it a business and cultural hub — ideal for networking and post-study opportunities." },
      { title: "Tax-Free Salaries & Growing Job Market", description: "Graduates benefit from tax-free income and job opportunities in fields like tech, business, and hospitality." },
      { title: "Modern Campus Facilities & Student Lifestyle", description: "From futuristic campuses to vibrant city life, Dubai offers a unique blend of academics, lifestyle, and innovation." },
      { title: "Flexible Study Options", description: "Institutions in Dubai offer foundation, diploma, undergraduate, and postgraduate pathways with various entry levels and visa assistance." },
    ],
    faqs: [
      { question: "Why should I study in the UAE?", answer: "The UAE hosts branch campuses of top global universities, offers tax-free income after graduation, and sits at the crossroads of East and West for career opportunities." },
      { question: "Can I work while studying in the UAE?", answer: "Yes, many institutions permit part-time work and offer internship-integrated degree programs." },
    ],
    quickFacts: [
      { label: "Language", value: "Arabic & English" },
      { label: "Currency", value: "AED (د.إ)" },
      { label: "Capital", value: "Abu Dhabi" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "Students need an unconditional offer letter and a student residence visa, with bank statements (3–6 months) proving ability to cover tuition and living costs.",
        "Visa cost: reported figures vary AED 3,000–8,500 depending on source and whether agent/admin fees are bundled in — get an exact figure from each partner university's admissions office rather than quoting a single number.",
      ],
      source: "Current UAE/Dubai student-visa guides — figures are less standardized here since visas are often processed via the sponsoring institution",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Undergraduate", "AED 30,000 – 90,000 / year"],
          ["Postgraduate", "AED 45,000 – 120,000 / year"],
          ["MBA", "AED 60,000 – 180,000 / year"],
          ["Foundation / Diploma", "AED 20,000 – 50,000 / year"],
        ],
      },
      source: "Confirm actual published fees for each of GFEC's 4 UAE partners individually — the range across them is likely wide",
    },
    intakes: {
      status: "draft",
      paragraphs: ["September is the main intake; January is also common and relatively flexible compared to other destinations."],
    },
    scholarships: {
      status: "draft",
      paragraphs: ["No UAE government scholarship program for international students was found — UAE higher education is predominantly privately funded. University-specific merit scholarships may exist at each partner institution — confirm directly rather than naming an unverified program."],
    },
    workRights: {
      status: "draft",
      paragraphs: [
        "While studying: up to 15 hours/week during term, full-time during breaks — requires an official work permit from the Ministry of Human Resources and Emiratisation (MoHRE) before starting any paid or unpaid work.",
        "Zero income tax remains a genuine differentiator vs. every other GFEC destination.",
      ],
      note: "Confirm exact hours — some sources cite different figures for free-zone vs. mainland institutions.",
    },
    studentCities: ["Dubai", "Abu Dhabi"],
  },
  france: {
    intro: [
      "France is globally recognized for its contribution to arts, fashion, philosophy, and science — and its higher education system is no exception. With some of the world's top-ranked universities and business schools, France offers an academic journey rich in quality, culture, and career potential.",
    ],
    benefits: [
      { title: "Affordable Education", description: "Public universities offer subsidized tuition for international students, while scholarships are widely available from the French government." },
      { title: "Top Business & Fashion Schools", description: "France is home to world-renowned institutions in Business, Luxury Brand Management, Fashion Design, and Culinary Arts." },
      { title: "Work While Studying", description: "International students can work part-time for up to 964 hours per year to support their studies." },
      { title: "Cultural Immersion & Language Skills", description: "While many programs are offered in English, living in France allows students to immerse themselves in the language and culture." },
      { title: "Gateway to the EU Job Market", description: "Graduates can explore a wide range of job opportunities across the European Union, with post-study stay options available." },
    ],
    faqs: [
      { question: "Why should I study in France?", answer: "France offers subsidized tuition at public universities, world-renowned business and fashion schools, and access to the EU job market after graduation." },
      { question: "Do I need to speak French to study there?", answer: "Many programs, especially at the postgraduate level, are taught fully in English." },
    ],
    quickFacts: [
      { label: "Language", value: "French" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Capital", value: "Paris" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "Non-EU students on courses over 90 days need the VLS-TS long-stay student visa: an official acceptance letter, valid passport, proof of accommodation (first 3 months), and proof of funds — the legal minimum is €615/month, though consulates increasingly expect €800–€1,000/month (more for Paris).",
      ],
      table: {
        headers: ["Fee", "Amount"],
        rows: [
          ["Visa fee", "€50"],
          ["OFII stamp (on arrival) or online validation", "€60 or €200 via ANEF portal within 3 months"],
        ],
      },
      source: "French consular/OFII guidance",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Public university, undergrad (non-EU)", "€2,770 / year"],
          ["Public university, Master's (non-EU)", "€3,770 / year"],
          ["CVEC campus-life contribution", "≈€103 / year"],
        ],
      },
      note: "GFEC's partner, Schiller International University, is a private institution — its fees are set independently and will differ from these public-university figures. Get Schiller's actual fee schedule before publishing a number.",
      source: "French public-university tuition reporting (Campus France-aligned)",
    },
    intakes: {
      status: "draft",
      paragraphs: ["September is the primary intake; a smaller January intake exists at some institutions for select programs."],
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [["Eiffel Excellence Scholarship", "French Government's flagship award for Master's/PhD students; applications open October, deadline mid-January"]],
      },
      source: "campusfrance.org / French Government scholarship listings",
    },
    workRights: {
      status: "verified",
      paragraphs: ["The VLS-TS residence permit allows up to 964 hours of work per year (≈60% of full-time) with no separate work permit needed."],
    },
    studentCities: ["Paris", "Lyon", "Toulouse", "Bordeaux"],
  },
  germany: {
    intro: [
      "Germany is one of the most sought-after study destinations in Europe, known for its academic excellence, strong economy, and innovation-driven education system. Whether you're pursuing a career in engineering, business, technology, or research, Germany offers international students a globally respected education in a thriving professional environment.",
    ],
    benefits: [
      { title: "Industry-Focused Education", description: "German universities emphasize hands-on learning and close ties with global industries — offering students access to internships, projects, and real-world training." },
      { title: "Post-Study Work Visa", description: "Students graduating from German institutions are eligible for an 18-month post-study work visa." },
      { title: "English-Taught Programs", description: "Germany offers a wide range of Bachelor's and Master's programs in English, especially in Business, IT, and Engineering." },
      { title: "Innovation & Research Hub", description: "Germany leads Europe in research and development, providing cutting-edge facilities and opportunities for academic exploration." },
      { title: "Part-Time Work While Studying", description: "International students can work up to 20 hours per week during term time and full-time during holidays." },
      { title: "Safe, Multicultural Environment", description: "Home to over 400,000 international students, Germany offers a welcoming, modern, and student-friendly lifestyle." },
    ],
    faqs: [
      { question: "Why should I study in Germany?", answer: "Germany combines industry-focused education, a strong research culture, and an 18-month post-study work visa for graduates." },
      { question: "Are there English-taught programs in Germany?", answer: "Yes, especially at the postgraduate level in fields like Business, IT, and Engineering." },
    ],
    quickFacts: [
      { label: "Language", value: "German" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Capital", value: "Berlin" },
    ],
    visa: {
      status: "draft",
      paragraphs: ["Most non-EU students need a National (Student) Visa, which requires a blocked account (Sperrkonto) — proof of funds locked for the year, released in monthly instalments."],
      table: {
        headers: ["Requirement", "Detail"],
        rows: [
          ["Blocked account amount", "€11,904 / year (2026)"],
          ["Max monthly withdrawal", "€992 / month"],
        ],
      },
      note: "The required blocked-account amount is revised periodically — confirm before publishing.",
      source: "German missions' blocked-account guidance",
    },
    cost: {
      status: "draft",
      paragraphs: [
        "Most German public universities are tuition-free for international students, charging only a semester fee (€100–€400). Exceptions exist: Baden-Württemberg charges non-EU students €1,500/semester, and some Technical University of Munich campuses charge €2,000–€6,000/semester.",
      ],
      note: "GFEC's partner, Schiller International University Germany, is private — the tuition-free public-university situation does not apply to it. Get Schiller's actual fee schedule before publishing.",
      source: "German state-level tuition policy reporting (2026)",
    },
    intakes: {
      status: "draft",
      paragraphs: ["Winter semester (September/October) is the main intake with the widest course choice; summer semester (April) is smaller."],
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [["DAAD Scholarships", "German Academic Exchange Service — full funding for Master's/PhD (stipend, insurance, travel, accommodation support); explicitly open to students from Sri Lanka. Applications typically open August, deadlines Oct–Nov."]],
      },
      source: "daad.de / DAAD Sri Lanka office",
    },
    workRights: {
      status: "draft",
      paragraphs: ["International students may work part-time within an annual day-limit set by German immigration law."],
      note: "This research pass could not confirm the exact current day-limit with high confidence — verify before publishing rather than guessing a number. The existing 18-month post-study work visa figure is also worth double-checking is still current.",
    },
    studentCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
  },
  ireland: {
    intro: [
      "Ireland is a beautiful island nation in Western Europe, celebrated for its lush green landscapes, rich history, and warm, friendly people. Known as the “Emerald Isle,” it features rolling hills, dramatic coastlines, and charming villages.",
      "Dublin, the capital, is a lively city blending historic landmarks with modern culture — from ancient castles to cozy pubs, Ireland offers a captivating mix of natural beauty, heritage, and heartfelt hospitality.",
    ],
    benefits: [
      { title: "The Silicon Valley of Europe", description: "Ireland is home to top global tech companies and innovation hubs." },
      { title: "Globally Recognized Education", description: "Study at world-ranked universities known for academic excellence." },
      { title: "Gateway to Europe", description: "Gain access to exciting career and travel opportunities across the European Union." },
    ],
    faqs: [
      { question: "Why should I study in Ireland?", answer: "Ireland hosts major global tech companies, offers world-ranked universities, and gives access to career opportunities across the EU." },
    ],
    quickFacts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Capital", value: "Dublin" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "Non-EU students don't apply for a separate \"visa\" so much as Stamp 2 — an immigration permission placed on your Irish Residence Permit (IRP) after arrival and registration, for courses of at least 1 year that are on the official ILEP or TrustEd Ireland eligible-programme list.",
      ],
      table: {
        headers: ["Requirement", "Detail"],
        rows: [
          ["Financial evidence", "€10,000 (6-month bank statements or education bond)"],
          ["IRP registration fee", "€300 (paid each registration/renewal)"],
        ],
      },
      note: "Confirm your partner universities are all on the current ILEP list.",
      source: "citizensinformation.ie (official)",
    },
    cost: {
      status: "draft",
      paragraphs: ["International tuition typically ranges €10,000 – €35,000/year depending on institution and course."],
      note: "Confirm actual fees at Trinity, UCD, DCU, and UCC specifically since the range is wide.",
    },
    intakes: {
      status: "draft",
      paragraphs: ["September is the primary intake; a smaller January intake is available at some institutions with fewer course options."],
    },
    scholarships: {
      status: "draft",
      paragraphs: ["No verified, currently-active Ireland Government scholarship program specifically for Sri Lankan applicants was found. Confirm directly with Trinity/UCD/DCU/UCC whether they offer their own international scholarships before this section ships."],
    },
    workRights: {
      status: "draft",
      paragraphs: ["While studying: 20 hours/week during term time; 40 hours/week during official college holiday periods (June–September and 15 December–15 January)."],
      note: "Post-study stay options exist for graduates but weren't independently confirmed in this pass.",
      source: "citizensinformation.ie work-rights guidance",
    },
    studentCities: ["Dublin", "Cork", "Galway", "Limerick"],
  },
  malta: {
    intro: [
      "Malta, a rising star in European education, offers internationally recognized qualifications through its collaboration with top UK and European institutions. Located in the heart of the Mediterranean, Malta blends quality education, a peaceful lifestyle, and affordability.",
    ],
    benefits: [
      { title: "UK-Accredited Degrees at Lower Cost", description: "Many institutions in Malta offer British qualifications at a significantly lower cost, with direct affiliation to UK universities." },
      { title: "Work While Studying & After Graduation", description: "Students can work 20 hours per week during study and apply for a work permit or residence extension after graduation." },
      { title: "Mild Weather & English-Speaking Country", description: "With English as one of the official languages, Malta offers easy communication and a smooth academic experience." },
      { title: "Affordable Living & Tuition", description: "Tuition and living expenses are budget-friendly, especially compared to other EU nations." },
      { title: "Safe & Peaceful Environment", description: "As one of Europe's safest countries, Malta offers a calm, beautiful setting ideal for focused learning." },
      { title: "High Employability Rates", description: "Graduates from Malta's institutions often find opportunities within Europe, especially in business, IT, and hospitality." },
    ],
    faqs: [
      { question: "Why should I study in Malta?", answer: "Malta offers UK-accredited degrees at a lower cost, an English-speaking environment, and one of Europe's safest settings for students." },
    ],
    quickFacts: [
      { label: "Language", value: "English & Maltese" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Capital", value: "Valletta" },
    ],
    visa: {
      status: "draft",
      paragraphs: ["Two-stage process: a Type D long-stay visa before arrival, then a Residence Permit applied for within 3 months of arriving."],
      table: {
        headers: ["Requirement", "Detail"],
        rows: [
          ["Financial proof", "≥75% of Malta's minimum wage (~€995/month), ~€9,000–10,000 for first year"],
          ["Visa + permit fees", "€127.50 – €180 total"],
          ["Health insurance", "Minimum €30,000 Schengen coverage, full stay duration"],
        ],
      },
      source: "Current Malta study-visa guides — confirm with Identity Malta / the relevant consulate",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Undergraduate tuition", "€6,000 – €15,000 / year"],
          ["Postgraduate tuition", "€20,000+ / year"],
          ["Living costs", "€1,006 – €1,200 / month"],
        ],
      },
      note: "Confirm Global College Malta's and GBS's actual published fees.",
    },
    intakes: {
      status: "draft",
      paragraphs: ["Not independently confirmed — September is the general European convention, but confirm per partner institution."],
    },
    scholarships: {
      status: "draft",
      paragraphs: ["No verified Malta-specific named scholarship program was found. Use a generic \"ask your consultant about current funding options\" framing rather than naming an unverified program."],
    },
    workRights: {
      status: "verified",
      paragraphs: ["Up to 20 hours/week with a valid e-Residence Permit — already reflected in existing site copy."],
      note: "Post-study \"work permit or residence extension\" process should be confirmed for current specifics.",
    },
    studentCities: ["Valletta", "Sliema", "St. Julian's"],
  },
  singapore: {
    intro: [
      "Singapore is a vibrant island city-state in Southeast Asia, known for its modern skyline, lush green spaces, and cultural diversity. Blending Chinese, Malay, Indian, and Western influences, it offers a unique mix of traditions and innovation.",
      "Renowned for its cleanliness, safety, and efficient infrastructure, Singapore is also a global financial hub, home to landmarks like Marina Bay Sands, Gardens by the Bay, and Sentosa Island.",
    ],
    benefits: [
      { title: "World Class Education", description: "Study at globally recognized universities known for academic excellence." },
      { title: "Safe, Modern & Multicultural", description: "Experience a safe, vibrant city with a rich blend of cultures and traditions." },
      { title: "Pathway Programs & Career Opportunities", description: "Access pathway programs and strong career prospects in a thriving economy." },
    ],
    faqs: [
      { question: "Why should I study in Singapore?", answer: "Singapore combines world-class universities, a safe multicultural environment, and strong career prospects in a thriving economy." },
    ],
    quickFacts: [
      { label: "Language", value: "English" },
      { label: "Currency", value: "SGD (S$)" },
      { label: "Type", value: "City-state" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "International students need a Student's Pass issued by ICA (Immigration & Checkpoints Authority), processing 4–8 weeks, fee SGD 90.",
      ],
      note: "If enrolling at a private/international institution, the school must hold EduTrust certification — without it, the school cannot legally enrol international students. Confirm GFEC's partner's EduTrust status before publishing.",
      source: "ICA guidance",
    },
    cost: {
      status: "draft",
      paragraphs: [
        "GFEC's partner is private, so public-university figures don't directly apply (private institutions charge full unsubsidised fees, with no access to the government Tuition Grant). Public-sector context: S$17,000–30,000/year with the Tuition Grant (which carries a 3-year Singapore-employer work bond), or S$30,000–60,000+/year without it.",
      ],
      note: "Get the actual published fee schedule from GFEC's partner rather than using public-university figures.",
    },
    intakes: {
      status: "draft",
      paragraphs: ["Not independently confirmed in this research pass — confirm the actual intake calendar with the partner institution directly."],
    },
    scholarships: {
      status: "draft",
      paragraphs: ["The main financial-support mechanism found is the government Tuition Grant (a fee subsidy with a binding 3-year work bond), which only applies at public institutions, not GFEC's private partner. No applicable named scholarship was found."],
    },
    workRights: {
      status: "draft",
      paragraphs: ["Singapore's student work rights are known to be considerably more restrictive than most other GFEC destinations."],
      note: "This research pass could not confirm a reliable current hours-per-week figure — do not publish a specific number without direct confirmation. This is the one section across all destinations where the research is genuinely incomplete, not just in need of a refresh.",
    },
  },
  south_korea: {
    intro: [
      "South Korea is quickly becoming one of Asia's top study destinations, known for its world-class universities, cutting-edge technology, and global influence in culture and entertainment. With an increasing number of English-taught programs and a growing international student population, Korea offers a dynamic and unique educational experience.",
      "Students in South Korea not only benefit from academic excellence but also immerse themselves in a culture known for innovation, discipline, and creativity.",
    ],
    benefits: [
      { title: "Top-Tier Universities & Global Recognition", description: "Leading universities are globally recognized for excellence in STEM, business, and arts." },
      { title: "Scholarship Opportunities", description: "Many institutions and government bodies offer generous scholarships for international students, covering tuition and living expenses." },
      { title: "Technology & Innovation Hub", description: "South Korea is a global leader in IT, robotics, AI, and engineering." },
      { title: "Affordable Tuition & Living Costs", description: "Compared to Western countries, South Korea offers excellent education at a lower cost." },
      { title: "Vibrant Culture & K-Wave Influence", description: "Study in a country where K-pop, K-dramas, fashion, and food are part of everyday life." },
      { title: "Part-Time Work & Job Opportunities", description: "International students can work part-time during their studies and are eligible for job-seeking visas post-graduation." },
      { title: "Safe & Student-Friendly Cities", description: "South Korea boasts some of the world's most modern and secure cities, with excellent transport, healthcare, and student facilities." },
    ],
    faqs: [
      { question: "Why should I study in South Korea?", answer: "South Korea offers globally recognized universities, generous scholarships, and a leading role in technology and innovation." },
    ],
    quickFacts: [
      { label: "Language", value: "Korean" },
      { label: "Currency", value: "KRW (₩)" },
      { label: "Capital", value: "Seoul" },
    ],
    visa: {
      status: "draft",
      paragraphs: ["Students apply for the D-2 Student Visa, requiring a Standard Admission Letter from a recognized institution."],
      table: {
        headers: ["Requirement", "Detail"],
        rows: [
          ["Financial capacity", "₩20,000,000 (~USD 15,000), or a full scholarship in lieu"],
          ["Visa fee", "USD 80 (single entry) / USD 120 (multiple)"],
        ],
      },
      note: "Cross-check against the Korean embassy in Colombo directly, since embassy-specific document lists can differ.",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["National university tuition", "₩2,000,000 – 5,000,000 / semester"],
          ["Living costs, Seoul", "₩800,000 – 1,200,000 / month"],
        ],
      },
      note: "These are national-university figures — GFEC has no partner university on file to confirm against.",
    },
    intakes: {
      status: "draft",
      note: "South Korea is the one destination that doesn't follow the September/January pattern — Korean universities almost exclusively start their academic year in March. Worth making prominent on the page so families used to the UK/Australia calendar don't miss the right window.",
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [["Global Korea Scholarship (GKS)", "Korean Government, fully-funded graduate degrees (Master's/PhD); the Korean Embassy in Sri Lanka runs its own application track, typically opening mid-February"]],
      },
      source: "Embassy of the Republic of Korea in Sri Lanka (lk.mofa.go.kr)",
    },
    workRights: {
      status: "draft",
      paragraphs: [
        "Part-time work is not automatic — students must separately apply for a Part-Time Employment Permit, requiring 6 months on the D-2 visa, TOPIK Level 3+ for off-campus roles, and a minimum GPA. Bachelor's students: 20 hrs/week in-term, unlimited during vacation. Master's/PhD: 30 hrs/week.",
        "Mandatory National Health Insurance enrolment, ≈₩40,000/month.",
      ],
    },
    studentCities: ["Seoul", "Busan", "Incheon"],
  },
  spain: {
    intro: [
      "Spain is rapidly becoming one of the most popular study destinations in Europe, known for its vibrant culture, affordable living, and high-quality education. With a rich history, world-famous cuisine, and globally ranked universities, Spain offers students a well-rounded academic and cultural experience.",
    ],
    benefits: [
      { title: "Affordable Tuition & Living Costs", description: "Compared to many Western European countries, Spain offers more accessible tuition fees and cost of living." },
      { title: "English-Taught Programs", description: "Many universities offer Bachelor's and Master's programs in English, especially in Business, Engineering, and Tourism Management." },
      { title: "Part-Time Work Opportunities", description: "International students can work up to 20 hours per week during the semester." },
      { title: "Vibrant Student Life", description: "Spain's welcoming atmosphere, festivals, and active student culture ensure a memorable university experience." },
      { title: "Post-Study Options", description: "Graduates can explore employment options or transition into further education or internships across Europe." },
    ],
    faqs: [
      { question: "Why should I study in Spain?", answer: "Spain offers affordable tuition, English-taught programs, and a vibrant student life across its cities." },
    ],
    quickFacts: [
      { label: "Language", value: "Spanish" },
      { label: "Currency", value: "EUR (€)" },
      { label: "Capital", value: "Madrid" },
    ],
    visa: {
      status: "draft",
      paragraphs: [
        "Requires an acceptance letter, proof of funds (€600/month — 100% of the 2026 IPREM), full health insurance (travel insurance is not accepted), and for stays over 180 days, an apostilled/translated criminal record certificate. Apply at least 2 months before your course starts.",
      ],
      source: "Spanish consular guidance",
    },
    cost: {
      status: "draft",
      table: {
        headers: ["Item", "Typical range"],
        rows: [
          ["Public university tuition (non-EU)", "€1,500 – €6,000 / year"],
          ["Living costs", "€900 – €1,400 / month"],
        ],
      },
      note: "GFEC's partner, Schiller International University Madrid, is private — confirm its actual fees rather than using the public-university figures above.",
    },
    intakes: {
      status: "draft",
      paragraphs: ["September is the main intake, with January/February options for select programs."],
    },
    scholarships: {
      status: "draft",
      table: {
        headers: ["Scholarship", "For"],
        rows: [["MAEC-AECID Scholarships", "Spanish Government's flagship cooperation scholarship — Master's study, monthly allowance, usually with insurance/travel/tuition support. Open to non-EU applicants including Asia."]],
      },
      note: "Confirm Sri Lanka is on the current eligible-country list for the 2026/27 call.",
      source: "exteriores.gob.es (official Spanish government)",
    },
    workRights: {
      status: "draft",
      paragraphs: [
        "Recently liberalized: under Royal Decree 1155/2024, the higher-education student authorisation now includes the automatic right to work up to 30 hours/week, on or off campus, with no separate permit. The visa itself now also lasts the full length of the degree program instead of needing yearly renewal.",
      ],
      note: "A genuinely recent, positive policy change worth highlighting on the page.",
      source: "Royal Decree 1155/2024",
    },
    studentCities: ["Madrid", "Barcelona", "Valencia", "Seville"],
  },
};
