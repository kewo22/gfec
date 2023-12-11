export interface ApplicationFormModel {
    firstName: string;
    lastName: string;
    address?: string;
    dob: Date | null;
    gender: string | null;
    email: string;
    mobile: string;

    //
    olSchool?: string;
    olYear?: string;
    olType?: string;
    olMathematics?: string;
    olEnglish?: string;
    olResultA?: string;
    olResultB?: string;
    olResultC?: string;
    olResultS?: string;
    olResultW?: string;

    //
    alSchool?: string;
    alYear?: string;
    alType?: string;
    alMathematics?: string;
    alEnglish?: string;
    alResultA?: string;
    alResultB?: string;
    alResultC?: string;
    alResultS?: string;
    alResultW?: string;

    //
    yearOfCompletion?: string;
    affiliatedUniversity?: string;
    affiliatedUniversityText?: string;
    stream?: string;
    gpa?: string;
    class?: string;

    //
    country?: string;
    studyArea?: string[];
}
