export interface Apply {
  personal: Personal;
  education: Education;
  preference: Preference;
  workExperience: WorkExperience;
  budget: string;
  comments: string;
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
  school: {
    name: "";
    ol: Results;
    al: Results;
  };
  degree: Degree | null;
}

interface Results {
  year: number;
  type: string;
  subjects: Record<string, string>;
  resultsSummary: ResultsSummary;
}

interface ResultsSummary {
  a: number;
  b: number;
  c: number;
  d: number;
  s: number;
}

interface Degree {
  year: null;
  stream: string;
  university: string;
  universityAffiliation: string;
  gpa: null;
}

interface Preference {
  studyArea: string[];
  destination: string[];
  migratingAlone: boolean;
}

interface WorkExperience {
  designation: string;
  experience: {
    month: 0;
    year: 0;
  };
}
