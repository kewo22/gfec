"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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
import { ResolveBaseUrl } from "@/app/utils/common";
import {
  COUNTRIES,
  COUNTRIES_FOR_SELECT,
} from "../_constants/countries.constants";
import { ApplicationFormModel } from "@/app/_interfaces/application-form";

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
  olResultS: string().optional(),
  olResultW: string().optional(),

  //
  alSchool: string().optional(),
  alYear: string().optional(),
  alType: string().optional(),
  alMathematics: string().optional(),
  alEnglish: string().optional(),
  alResultA: string().optional(),
  alResultB: string().optional(),
  alResultC: string().optional(),
  alResultS: string().optional(),
  alResultW: string().optional(),

  //
  yearOfCompletion: string().optional(),
  affiliatedUniversity: string().optional(),
  stream: string().optional(),
  gpa: string().optional(),
  class: string().optional(),

  //
  country: string().optional(),
  studyArea: array().optional(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  address: "",
  dob: null,
  gender: null,
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
  olResultS: "",
  olResultW: "",
  //
  alSchool: "",
  alYear: "",
  alType: "",
  alMathematics: "",
  alEnglish: "",
  alResultA: "",
  alResultB: "",
  alResultC: "",
  alResultS: "",
  alResultW: "",

  //
  yearOfCompletion: "",
  affiliatedUniversity: "",
  stream: "",
  gpa: "",
  class: "",

  //
  country: "",
  studyArea: [],
};

export default function ApplyNow() {
  const privacyBasePolicyUrl = ResolveBaseUrl(
    process.env.NEXT_PUBLIC_VERCEL_ENV!
  );
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ApplicationFormModel>({
    defaultValues,
    mode: "all",
    resolver: yupResolver<ApplicationFormModel>(schema),
    reValidateMode: "onBlur",
  });

  const yearsList = useMemo(() => {
    const years = [];
    for (let i = 0; i < 22; i++) {
      const d = new Date();
      const pastYear = d.getFullYear() - i;
      years.push({
        id: i,
        text: pastYear,
        value: pastYear,
      });
    }
    return years;
  }, []);

  const studyPreferences = [
    "Computing",
    "Business",
    "Biomedical Science",
    "Law",
    "Civil Engineering",
    "Study Medicine",
    "Hotel Management",
    "Quantity Surveying",
    "Teacher Training",
    "Foundation",
    "LLB",
    "MBA",
    "MSC",
    "IT Top-Up",
    "Business Top-Up",
    "Civil Top-Up",
    "Qs Top-Up",
    "Biomedical Science Top-Up",
  ];

  const onChange = (value: number, field: any) => {
    setValue(field, value.toString());
  };

  const onOlYearChange = (value: string) => {
    setValue("olYear", value.toString());
  };

  const onAlYearChange = (value: string) => {
    setValue("alYear", value.toString());
  };

  const onCountryChange = (value: string) => {
    setValue("country", value.toString());
  };

  const onYearOfCompletionChange = (value: string) => {
    setValue("yearOfCompletion", value.toString());
  };

  const onSubmit: SubmitHandler<ApplicationFormModel> = (data) => {
    let tempData = data;
    const studyArea = data.studyArea?.filter((obj) => {
      return obj !== null || obj !== undefined;
    });
    tempData = { ...tempData, studyArea };
    setIsLoading(true);
    fetch(`${privacyBasePolicyUrl}/api/apply`, {
      method: "post",
      body: JSON.stringify(tempData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        setValue("gender", null);
        reset(
          { ...defaultValues },
          {
            keepDefaultValues: true,
          }
        );
      });
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
                    selectionItems={yearsList}
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
                          label="S"
                          value="s"
                          useControllerProps={{
                            control,
                            name: "olMathematics",
                          }}
                        />
                        <RadioButton
                          label="W"
                          value="w"
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
                          label="S"
                          value="s"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                        <RadioButton
                          label="W"
                          value="w"
                          useControllerProps={{ control, name: "olEnglish" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label">Results</Typography>

                    <div className="w-full flex flex-col md:flex-row items-start gap-2">
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
                        label="S"
                        onChange={(e: number) => {
                          onChange(e, "olResultS");
                        }}
                        useControllerProps={{ control, name: "olResultS" }}
                      />

                      <IncrementInput
                        label="W"
                        onChange={(e: number) => {
                          onChange(e, "olResultW");
                        }}
                        useControllerProps={{ control, name: "olResultW" }}
                      />
                    </div>
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
                    selectionItems={yearsList}
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
                          label="S"
                          value="s"
                          useControllerProps={{
                            control,
                            name: "alMathematics",
                          }}
                        />
                        <RadioButton
                          label="W"
                          value="w"
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
                          label="S"
                          value="s"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                        <RadioButton
                          label="W"
                          value="w"
                          useControllerProps={{ control, name: "alEnglish" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <Typography variant="label">Results</Typography>

                    <div className="w-full flex flex-col md:flex-row items-start gap-2">
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
                          onChange(e, "alResultS");
                        }}
                        useControllerProps={{ control, name: "alResultS" }}
                      />

                      <IncrementInput
                        label="S"
                        onChange={(e: number) => {
                          onChange(e, "alResultW");
                        }}
                        useControllerProps={{ control, name: "alResultW" }}
                      />
                    </div>
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
                      selectionItems={yearsList}
                      placeHolder="Select One"
                      useControllerProps={{ control, name: "yearOfCompletion" }}
                      isDisabled={false}
                      onChange={onYearOfCompletionChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Input
                      label="Affiliated University"
                      useControllerProps={{
                        control,
                        name: "affiliatedUniversity",
                      }}
                    />
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
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Checkboxes
                  options={studyPreferences}
                  control={control}
                  name="studyArea"
                />
              </div>
            </div>
            <div>
              <Select
                label="Country"
                selectionItems={COUNTRIES_FOR_SELECT}
                placeHolder="Select One"
                useControllerProps={{ control, name: "country" }}
                isDisabled={false}
                onChange={onCountryChange}
              />
            </div>
          </ApplyFormLayout>

          <Button
            text="Save"
            type="submit"
            customClass="w-[150px] mx-auto"
            isLoading={isLoading}
          />
        </form>
      </Container>
    </section>
  );
}
