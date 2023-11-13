import { Country } from "../_types/country";

export const COUNTRIES: Country[] = [
    {
        id: "aus",
        image: "/aus.jpg",
        country: "Australia",
        class: "",
        description: "",
        isCourseDetailAvailable: true,
        flag: "/au.svg",
        flagBg: 'bg-au-flag'
    },
    {
        id: "uk",
        image: "/uk.jpg",
        country: "United Kingdom",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/gb.svg",
        flagBg: 'bg-gb-flag'
    },
    {
        id: "can",
        image: "/canada.jpg",
        country: "Canada",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ca.svg",
        flagBg: 'bg-ca-flag'
    },
    {
        id: "fin",
        image: "/finland.jpg",
        country: "Finland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fi.svg",
        flagBg: 'bg-fi-flag'
    },
    {
        id: "bal",
        image: "/belarus.jpg",
        country: "Belarus",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/by.svg",
        flagBg: 'bg-by-flag'
    },
    {
        id: "ger",
        image: "/germany.jpg",
        country: "Germany",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/de.svg",
        flagBg: 'bg-de-flag'
    },
    {
        id: "ita",
        image: "/italy.jpg",
        country: "Italy",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/it.svg",
        flagBg: 'bg-it-flag'
    },
    {
        id: "swe",
        image: "/sweden.jpg",
        country: "Sweden",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/se.svg",
        flagBg: 'bg-se-flag'
    },
    {
        id: "rus",
        image: "/russia.jpg",
        country: "Russia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ru.svg",
        flagBg: 'bg-ru-flag'
    },
    {
        id: "fra",
        image: "/france.jpg",
        country: "France",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fr.svg",
        flagBg: 'bg-fr-flag'
    },
    {
        id: "ned",
        image: "/netherlands.jpg",
        country: "Netherlands",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/nl.svg",
        flagBg: 'bg-nl-flag'
    },
    {
        id: "lat",
        image: "/latvia.jpg",
        country: "Latvia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/lv.svg",
        flagBg: 'bg-lv-flag'
    },
    {
        id: "swi",
        image: "/switzerland.jpg",
        country: "Switzerland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ch.svg",
        flagBg: 'bg-ch-flag'
    },
];

export const PRE_SELECTED_COUNTRY: Country = COUNTRIES[0]

export const COUNTRIES_FOR_SELECT = COUNTRIES.map(obj => {
    const mapped = {
        id: obj.id,
        value: obj.country,
        text: obj.country
    }
    return mapped
})