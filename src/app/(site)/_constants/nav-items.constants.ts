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
    icon: faHouse
  },
  {
    text: "About",
    route: "about",
    class: "",
    isActive: false,
    icon: faCircleInfo
  },
  {
    text: "Destination",
    route: "destination",
    class: "",
    isActive: false,
    icon: faPlaneDeparture
  },
  {
    text: "Contact",
    route: "contact",
    class: "",
    isActive: false,
    icon: faLocationDot
  },
];
