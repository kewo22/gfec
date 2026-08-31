import { Country, University } from "../_types/country";

import aus from "../../../../public/comp/aus.webp";

import uk from "../../../../public/comp/uk.webp";

import germany from "../../../../public/comp/germany.webp";
import france from "../../../../public/comp/france.webp";
import dxb from "../../../../public/comp/dxb.webp";
import malta from "../../../../public/comp/malta.webp";
import spain from "../../../../public/comp/spain.webp";
import ireland from "../../../../public/comp/ireland.webp";
import south_korea from "../../../../public/comp/south_korea.webp";
import singapore from "../../../../public/comp/singapore.jpg";

import brittsUaeImg from "../../../../public/comp/Britts-Imperial-University-College.jpeg";
import globalMaltaImg from "../../../../public/comp/Global-College-Malta.jpeg";
import gbsDubaiImg from "../../../../public/comp/GBS-Dubai-Campus.png";
import birminghamCityUniImg from "../../../../public/comp/Birmingham-City-University.jpg";
import universityOfHertfordshireImg from "../../../../public/comp/University-of-Hertfordshire.jpeg";
import universityOfEastLondonImg from "../../../../public/comp/University-of-East-London.jpg";
import liverpoolJonMooresUniImg from "../../../../public/comp/Liverpool-John-Moores-University.png";
import schillerSpainUnImg from "../../../../public/comp/schiller-international-university-madrid.jpg";
import schillerGermanyImg from "../../../../public/comp/Schiller-International-University-germany.jpeg";
import schillerFranceImg from "../../../../public/comp/Schiller-International-University-France.jpg";
import manipalImg from "../../../../public/comp/manipal-university-dubai.jpg";
import uniOfSunderlandImg from "../../../../public/comp/university-of-sunderland.jpg";
import edithCowanCollege from "../../../../public/comp/EdithCowanCollege.jpg";
import cQUniversity from "../../../../public/comp/CQUniversity.jpg";
import universityOfTasmaniaImg from "../../../../public/comp/UniversityofTasmania.webp";
import laTrobeUniversity from "../../../../public/comp/LaTrobeUniversity.jpg";
import deakinCollege from "../../../../public/comp/DeakinCollege.jpg";
import trinityCollegeDublin from "../../../../public/comp/TrinityCollegeDublin.webp";
import universityCollegeDublin from "../../../../public/comp/UniversityCollegeDublin.jpg";
import dublinCityUniversity from "../../../../public/comp/DublinCityUniversity.webp";
import universityCollegeCork from "../../../../public/comp/UniversityCollegeCork.webp";
import academiesAustralasiaCollege from "../../../../public/comp/academies-australasia-college.webp";

//////////////////////////// ----> FLAG SOURCE https://www.countryflags.com/south-korea-flag-vector/

