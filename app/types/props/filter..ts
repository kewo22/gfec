import { Country } from "../constants/country";

export type FilterProps = {
  filterPosition: string;
  selectedCountry: Country | null;

  onCloseMenu: () => void;
  onCountryChange: (e: Country) => void;
};
