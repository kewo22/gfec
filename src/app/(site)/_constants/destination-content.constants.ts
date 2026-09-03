export type DestinationBenefit = {
  title: string;
  description: string;
};

export type DestinationContent = {
  intro: string[];
  benefits: DestinationBenefit[];
  faqs: { question: string; answer: string }[];
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
    ],
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
    ],
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
  },
};
