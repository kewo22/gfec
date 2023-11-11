"use client";

import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { date, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { faGraduationCap, faUserTie } from "@fortawesome/free-solid-svg-icons";

import Container from "../_components/layouts/container";
import ApplyFormLayout from "../_components/layouts/apply-form-layout";

import SectionTitle from "../_components/section-title";
import Input from "@/app/_components/ui/input";
import RadioButton from "@/app/_components/ui/radio";
import Button from "@/app/_components/ui/button";
import { Typography } from "@/app/_components/ui/typography";
import Select from "@/app/_components/ui/select";
import IncrementInput from "@/app/_components/ui/increment-input";

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
  olSchool: string(),
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
  alSchool: string(),
  alYear: string().optional(),
  alType: string().optional(),
  alMathematics: string().optional(),
  alEnglish: string().optional(),
  alResultA: string().optional(),
  alResultB: string().optional(),
  alResultC: string().optional(),
  alResultD: string().optional(),
  alResultS: string().optional(),
});

export default function ApplyNow() {
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
    },
    mode: "all",
    resolver: yupResolver<ApplicationFormModel>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<ApplicationFormModel> = (data) => {
    console.log(data);
  };

  // console.log(errors);

  // about you, about your education, what do you prefer, other information

  const selectionItems = [
    {
      id: 0,
      value: "2000",
      text: "2000",
    },
  ];

  const onChange = (value: number, field: any) => {
    setValue(field, value.toString());
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
            <div className="flex flex-col sm:flex-row gap-8">
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
                  />
                  <div className="flex flex-row gap-8 items-center flex-grow">
                    <div className="relative">
                      <Typography variant="label">Type</Typography>
                    </div>

                    <div className="flex flex-row gap-5">
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

                    <div className="flex flex-row gap-5">
                      <RadioButton
                        label="A"
                        value="a"
                        useControllerProps={{ control, name: "olMathematics" }}
                      />
                      <RadioButton
                        label="B"
                        value="b"
                        useControllerProps={{ control, name: "olMathematics" }}
                      />
                      <RadioButton
                        label="C"
                        value="c"
                        useControllerProps={{ control, name: "olMathematics" }}
                      />
                      <RadioButton
                        label="D"
                        value="d"
                        useControllerProps={{ control, name: "olMathematics" }}
                      />
                      <RadioButton
                        label="S"
                        value="s"
                        useControllerProps={{ control, name: "olMathematics" }}
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
                  />
                  <div className="flex flex-row gap-8 items-center flex-grow">
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
                  </div>

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

              {/* <div className="border border-slate-300 px-3 py-4 rounded-md relative">
                <Typography
                  variant="md"
                  className="absolute -top-[14px] left-[5%] font-bold bg-white px-3"
                >
                  Degree
                </Typography>
                <div className="flex flex-col gap-5">qwdjkl</div>
              </div> */}
            </div>
          </ApplyFormLayout>

          <Button text="Save" type="submit" customClass="w-[150px] mx-auto" />
        </form>
      </Container>
    </section>
  );
}
