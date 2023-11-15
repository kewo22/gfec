import { ApplicationFormModel } from "../(site)/apply-now/page";

export const ResolveBaseUrl = (env: string) => {
  let privacyBasePolicyUrl = "";

  switch (env) {
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

export const ToApplicationFormObject = (obj: ApplicationFormModel) => {

  return {
    personal: {
      firstName: obj.firstName,
      lastName: obj.lastName,
      address: obj.address,
      dob: obj.dob,
      gender: obj.gender,
      email: obj.email,
      mobile: obj.mobile,
    },
    ol: {
      olSchool: obj.olSchool,
      olYear: obj.olYear,
      olType: obj.olType,
      olMathematics: obj.olMathematics,
      olEnglish: obj.olEnglish,
      olResultA: obj.olResultA,
      olResultB: obj.olResultB,
      olResultC: obj.olResultC,
      olResultS: obj.olResultS,
      olResultW: obj.olResultW,
    },
    al: {
      alSchool: obj.alSchool,
      alYear: obj.alYear,
      alType: obj.alType,
      alMathematics: obj.alMathematics,
      alEnglish: obj.alEnglish,
      alResultA: obj.alResultA,
      alResultB: obj.alResultB,
      alResultC: obj.alResultC,
      alResultS: obj.alResultS,
      alResultW: obj.alResultW,
    },
    degree: {
      yearOfCompletion: obj.yearOfCompletion,
      affiliatedUniversity: obj.affiliatedUniversity,
      affiliatedUniversityText: obj.affiliatedUniversityText,
      stream: obj.stream,
    },
    preference: {
      studyArea: obj.studyArea
    }
  }
}