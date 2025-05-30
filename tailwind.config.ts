import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "home-banner-1": "url('/comp/video-poster.webp')",
        "home-banner-2": "url('/comp/home-banner-crop.webp')",
        "au-flag": "url('/au.svg')",
        "gb-flag": "url('/gb.svg')",
        "ca-flag": "url('/ca.svg')",
        "fi-flag": "url('/fi.svg')",
        "by-flag": "url('/by.svg')",
        "de-flag": "url('/de.svg')",
        "it-flag": "url('/it.svg')",
        "se-flag": "url('/se.svg')",
        "ru-flag": "url('/ru.svg')",
        "fr-flag": "url('/fr.svg')",
        "nl-flag": "url('/nl.svg')",
        "lv-flag": "url('/lv.svg')",
        "ch-flag": "url('/ch.svg')",
        "dxb-flag": "url('/dxb.svg')",
        "malta-flag": "url('/malta.svg')",
        "spain-flag": "url('/spain.svg')",
        "ireland-flag": "url('/ireland.svg')",
        "aus-banner": "url('/aus.jpg')",
        "belarus-banner": "url('/belarus.jpg')",
        "finland-banner": "url('/finland.jpg')",
        "france-banner": "url('/france.jpg')",
        "germany-banner": "url('/germany.jpg')",
        "italy-banner": "url('/italy.jpg')",
        "latvia-banner": "url('/latvia.jpg')",
        "netherlands-banner": "url('/netherlands.jpg')",
        "russia-banner": "url('/russia.jpg')",
        "sweden-banner": "url('/sweden.jpg')",
        "switzerland-banner": "url('/switzerland.jpg')",
        "canada-banner": "url('/canada.jpg')",
        "uk-banner": "url('/uk.jpg')",
        "dxb-banner": "url('/dxb.jpg')",
        "malta-banner": "url('/malta.jpg')",
        "spain-banner": "url('/spain.jpg')",
        "ireland-banner": "url('/ireland.jpg')",
      },
      colors: {
        primary: "#BD9519",
        secondary: "#000080",
        accent: "#040607",
      },
      height: {
        "nav-height": "1000px",
        "128": "32rem",
        "mobile-nav-height": "calc(100% - 5.4%)",
      },
      boxShadow: {
        "about-card":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
      backgroundColor: {
        "alice-blue": "#DAEAF7",
      },
    },
  },
  plugins: [],
};
export default config;

// https://www.youtube.com/watch?v=aSlK3GhRuXA
