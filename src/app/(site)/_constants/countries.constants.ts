import { Country, University } from "../_types/country";

// import aus from "../../../../public/comp/aus.webp";
import uk from "../../../../public/comp/uk.webp";
// import canada from "../../../../public/comp/canada.webp";
// import finland from "../../../../public/comp/finland.webp";
// import belarus from "../../../../public/comp/belarus.webp";
import germany from "../../../../public/comp/germany.webp";
// import italy from "../../../../public/comp/italy.webp";
// import sweden from "../../../../public/comp/sweden.webp";
// import russia from "../../../../public/comp/russia.webp";
import france from "../../../../public/comp/france.webp";
// import netherlands from "../../../../public/comp/netherlands.webp";
// import latvia from "../../../../public/comp/latvia.webp";
// import switzerland from "../../../../public/comp/switzerland.webp";
import dxb from "../../../../public/comp/dxb.webp";
import malta from "../../../../public/comp/malta.webp";
import spain from "../../../../public/comp/spain.webp";
// import ireland from "../../../../public/comp/ireland.webp";
import south_korea from "../../../../public/comp/south_korea.webp";

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

//////////////////////////// ----> FLAG SOURCE https://www.countryflags.com/south-korea-flag-vector/

export const COUNTRIES: Country[] = [
  // {
  //     id: "aus",
  //     image: aus,
  //     country: "Australia",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: true, // not using anywhere
  //     flag: "/au.svg",
  //     flagBg: 'bg-au-flag'
  // },
  {
    id: "uk",
    image: uk,
    country: "United Kingdom",
    class: "",
    description:
      "Discover world-class universities and rich cultural heritage. Study in the birthplace of the English language with globally recognized degrees and diverse academic opportunities.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/gb.svg",
    flagBg: "bg-gb-flag",
  },
  //   {
  //     id: "can",
  //     image: canada,
  //     country: "Canada",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/ca.svg",
  //     flagBg: "bg-ca-flag",
  //   },
  // {
  //     id: "fin",
  //     image: finland,
  //     country: "Finland",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/fi.svg",
  //     flagBg: 'bg-fi-flag'
  // },
  // {
  //     id: "bal",
  //     image: belarus,
  //     country: "Belarus",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/by.svg",
  //     flagBg: 'bg-by-flag'
  // },
  {
    id: "ger",
    image: germany,
    country: "Germany",
    class: "",
    description:
      "Access top-tier engineering and technology programs. Study in Europe's economic powerhouse with excellent research facilities, affordable education, and strong industry connections.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/de.svg",
    flagBg: "bg-de-flag",
  },
  //   {
  //     id: "ita",
  //     image: italy,
  //     country: "Italy",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/it.svg",
  //     flagBg: "bg-it-flag",
  //   },
  // {
  //     id: "swe",
  //     image: sweden,
  //     country: "Sweden",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/se.svg",
  //     flagBg: 'bg-se-flag'
  // },
  // {
  //     id: "rus",
  //     image: russia,
  //     country: "Russia",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/ru.svg",
  //     flagBg: 'bg-ru-flag'
  // },
  {
    id: "fra",
    image: france,
    country: "France",
    class: "",
    description:
      "Study in the land of innovation and art. Experience world-renowned education, rich history, and cultural diversity while building your future in the heart of Europe.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/fr.svg",
    flagBg: "bg-fr-flag",
  },
  //   {
  //     id: "ned",
  //     image: netherlands,
  //     country: "Netherlands",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/nl.svg",
  //     flagBg: "bg-nl-flag",
  //   },
  // {
  //     id: "lat",
  //     image: latvia,
  //     country: "Latvia",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/lv.svg",
  //     flagBg: 'bg-lv-flag'
  // },
  // {
  //     id: "swi",
  //     image: switzerland,
  //     country: "Switzerland",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/ch.svg",
  //     flagBg: 'bg-ch-flag'
  // },
  {
    id: "dxb",
    image: dxb,
    country: "UAE - Dubai",
    class: "",
    description:
      "Study in a modern global hub where East meets West. Access cutting-edge facilities, multicultural campuses, and excellent career opportunities in the heart of the Middle East.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/dxb.svg",
    flagBg: "bg-dxb-flag",
  },
  {
    id: "malta",
    image: malta,
    country: "Malta",
    class: "",
    description:
      "Experience Mediterranean charm while studying in English. Enjoy a safe, sunny island nation with European education standards and a vibrant international student community.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/malta.svg",
    flagBg: "bg-malta-flag",
  },
  {
    id: "esp",
    image: spain,
    country: "Spain",
    class: "",
    description:
      "Immerse yourself in vibrant culture while pursuing quality education. Learn in a country known for its warm hospitality, beautiful landscapes, and growing international programs.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/spain.svg",
    flagBg: "bg-spain-flag",
  },
  //   {
  //     id: "ire",
  //     image: ireland,
  //     country: "Ireland",
  //     class: "",
  //     description: "",
  //     isCourseDetailAvailable: false, // not using anywhere
  //     flag: "/ireland.svg",
  //     flagBg: "bg-ireland-flag",
  //   },
  {
    id: "sk",
    image: south_korea,
    country: "South Korea",
    class: "",
    description:
      "Explore advanced technology and rich traditions. Study in Asia's education leader with modern campuses, innovative programs, and growing global influence in technology and culture.",
    isCourseDetailAvailable: false, // not using anywhere
    flag: "/spain.svg",
    flagBg: "bg-south-korea-flag",
  },
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
    category: "uk",
  },
  {
    id: 5,
    name: "University of Hertfordshire",
    country: "UK",
    logo: universityOfHertfordshireImg,
    ranking: "#82 in UK",
    programs: ["Business", "IT", "Medicine"],
    established: "1952",
    category: "uk",
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
    category: "uk",
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
    category: "uk",
  },
];