export const COUNTRIES: Country[] = [
  {
    id: "australia",
    image: aus,
    country: "Australia",
    class: "",
    description:
      "Study in a land of endless opportunities and natural beauty. Experience world-class education, diverse culture, and excellent post-study work opportunities in one of the world's most liveable countries.",
    flag: "/au.svg",
    flagBg: "bg-au-flag",
    route: "australia",
  },
  {
    id: "france",
    image: france,
    country: "France",
    class: "",
    description:
      "Study in the land of innovation and art. Experience world-renowned education, rich history, and cultural diversity while building your future in the heart of Europe.",
    flag: "/fr.svg",
    flagBg: "bg-fr-flag",
    route: "france",
    // outlineSvg: ukSvg,
  },
  {
    id: "germany",
    image: germany,
    country: "Germany",
    class: "",
    description:
      "Access top-tier engineering and technology programs. Study in Europe's economic powerhouse with excellent research facilities, affordable education, and strong industry connections.",
    flag: "/de.svg",
    flagBg: "bg-de-flag",
    route: "germany",
    // outlineSvg: ukSvg,
  },
  {
    id: "ireland",
    image: ireland,
    country: "Ireland",
    class: "",
    description:
      "Study in the Emerald Isle with a strong academic tradition. Enjoy friendly communities, English-language programs, and a thriving tech industry in one of Europe's most welcoming nations.",
    flag: "/ireland.svg",
    flagBg: "bg-ireland-flag",
    route: "ireland",
  },
  {
    id: "malta",
    image: malta,
    country: "Malta",
    class: "",
    description:
      "Experience Mediterranean charm while studying in English. Enjoy a safe, sunny island nation with European education standards and a vibrant international student community.",
    flag: "/malta.svg",
    flagBg: "bg-malta-flag",
    route: "malta",
    // outlineSvg: ukSvg,
  },
  {
    id: "singapore",
    image: singapore,
    country: "Singapore",
    class: "",
    description: "Study in Asia's global education hub. Benefit from world-class universities, a multicultural environment, and strong industry links in a safe and vibrant city-state.",
    flag: "/malta.svg",
    flagBg: "bg-malta-flag",
    route: "singapore",
    // outlineSvg: ukSvg,
  },
  {
    id: "south_korea",
    image: south_korea,
    country: "South Korea",
    class: "",
    description:
      "Explore advanced technology and rich traditions. Study in Asia's education leader with modern campuses, innovative programs, and growing global influence in technology and culture.",
    flag: "/spain.svg",
    flagBg: "bg-south-korea-flag",
    route: "south-korea",
    // outlineSvg: ukSvg,
  },
  {
    id: "spain",
    image: spain,
    country: "Spain",
    class: "",
    description:
      "Immerse yourself in vibrant culture while pursuing quality education. Learn in a country known for its warm hospitality, beautiful landscapes, and growing international programs.",
    flag: "/spain.svg",
    flagBg: "bg-spain-flag",
    route: "spain",
    // outlineSvg: ukSvg,
  },
  {
    id: "uae",
    image: dxb,
    country: "UAE",
    class: "",
    description:
      "Study in a modern global hub where East meets West. Access cutting-edge facilities, multicultural campuses, and excellent career opportunities in the heart of the Middle East.",
    flag: "/dxb.svg",
    flagBg: "bg-dxb-flag",
    route: "UAE",
    // outlineSvg: ukSvg,
  },
  {
    id: "united_kingdom",
    image: uk,
    country: "United Kingdom",
    class: "",
    description:
      "Discover world-class universities and rich cultural heritage. Study in the birthplace of the English language with globally recognized degrees and diverse academic opportunities.",
    flag: "/gb.svg",
    flagBg: "bg-gb-flag",
    route: "united_kingdom",
    // outlineSvg: ukSvg,
  },
  //   {
  //     id: "ned",
  //     image: netherlands,
  //     country: "Netherlands",
  //     class: "",
  //     description: "",
  //   //     flag: "/nl.svg",
  //     flagBg: "bg-nl-flag",
  //   },
  // {
  //     id: "lat",
  //     image: latvia,
  //     country: "Latvia",
  //     class: "",
  //     description: "",
  //   //     flag: "/lv.svg",
  //     flagBg: 'bg-lv-flag'
  // },
  // {
  //     id: "swi",
  //     image: switzerland,
  //     country: "Switzerland",
  //     class: "",
  //     description: "",
  //   //     flag: "/ch.svg",
  //     flagBg: 'bg-ch-flag'
  // },
  //   {
  //     id: "can",
  //     image: canada,
  //     country: "Canada",
  //     class: "",
  //     description: "",
  //   //     flag: "/ca.svg",
  //     flagBg: "bg-ca-flag",
  //   },
  // {
  //     id: "fin",
  //     image: finland,
  //     country: "Finland",
  //     class: "",
  //     description: "",
  //   //     flag: "/fi.svg",
  //     flagBg: 'bg-fi-flag'
  // },
  // {
  //     id: "bal",
  //     image: belarus,
  //     country: "Belarus",
  //     class: "",
  //     description: "",
  //   //     flag: "/by.svg",
  //     flagBg: 'bg-by-flag'
  // },
  //   {
  //     id: "ita",
  //     image: italy,
  //     country: "Italy",
  //     class: "",
  //     description: "",
  //   //     flag: "/it.svg",
  //     flagBg: "bg-it-flag",
  //   },
  // {
  //     id: "swe",
  //     image: sweden,
  //     country: "Sweden",
  //     class: "",
  //     description: "",
  //   //     flag: "/se.svg",
  //     flagBg: 'bg-se-flag'
  // },
  // {
  //     id: "rus",
  //     image: russia,
  //     country: "Russia",
  //     class: "",
  //     description: "",
  //   //     flag: "/ru.svg",
  //     flagBg: 'bg-ru-flag'
  // },
];

export const PRE_SELECTED_COUNTRY: Country = COUNTRIES[0];

export const COUNTRIES_FOR_SELECT = COUNTRIES.map((obj) => {
  const mapped = {
    id: obj.id,
    value: obj.country,
    text: obj.country,
  };
  return mapped;
});

