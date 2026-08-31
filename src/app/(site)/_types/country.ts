import { StaticImageData } from "next/image";

export type Country = {
  id: string; // make enum
  image: StaticImageData;
  country: string;
  class: string;
  description?: string;
  flag: string;
  flagBg: string;
  route: string;
  outlineSvg?: string;
  // dest?: string;
};

export type University = {
  id: number;
  name: string;
  country: string;
  logo: StaticImageData;
  ranking: string;
  programs: string[];
  established: string;
  category: string;
};
export type CountryProps = {
  foundCountry: Country;
};
