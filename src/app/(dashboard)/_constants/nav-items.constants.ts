import { NavItemLink } from "../_types/mobile-nav-item";

import {
  faChartSimple,
  faHeadset,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export const NavItems: NavItemLink[] = [
  {
    text: "Insights",
    route: "insights",
    class: "",
    isActive: false,
    icon: faChartSimple,
  },
  {
    text: "Get in touch",
    route: "get-in-touch",
    class: "",
    isActive: false,
    icon: faHeadset,
  },
  {
    text: "Application",
    route: "application",
    class: "",
    isActive: false,
    icon: faFilePen,
  },
];
