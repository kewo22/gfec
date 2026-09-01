import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
  ...nextCoreWebVitals,
];

export default eslintConfig;
