export const ResolveBaseUrl = (env: string) => {
  let privacyBasePolicyUrl = "";

  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      privacyBasePolicyUrl = process.env.APP_BASE_URL!;
      break;

    case "preview":
      privacyBasePolicyUrl =
        "https://" + process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL!;
      break;

    default:
      privacyBasePolicyUrl = process.env.APP_BASE_URL!;
      break;
  }

  return privacyBasePolicyUrl;
};
