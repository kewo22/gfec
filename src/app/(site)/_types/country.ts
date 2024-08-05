import { StaticImageData } from "next/image";

export type Country = {
    id: string;
    image: StaticImageData;
    country: string;
    class: string;
    description?: string;
    isCourseDetailAvailable: boolean;
    flag: string;
    flagBg: string;
};
