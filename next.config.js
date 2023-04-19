/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  env: {
    MONGO_URL: process.env.MONGO_URL || 'NO URL FROM NEXT.CONFIG',
    NODEMAILER_SERVICE: process.env.NODEMAILER_SERVICE || 'NO NODEMAILER_SERVICE FROM NEXT.CONFIG',
    NODEMAILER_USER: process.env.NODEMAILER_USER || 'NO NODEMAILER_USER FROM NEXT.CONFIG',
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD || 'NO NODEMAILER_PASSWORD FROM NEXT.CONFIG',
    TO_MAIL: process.env.TO_MAIL || 'NO TO_MAIL FROM NEXT.CONFIG',
    APP_VER: process.env.APP_VER || 'NO APP_VER FROM NEXT.CONFIG',
  },
};

module.exports = nextConfig;
