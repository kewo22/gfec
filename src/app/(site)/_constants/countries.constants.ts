import { Country } from "../_types/country";

import aus from "../../../../public/comp/aus.webp";
import uk from "../../../../public/comp/uk.webp";
import canada from "../../../../public/comp/canada.webp";
import finland from "../../../../public/comp/finland.webp";
import belarus from "../../../../public/comp/belarus.webp";
import germany from "../../../../public/comp/germany.webp";
import italy from "../../../../public/comp/italy.webp";
import sweden from "../../../../public/comp/sweden.webp";
import russia from "../../../../public/comp/russia.webp";
import france from "../../../../public/comp/france.webp";
import netherlands from "../../../../public/comp/netherlands.webp";
import latvia from "../../../../public/comp/latvia.webp";
import switzerland from "../../../../public/comp/switzerland.webp";
import dxb from "../../../../public/comp/dxb.webp";
import malta from "../../../../public/comp/malta.webp";
import spain from "../../../../public/comp/spain.webp";
import ireland from "../../../../public/comp/ireland.webp";
import south_korea from "../../../../public/comp/south_korea.webp";

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