export const UNIVERSITIES: University[] = [
  {
    id: 1,
    name: "Britts Imperial University College",
    country: "UAE - Sharjah",
    logo: brittsUaeImg,
    ranking: "Top in UAE",
    programs: ["Medicine", "Engineering", "Business"],
    established: "1982",
    category: "uae",
  },
  {
    id: 2,
    name: "Global College Malta",
    country: "Malta",
    logo: globalMaltaImg,
    ranking: "#35 in Globally",
    programs: ["Computer Science", "Medicine", "Law"],
    established: "2012",
    category: "malta",
  },
  {
    id: 3,
    name: "Global Business Studies",
    country: "UAE - Dubai",
    logo: gbsDubaiImg,
    ranking: "Top in UAE",
    programs: ["Arts", "Sciences", "Medicine"],
    established: "2010",
    category: "uae",
  },
  {
    id: 4,
    name: "Birmingham City University",
    country: "UK",
    logo: birminghamCityUniImg,
    ranking: "#87th in UK",
    programs: ["Engineering", "Technology", "Sciences"],
    established: "1992",
    category: "united_kingdom",
  },
  {
    id: 5,
    name: "University of Hertfordshire",
    country: "UK",
    logo: universityOfHertfordshireImg,
    ranking: "#82 in UK",
    programs: ["Business", "IT", "Medicine"],
    established: "1952",
    category: "united_kingdom",
  },
  {
    id: 6,
    name: "University of East London",
    country: "Dubai (UAE)",
    logo: universityOfEastLondonImg,
    ranking: "Top in UK",
    programs: ["Business", "Engineering", "Architecture"],
    established: "1898",
    category: "dubai",
  },
  {
    id: 7,
    name: "Global Business Studies",
    country: "Malta",
    logo: gbsDubaiImg,
    ranking: "Top 100 globally",
    programs: ["Arts", "Sciences", "Medicine"],
    established: "2010",
    category: "malta",
  },
  {
    id: 8,
    name: "Liverpool John Moores University",
    country: "UK",
    logo: liverpoolJonMooresUniImg,
    ranking: "#98 in Europe",
    programs: ["Engineering", "Medicine", "Business"],
    established: "1823",
    category: "united_kingdom",
  },
  {
    id: 9,
    name: "Schiller International University",
    country: "Spain",
    logo: schillerSpainUnImg,
    ranking: "Top in Europe",
    programs: ["Medicine", "Law", "Psychology"],
    established: "1964",
    category: "spain",
  },
  {
    id: 10,
    name: "Schiller International University",
    country: "Germany",
    logo: schillerGermanyImg,
    ranking: "Top in Europe",
    programs: ["Medicine", "Law", "Psychology"],
    established: "1964",
    category: "germany",
  },
  {
    id: 11,
    name: "Schiller International University",
    country: "France",
    logo: schillerFranceImg,
    ranking: "Top in Europe",
    programs: ["Engineering", "Sciences", "Mathematics"],
    established: "1794",
    category: "france",
  },
  {
    id: 12,
    name: "Manipal University",
    country: "UAE - Dubai",
    logo: manipalImg,
    ranking: "#901 Globally",
    programs: ["Medicine", "Law", "Sciences"],
    established: "2000",
    category: "uae",
  },
  {
    id: 13,
    name: "University of Sunderland",
    country: "UK",
    logo: uniOfSunderlandImg,
    ranking: "Top in Europe",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1901",
    category: "united_kingdom",
  },
  {
    id: 14,
    name: "Edith Cowan College",
    country: "Australia",
    logo: edithCowanCollege,
    ranking: "Top in Australia",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1994",
    category: "australia",
  },
  {
    id: 15,
    name: "CQUniversity",
    country: "Australia",
    logo: cQUniversity,
    ranking: "Top in Australia",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1967",
    category: "australia",
  },
  {
    id: 16,
    name: "University of Tasmania",
    country: "Australia",
    logo: universityOfTasmaniaImg,
    ranking: "Top in Australia",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1890",
    category: "australia",
  },
  {
    id: 17,
    name: "La Trobe University",
    country: "Australia",
    logo: laTrobeUniversity,
    ranking: "Top in Australia",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1964",
    category: "australia",
  },
  {
    id: 18,
    name: "Deakin College",
    country: "Australia",
    logo: deakinCollege,
    ranking: "Top in Australia",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1996",
    category: "australia",
  },
  {
    id: 19,
    name: "Trinity College Dublin",
    country: "Ireland",
    logo: trinityCollegeDublin,
    ranking: "Top in Ireland",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1592",
    category: "ireland",
  },
  {
    id: 20,
    name: "University College Dublin",
    country: "Ireland",
    logo: universityCollegeDublin,
    ranking: "Top in Ireland",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1854",
    category: "ireland",
  },
  {
    id: 21,
    name: "Dublin City University",
    country: "Ireland",
    logo: dublinCityUniversity,
    ranking: "Top in Ireland",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1989",
    category: "ireland",
  },
  {
    id: 22,
    name: "University College Cork",
    country: "Ireland",
    logo: universityCollegeCork,
    ranking: "Top in Ireland",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1989",
    category: "ireland",
  },
  {
    id: 24,
    name: "Academies Australasia College",
    country: "Singapore",
    logo: academiesAustralasiaCollege,
    ranking: "Top in Singapore",
    programs: ["Engineering", "IT", "Sciences"],
    established: "1989",
    category: "singapore",
  },
];
