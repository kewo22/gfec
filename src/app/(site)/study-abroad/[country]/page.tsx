import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { COUNTRIES, UNIVERSITIES } from "../../_constants/countries.constants";
import { DESTINATION_CONTENT } from "../../_constants/destination-content.constants";
import DestinationTemplate from "../../_components/destination-template";

const BASE_URL = "https://gfeconsultancy.com";

type DestinationPageProps = {
  params: Promise<{ country: string }>;
};

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country: country.route }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const foundCountry = COUNTRIES.find((c) => c.route.toLowerCase() === countrySlug.toLowerCase());

  if (!foundCountry) {
    return { title: "Destination not found" };
  }

  const title = `Study in ${foundCountry.country} from Sri Lanka`;
  const description = `${foundCountry.description} GFEC guides Sri Lankan students through university selection, admissions, and visa applications for ${foundCountry.country}.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/study-abroad/${foundCountry.route}` },
    openGraph: { title, description, url: `${BASE_URL}/study-abroad/${foundCountry.route}` },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { country: countrySlug } = await params;
  const foundCountry = COUNTRIES.find((c) => c.route.toLowerCase() === countrySlug.toLowerCase());

  if (!foundCountry) {
    notFound();
  }

  const content = DESTINATION_CONTENT[foundCountry.id];
  if (!content) {
    notFound();
  }

  const universities = UNIVERSITIES.filter((u) => u.category === foundCountry.id);

  return <DestinationTemplate country={foundCountry} content={content} universities={universities} />;
}
