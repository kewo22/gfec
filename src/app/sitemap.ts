import type { MetadataRoute } from "next";

import { COUNTRIES } from "./(site)/_constants/countries.constants";

const BASE_URL = "https://gfeconsultancy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about",
    "apply-now",
    "contact",
    "events",
    "gallery",
    "privacy-policy",
    "study-abroad",
  ].map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
  }));

  const countryRoutes = COUNTRIES.map((country) => ({
    url: `${BASE_URL}/study-abroad/${country.route}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...countryRoutes];
}
