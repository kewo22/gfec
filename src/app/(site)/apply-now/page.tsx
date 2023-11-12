"use client";

import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { array, date, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  faGraduationCap,
  faHeart,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import Container from "../_components/layouts/container";
import ApplyFormLayout from "../_components/layouts/apply-form-layout";

import SectionTitle from "../_components/section-title";
import Input from "@/app/_components/ui/input";
import RadioButton from "@/app/_components/ui/radio";
import Button from "@/app/_components/ui/button";
import { Typography } from "@/app/_components/ui/typography";
import Select from "@/app/_components/ui/select";
import IncrementInput from "@/app/_components/ui/increment-input";
import Checkboxes from "@/app/_components/ui/checkbox";

export interface ApplicationFormModel {
  firstName: string;
  lastName: string;
  address?: string;
  dob: Date | null;
  gender: string;
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
  olResultD?: string;
  olResultS?: string;

  //
  alSchool?: string;
  alYear?: string;
  alType?: string;
  alMathematics?: string;
  alEnglish?: string;
  alResultA?: string;
  alResultB?: string;
  alResultC?: string;
  alResultD?: string;
  alResultS?: string;

  //
  yearOfCompletion?: string;
  affiliatedUniversity?: string;
  affiliatedUniversityText?: string;
  stream?: string;

  //
  studyArea?: string[];
}

const schema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  address: string(),
  dob: date().required("Required"),
  gender: string().required("Required"),
  email: string().email("Invalid Email").required("Required"),
  mobile: string()
    .required("Required")
    .matches(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Invalid Format"),

  //
  olSchool: string().optional(),
  olYear: string().optional(),
  olType: string().optional(),
  olMathematics: string().optional(),
  olEnglish: string().optional(),
  olResultA: string().optional(),
  olResultB: string().optional(),
  olResultC: string().optional(),
  olResultD: string().optional(),
  olResultS: string().optional(),

  //
  alSchool: string().optional(),
  alYear: string().optional(),
  alType: string().optional(),
  alMathematics: string().optional(),
  alEnglish: string().optional(),
  alResultA: string().optional(),
  alResultB: string().optional(),
  alResultC: string().optional(),
  alResultD: string().optional(),
  alResultS: string().optional(),

  //
  yearOfCompletion: string().optional(),
  affiliatedUniversity: string().optional(),
  affiliatedUniversityText: string().optional(),
  stream: string().optional(),

  //
  studyArea: array().optional(),
});

