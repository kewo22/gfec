import { Country } from "../constants/country";

export type FilterProps = {
  filterPosition: string;

  onCloseMenu: () => void;
  onCountrySelect: (e: Country) => void;
};
