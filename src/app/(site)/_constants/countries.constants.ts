import { Country } from "../_types/country";

import aus from '../../../../public/comp/aus.webp'
import uk from '../../../../public/comp/uk.webp'
import canada from '../../../../public/comp/canada.webp'
import finland from '../../../../public/comp/finland.webp'
import belarus from '../../../../public/comp/belarus.webp'
import germany from '../../../../public/comp/germany.webp'
import italy from '../../../../public/comp/italy.webp'
import sweden from '../../../../public/comp/sweden.webp'
import russia from '../../../../public/comp/russia.webp'
import france from '../../../../public/comp/france.webp'
import netherlands from '../../../../public/comp/netherlands.webp'
import latvia from '../../../../public/comp/latvia.webp'
import switzerland from '../../../../public/comp/switzerland.webp'
import dxb from '../../../../public/comp/dxb.webp'
import malta from '../../../../public/comp/malta.webp'

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
        image: uk,
        country: "United Kingdom",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/gb.svg",
        flagBg: 'bg-gb-flag'
    },
    {
        id: "can",
        image: canada,
        country: "Canada",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ca.svg",
        flagBg: 'bg-ca-flag'
    },
    {
        id: "fin",
        image: finland,
        country: "Finland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fi.svg",
        flagBg: 'bg-fi-flag'
    },
    {
        id: "bal",
        image: belarus,
        country: "Belarus",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/by.svg",
        flagBg: 'bg-by-flag'
    },
    {
        id: "ger",
        image: germany,
        country: "Germany",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/de.svg",
        flagBg: 'bg-de-flag'
    },
    {
        id: "ita",
        image: italy,
        country: "Italy",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/it.svg",
        flagBg: 'bg-it-flag'
    },
    {
        id: "swe",
        image: sweden,
        country: "Sweden",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/se.svg",
        flagBg: 'bg-se-flag'
    },
    {
        id: "rus",
        image: russia,
        country: "Russia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ru.svg",
        flagBg: 'bg-ru-flag'
    },
    {
        id: "fra",
        image: france,
        country: "France",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/fr.svg",
        flagBg: 'bg-fr-flag'
    },
    {
        id: "ned",
        image: netherlands,
        country: "Netherlands",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/nl.svg",
        flagBg: 'bg-nl-flag'
    },
    {
        id: "lat",
        image: latvia,
        country: "Latvia",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/lv.svg",
        flagBg: 'bg-lv-flag'
    },
    {
        id: "swi",
        image: switzerland,
        country: "Switzerland",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/ch.svg",
        flagBg: 'bg-ch-flag'
    },
    {
        id: "dxb",
        image: dxb,
        country: "UAE - Dubai",
        class: "",
        description: "",
        isCourseDetailAvailable: false,
        flag: "/dxb.svg",
        flagBg: 'bg-dxb-flag'
    },
    {
        id: "malta",
        image: malta,
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