export default function ApplyNow() {
  const [isOtherUni, setIsOtherUni] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ApplicationFormModel>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      dob: null,
      gender: "",
      email: "",
      mobile: "",

      //
      olSchool: "",
      olYear: "",
      olType: "",
      olMathematics: "",
      olEnglish: "",
      olResultA: "",
      olResultB: "",
      olResultC: "",
      olResultD: "",
      olResultS: "",
      //
      alSchool: "",
      alYear: "",
      alType: "",
      alMathematics: "",
      alEnglish: "",
      alResultA: "",
      alResultB: "",
      alResultC: "",
      alResultD: "",
      alResultS: "",

      //
      yearOfCompletion: "",
      affiliatedUniversity: "",
      affiliatedUniversityText: "",
      stream: "",

      studyArea: ["Computing"],
    },
    mode: "all",
    resolver: yupResolver<ApplicationFormModel>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<ApplicationFormModel> = (data) => {
    console.log(data);
  };

  // console.log(errors);

  const selectionItems = [
    {
      id: 0,
      value: "2000",
      text: "2000",
    },
  ];

  const uniList = [
    {
      id: -1,
      value: "other",
      text: "Other",
    },
    {
      id: 0,
      value: "SLIIT",
      text: "SLIIT",
    },
  ];

  const studyPreferences = [
    "Computing",
    "Business",
    "Biomedical Science",
    "Law",
    // "Civil Engineering",
    // "Study Medicine",
    // "Hotel Management",
    // "Quantity Surveying",
    // "Teacher Training",
    // "Foundation",
    // "LLB",
    // "MBA",
    // "MSC",
    // "IT Top-Up",
    // "Business Top-Up",
    // "Civil Top-Up",
    // "Qs Top-Up",
    // "Biomedical Science Top-Up",
  ];

  const onChange = (value: number, field: any) => {
    setValue(field, value.toString());
  };

  const onUniChange = (value: string) => {
    setValue("affiliatedUniversity", value.toString());
    if (value === "other") {
      setIsOtherUni(true);
    } else {
      setIsOtherUni(false);
    }
  };

  const onOlYearChange = (value: string) => {
    setValue("olYear", value.toString());
  };

  const onAlYearChange = (value: string) => {
    setValue("alYear", value.toString());
  };

  const onYearOfCompletionChange = (value: string) => {
    setValue("yearOfCompletion", value.toString());
  };

  return (
    <section className="bg-slate-100">
      <Container className="mx-5 xl:mx-auto py-20">
        <SectionTitle title="Apply now" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-14"
        >
          <ApplyFormLayout icon={faUserTie} title="About you">
            <div className="flex flex-col sm:flex-row gap-8">
              <Input
                label="First Name"
                type="text"
                isRequired={true}
                useControllerProps={{ control, name: "firstName" }}
              />
              <Input
                label="Last Name"
                type="text"
                isRequired={true}
                useControllerProps={{ control, name: "lastName" }}
              />
            </div>

            <div className="">
              <Input
                label="Address"
                type="text"
                useControllerProps={{ control, name: "address" }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-grow">
                <Input
                  label="Date of Birth"
                  type="date"
                  isRequired={true}
                  useControllerProps={{ control, name: "dob" }}
                />
              </div>
              <div className="flex flex-row gap-8 items-center flex-grow">
                <div className="relative">
                  <Typography
                    variant="label"
                    className={`${
                      errors.gender ? "text-red-600" : "text-black"
                    }`}
                  >
                    Gender
                  </Typography>
                  <span className="absolute text-red-600">*</span>
                </div>

                <div className="flex flex-row gap-5">
                  <RadioButton
                    label="Male"
                    value="male"
                    useControllerProps={{ control, name: "gender" }}
                  />
                  <RadioButton
                    label="Female"
                    value="female"
                    useControllerProps={{ control, name: "gender" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <Input
                label="Email"
                type="text"
                isRequired={true}
                useControllerProps={{ control, name: "email" }}
              />

              <Input
                label="Mobile"
                type="text"
                isRequired={true}
                useControllerProps={{ control, name: "mobile" }}
              />
            </div>
          </ApplyFormLayout>

          <ApplyFormLayout icon={faGraduationCap} title="About your education">
            <div className="flex flex-col gap-8">
              {/* OL */}
              <div className="border border-slate-300 px-3 py-4 rounded-md relative">
                <Typography
                  variant="md"
                  className="absolute -top-[14px] left-[5%] font-bold bg-white px-3"
                >
                  OL
                </Typography>

                <div className="flex flex-col gap-5">
                  <div className="">
                    <Input
                      label="School"
                      type="text"
                      useControllerProps={{ control, name: "olSchool" }}
                    />
                  </div>

                  <Select
                    label="Year"
                    selectionItems={selectionItems}
                    placeHolder="Select One"
                    useControllerProps={{ control, name: "olYear" }}
                    isDisabled={false}
                    onChange={onOlYearChange}
                  />

                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">Type</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="Local"
                          value="local"
                          useControllerProps={{ control, name: "olType" }}
                        />
                        <RadioButton
                          label="London"
                          value="london"
                          useControllerProps={{ control, name: "olType" }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">Mathematics</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="A"
                          value="a"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                        <RadioButton
                          label="B"
                          value="b"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                        <RadioButton
                          label="C"
                          value="c"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                        <RadioButton
                          label="D"
                          value="d"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                        <RadioButton
                          label="S"
                          value="s"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">English</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="A"
                          value="a"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                        <RadioButton
                          label="B"
                          value="b"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                        <RadioButton
                          label="C"
                          value="c"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                        <RadioButton
                          label="D"
                          value="d"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                        <RadioButton
                          label="S"
                          value="s"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label">Results</Typography>

                    <IncrementInput
                      label="A"
                      onChange={(e: number) => {
                        onChange(e, "olResultA");
                      }}
                      useControllerProps={{ control, name: "olResultA" }}
                    />

                    <IncrementInput
                      label="B"
                      onChange={(e: number) => {
                        onChange(e, "olResultB");
                      }}
                      useControllerProps={{ control, name: "olResultB" }}
                    />

                    <IncrementInput
                      label="C"
                      onChange={(e: number) => {
                        onChange(e, "olResultC");
                      }}
                      useControllerProps={{ control, name: "olResultC" }}
                    />

                    <IncrementInput
                      label="D"
                      onChange={(e: number) => {
                        onChange(e, "olResultD");
                      }}
                      useControllerProps={{ control, name: "olResultD" }}
                    />

                    <IncrementInput
                      label="S"
                      onChange={(e: number) => {
                        onChange(e, "olResultS");
                      }}
                      useControllerProps={{ control, name: "olResultS" }}
                    />
                  </div>
                </div>
              </div>
              {/* END OL */}

              {/* AL */}
              <div className="border border-slate-300 px-3 py-4 rounded-md relative">
                <Typography
                  variant="md"
                  className="absolute -top-[14px] left-[5%] font-bold bg-white px-3"
                >
                  AL
                </Typography>

                <div className="flex flex-col gap-5">
                  <div className="">
                    <Input
                      label="School"
                      type="text"
                      useControllerProps={{ control, name: "alSchool" }}
                    />
                  </div>
                  <Select
                    label="Year"
                    selectionItems={selectionItems}
                    placeHolder="Select One"
                    useControllerProps={{ control, name: "alYear" }}
                    isDisabled={false}
                    onChange={onAlYearChange}
                  />

                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">Type</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="Local"
                          value="local"
                          useControllerProps={{ control, name: "alType" }}
                        />
                        <RadioButton
                          label="London"
                          value="london"
                          useControllerProps={{ control, name: "alType" }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">Mathematics</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="A"
                          value="a"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                        <RadioButton
                          label="B"
                          value="b"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                        <RadioButton
                          label="C"
                          value="c"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                        <RadioButton
                          label="D"
                          value="d"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                        <RadioButton
                          label="S"
                          value="s"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start flex-grow">
                      <div className="relative">
                        <Typography variant="label">English</Typography>
                      </div>

                      <div className="flex flex-row gap-2">
                        <RadioButton
                          label="A"
                          value="a"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                        <RadioButton
                          label="B"
                          value="b"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                        <RadioButton
                          label="C"
                          value="c"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                        <RadioButton
                          label="D"
                          value="d"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                        <RadioButton
                          label="S"
                          value="s"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex flex-col sm:flex-row gap-5">
                    <div className="relative">
                      <Typography variant="label">Type</Typography>
                    </div>

                    <div className="flex flex-row gap-5">
                      <RadioButton
                        label="Local"
                        value="local"
                        useControllerProps={{ control, name: "alType" }}
                      />
                      <RadioButton
                        label="London"
                        value="london"
                        useControllerProps={{ control, name: "alType" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-start flex-grow">
                    <div className="relative">
                      <Typography variant="label">Mathematics</Typography>
                    </div>

                    <div className="flex flex-row gap-5">
                      <RadioButton
                        label="A"
                        value="a"
                        useControllerProps={{ control, name: "alMathematics" }}
                      />
                      <RadioButton
                        label="B"
                        value="b"
                        useControllerProps={{ control, name: "alMathematics" }}
                      />
                      <RadioButton
                        label="C"
                        value="c"
                        useControllerProps={{ control, name: "alMathematics" }}
                      />
                      <RadioButton
                        label="D"
                        value="d"
                        useControllerProps={{ control, name: "alMathematics" }}
                      />
                      <RadioButton
                        label="S"
                        value="s"
                        useControllerProps={{ control, name: "alMathematics" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-start flex-grow">
                    <div className="relative">
                      <Typography variant="label">English</Typography>
                    </div>

                    <div className="flex flex-row gap-5">
                      <RadioButton
                        label="A"
                        value="a"
                        useControllerProps={{ control, name: "alEnglish" }}
                      />
                      <RadioButton
                        label="B"
                        value="b"
                        useControllerProps={{ control, name: "alEnglish" }}
                      />
                      <RadioButton
                        label="C"
                        value="c"
                        useControllerProps={{ control, name: "alEnglish" }}
                      />
                      <RadioButton
                        label="D"
                        value="d"
                        useControllerProps={{ control, name: "alEnglish" }}
                      />
                      <RadioButton
                        label="S"
                        value="s"
                        useControllerProps={{ control, name: "alEnglish" }}
                      />
                    </div>
                  </div> */}

                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label">Results</Typography>

                    <IncrementInput
                      label="A"
                      onChange={(e: number) => {
                        onChange(e, "alResultA");
                      }}
                      useControllerProps={{ control, name: "alResultA" }}
                    />

                    <IncrementInput
                      label="B"
                      onChange={(e: number) => {
                        onChange(e, "alResultB");
                      }}
                      useControllerProps={{ control, name: "alResultB" }}
                    />

                    <IncrementInput
                      label="C"
                      onChange={(e: number) => {
                        onChange(e, "alResultC");
                      }}
                      useControllerProps={{ control, name: "alResultC" }}
                    />

                    <IncrementInput
                      label="D"
                      onChange={(e: number) => {
                        onChange(e, "alResultD");
                      }}
                      useControllerProps={{ control, name: "alResultD" }}
                    />

                    <IncrementInput
                      label="S"
                      onChange={(e: number) => {
                        onChange(e, "alResultS");
                      }}
                      useControllerProps={{ control, name: "alResultS" }}
                    />
                  </div>
                </div>
              </div>
              {/* END AL */}

              <div className="border border-slate-300 px-3 py-4 rounded-md relative">
                <Typography
                  variant="md"
                  className="absolute -top-[14px] left-[5%] font-bold bg-white px-3"
                >
                  Degree
                </Typography>
                <div className="flex flex-col gap-5">
                  <div className="">
                    <Select
                      label="Year of completion"
                      selectionItems={selectionItems}
                      placeHolder="Select One"
                      useControllerProps={{ control, name: "yearOfCompletion" }}
                      isDisabled={false}
                      onChange={onYearOfCompletionChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Typography variant="label">
                      Affiliated University
                    </Typography>
                    <Select
                      selectionItems={uniList}
                      placeHolder="Select One"
                      useControllerProps={{
                        control,
                        name: "affiliatedUniversity",
                      }}
                      isDisabled={false}
                      onChange={onUniChange}
                    />
                    {isOtherUni && (
                      <div className="mt-3 w-full">
                        <Input
                          placeHolder="Type here"
                          useControllerProps={{
                            control,
                            name: "affiliatedUniversityText",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <Input
                      label="Stream"
                      useControllerProps={{
                        control,
                        name: "stream",
                      }}
                    />
                  </div>
                  <div className="flex flex-row gap-3">
                    <Input
                      label="GPA"
                      useControllerProps={{
                        control,
                        name: "gpa",
                      }}
                    />
                    <Input
                      label="Class"
                      useControllerProps={{
                        control,
                        name: "class",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ApplyFormLayout>

          <ApplyFormLayout icon={faHeart} title="Your preferences">
            <div className="flex flex-col items-start gap-3">
              <Typography variant="label" className="font-bold">
                Study Area
              </Typography>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <Checkboxes
                  options={studyPreferences}
                  control={control}
                  name="studyArea"
                />
              </div>

              {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <Checkbox
                  value="computing"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Computing"
                />
                <Checkbox
                  value="business"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Business"
                />
                <Checkbox
                  value="bioMedicalScience"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Bio Medical Science"
                />
                <Checkbox
                  value="law"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Law"
                />
                <Checkbox
                  value="civilEngineering"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Civil Engineering"
                />
                <Checkbox
                  value="studyMedicine"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Study Medicine"
                />
                <Checkbox
                  value="hotelManagement"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Hotel Management"
                />
                <Checkbox
                  value="quantitySurveying"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Quantity Surveying"
                />
                <Checkbox
                  value="teacherTraining"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Teacher Training"
                />
                <Checkbox
                  value="foundation"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Foundation"
                />
                <Checkbox
                  value="llb"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="LLB"
                />
                <Checkbox
                  value="mba"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="MBA"
                />
                <Checkbox
                  value="msc"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="MSC"
                />
                <Checkbox
                  value="itTopUp"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="IT Top-up"
                />
                <Checkbox
                  value="businessTopUp"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Business Top-up"
                />
                <Checkbox
                  value="civilTopUp"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Civil Top-up"
                />
                <Checkbox
                  value="qSTopUp"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="QS Top-up"
                />
                <Checkbox
                  value="bioMedicalScienceTopUp"
                  useControllerProps={{ control, name: "studyArea" }}
                  label="Biomedical Science Top-up"
                />
              </div> */}
            </div>
          </ApplyFormLayout>

          <Button text="Save" type="submit" customClass="w-[150px] mx-auto" />
        </form>
      </Container>
    </section>
  );
}
