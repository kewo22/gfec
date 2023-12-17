/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL: process.env.MONGO_URL || "NO URL FROM NEXT.CONFIG",
    NODEMAILER_SERVICE:
      process.env.NODEMAILER_SERVICE ||
      "NO NODEMAILER_SERVICE FROM NEXT.CONFIG",
    NODEMAILER_USER:
      process.env.NODEMAILER_USER || "NO NODEMAILER_USER FROM NEXT.CONFIG",
    NODEMAILER_PASSWORD:
      process.env.NODEMAILER_PASSWORD ||
      "NO NODEMAILER_PASSWORD FROM NEXT.CONFIG",
    NODEMAILER_PORT:
      process.env.NODEMAILER_PORT || "NO NODEMAILER_PORT FROM NEXT.CONFIG",
    TO_MAIL: process.env.TO_MAIL || "NO TO_MAIL FROM NEXT.CONFIG",
    APP_VER: process.env.APP_VER || "NO APP_VER FROM NEXT.CONFIG",
    API_BASE_URL:
      process.env.API_BASE_URL || "NO API_BASE_URL FROM NEXT.CONFIG",
    EMAILS: process.env.EMAILS || "NO EMAILS FROM NEXT.CONFIG",
    PHONE: process.env.PHONE || "NO PHONE FROM NEXT.CONFIG",
    APP_BASE_URL:
      process.env.APP_BASE_URL || "NO APP_BASE_URL FROM NEXT.CONFIG",
    ADDRESS_LINE_1:
      process.env.ADDRESS_LINE_1 || "NO ADDRESS_LINE_1 FROM NEXT.CONFIG",
    ADDRESS_LINE_2:
      process.env.ADDRESS_LINE_2 || "NO ADDRESS_LINE_2 FROM NEXT.CONFIG",
    ADDRESS_LINE_3:
      process.env.ADDRESS_LINE_3 || "NO ADDRESS_LINE_3 FROM NEXT.CONFIG",
    GL_MAP_KEY: process.env.GL_MAP_KEY || "NO GL_MAP_KEY FROM NEXT.CONFIG",
    LAT: process.env.LAT || "NO LAT FROM NEXT.CONFIG",
    LNG: process.env.LNG || "NO LNG FROM NEXT.CONFIG",
  },
  swcMinify: true,
  transpilePackages: [
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/free-regular-svg-icons",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/react-fontawesome",
    "@hookform/resolvers",
    "@radix-ui/react-icons",
    "@react-google-maps/api",
    "@tanstack/react-table",
    "@types/node",
    "@types/nodemailer",
    "@types/react",
    "@types/react-dom",
    "@vercel/analytics",
    "@vercel/speed-insights",
    "autoprefixer",
    "class-variance-authority",
    "clsx",
    "eslint",
    "eslint-config-next",
    "mongodb",
    "next",
    "nodemailer",
    "plyr-react",
    "postcss",
    "react",
    "react-device-detect",
    "react-dom",
    "react-hook-form",
    "react-intersection-observer",
    "react-slick",
    "slick-carousel",
    "swiper",
    "swr",
    "tailwind-merge",
    "tailwindcss",
    "tailwindcss-animate",
    "typescript",
    "yup",
  ],
};

module.exports = nextConfig;
