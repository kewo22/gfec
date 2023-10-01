import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-banner": "url('/home-banner.jpg')",
        "home-banner-1": "url('/video-poster.jpg')",
        "home-banner-2": "url('/home-banner-crop.jpg')",
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
        "aus-banner": "url('/aus.jpg')",
      },
      colors: {
        primary: "#BD9519",
        secondary: "#000080",
        accent: "#040607",
      },
      height: {
        'nav-height': '1000px',
        '128': '32rem',
      },
      boxShadow: {
        'about-card': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      }
    },
  },
  plugins: [],
}
export default config

// https://www.youtube.com/watch?v=aSlK3GhRuXA
