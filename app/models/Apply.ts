export interface Apply {
  personal: Personal;
  education: Education;
  preference: Preference;
  otherInfo: OtherInfo;
  // workExperience: WorkExperience;
  // budget: string;
  // comments: string;
}

interface Personal {
  firstName: string;
  lastName: string;
  address: string;
  dob: string;
  gender: string;
  tel: string;
  mob: string;
  email: string;
  fb: string;
}

interface Education {
  school: string;
  ol: SchoolResults;
  al: SchoolResults;
}

interface SchoolResults {
  type: string;
  year: "london" | "local";
  results: Results[];
  subjects: SubjectResults[];
}

interface Results {
  // [key: string]: string;
  a: string;
  b: string;
  c: string;
  d: string;
  s: string;
}

interface SubjectResults {
  english: string;
  mathematics: string;
}

interface Preference {
  destination: string;
  study: string[];
}

interface OtherInfo {
  budget: string;
  comment: string;
}
