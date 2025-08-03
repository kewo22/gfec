import { NavItemLink } from "../_types/mobile-nav-item";

import {
  faCircleInfo,
  faHouse,
  faLocationDot,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

export const NavItems: NavItemLink[] = [
  {
    text: "Home",
    route: "/",
    class: "",
    isActive: false,
    icon: faHouse,
  },
  {
    text: "About GFEC",
    route: "about",
    class: "",
    isActive: false,
    icon: faCircleInfo,
  },
  {
    text: "Study Destinations",
    route: "destination",
    class: "",
    isActive: false,
    icon: faPlaneDeparture,
  },
  {
    text: "Gallery",
    route: "gallery",
    class: "",
    isActive: false,
    icon: faPlaneDeparture,
  },
  {
    text: "Events",
    route: "events",
    class: "",
    isActive: false,
    icon: faPlaneDeparture,
  },
  {
    text: "Contact Us",
    route: "contact",
    class: "",
    isActive: false,
    icon: faLocationDot,
  },
];
