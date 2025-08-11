import { StaticImageData } from "next/image";

export type Country = {
  id: string;
  image: StaticImageData;
  country: string;
  class: string;
  description?: string;
  isCourseDetailAvailable: boolean; // not using anywhere
  flag: string;
  flagBg: string;
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
