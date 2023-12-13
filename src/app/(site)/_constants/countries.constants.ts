import { Country } from "../_types/country";
import aus from '../../../../public/comp/aus.webp'

export const COUNTRIES: Country[] = [
    {
        id: "aus",
        image: aus,
        country: "Australia",
        class: "",
        description: "",
        isCourseDetailAvailable: true,
        flag: "/au.svg",
        flagBg: 'bg-au-flag'
    },
    {
        id: "uk",
        image: "/comp/uk.webp",
        country: "United Kingdom",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/gb.svg",
        flagBg: 'bg-gb-flag'
    },
    {
        id: "can",
        image: "/comp/canada.webp",
        country: "Canada",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ca.svg",
        flagBg: 'bg-ca-flag'
    },
    {
        id: "fin",
        image: "/comp/finland.webp",
        country: "Finland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fi.svg",
        flagBg: 'bg-fi-flag'
    },
    {
        id: "bal",
        image: "/comp/belarus.webp",
        country: "Belarus",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/by.svg",
        flagBg: 'bg-by-flag'
    },
    {
        id: "ger",
        image: "/comp/germany.webp",
        country: "Germany",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/de.svg",
        flagBg: 'bg-de-flag'
    },
    {
        id: "ita",
        image: "/comp/italy.webp",
        country: "Italy",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/it.svg",
        flagBg: 'bg-it-flag'
    },
    {
        id: "swe",
        image: "/comp/sweden.webp",
        country: "Sweden",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/se.svg",
        flagBg: 'bg-se-flag'
    },
    {
        id: "rus",
        image: "/comp/russia.webp",
        country: "Russia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ru.svg",
        flagBg: 'bg-ru-flag'
    },
    {
        id: "fra",
        image: "/comp/france.webp",
        country: "France",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fr.svg",
        flagBg: 'bg-fr-flag'
    },
    {
        id: "ned",
        image: "/comp/netherlands.webp",
        country: "Netherlands",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/nl.svg",
        flagBg: 'bg-nl-flag'
    },
    {
        id: "lat",
        image: "/comp/latvia.webp",
        country: "Latvia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/lv.svg",
        flagBg: 'bg-lv-flag'
    },
    {
        id: "swi",
        image: "/comp/switzerland.webp",
        country: "Switzerland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ch.svg",
        flagBg: 'bg-ch-flag'
    },
    {
        id: "dxb",
        image: "/comp/dxb.webp",
        country: "UAE - Dubai",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/dxb.svg",
        flagBg: 'bg-dxb-flag'
    },
    {
        id: "malta",
        image: "/comp/malta.webp",
        country: "Malta",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/malta.svg",
        flagBg: 'bg-malta-flag'
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