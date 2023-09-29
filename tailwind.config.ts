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
      },
      colors: {
        primary: "#BD9519",
        secondary: "#000080",
        accent: "#040607",
      },
      height: {
        'nav-height': '1000px',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
export default config

// https://www.youtube.com/watch?v=aSlK3GhRuXA
