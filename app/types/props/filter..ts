import { Country } from "../constants/country";

export type FilterProps = {
  filterPosition: string;

  onCloseMenu: () => void;
  onCountryChange: (e: Country) => void;
};
