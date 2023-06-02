export type NavItemLink = {
  text: string;
  route: string;
  class: string;
  type: "link" | "popover";
};

export type CountriesLink = {
  country: string;
  route: string;
};
