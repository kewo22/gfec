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

export interface ApplicationFormModel {
  firstName: string;
  lastName: string;
  address?: string;
  dob: Date | null;
  gender: string;
  email: string;
  mobile: string;

  //
  school?: string;
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
  school: string(),
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
      school: "",
    },
    mode: "all",
    resolver: yupResolver<ApplicationFormModel>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<ApplicationFormModel> = (data) => {
    console.log(data);
  };

  console.log(errors);

  // about you, about your education, what do you prefer, other information

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
                      errors.gender ? "text-red-700" : "text-black"
                    }`}
                  >
                    Gender
                  </Typography>
                  <span className="absolute text-red-700">*</span>
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
            <div className="">
              <Input
                label="School"
                type="text"
                useControllerProps={{ control, name: "school" }}
              />
            </div>
          </ApplyFormLayout>

          <Button text="Save" type="submit" customClass="w-[150px] mx-auto" />
        </form>
      </Container>
    </section>
  );
}
